class AnnotationsController < ApplicationController

  include ParsingHelper

  def show
    annotation = Annotation.find(params[:id])
    # render :json => annotation
    render :partial => "rabl_partials/annotation",
    :locals => {:type => "object", :annotation => annotation}
  #  render :json => Annotation.find(params[:id])
  end

  def create
    params[:annotation][:user_id] = current_user.id
    annotation = Annotation.create!(params[:annotation])
    # render :json => annotation
    render :partial => "rabl_partials/annotation",
    :locals => {:type => "object", :annotation => annotation}
  end

  def update
    annotation = Annotation.find(params[:id])
    annotation.update_attributes!(params[:annotation])
    render :json => annotation
  end

  def destroy
    id = params[:id]
    annotation = Annotation.find(id)
    song = Song.find(annotation.song.id)

    old_lyrics = song.lyrics
    pattern = /(<a([^<])*?data-annotation-id="#{Regexp.quote(id)}">)((.|\n)*?)(<\/a>)/;
    new_lyrics = old_lyrics.gsub(pattern){|match| $3 }


    puts new_lyrics

    result = lyrics_invalid?(old_lyrics, new_lyrics)
    unless result
      song.update_attributes!(:lyrics => new_lyrics)
      annotation.destroy
      render :json => song
    else
      render :json => result, :status => 401
    end
  end

end
