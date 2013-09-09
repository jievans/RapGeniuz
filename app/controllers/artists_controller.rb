class ArtistsController < ApplicationController

  def show
    @artist = Artist.find_by_id(params[:id])
    render :show
  end

end
