/**
 * binary tree node:
 *
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  if (!root) return false;

  if (!root.left && !root.right) {
    return targetSum - root.val === 0;
  }

  const newTarget = targetSum - root.val;

  return hasPathSum(root.left, newTarget) || hasPathSum(root.right, newTarget);
};

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function (root) {
  if (!root) return root;

  const tmpLeftRoot = invertTree(root.left);

  root.left = invertTree(root.right);
  root.right = tmpLeftRoot;

  return root;
};

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
// @audit we need take into account the previous parrent node values
var isValidBST = function (root) {
  if (!root) return true;

  const isValidLeft = typeof root.left?.val === 'number' ? root.val > root.left.val : true;
  const isValidRight = typeof root.right?.val === 'number' ? root.val < root.right.val : true;

  return isValidLeft && isValidRight && isValidBST(root.left) && isValidBST(root.right);
};

/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  if (!root) return 0;

  const left = maxDepth(root.left);
  const right = maxDepth(root.right);

  return 1 + Math.max(left, right);
};
