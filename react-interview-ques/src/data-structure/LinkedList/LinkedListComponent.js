import LinkedList from './createLinkedList'
import { cycleList } from './utils'

function LinkedListComponent() {
  const list = new LinkedList()
  list.prepend(5)
  list.prepend(4)
  list.prepend(3)
  list.prepend(1)
  list.print()
  const list2 = new LinkedList()
  list2.prepend(6)
  list2.prepend(3)
  list2.prepend(2)
  list2.print()

  console.log(list.print())

  const merged = list.mergeLinkedList(list,list2)
  return (
   
      <div>
         <h2>Linked List Demo</h2>
      {/* <p>Is Empty? {list.isEmpty() ? "Yes" : "No"}</p> */}
      <p>Nodes: {list.print()}</p>
      {/* <p>Size: {list.getSize()}</p> */}
      {/* <p>Reverse: {list.reverse()}</p> */}
      <p>Nodes: {list2.print()}</p>
      {/* <p>Megred list: {merged.print()}</p> */}\
      <p>{cycleList.hasCycle() ? "Cycle detected ✅" : cycleList.print()}</p>
      </div>
  );
}

export default LinkedListComponent;
