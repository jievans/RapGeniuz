require 'addressable/uri'

module ArtistsHelper
  def fetch_info(name)
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
   json = JSON.parse(response.body)
   unless json["error"]
     bio = json["artist"]["bio"]["summary"]
     image = json["artist"]["image"][4]["#text"]
     {:bio => bio, :image => image}
   else
     json
   end
  end
end
