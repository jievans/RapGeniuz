class DropDefaultImageFromAlbums < ActiveRecord::Migration
  def change
    change_column_default(:albums, :image, nil)
  end
end
