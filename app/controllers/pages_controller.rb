class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: [:home]

  def home
  end

  def faces
  end

  def breathing
  end

  def tiles
  end

  def contacts
  end

  def exercise
  end

  def chat
  end

  def quote
    #api for quote would go in here
    # res = URI.open("https://zenquotes.io/api/today").read
    # @test = JSON.parse(res)
  end
end
