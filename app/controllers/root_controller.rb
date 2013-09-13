class RootController < ApplicationController

  def primary
    @songs = Song.order("created_at DESC").limit(20).includes(:annotations)
    render :primary
  end

end