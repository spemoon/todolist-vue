<template>
  <input
    class="todo-input"
    placeholder='添加一个待办项目'
    v-model.trim='content'
    @keyup.enter='add'
  />
</template>
<script>
import { TODO_ADD } from '../store/store'

export default {
  name: 'input',
  data () {
    return {
      content: ''
    }
  },
  methods: {
    add () {
      if (this.content.length === 0) {
        return false
      }
      this.$store.commit(TODO_ADD, this.content)
      this.content = ''
    }
  }
}
</script>
<style>
.todo-input {
  width: 80%;
  height: 35px;
  border: 1px solid #ccc;
}
</style>
