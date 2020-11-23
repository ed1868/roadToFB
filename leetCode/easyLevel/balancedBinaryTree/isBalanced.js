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

  return treeHeight(root) != -1;
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
