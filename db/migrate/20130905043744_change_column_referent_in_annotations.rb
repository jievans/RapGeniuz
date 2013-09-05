class ChangeColumnReferentInAnnotations < ActiveRecord::Migration
  def change
    change_column :annotations, :referent, :text, :null => false
  end
end
