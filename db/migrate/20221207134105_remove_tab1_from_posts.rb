class RemoveTab1FromPosts < ActiveRecord::Migration[7.0]
  def change
    remove_column :posts, :tab1, :text
  end
end
