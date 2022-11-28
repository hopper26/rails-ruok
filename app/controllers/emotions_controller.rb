class EmotionsController < ApplicationController
  # POST /emotions (The other information will come as params)
  def create
    @emotion = Emotion.new(emotion_params)
    # puts @emotion.user.where(feeling: "happy").count
    @emotion.user = current_user
    if @emotion.save
      redirect_to tiles_path, status: :see_other
    else
      redirect_to face_path, status: :unprocessable_entity, alert: "Something went wrong"
    end
  end

  # Face tracker counter for each face
  def counter
    @emotion_h = current_user.emotions.where(feeling: "happy").count
    @emotion_m = current_user.emotions.where(feeling: "meh").count
    @emotion_s = Emotion.where(feeling: "sad", user_id: current_user.id).count
    # @emotion_s = current_user.emotions.where(feeling: "sad").count
    # Emotion.where(feeling: "sad", user_id: current_user.id).count

    # ERROR ON HEROKU BUT WORKS LOCALLY
    # 2022-11-28T10:51:38.355079+00:00 app[web.1]: [92608fd0-cd31-48b4-bf37-dddb130a0634] ActiveRecord::StatementInvalid (PG::UndefinedColumn: ERROR:  column emotions.feeling does not exist
    # 2022-11-28T10:51:38.355080+00:00 app[web.1]: LINE 1: ...OM "emotions" WHERE "emotions"."user_id" = $1 AND "emotions"...
  end

  private

  def emotion_params
    params.require(:emotion).permit(:feeling)
  end
end
