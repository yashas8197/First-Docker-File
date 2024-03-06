// Problem 1: Reverse a string
function reverseString(str) {
    return str.split('').reverse().join('');
}

console.log(reverseString('hello')); // Output: 'olleh'


// Problem 2: Check if a string is palindrome
function isPalindrome(str) {
    return str === str.split('').reverse().join('');
}

console.log(isPalindrome('racecar')); // Output: true
console.log(isPalindrome('hello')); // Output: false


// Problem 3: Implement a Stack using an array
class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if (this.items.length === 0) {
            return "Underflow";
        }
        return this.items.pop();
    }

    peek() {
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }
}

// Problem 4: Implement a Queue using an array
class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(element) {
        this.items.push(element);
    }

    dequeue() {
        if (this.isEmpty()) {
            return "Underflow";
        }
        return this.items.shift();
    }

    front() {
        if (this.isEmpty()) {
            return "No elements in Queue";
        }
        return this.items[0];
    }

    isEmpty() {
        return this.items.length === 0;
    }
}

// Test stack and queue
const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.pop()); // Output: 3

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.dequeue()); // Output: 1
console.log(queue.front()); // Output: 2
