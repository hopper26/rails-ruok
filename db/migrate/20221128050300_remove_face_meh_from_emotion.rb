class RemoveFaceMehFromEmotion < ActiveRecord::Migration[7.0]
  def change
    remove_column :emotions, :face_meh, :integer
  end
end
