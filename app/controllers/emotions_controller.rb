class EmotionsController < ApplicationController
  def index
    @emotions = Emotion.new
  end

  # POST /emotions (The other information will come as params)
  def create
    @emotion = Emotion.new(emotion_params)
    # puts @emotion.where(feeling: "happy").count
    @emotion.user = current_user
    if @emotion.save
      redirect_to tiles_path, status: :see_other
    else
      redirect_to face_path, status: :unprocessable_entity, alert: "Something went wrong"
    end
  end

  private

  def emotion_params
    params.require(:emotion).permit(:feeling)
  end
end
