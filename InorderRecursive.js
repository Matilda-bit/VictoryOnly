/**
 * https://leetcode.com/explore/learn/card/data-structure-tree/134/traverse-a-tree/929/
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

let inorderTraversal = function (root) {
    let myArray = new Array();
    HelpInorderTraversal(root, myArray);
    return myArray;

};

let HelpInorderTraversal = (root, list) => {
    if (root != null) {
        HelpInorderTraversal(root.left, list);
        list.push(root.val);
        HelpInorderTraversal(root.right, list);
    }
    return;
};