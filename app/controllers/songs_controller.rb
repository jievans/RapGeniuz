### Handle in show when song cannot be found

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
    html_lyrics = safe_html(original_lyrics)

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


  def update
    song = Song.find(params[:id])
    stripped_lyrics = strip_javascript(params[:song][:lyrics])
    unless stripped_lyrics == params[:song][:lyrics]
      render :json => {:javascript => "You cannot input JavaScript!"}, 
             :status => 409
      return
    end

    unless errors = lyrics_invalid?(song.lyrics, stripped_lyrics)
      song.update_attributes!(:lyrics => stripped_lyrics)
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
