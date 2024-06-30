// Playing with Linked Lists


// Node Class for linked list

 class LNode<T>{
     value: T;
     next: LNode<T> | null;

     constructor (value: T, next: LNode<T> | null = null){
        this.value = value;
        this.next = next
     }

 }

// Linked List Class

 class LinkedList<T> {
    
    head: LNode<T> | null;

    constructor(){
        this.head = null;
    }

    add(value: T): void{
      const newNode = new LNode(value);
      if(this.head === null){
        this.head = newNode;
      }else{
        let current = this.head;
        while(current.next !==null){
            current = current.next;
        }
        current.next = newNode;
      }

    }
 }

 // Usage:

 const list = new LinkedList<number>();
 list.add(1);
 list.add(2);
 list.add(3)

 console.log(JSON.stringify(list))
