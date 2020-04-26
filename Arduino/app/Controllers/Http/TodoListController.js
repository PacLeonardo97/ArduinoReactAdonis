'use strict'
const TodoList = use("App/Models/TodoList");

class TodoListController {
    async store({ request, auth, response }) {
      try {
        const userId = await auth.getUser()
        const { name } = request.all();
        const todoList = new TodoList();
        todoList.name = name;
        todoList.user_id = userId;
        
        await todoList.save();

        return todoList;
      } catch (error) {
        return response
          .status(error.status)
          .send([{ message: `deu ruim ${error}`} ]);
      }
    }
}

module.exports = TodoListController
