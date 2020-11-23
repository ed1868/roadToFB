/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
isBalanced = (root) => {
  if (root == null) {
    return true;
  }

  return getTreeHeight(root) != -1;
};

let getTreeHeight = (node) => {
  if (node == null) {
    return 0;
  }

  let left = getTreeHeight(node.left);
  let right = getTreeHeight(node.right);

  if (left == -1 || right == -1 || Math.abs(left - right) > 1) {
    return -1;
  }
  return Math.max(left, right) + 1;
};

let testCaseNumber = 1;

check = (expected, output) => {
  let result = expected == output;

  console.log("My Result: ", result);

  let rightTick = "\u2713";
  let wrongTick = "\u2717";
  if (result) {
    let out = "";
    out += wrongTick + "TEST #" + testCaseNumber + ": Expected ";
    out += expected;
    out += ` YOUR OUTPUT : ${output}`;
    console.log(out);
  }
  testCaseNumber++;
};
