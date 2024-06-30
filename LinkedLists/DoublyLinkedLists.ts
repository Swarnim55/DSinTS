
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

  /*** 
    Jsoniyfing the list
        The toJson method iterates through the list and creates a simplified representaiton of each node. 
        It avoids circular references by only including the value and refers to the value of the next and previous node.
  
  ***/
  toJson(): Array<{ value: T, next: T | null, prev: T | null }> {
    const nodes: Array<{ value: T, next: T | null, prev: T | null }> = [];
    let current = this.head;
    while (current !== null) {
      nodes.push({
        value: current.value,
        next: current.next ? current.next.value : null,
        prev: current.prev ? current.prev.value : null,
      })
      current = current.next;
    }
    return nodes;
  }
}
// Usage:
const dlist = new DoublyLinkedList<number>();
dlist.add(1);
dlist.add(2);
dlist.add(3);

console.log(JSON.stringify(dlist.toJson(), null, 2));













