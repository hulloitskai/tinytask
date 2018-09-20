<template>
  <form class="new-todo flex" @submit.prevent="handleSubmit">
    <input
      class="flex col"
      v-model="text"
      placeholder="...add something else to do..."
    />
    <button class="add flex" :disabled="!text" @click="handleSubmit">
      <i class="fas fa-plus" aria-hidden="true" />
    </button>
  </form>
</template>

<script>
export default {
  name: "new-todo",
  data() {
    return { text: "" };
  },
  methods: {
    handleSubmit() {
      if (!this.text) return;

      this.$store.commit("addTodo", { title: this.text });
      this.text = "";
    }
  }
};
</script>

<style lang="scss" scoped>
@mixin easytrans() {
  transition: all 150ms ease-in-out;
}

.new-todo {
  align-self: stretch;
}

input {
  flex: 1;
  align-self: stretch;
  margin: 0;
  padding: 12px;

  border: none;
  border-radius: 0;
  outline: none;

  font-size: 11.5pt;
  font-family: "Source Sans Pro", sans-serif;
  font-weight: 400;

  background-color: rgb(229, 229, 229);
  color: #6b6b6b;
  @include easytrans();

  &::placeholder {
    color: rgb(167, 167, 167);
  }

  // prettier-ignore
  &:hover, &:focus {
    background-color: rgb(235, 235, 235);
  }
}

button {
  margin: 0;
  padding: 0 13px;
  align-items: center;
  justify-content: center;

  cursor: not-allowed;
  border: none;
  border-radius: 0;
  outline: none;

  background-color: rgb(187, 187, 187);
  color: white;
  @include easytrans();

  font-family: "Cabin", sans-serif;
  font-size: 11pt;

  &:not(:disabled) {
    background-color: rgb(168, 168, 168);
    cursor: pointer;

    &:hover {
      background-color: #a5d6a7;
    }
  }
}
</style>
