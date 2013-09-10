class Artist < ActiveRecord::Base

  include ArtistsHelper

  attr_accessible :name, :bio
  before_save :ensure_info

  has_many :songs,
  :class_name => "Song",
  :foreign_key => :artist_id,
  :primary_key => :id

  has_many :albums,
  :class_name => "Album",
  :foreign_key => :artist_id,
  :primary_key => :id

  validates :name, :presence => true
  before_validation :strip_whitespace

  def strip_whitespace
    self.name = self.name.strip
  end

  def ensure_info
    info = fetch_info(self.name) unless self.image && self.bio
    unless info["error"]
      self.image = info[:image] unless self.image
      self.bio = info[:bio] unless self.bio
    end
  end

end
