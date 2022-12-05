class GoalsController < ApplicationController

  def index
    @goals = policy_scope(Goal)
    @goal = Goal.new
  end

  def new
    @goal = Goal.new
    authorize @goal
  end

  def create
    @goal = Goal.new(goal_params)
    @goal.user = current_user
    authorize @goal
    if @goal.save
      redirect_to goals_path, status: :see_other
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
    @goal.update(goal_params)
    redirect_to goals_path
  end

  def destroy
    @goal = Goal.find(params[:id])
    authorize @goal
    @goal.destroy
    redirect_to goals_path, notice: "Entry deleted", status: :see_other
  end


  private

  def goal_params
    params.require(:goal).permit(:sections, :content, :completed)
  end
end
