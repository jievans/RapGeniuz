class Artist < ActiveRecord::Base
  attr_accessible :name

  has_many :songs,
           :class_name => "Song",
           :foreign_key => :artist_id,
           :primary_key => :id

  validates :name, :presence => true
end
