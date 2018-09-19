import nanoid from "nanoid";

export default class Todo {
  id = nanoid();
  lastModified = Date.now();

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
