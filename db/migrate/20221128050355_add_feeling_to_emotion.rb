class AddFeelingToEmotion < ActiveRecord::Migration[7.0]
  def change
    add_column :emotions, :feeling, :integer
  end
end
