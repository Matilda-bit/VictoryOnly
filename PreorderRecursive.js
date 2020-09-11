/**
 * https://leetcode.com/explore/learn/card/data-structure-tree/134/traverse-a-tree/928/
 * 
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// preorder= () = > {
//     preorderTraversal(this.root);
// }
let preorderTraversal = function (root) {
    let myArray = new Array();
    helpPreorderTraversal(root, myArray);
    return myArray;
}

let helpPreorderTraversal = (root, list) => {

    if (root !== null) {
        list.push(root.val);
        // console.log(root.val);
        helpPreorderTraversal(root.left, list);
        helpPreorderTraversal(root.right, list);
    }
    return;
};