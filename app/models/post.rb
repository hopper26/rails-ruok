class Post < ApplicationRecord
  belongs_to :user
  # has_rich_text :content

  validates :title, :notepad, presence: true
end
