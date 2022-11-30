class EmotionsController < ApplicationController
  # POST /emotions (The other information will come as params)
  def create
    @emotion = Emotion.new(emotion_params)
    @emotion.user = current_user
    authorize @emotion
    if @emotion.save
      redirect_to tiles_path, status: :see_other
    else
      redirect_to face_path, status: :unprocessable_entity, alert: "Something went wrong"
    end
  end

  # Face tracker counter for each face
  def counter
    authorize Emotion
    @emotion_h = current_user.emotions.where(feeling: "happy").count
    @emotion_m = current_user.emotions.where(feeling: "meh").count
    @emotion_s = current_user.emotions.where(feeling: "sad").count
  end

  private

  def emotion_params
    params.require(:emotion).permit(:feeling)
  end
end
