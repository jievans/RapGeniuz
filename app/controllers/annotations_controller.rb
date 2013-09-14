class AnnotationsController < ApplicationController

  def show
    annotation = Annotation.find(params[:id])
    render :partial => "rabl_partials/annotation",
    :locals => {:type => "object", :annotation => annotation}
  #  render :json => Annotation.find(params[:id])
  end

  def create
    params[:annotation][:user_id] = current_user.id
    annotation = Annotation.create!(params[:annotation])
    render :json => annotation
  end

  def update
    annotation = Annotation.find(params[:id])
    annotation.update_attributes!(params[:annotation])
    render :json => annotation
  end

  def destroy
    annotation = Annotation.find(params[:id])
    song = song.find(annotation.song.id)
    # will write more later
  end

end
