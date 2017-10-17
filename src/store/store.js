import Vue from 'vue'
import Vuex from 'vuex'

export const TODO_ADD = 'todo-add'
export const TODO_FINISH = 'todo-finish'
export const TODO_DELETE = 'todo-delete'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todolist: []
  },
  mutations: {
    [TODO_ADD] (state, content) {
      state.todolist.push({
        content: content,
        isFinished: false,
        id: Date.now()
      })
    },
    [TODO_FINISH] (state, index) {
      state.todolist[index]['isFinished'] = true
    },
    [TODO_DELETE] (state, index) {
      state.todolist.splice(index, 1)
    }
  }
})
