class Song < ActiveRecord::Base

  include SongsHelper

  attr_accessible :album_id, :artist_id, :lyrics, :title, :youtube_url, :user_id

  before_save :remove_whitespace

  belongs_to :artist,
             :class_name => "Artist",
             :foreign_key => :artist_id,
             :primary_key => :id

  belongs_to :user

  belongs_to :album,
  :class_name => "Album",
  :foreign_key => :album_id,
  :primary_key => :id

  validates :artist_id, :presence => true
  validates :lyrics, :presence => true
  validates :title, :presence => true

  has_many :annotations, :class_name => "Annotation", :foreign_key => :song_id,
  :primary_key => :id

  def remove_whitespace
    self.lyrics = self.lyrics.strip
  end

end
