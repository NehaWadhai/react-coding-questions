class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  export default class LinkedList {
    constructor() {
      this.head = null;
      this.size = 0;
    }
    
    isEmpty() {
      return this.size === 0;
    }
    getSize(){
        return this.size
    }

    prepend(val){
        const node = new Node(val)
        if(this.isEmpty())
        {
          this.head = node 
        }else{
          node.next = this.head
          this.head = node
        }
        
       this.size++
    }

    print(){
      if(this.isEmpty()){
        console.log('List is empty')
      }
      let curr = this.head
      let listValue = ''
      while(curr){
        listValue += curr.value + (curr.next ? " → " : "");
        curr = curr.next
      }

      return listValue
    }

    reverse(){
      let prev = null
      let curr = this.head
      while(curr){
        let next = curr.next
        curr.next = prev
        prev = curr
        curr = next
        
      }
      this.head = prev
    }
    hasCycle() {
      let slow = this.head;
      let fast = this.head;
    
      while (fast !== null && fast.next !== null) {
        slow = slow.next;        // move 1 step
        fast = fast.next.next;   // move 2 steps
    
        if (slow === fast) {
          return true; // cycle detected
        }
      }
      return false;
    }
    
    mergeLinkedList(list,list2){
      let dummyNode = new Node(null)
      let currNode = dummyNode
      let l1 = list.head
      let l2 = list2.head
      while(l1 !== null && l2 !== null){
        if(l1.value < l2.value){
          currNode.next = l1
          l1 = l1.next
        }else{
          currNode.next = l2
          l2 = l2.next
        }
        currNode = currNode.next
      }

      if(l1 !== null){
        currNode.next = l1
      }else{
        currNode.next = l2
      }

        return dummyNode.next
    }

  }


  