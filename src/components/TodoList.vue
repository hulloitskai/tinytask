<template>
  <div class="todo-list flex col">
    <todo-item v-for="todo in todos" :key="todo.id" :todo="todo">
      {{ todo.title }}
    </todo-item>
    <new-todo />
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import TodoItem from "./TodoItem.vue";
import NewTodo from "./NewTodo.vue";

export default {
  name: "todo-list",
  computed: mapGetters({ todos: "sortedTodos" }),
  components: { TodoItem, NewTodo }
};
</script>

<style lang="scss" scoped>
.todo-list {
  align-self: stretch;
}
.new-todo {
  margin-top: 15px;
}
</style>
