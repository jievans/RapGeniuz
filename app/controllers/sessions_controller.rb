class SessionsController < ApplicationController

  def new
  end

  def create
    user = User.find_by_username(params[:username])

    if user && user.password_equals?(params[:password])
      session[:token] = user.token
      render :partial => "rabl_partials/user", :locals => {:object => user}
    else
      render :json => {errors: "Invalid credentials, yo"}, :status => 401
    end
  end

  def destroy
    current_user.generate_token
    session[:token] = nil
    render :text => "Signout successful"
  end

end
