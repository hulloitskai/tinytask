import nanoid from "nanoid";

export default class Todo {
  id = nanoid();
  lastModified = Date.now();

  static fromObject({ title, desc, done, id, lastModified }) {
    const todo = new Todo(title, desc, done);
    todo.id = id;
    todo.lastModified = lastModified;
    return todo;
  }

  constructor(title, desc, done) {
    this.title = title || "untitled";
    this.desc = desc || "";
    this.done = done || false;
  }

  toggleDone() {
    this.done = !this.done;
  }

  updateLastModified() {
    this.lastModified = Date.now();
  }

  copy() {
    return new Todo(this.title, this.desc, this.done);
  }
}
