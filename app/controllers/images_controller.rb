class ImagesController < ApplicationController

  def create
    image = Image.create!(params[:image])
    render :json => image
  end
end
