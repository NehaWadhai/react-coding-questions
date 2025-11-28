import LinkedList from "./createLinkedList/index"; // adjust path to your LinkedList class

// Create a linked list with a cycle (tail connects to node with value 3)
export const cycleList = (() => {
  const list = new LinkedList();
  list.prepend(5);
  list.prepend(4);
  list.prepend(3);
  list.prepend(2);
  list.prepend(1);
  // List is now: 1 → 2 → 3 → 4 → 5

  let head = list.head;
  let cycleStart = null;
  let curr = head;

  // Traverse list to find tail & cycle start
  while (curr.next !== null) {
    if (curr.value === 3) {
      cycleStart = curr; // node where cycle will begin
    }
    curr = curr.next;
  }

  // curr is now tail
  curr.next = cycleStart; // create cycle

  return list;
})();
