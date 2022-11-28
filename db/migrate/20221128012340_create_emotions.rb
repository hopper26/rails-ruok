class CreateEmotions < ActiveRecord::Migration[7.0]
  def change
    create_table :emotions do |t|
      t.integer :face_happy
      t.integer :face_meh
      t.integer :face_sad
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
