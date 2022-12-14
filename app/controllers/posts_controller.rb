class PostsController < ApplicationController
  def index
    @my_posts = policy_scope(Post).select do |post|
      "#{post.created_at.year}-#{post.created_at.month}-#{post.created_at.day}" == params[:date] ||
        "#{post.created_at.year}-#{post.created_at.month}-0#{post.created_at.day}" == params[:date]
    end
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
    # @post.user.image.attach(params[:image])

    # @post.notepad = params[:post][:rich_body]
    # attach_scribble(imageURL)
    # File.open("#{Rails.root}/public/uploads/image.png", "wb") do |f|
    #   f.write(params[:image].read())



    if @post.save
      redirect_to "/posts?date=#{params[:post][:date]}", status: :see_other
    else
      render :new, status: :unprocessable_entity, notice: "issue"
    end
  end

  def edit
    @post = Post.find(params[:id])
    authorize @post
  end

  def update
    @post = Post.find(params[:id])
    authorize @post
    @post.update(post_params)
    # redirect_to posts_path
    redirect_to "/posts?date=#{params[:post][:date]}"
  end

  def destroy
    @post = Post.find(params[:id])
    authorize @post
    @post.destroy
    redirect_to posts_path(date: params[:date]), notice: "Entry deleted", status: :see_other
  end

  # def attach_scribble(url)
  #   @post.image = URI.parse(url)
  #   @post.save!
  # end

    # image_handle = open url
    # extension = image_handle.content_type.gsub 'image/', ""

    # temp_file = Tempfile.new['image', extension]
    # temp_file.write image_handle.read
    # temp_file.close

    # @post.image = temp_file

  private

  def post_params
    params.require(:post).permit(:rich_body, :title, :created_at, :image)
  end
end
