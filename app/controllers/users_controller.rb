class UsersController < ApplicationController

  def show
    @user = User.find(params[:id])
  end

  def create
    user = User.create!(params[:user])
    render :json => {:url => user_url(user)}
  end

end
