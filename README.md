## Best way to implement a queue in javascript


# javascript

# programming

# beginners

# queue

**Summary**: Queue is an important data structure to learn for example it is used in playlist Mp3.

> Introduction

> Prerequisites

> Implementation

> Uses Cases


**Introduction**

In the first place what is a queue is just a simple data structure used in many cases, as We will see. It follows the FIFO principle meaning First In First Out compares it with a real-life queue where the first to come is first served. Take a look at the photo.

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/il9ms3w5srle8yaev5zr.jpg)

It shows clearly now how it works.

Queue uses two main methods but in this article, we will see more than two: 

- Enqueue which is to add the item to the last in the object we created we are going to use an object instead of an array in different ways but the same results

- Dequeue is to remove the first item of the object which is the first to be inserted in the object

- Peel to get the first item in the object

- length to get the length of the object

- Isempty to check if it is empty


**Prerequisites**

1. To know javascript

2. Nothing else

_it is important to know the difference between stack and queue first thing to notice is that we will be using an object instead of an array to use queue I am doing so to have a solid foundation of the queue we use LIFO to use stack and queue follows FIFO_ 

To learn about stack use the link [Link](https://dev.to/brunoblaise/complete-guide-in-implementation-of-stack-in-javascript-2m4)

**Implementation**

First, we will look at the complete code and then break it into pieces.


![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/gtvpzy7f7sj4jdrouqzb.png)


#### It's time.


```
class Queue {
  constructor() {
    this.element = {};
    this.head = 0;
    this.tail = 0;
  }
```
As a prerequisite You should know class now what we are just doing is we are creating an `element which is empty, head and tail are equal to zero`

```
  enqueue(element) {
    this.element[this.tail] = element;

    console.log('enqueue', this.element[this.tail]);

    this.tail++;

    return element;
  }
```
As we have said enqueue is to add any element, at last, so we create enqueue as the code above. With the argument being passed into the function now we really what to understand this very important part.

```
    this.element[this.tail] = element;

    console.log('enqueue', this.element[this.tail]);

    this.tail++;
```

as we declare an element as an object what we are doing here is

```
this.element[this.tail] = element;
```
that `this.element[this.tail] is a key and when we assign an element to it we are saying take the key and assign this element as a value of the object`. let's look at an example


![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/i3phvbalq2nsiuccxryc.png)
what I am doing is basic, now look at the terminal. 

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/keqbbfp1ab9fy3ndvag2.png)



```
    console.log('enqueue', this.element[this.tail]);

    this.tail++;
```

the code just tail is added.

```
  dequeue() {
    const item = this.element[this.head];
    delete this.element[this.head];
    this.head++;
    return item;
  }
```

it is basic code nothing new just removing the first element in the object and then storing it to the item then the function is just returning the item.

```
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
```

```
get isEmpty() {
    return this.length === 0;
  }
```
we are checking if the length is equal to zero **The size is not a property of js we are implementing it in the get method we defined in the class**


```
let queue = new Queue();

```

Initiating the class

```
const result = () => {
  for (let i = 4; i <= 15; i++) {
    queue.enqueue(i);
  }

```

creating a loop that starts at 4 and ends at 15 as long the condition is true.

```
 console.log('length', queue.length);
```
Getting the length of the object

```
 while (!queue.isEmpty) {
    console.log(queue.dequeue());
  }
};

result();
```

cleaning the object we are doing is very simple just we are checking if the object is truly empty if we clean the object from the top to the last. Lastly, we are calling the function.

```
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

```

Full code. If you made it this far is truly amazing, if the code is not understood, hey there tell me I will be happy to help you. Share the post with your friend if you find it helpful.

**Application**

- Applied on Operating system to handle interruption.

- Applied to add a song at the end or to play from the front.

- Applied on WhatsApp when we send messages to our friends who don’t have an internet connection then these messages are queued on the server of WhatsApp.
