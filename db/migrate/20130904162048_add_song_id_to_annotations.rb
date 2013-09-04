class AddSongIdToAnnotations < ActiveRecord::Migration
  def change
    add_column :annotations, :song_id, :integer
  end
end
