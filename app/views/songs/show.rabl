object @song
attributes :id, :lyrics, :artist_id, :title, :youtube_url, :album_id

child(:artist) do
  attributes :name
end

