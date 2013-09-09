object @song
attributes :id, :lyrics, :artist_id, :title, :youtube_url, :album_id

child(:artist) do
  attributes :name
end

node(:plain_lyrics) do |song|
  reverse_markdown(song.lyrics)
end