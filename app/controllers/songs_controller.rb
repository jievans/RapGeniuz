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

    params[:song][:lyrics] = params[:song][:lyrics]

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
    unless errors = lyrics_invalid?(song.lyrics, params[:song][:lyrics])
      song.update_attributes!(params[:song])
      render :json => song
    else
      render :json => errors, :status => 409
    end
  end

  def show
    @song = Song.find(params[:id])
  end


end
