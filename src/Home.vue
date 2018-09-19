<template>
  <div class="home flex col">
    <h1 class="title">tiny task</h1>
    <div class="content flex col">
      <span class="todo-list-adapter flex col">
        <todo-list />
      </span>
    </div>
  </div>
</template>

<script>
import TodoList from "@/components/TodoList.vue";

export default {
  name: "home",
  data() {
    return {
      name: "Steven Xie"
    };
  },
  computed: {
    greeting() {
      return `Hello! My name is ${this.name}.`;
    }
  },
  components: { TodoList }
};
</script>

<style lang="scss" scoped>
.home {
  align-items: stretch;
}
.title {
  align-self: center;
  font-size: 20pt;
  font-weight: 400;
}
.content {
  display: flex;
  align-items: center;
}
.todo-list-adapter {
  width: 100%;
  max-width: 500px;
}
</style>
