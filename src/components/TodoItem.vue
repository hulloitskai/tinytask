<template>
  <div :class="['todo-item flex col', { done: todo.done }]">
    <div class="slideable" v-on:click="toggleDone">
      <p class="title">{{ todo.title }}</p>
    </div>
  </div>
</template>

<script>
import Todo from "@/models/Todo";

export default {
  name: "todo-item",
  props: {
    todo: { type: Todo, required: true }
  },
  methods: {
    toggleDone() {
      this.$store.commit("toggleTodo", this.todo.id);
    }
  }
};
</script>

<style lang="scss" scoped>
@mixin easytrans() {
  transition: all 150ms ease-in-out;
}

.todo-item {
  align-self: stretch;
  align-items: stretch;

  &.done {
    .slideable {
      background-color: #9e9e9e;
    }
    .title {
      color: lightgrey;
    }
  }
}

.slideable {
  padding: 15px;
  cursor: pointer;

  background-color: #66bb6a;
  @include easytrans();

  &:hover {
    opacity: 0.85;
  }
}

.title {
  color: #e8f5e9;
  @include easytrans();
}
</style>
