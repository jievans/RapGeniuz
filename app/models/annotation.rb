class Annotation < ActiveRecord::Base
  attr_accessible :referent, :body, :user_id, :song_id

   has_many :images, as: :imageable
end
