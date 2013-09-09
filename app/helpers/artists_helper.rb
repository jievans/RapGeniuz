require 'addressable/uri'

module ArtistsHelper
  def fetch_bio(name)
   address = Addressable::URI.new(
       :scheme => "http",
       :host => "ws.audioscrobbler.com",
       :path => "2.0",
       :query_values => {:method => "artist.getInfo",
                         :artist => name,
                         :api_key => LastFm.api_key}
     ).to_s
  end
end
