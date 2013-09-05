### Handle in show when song cannot be found

class SongsController < ApplicationController

  include SongsHelper

  def new
    @song = Song.new
    @artist = Artist.new
    @album = Album.new
    render "new"
  end

  def create

    params[:song][:lyrics] = markdown(params[:song][:lyrics])

    @song = Song.new(params[:song])
    @artist = Artist.find_or_initialize_by_name(params[:artist][:name])
    @album = Album.find_or_initialize_by_name(params[:album][0])

    begin
      ActiveRecord::Base.transaction do
        @artist.save! unless @artist.persisted?
        @album.save! unless @album.persisted?
        @song.artist_id = @artist.id
        @song.album_id = @album.id

        @song.save!
      end

      redirect_to song_url(@song)
    rescue  => e
      flash.now[:notices] ||= []

      [@song, @artist, @album].each do |ar_object|
        ar_object.errors.full_messages.each do |message|
          flash.now[:notices] << message
        end
      end

      render :new
    end
  end

  def update

    song = Song.find(params[:id])
    song.update_attributes!(params[:song])
    render :json => song
  end

  def show
    @song = Song.find(params[:id])
  end

  private

  def noko_invalid?(old_lyrics, new_lyrics)

    failure = {}

    illegal = false
    old_doc = Nokogiri::HTML(old_lyrics)
    new_doc = Nokogiri::HTML(new_lyrics)
    old_anchors = old_doc.css("a")
    new_anchors = new_doc.css("a")



    # loop through old anchors
    # check that old anchors match up in every way with new anchors, except in cases where the new anchors have user-ids

    old_anchors.each do |old_node|
      ## see if old anchors deleted
      anchor_id = anchor["data-annotation-id"]
      new_node = new_anchors.at_css("data-annotation-id='#{anchor_id}'")

      if new_node
        old_node.attributes.each do |key, attr_obj|
          unless new_node[key] == attr_obj.value
            failure[:fiddled] = "You messed with the attributes"
          end
        end
        new_anchors.remove(new_node)
      else
        annotation = Annotation.find_by_id(anchor_id)
        unless annotation.user_id == current_user.id
          failure[:deletion] = "You aren't allowed to delete other's annotations."
        end
      end

    end # old_anchors each

    proper_attributes = ["class", "href", "data-annotation-id"]

    new_anchors.each do |anchor|
      current_attributes = anchor.attributes.keys
      unless current_attributes == proper_attributes
        failure[:fiddled] = "You messed with the attributes on a new annotation."
      else
        record = Annotation.find(anchor["data-annotation-id"])
        unless record.user_id == current_user.id
          failure[:other_annotation] = "You can't pull in other's annoations."
        end

        unless attributes_valid?(node)
          failure[:fiddled] = "You messed with the attributes"
        end
      end
    end

    return (failure.empty? ? false : failure)

  end

  def attributes_valid?(node)
     node["class"] == "annotation" && node["href"] == "/annotations/#{node['data-annotation-id']}"
  end
end
