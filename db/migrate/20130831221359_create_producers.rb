class CreateProducers < ActiveRecord::Migration
  def change
    create_table :producers do |t|
      t.integer :artist_id
      t.integer :song_id

      t.timestamps
    end
    add_index :producers, :artist_id
    add_index :producers, :song_id
  end
end
