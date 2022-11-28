class RemoveFaceSadFromEmotion < ActiveRecord::Migration[7.0]
  def change
    remove_column :emotions, :face_sad, :integer
  end
end
