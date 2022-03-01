/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    let toVisitStack = [this.root];
    let sum = 0;

    while (toVisitStack.length && toVisitStack[0]) {
      let current = toVisitStack.pop();
      sum += current.val;

      if (current.children) {
        for (let child of current.children) {
          toVisitStack.push(child);
        }
      }
    }

    return sum;
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    let toVisitStack = [this.root];
    let evenCount = 0;

    while (toVisitStack.length && toVisitStack[0]) {
      let current = toVisitStack.pop();

      if (current.val % 2 === 0) evenCount++;

      if (current.children) {
        for (let child of current.children) {
          toVisitStack.push(child);
        }
      }
    }

    return evenCount;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    let toVisitStack = [this.root];
    let greaterCount = 0;

    while (toVisitStack.length && toVisitStack[0]) {
      let current = toVisitStack.pop();

      if (current.val > lowerBound) greaterCount++;

      if (current.children) {
        for (let child of current.children) {
          toVisitStack.push(child);
        }
      }
    }

    return greaterCount;
  }
}

module.exports = { Tree, TreeNode };
