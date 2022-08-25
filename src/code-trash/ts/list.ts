interface ListNode {
  val: any;
  next: ListNode | null;
}

enum Condition {
  untilEnd,
  untilNumber,
}

function listLoopUntil(
  head: ListNode["next"],
  condition = Condition.untilEnd,
  endNum?: number
): [ListNode["next"], number] {
  let currentNode: ListNode["next"] = head;
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

function middleNode(head: ListNode["next"]): ListNode["next"] {
  const [, counter] = listLoopUntil(head);
  const middle = Math.floor(counter / 2) + 1;
  const [result] = listLoopUntil(head, Condition.untilNumber, middle);

  return result;
}
