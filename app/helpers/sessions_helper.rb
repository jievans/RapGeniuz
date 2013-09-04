module SessionsHelper

  def current_user
    @current_user = User.find_by_token(session[:token])
  end

  def logged_in?
    !!current_user
  end

end
