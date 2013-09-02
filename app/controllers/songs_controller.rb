class SongsController < ApplicationController
  def new
    @song = Song.new
    @artist = Artist.new
    @album = Album.new
    render "new"
  end

  def create

    @song = Song.new(params[:song])
    @artist = Artist.find_or_initialize_by_id(params[:artist])

    begin
      ActiveRecord::Base.transaction do
        @artist.save! unless @artist.persisted?
        @song.artist_id = @artist.id



      end

      redirect_to song_url(@song)
    rescue  => e
      flash[:errors] ||= []
      flash[:errors] << e.message
      render :new
    end

    # if song.save
#       redirect_to song_url(song)
#     else
#       flash[:errors] ||= song.errors
#       redirect_to new_song_url
#     end
  end

  def show
  end
end
