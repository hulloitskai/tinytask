<template>
  <form class="new-todo flex" @submit.prevent="handleSubmit">
    <input
      class="flex col"
      v-model="text"
      placeholder="...add something else to do..."
    />
    <button class="add flex" @click="handleSubmit">
      <i class="fas fa-plus" />
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
  padding: 10px;

  border: none;
  outline: none;
  font-size: 11pt;
  font-family: "Source Sans Pro", sans-serif;

  background-color: rgb(224, 224, 224);
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
  padding: 11px;
  border: none;
  outline: none;
  cursor: pointer;

  background: rgb(187, 187, 187);
  color: white;
  @include easytrans();

  font-family: "Cabin", sans-serif;
  font-size: 11pt;

  &:hover {
    background-color: rgb(163, 163, 163);
  }
}
</style>
