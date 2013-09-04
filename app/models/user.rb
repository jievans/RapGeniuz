require 'bcrypt'

class User < ActiveRecord::Base
  attr_accessible :password_digest, :username

  include BCrypt

  def password=(secret)
    self.password_digest = Password.create(secret).to_s
  end

  def password_equals?(secret)
    Password.new(self.password_digest).is_password?(secret)
  end

end
