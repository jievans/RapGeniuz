class Song < ActiveRecord::Base
  attr_accessible :album_id, :artist_id, :lyrics, :title, :youtube_url
end
