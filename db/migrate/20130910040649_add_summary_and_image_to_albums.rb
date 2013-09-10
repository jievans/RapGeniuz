class AddSummaryAndImageToAlbums < ActiveRecord::Migration
  def change
    add_column :albums, :summary, :text
    add_column :albums, :image, :string
  end
end
