<template>
  <div class="wrapper">
    <h2>任务列表</h2>
    <input
      @keyup.enter="addNewTodo"
      v-model="newTodo"
      placeholder="添加任务"
    />
    <ul class="todo-list">
      <li
        is="todoItem"
        v-for="(todo, index) in todos"
        :key="todo.id"
        :title="todo.title"
        @remove="todos.splice(index, 1)"
      ></li>
    </ul>
  </div>
</template>
<script>
var todoItem = {
  template: `<li>
     {{title}}
     <button @click="$emit('remove')">-</button>
     </li>`,
  props: ['title']
}

export default {
  data () {
    return {
      todos: [{
        id: 1,
        title: '熟悉vue语法'
      }, {
        id: 2,
        title: '编写todolist的demo'
      }, {
        id: 3,
        title: '进一步完善todolist'
      }],
      newTodo: '',
      nextTodoId: 4
    }
  },
  components: {
    todoItem: todoItem
  },
  methods: {
    addNewTodo: function () {
      this.todos.push({
        id: this.nextTodoId++,
        title: this.newTodo
      })
      this.newTodo = ''
    }
  }
}
</script>
<style lang="scss" scoped>
.todo-list {
  list-style: none;
}
</style>


