class Queue {
  constructor() {
    this.element = {};
    this.head = 0;
    this.tail = 0;
  }

  enqueue(element) {
    this.element[this.tail] = element;

    console.log('enqueue', this.element[this.tail]);

    this.tail++;

    return element;
  }

  dequeue() {
    const item = this.element[this.head];
    delete this.element[this.head];
    this.head++;
    return item;
  }

  get length() {
    const result = this.tail - this.head;

    return result;
  }

  peek() {
    return this.element[this.head];
  }

  get isEmpty() {
    return this.length === 0;
  }
}

let queue = new Queue();

const result = () => {
  for (let i = 4; i <= 15; i++) {
    queue.enqueue(i);
  }

  queue.isEmpty;

  console.log('length', queue.length);

  while (!queue.isEmpty) {
    console.log(queue.dequeue());
  }
};

result();
