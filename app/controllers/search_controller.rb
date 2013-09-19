class SearchController < ApplicationController
  
  def search
    ## could also use LOWER(title) and downcase param[:search] instead of ILIKE
    songs = Song.where("title ILIKE ?", "%#{params[:search]}%")
    albums = Song.where("title ILIKE ?", "%#{params[:search]}%")
    p songs
    render :json => {songs: songs, albums: albums}
  end
end
