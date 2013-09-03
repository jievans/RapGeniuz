class AnnotationsController < ApplicationController

  def create
    annotation = Annotation.create!
    render :json => annotation
  end

end
