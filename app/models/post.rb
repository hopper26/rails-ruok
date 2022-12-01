class Post < ApplicationRecord
  belongs_to :user
  # has_rich_text :contents

  validates :title, :content, presence: true
end
