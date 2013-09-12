class UsersController < ApplicationController

  def show
    @user = User.find(params[:id])
  end

  def create
    user = User.create!(params[:user])
    session[:token] = user.token
    render :json => {:url => user_url(user)}
  end

  def update
    user = User.find(params[:id])
    user.update_attributes(:image => params[:image])
    render :json => user
  end

end
