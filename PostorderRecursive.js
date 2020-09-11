/**
 * https://leetcode.com/explore/learn/card/data-structure-tree/134/traverse-a-tree/930/
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
let postorderTraversal = function (root) {
    let myArray = new Array();
    helpPostorderTraversal(root, myArray);
    return myArray;
}

let helpPostorderTraversal = (root, list) => {

    if (root !== null) {
        helpPostorderTraversal(root.left, list);
        helpPostorderTraversal(root.right, list);
        list.push(root.val);

    }
    return;
};