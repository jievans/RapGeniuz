require 'bcrypt'

class User < ActiveRecord::Base
  attr_accessible :username, :password

  before_validation :generate_token

  include BCrypt

  def password=(secret)
    self.password_digest = Password.create(secret).to_s
  end

  def password_equals?(secret)
    Password.new(self.password_digest).is_password?(secret)
  end

  def generate_token
    self.token = SecureRandom.urlsafe_base64
  end

end
