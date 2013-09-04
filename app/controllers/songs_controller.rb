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

  def noko_check(old_lyrics, new_lyrics)
    illegal = false
    old_doc = Nokogiri::HTML(old_lyrics)
    new_doc = Nokogiri::HTML(new_lyrics)
    old_anchors = old_doc.css("a")
    new_anchors = new_doc.css("a")



    anchor_set.each do |anchor|

    end
  end
end
