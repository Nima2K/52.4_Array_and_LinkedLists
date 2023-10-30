class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
    }
  
    push(val) {
      const newNode = new Node(val);
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        this.tail.next = newNode;
        this.tail = newNode;
      }
    }
  
    unshift(val) {
      const newNode = new Node(val);
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        newNode.next = this.head;
        this.head = newNode;
      }
    }
  
    pop() {
      if (!this.head) {
        throw new Error('List is empty');
      }
  
      let current = this.head;
      let prev = null;
  
      while (current.next) {
        prev = current;
        current = current.next;
      }
  
      if (prev) {
        prev.next = null;
        this.tail = prev;
      } else {
        this.head = null;
        this.tail = null;
      }
  
      return current.val;
    }
  
    shift() {
      if (!this.head) {
        throw new Error('List is empty');
      }
  
      const oldHead = this.head;
      this.head = oldHead.next;
  
      if (!this.head) {
        this.tail = null;
      }
  
      return oldHead.val;
    }
  
    getAt(idx) {
      let current = this.head;
      let count = 0;
  
      while (current) {
        if (count === idx) {
          return current.val;
        }
  
        current = current.next;
        count++;
      }
  
      throw new Error('Index out of bounds');
    }
  
    setAt(idx, val) {
      let current = this.head;
      let count = 0;
  
      while (current) {
        if (count === idx) {
          current.val = val;
          return;
        }
  
        current = current.next;
        count++;
      }
  
      throw new Error('Index out of bounds');
    }
  
    insertAt(idx, val) {
      if (idx === 0) {
        return this.unshift(val);
      }
  
      let current = this.head;
      let count = 0;
  
      while (current) {
        if (count === idx - 1) {
          const newNode = new Node(val);
          newNode.next = current.next;
          current.next = newNode;
  
          if (newNode.next === null) {
            this.tail = newNode;
          }
  
          return;
        }
  
        current = current.next;
        count++;
      }
  
      throw new Error('Index out of bounds');
    }
  
    removeAt(idx) {
      if (idx === 0) {
        return this.shift();
      }
  
      let current = this.head;
      let prev = null;
      let count = 0;
  
      while (current) {
        if (count === idx) {
          prev.next = current.next;
  
          if (current.next === null) {
            this.tail = prev;
          }
  
          return current.val;
        }
  
        prev = current;
        current = current.next;
        count++;
      }
  
      throw new Error('Index out of bounds');
    }
  
    average() {
      if (!this.head) {
        return null;
      }
  
      let current = this.head;
      let sum = 0;
      let count = 0;
  
      while (current) {
        sum += current.val;
        count++;
        current = current.next;
      }
  
      return sum / count;
    }
  }
  
  // Example Usage
  let ll = new LinkedList();
  ll.push(1);
  ll.push(2);
  ll.push(3);
  ll.push(4);
  ll.push(5);
  console.log(ll.average()); // Output: 3
  