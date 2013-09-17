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
  
  def facebook_create
    user = User.find_by_provider_and_uid(auth["provider"], auth["uid"]) ||
                                            User.create_with_omniauth(auth)
    session[:token] = user.token
    redirect_to root_url
  end

  def destroy
    current_user.generate_token
    session[:token] = nil
    render :text => "Signout successful"
  end
  
  protected

  def auth
    request.env['omniauth.auth']
  end

end
