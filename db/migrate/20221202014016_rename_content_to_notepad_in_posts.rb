class RenameContentToNotepadInPosts < ActiveRecord::Migration[7.0]
  def change
    rename_column :posts, :content, :notepad
  end
end
