class AddDefaultToAlbumImage < ActiveRecord::Migration
  def change
    change_column_default(:albums, :image,
    "http://www3.uwplatt.edu/files/styles/high_resolution/public/image_fields/directory_image/image-not-available_22.jpg?itok=DV1ikuCx")
  end
end
