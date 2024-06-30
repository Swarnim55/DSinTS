
class DLNode<T> {
  prev: DLNode<T> | null;
  value: T;
  next: DLNode<T> | null;

  constructor(value: T, prev: DLNode<T> | null = null, next: DLNode<T> | null = null) {
    this.value = value;
    this.prev = prev;
    this.next = next;
  }
}

class DoublyLinkedList<T> {
  head: DLNode<T> | null;
  tail: DLNode<T> | null;

  constructor() {
    this.head = null;
    this.tail = null;
  }

  add(value: T): void {
    const newNode = new DLNode(value, null, null);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      if (this.tail !== null) {
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
      }
    }
  }
}
// Usage:
const dlist = new DoublyLinkedList<number>();
dlist.add(1);
dlist.add(2);
dlist.add(3);

console.log(JSON.stringify(dlist, null, 2));













