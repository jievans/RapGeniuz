require 'addressable/uri'

class Album < ActiveRecord::Base
  attr_accessible :artist_id, :name, :summary, :image

  belongs_to :artist,
  :class_name => 'Artist',
  :foreign_key => :artist_id,
  :primary_key => :id

  validates :artist_id, :presence => true
  validates :name, :presence => true

  before_save :ensure_info

  def ensure_info
   return if self.summary && self.image

   json = self.fetch_json()
   return if json["error"]

   begin
     self.summary = json["album"]["wiki"]["summary"] unless self.summary
     self.image = json["album"]["image"][3]["#text"] unless self.image
   rescue
   end
  end

  def fetch_json()
   address = Addressable::URI.new(
       :scheme => "http",
       :host => "ws.audioscrobbler.com",
       :path => "2.0",
       :query_values => {:method => "album.getInfo",
                         :artist => self.artist.name,
                         :album => self.name,
                         :api_key => LastFm.api_key,
                         :format => "json"}
     ).to_s

   response = HTTParty.get(address)
   JSON.parse(response.body)
  end
  
end
