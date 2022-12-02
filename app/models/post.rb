class Post < ApplicationRecord
  belongs_to :user
  has_rich_text :rich_body

  validates :title, :rich_body, presence: true
end
