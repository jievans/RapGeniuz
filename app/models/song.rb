class Song < ActiveRecord::Base
  attr_accessible :album_id, :artist_id, :lyrics, :title, :youtube_url

  belongs_to :artist,
             :class_name => "Artist",
             :foreign_key => :artist_id,
             :primary_key => :id

  validates :artist_id, :presence => true


end
