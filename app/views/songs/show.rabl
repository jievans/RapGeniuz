object @song
attributes :lyrics, :artist_id, :title, :youtube_url, :album_id

node(:plain_lyrics) do |song|
  reverse_markdown(song.lyrics)
end