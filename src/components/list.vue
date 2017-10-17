<template>
  <ul>
    <li v-for="(todo, index) in todolist" :key="todo.id">
      <span>{{index + 1}}.{{todo.content}}</span>
      <div class="opt-wrapper">
        <button v-if="!todo.isFinished" @click="finish(index)">已完成</button>
        <button v-else @click="deleteTodo(index)">删除</button>
      </div>
    </li>
  </ul>
</template>
<script>
import { mapState } from 'vuex'
import { TODO_DELETE, TODO_FINISH } from '../store/store'

export default {
  name: 'list',
  computed: mapState(['todolist']),
  methods: {
    finish (index) {
      this.$store.commit(TODO_FINISH, index)
    },
    deleteTodo (index) {
      this.$store.commit(TODO_DELETE, index)
    }
  }
}
</script>

