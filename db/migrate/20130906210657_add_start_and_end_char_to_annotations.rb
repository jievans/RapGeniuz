class AddStartAndEndCharToAnnotations < ActiveRecord::Migration
  def change
    add_column :annotations, :start_char, :integer
    add_column :annotations, :end_char, :integer
  end
end
