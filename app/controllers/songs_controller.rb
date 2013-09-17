### Handle in show when song cannot be found
#### Implement RedCarpet Postprocessor

class SongsController < ApplicationController

  include SongsHelper
  include ParsingHelper

  def new
    @song = Song.new
    @artist = Artist.new
    @album = Album.new
    render "new"
  end

  def create

    original_lyrics = params[:song][:lyrics]
    html_lyrics = non_block_markdown(original_lyrics)

    params[:song][:lyrics] = html_lyrics
    params[:song][:user_id] = current_user.id
    
    @song = Song.new(params[:song])
    @artist = Artist.find_or_initialize_by_name(params[:artist][:name])
    @album = Album.find_or_initialize_by_name(params[:album][0])

    begin
      ActiveRecord::Base.transaction do
        @artist.save! unless @artist.persisted?
        @album.artist_id ||= @artist.id
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

      @song.lyrics = original_lyrics
      render :new
    end
  end

  # def do_match string, regexp
#     string =~ regexp
#     debugger
#     $1
#   end

  def plain_update
   
    anchor_pattern = /(\[)(.+?)(\])(\()(\d+)(\))/m
    
    ## to_param() necessary due to ActiveSupport::SafeBuffer
    edited_lyrics = params[:lyrics].to_param().strip()


   tagged_edited = edited_lyrics.gsub(anchor_pattern) do |match|
     "<a class=\"annotation\" href=\"/#{$5}\" data-annotation-id=\"#{$5}\">#{$2}</a>"
   end

   html_edited = tagged_edited.gsub(/\n/) {|match| "<br>"}

   # edited_lyrics = make_anchors(edited_lyrics)


    song = Song.find(params[:id])
  #  full_edited = html_update(song.lyrics, edited_lyrics)


  #  debugger

    
    unless errors = lyrics_invalid?(song.lyrics, html_edited)
      song.update_attributes!(:lyrics => html_edited)
      render :json => song
    else
      p errors
      render :json => errors, :status => 409
    end
  end

  def update
    song = Song.find(params[:id])
    unless errors = lyrics_invalid?(song.lyrics, params[:song][:lyrics])
      song.update_attributes!(params[:song])
      render :json => song
    else
      render :json => errors, :status => 409
    end
  end

  def show
    @song = Song.find(params[:id])
    @bop_artist_name = @song.artist.name.downcase.gsub(" ", "-")
    @bop_song_name = @song.title.downcase.gsub(" ", "-")
    respond_to do |format|
      format.html
      format.json { render "show.rabl" }
    end
  end


end
