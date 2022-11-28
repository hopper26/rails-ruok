class RemoveFaceHappyFromEmotion < ActiveRecord::Migration[7.0]
  def change
    remove_column :emotions, :face_happy, :integer
  end
end
