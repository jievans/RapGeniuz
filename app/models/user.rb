require 'bcrypt'

class User < ActiveRecord::Base
  attr_accessible :username, :password

  include BCrypt

  def password=(secret)
    self.password_digest = Password.create(secret).to_s
  end

  def password_equals?(secret)
    Password.new(self.password_digest).is_password?(secret)
  end

  def generate_token

  end

end
