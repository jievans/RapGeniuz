class CreateFeatures < ActiveRecord::Migration
  def change
    create_table :features do |t|
      t.integer :artist_id
      t.integer :song_id

      t.timestamps
    end
    add_index :features, :artist_id
    add_index :features, :song_id
  end
end
