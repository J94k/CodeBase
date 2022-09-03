/**
 * singly-linked list
 * 
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  if (!head?.next) return head;

  let nextHead = head.next;

  if (head.val === head.next.val) {
    head.next = head.next.next;
    nextHead = head;
  }

  deleteDuplicates(nextHead);

  return head;
};

