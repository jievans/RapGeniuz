require 'addressable/uri'

class Album < ActiveRecord::Base
  attr_accessible :artist_id, :name

  belongs_to :artist,
  :class_name => 'Artist',
  :foreign_key => :artist_id,
  :primary_key => :id

  before_save :fetch_info

  def fetch_info
   json = self.fetch_json()
   return if json["error"]
   self.summary = json["album"]["wiki"]["summary"] unless self.summary
   self.image = json["album"]["image"][3]["#text"] unless self.image
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
