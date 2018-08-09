class TodoListsController < ApplicationController
  # GET /todo_lists
  # GET /todo_lists.json
  def index
    render json: TodoList.all
  end

   def new
    @todo_list = TodoList.new

    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @todo_list }
    end
  end

  def create

    @todo_list = TodoList.create(todolist_params)
    @todo_list.users_id = 1;

    respond_to do |format|
      if @todo_list.save
        format.html { redirect_to @todo_list, notice: 'Todo list was successfully created.' }
        format.json { render json: @todo_list, status: :created}
      else
        format.html { render action: "new" }
        format.json { render json: @todo_list.errors, status: :unprocessable_entity }
      end
    end
  end

  def edit
    @todo_list = TodoList.find(params[:id])
  end


  # PUT /todo_lists/1
  # PUT /todo_lists/1.json
  def update
    @todo_list = TodoList.find(params[:id])

    respond_to do |format|
      if @todo_list.update_attributes(todolist_params)
        format.html { redirect_to @todo_list, notice: 'Todo list was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @todo_list.errors, status: :unprocessable_entity }
      end
    end
  end


  def show
    @todo_list = TodoList.find(params[:id])
    render json: @todo_list
  end


  def todolist_params
    params.require(:todo_list).permit(:title, :description)
  end

end
