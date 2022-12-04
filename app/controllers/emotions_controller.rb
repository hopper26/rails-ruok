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
    @emotion_h = (policy_scope(Emotion).select do |emotion|
      emotion.created_at.month.to_s == "11" && emotion.feeling == "happy"
    end).count
    @emotion_m = (policy_scope(Emotion).select do |emotion|
      emotion.created_at.month.to_s == "11" && emotion.feeling == "meh"
    end).count
    @emotion_s = (policy_scope(Emotion).select do |emotion|
      emotion.created_at.month.to_s == "11" && emotion.feeling == "sad"
    end).count
  end

  private

  def emotion_params
    params.require(:emotion).permit(:feeling)
  end
end
