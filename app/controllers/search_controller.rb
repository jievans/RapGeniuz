class SearchController < ApplicationController
  
  def search
    ## could also use LOWER(title) and downcase param[:search] instead of ILIKE
    unless params[:search].empty?
      songs = Song.where("title ILIKE ?", "%#{params[:search]}%")
      artists = Artist.where("name ILIKE ?", "%#{params[:search]}%")
      p songs
      p artists
      render :json => {songs: songs, artists: artists}
    else
      render :json => {songs: [], artists: []}
    end
  end
end
