class RemoveEntryDateFromPosts < ActiveRecord::Migration[7.0]
  def change
    remove_column :posts, :entry_date, :datetime
  end
end
