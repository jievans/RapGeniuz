class AnnotationsController < ApplicationController

  def show
    render :json => Annotation.find(params[:id])
  end

  def create
    annotation = Annotation.create!(:user_id => current_user.id,
                                    :referent => params[:referent])
    render :json => annotation
  end

  def update
    annotation = Annotation.find(params[:id])
    annotation.update_attributes!(params[:annotation])
    render :json => annotation
  end

end
