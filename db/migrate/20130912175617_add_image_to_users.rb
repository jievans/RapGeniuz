class AddImageToUsers < ActiveRecord::Migration
  def change
    add_column :users, :image, :string, :null => false,
    :default => "/assets/default_avatar.png"
  end
end
