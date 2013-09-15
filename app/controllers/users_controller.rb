class UsersController < ApplicationController

  def show
    @user = User.find(params[:id])
  end

  def create
    user = User.create(params[:user])

    if user.persisted?
      session[:token] = user.token
      render :partial => "rabl_partials/user", :locals => {:object => user}
    else
      render :json => {:errors => user.errors.full_messages}, :status  => 401
    end

  end

  def update
    user = User.find(params[:id])
    user.update_attributes(params[:user])
    render :json => user
  end

end
