class Song < ActiveRecord::Base

  include SongsHelper

  attr_accessible :album_id, :artist_id, :lyrics, :title, :youtube_url

  belongs_to :artist,
             :class_name => "Artist",
             :foreign_key => :artist_id,
             :primary_key => :id

  belongs_to :album,
  :class_name => "Album",
  :foreign_key => :album_id,
  :primary_key => :id

  validates :artist_id, :presence => true

  has_many :annotations, :class_name => "Annotation", :foreign_key => :song_id,
  :primary_key => :id

end
