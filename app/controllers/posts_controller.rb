class PostsController < ApplicationController
  def index
    # @posts = []
    # p2 = Post.all
    # puts params[:date]
    # if params[:date] == "#{p.created_at.year}-#{p.created_at.month}-#{p.created_at.day}"
    #   Post.where("#{p.created_at.year}-#{p.created_at.month}-#{p.created_at.day}" == params[:date])
    # p2.each do |p|
      # puts "#{p.created_at.year}-#{p.created_at.month}-#{p.created_at.day}"
      # puts p

        # p2 = Post.where("created_at LIKE ?", "#{params[:date]}%")
        # puts p2
        # raise
      # puts p3
      @my_posts = policy_scope(Post).select {|post| "#{post.created_at.year}-#{post.created_at.month}-#{post.created_at.day}" == params[:date]}

    # "#{p.created_at.year}-#{p.created_at.month}-#{p.created_at.day}" == params[:date].to_s
    # @posts = Post.all

  end

  def show
    @post = Post.find(params[:id])
    # @user = User.select(:id, :first_name).find(@post.user_id)
    authorize @post
  end

  def new
    @post = Post.new
    authorize @post
  end

  def create
    @post = Post.new(post_params)
    @post.user = current_user
    authorize @post
    if @post.save
      redirect_to posts_path, status: :see_other
    else
      render :new, status: :unprocessable_entity, alert: "issue"
    end
  end

  def edit
    @post = Post.find(params[:id])
    authorize @post
  end

  def update
    @post = Post.find(params[:id])
    @post.update(post_params)
    authorize @post
    redirect_to posts_path
  end

  def destroy
    @post = Post.find(params[:id])
    @post.destroy
    authorize @post
    redirect_to posts_path, notice: "Entry deleted"
  end

  private

  def post_params
    params.require(:post).permit(:content, :title, :created_at)
  end
end
