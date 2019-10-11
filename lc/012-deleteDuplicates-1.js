/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// 输入: 1->1->2->3->3
// 输出: 1->2->3
var deleteDuplicates = function(head) {
  //相当于快慢指针
  let last = current = head;

  while(current) {
    if (current.val !== last.val) {
      last = current
    } else {
      last.next = current.next;
    }

    current = last.next;
  }

  return head;
};

