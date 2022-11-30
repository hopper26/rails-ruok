class AddEntryDateToPost < ActiveRecord::Migration[7.0]
  def change
    add_column :posts, :entry_date, :datetime
  end
end
