import Vue from "vue";
import Vuex from "vuex";
import _ from "lodash";

import Todo from "@/models/Todo";

Vue.use(Vuex);

// Mutations:
const addTodo = (state, { title, desc }) => {
  const todo = new Todo(title, desc);
  state.todos.push(todo);
};

const removeTodo = (state, id) => {
  state.todos = state.todos.filter(todo => todo.id != id);
};

const toggleTodo = (state, id) => {
  const todo = _.find(state.todos, ["id", id]);

  todo.toggleDone();
  todo.updateLastModified();
};

// Store definition:
const loadState = () => {
  const localState = window.localStorage.getItem("state");
  if (localState) {
    const state = JSON.parse(localState);
    state.todos = state.todos.map(Todo.fromObject);
    return state;
  }
  return { todos: [] };
};

const localStoragePlugin = store =>
  store.subscribe((mutation, state) => {
    window.localStorage.setItem("state", JSON.stringify(state));
  });

// prettier-ignore
const plugins = [localStoragePlugin]
if (process.env.NODE_ENV === "development") {
  plugins.push(require("vuex/dist/logger")());
}

export default new Vuex.Store({
  plugins,
  state: loadState(),
  mutations: { addTodo, removeTodo, toggleTodo },
  actions: {},
  getters: {
    sortedTodos: ({ todos }) => {
      const dateSorted = _.reverse(_.sortBy(todos, "lastModified"));
      return _.sortBy(dateSorted, "done");
    }
  }
});
