/**
 * singly-linked list:
 *
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

interface ListNode<ValT = any> {
  val: ValT;
  next: ListNode<ValT> | null;
}

enum Condition {
  untilEnd,
  untilNumber,
}

function listLoopUntil(
  head: ListNode['next'],
  condition = Condition.untilEnd,
  endNum?: number
): [ListNode['next'], number] {
  let currentNode: ListNode['next'] = head;
  let counter = 1;

  switch (condition) {
    case Condition.untilEnd:
      if (currentNode)
        while (currentNode.next) {
          currentNode = currentNode.next;
          counter++;
        }
    case Condition.untilNumber:
      if (endNum)
        while (counter < endNum) {
          currentNode = currentNode?.next || null;
          counter++;
        }
  }

  return [currentNode, counter];
}

function middleNode(head: ListNode['next']): ListNode['next'] {
  const [, counter] = listLoopUntil(head);
  const middle = Math.floor(counter / 2) + 1;
  const [result] = listLoopUntil(head, Condition.untilNumber, middle);

  return result;
}

type CommonNode = ListNode | null;

// @audit result does not have the element before last
function mergeTwoLists(list1: CommonNode, list2: CommonNode): CommonNode {
  if (!list1) return list2;
  if (!list2) return list1;

  let [currentNode, checkedNode]: [CommonNode, CommonNode] =
    list1?.val < list2?.val ? [list1, list2] : [list2, list1];
  const headOfMerged = currentNode;

  while (true) {
    if (!checkedNode) break;

    if (!currentNode?.next) {
      if (checkedNode?.next) currentNode!.next = checkedNode.next;
      break;
    }

    if (currentNode.next.val >= checkedNode.val) {
      const tmpNode1 = currentNode.next;
      const tmpNode2 = checkedNode.next;

      currentNode.next = checkedNode;
      checkedNode.next = tmpNode1;
      checkedNode = tmpNode2;
    } else {
      currentNode = currentNode.next;
    }
  }

  return headOfMerged;
}
