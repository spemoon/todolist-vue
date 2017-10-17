<template>
  <div id="app">
    <div class="container">
      <todoinput></todoinput>
      <todolist></todolist>
    </div>
  </div>
</template>

<script>
import todoinput from './components/input'
import todolist from './components/list'

export default {
  name: 'app',
  components: {
    todoinput,
    todolist
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
html, body {
  width: 100%;
  height: 100%;
}
#app {
  width: 100%;
  height: 100%;
  background: #edf5f8;
  display: flex;
  justify-content: center;
  align-items: center;
}
.container {
  width: 60%;
  height: 80%;
  padding: 30px;
  background: #fff;
  box-shadow: 0 10px 12px #bbb;
}
</style>
