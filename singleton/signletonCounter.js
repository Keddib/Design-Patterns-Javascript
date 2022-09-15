let instance;
class Counter {
  constructor() {
    if (instance) {
      throw new Error('an instance already exict');
    }
    this.counter = 0;
    instance = this;
  }
  getCount() {
    return this.counter;
  }
  increment() {
    ++this.counter;
  }
  decrement() {
    --this.counter;
  }
}

const signletonCounter = Object.freeze(new Counter());

export default signletonCounter;
