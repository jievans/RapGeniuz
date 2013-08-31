class CreateSongs < ActiveRecord::Migration
  def change
    create_table :songs do |t|
      t.text :lyrics
      t.integer :artist_id
      t.string :title
      t.string :youtube_url
      t.integer :album_id

      t.timestamps
    end
  end
end
