class Annotation < ActiveRecord::Base
  attr_accessible :referent, :body, :user_id, :start_char, :end_char, :song_id

  validates :referent, :body, :user_id, :start_char, :end_char,                             :song_id, :presence => true
end
