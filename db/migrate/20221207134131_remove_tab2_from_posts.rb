class RemoveTab2FromPosts < ActiveRecord::Migration[7.0]
  def change
    remove_column :posts, :tab2, :binary
  end
end
