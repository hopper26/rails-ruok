class MigrateNotepadtoRichBodyPosts < ActiveRecord::Migration[7.0]
  def up
    Post.find_each do |post|
      post.update(rich_body: post.notepad)
    end
  end

  def down
    Post.find_each do |post|
      post.update(notepad: post.rich_body)
      post.update(rich_body: nil)
    end
  end
end
