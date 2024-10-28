"use strict";

const todo = {
  tasks: [],
  addTask: function(title, id, priority) {
    this.tasks.push({
      title,
      id,
      priority
    })
  },
  removeTask: function(id) {
    this.tasks = this.tasks.filter((task) => task.id !== id)
  },
  updateTask: function(id, title, priority) {
    const update = this.tasks.find((task) => task.id === id)
    update.title = title
    update.priority = priority
  },
  sortTasks: function() {
    this.tasks.sort((a, b) => a.priority - b.priority)
  }
};

// Добавление задачи
todo.addTask('Task 1', 1, 1);
todo.addTask('Task 2', 2, 3);
todo.addTask('Task 3', 3, 2);
todo.addTask('Task 4', 4, 1);

// Удаление задачи
todo.removeTask(3);

// Обновление задачи
todo.updateTask(1, 'New Task', 2);

// Сортировка задач
todo.sortTasks();

// Вывод задач
console.log('todo', todo.tasks)
