angular.module("todoApp", []).controller("TodoListController", function() {
  var todoList = this;
  todoList.todos = [
    { text: "learn AngularJS", done: true },
    { text: "Build an AngularJS app", done: false }
  ];

  todoList.addTodo = function() {
    console.log(todoList.todoText);
    if (todoList.todoText === undefined) return;

    todoList.todos.push({ text: todoList.todoText, done: false });
    todoList.todoText = undefined;
  };
});
