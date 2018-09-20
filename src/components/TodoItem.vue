<template>
  <div :class="['todo-item flex', { done: todo.done }]">
    <div class="content flex" @click="toggleDone">
      <p class="title">{{ todo.title }}</p>
    </div>
    <button class="remove flex col" @click="remove">
      <i class="fa fa-trash" aria-hidden="true" />
    </button>
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
    },
    remove() {
      this.$store.commit("removeTodo", this.todo.id);
    }
  }
};
</script>

<style lang="scss" scoped>
@mixin easytrans() {
  transition: all 150ms ease-in-out;
}

.todo-item {
  position: relative;
  align-self: stretch;
  overflow: hidden;

  &:hover .remove {
    opacity: 0.3;
  }

  &.done {
    .content {
      background-color: #888888;
      &:hover {
        background-color: #8a8a8aec;
      }
    }
    .title {
      color: lightgrey;
    }
    .remove {
      background-color: rgb(228, 228, 228);
    }
  }
}

.content {
  flex: 1;
  padding: 15px;

  cursor: pointer;
  background-color: #66bb6a;
  @include easytrans();

  &:hover {
    background-color: #66bb6ad3;
  }
}

.title {
  color: #e8f5e9;
  @include easytrans();
}

.remove {
  position: absolute;
  top: 0;
  bottom: 0;
  right: -25px;

  cursor: pointer;
  border: none;
  outline: none;

  opacity: 0;
  color: #ffcdd2;
  background-color: rgb(255, 255, 255);
  @include easytrans();

  justify-content: center;
  align-items: center;
  padding: 0 15px;

  &:hover {
    right: 0;
    opacity: 1 !important;
    background-color: #ef5350 !important;
  }

  i {
    font-size: 9pt;
  }
}
</style>
