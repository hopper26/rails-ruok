require "open-uri"

class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: [:home]

  def home
  end

  def faces
  end

  def breathing
  end

  def tiles
    # quote for the zenquotes
    res = URI.open("https://zenquotes.io/api/today").read
    @data = JSON.parse(res)
  end

  def videos
  end

  def exercise
  end

  def scribble
  end

  def test
  end
end
