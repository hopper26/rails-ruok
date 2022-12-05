class GoalsController < ApplicationController

  def index
    @goals1 = policy_scope(Goal).select do |goal|
      goal.section == "Self Care"
    end

    @goals2 = policy_scope(Goal).select do |goal|
      goal.section == "Accomplishments"
    end

    @goals3 = policy_scope(Goal).select do |goal|
      goal.section == "Activities"
    end

    @goals4 = policy_scope(Goal).select do |goal|
      goal.section == "Enjoyment"
    end

    @goal = Goal.new
  end

  def create
    @goal = Goal.new(goal_params)
    @goal.user = current_user
    authorize @goal
    if @goal.save
      redirect_to goals_path, notice: "Goal created successfully"
    else
      render :new, status: :unprocessable_entity, notice: "issue"
    end
  end

  def edit
    @goal = Goal.find(params[:id])
    authorize @goal
  end

  def update
    @goal = Goal.find(params[:id])
    authorize @goal
    respond_to do |f|
      if @goal.update(goal_params)
        f.html { redirect_to goals_path, notice: "Task was successfully updated" }
      else
        f.html { render :edit, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    @goal = Goal.find(params[:id])
    authorize @goal
    @goal.destroy
    redirect_to goals_path, notice: "Entry deleted", status: :see_other
  end

  def toggle
    @goal = Goal.find(params[:id])
    @goal.update(completed: params[:completed])
    render json: { message: "Success" }
  end

  private

  def goal_params
    params.require(:goal).permit(:section, :content, :completed)
  end
end
