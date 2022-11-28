class Emotion < ApplicationRecord
  belongs_to :user

  enum feeling: { happy: 0, meh: 1, sad: 2 }
end
