class Annotation < ActiveRecord::Base
  attr_accessible :referent, :body, :user_id, :song_id

  has_many :images, as: :imageable

  before_save :cleanse_body

  def cleanse_body()
   # debugger
    self.body = self.body.gsub(/\r/, "")
  end
end
