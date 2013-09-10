require 'addressable/uri'

class Artist < ActiveRecord::Base

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
    return if self.image && self.bio
    json = self.fetch_json()
    return if json["error"]

    bio = json["artist"]["bio"]["summary"]
    image_link = json["artist"]["image"][4]["#text"]

    unless self.image || image_link.empty?
      self.image = image_link unless self.image
    end

    unless self.bio || bio.empty?
      self.bio = bio unless self.image
    end
  end

  def fetch_json()
   address = Addressable::URI.new(
       :scheme => "http",
       :host => "ws.audioscrobbler.com",
       :path => "2.0",
       :query_values => {:method => "artist.getInfo",
                         :artist => name,
                         :api_key => LastFm.api_key,
                         :format => "json"}
     ).to_s

   response = HTTParty.get(address)
   JSON.parse(response.body)
  end

end
