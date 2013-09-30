require 'bcrypt'

class User < ActiveRecord::Base
  attr_accessible :username, :password, :image

  before_create :generate_token

  has_many :songs

  has_many :annotations

  validates :username, :presence => true, :uniqueness => true

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

  def self.create_with_omniauth(auth)
    create! do |user|
      user.provider = auth["provider"]
      user.uid = auth["uid"]
      user.username = auth["info"]["name"]
    end
  end
  
  def self.top_10
    User.find_by_sql("SELECT users.*, COUNT(*) AS annotation_count FROM users JOIN annotations ON users.id = annotations.user_id GROUP BY users.id LIMIT 10")
  end

end
