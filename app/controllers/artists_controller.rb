class ArtistsController < ApplicationController

  include ArtistsHelper
  include ActionView::Helpers::SanitizeHelper

  def show
    @artist = Artist.find_by_id(params[:id])
    @bio = strip_links(@artist.bio)
    advert_pattern = /\s*Read more about .* on Last.fm./m
    @bio = @bio.gsub(advert_pattern, "")
    render :show
  end

end