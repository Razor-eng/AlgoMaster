import DsaLayout from '@/components/DsaLayout'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import MermaidDiagram from '@/components/MermaidDiagram'
import { TypeModal } from '@/components/TypeModal'

class TreeNode {
  value: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  root: TreeNode | null;

  constructor() {
    this.root = null;
  }

  insert(value: number): void {
    this.root = this._insertRec(this.root, value);
  }

  private _insertRec(node: TreeNode | null, value: number): TreeNode {
    if (node === null) {
      return new TreeNode(value);
    }

    if (value < node.value) {
      node.left = this._insertRec(node.left, value);
    } else if (value > node.value) {
      node.right = this._insertRec(node.right, value);
    }

    return node;
  }

  search(value: number): boolean {
    return this._searchRec(this.root, value);
  }

  private _searchRec(node: TreeNode | null, value: number): boolean {
    if (node === null) {
      return false;
    }

    if (value === node.value) {
      return true;
    }

    if (value < node.value) {
      return this._searchRec(node.left, value);
    }

    return this._searchRec(node.right, value);
  }

  inorderTraversal(): number[] {
    const result: number[] = [];
    this._inorderRec(this.root, result);
    return result;
  }

  private _inorderRec(node: TreeNode | null, result: number[]): void {
    if (node !== null) {
      this._inorderRec(node.left, result);
      result.push(node.value);
      this._inorderRec(node.right, result);
    }
  }

  findLCA(n1: number, n2: number): number | null {
    return this._findLCARec(this.root, n1, n2);
  }

  private _findLCARec(node: TreeNode | null, n1: number, n2: number): number | null {
    if (node === null) {
      return null;
    }

    if (node.value > n1 && node.value > n2) {
      return this._findLCARec(node.left, n1, n2);
    }

    if (node.value < n1 && node.value < n2) {
      return this._findLCARec(node.right, n1, n2);
    }

    return node.value;
  }

  delete(value: number): void {
    this.root = this._deleteRec(this.root, value);
  }

  private _deleteRec(node: TreeNode | null, value: number): TreeNode | null {
    if (node === null) {
      return null;
    }

    if (value < node.value) {
      node.left = this._deleteRec(node.left, value);
    } else if (value > node.value) {
      node.right = this._deleteRec(node.right, value);
    } else {
      if (node.left === null) {
        return node.right;
      } else if (node.right === null) {
        return node.left;
      }

      node.value = this._minValue(node.right);
      node.right = this._deleteRec(node.right, node.value);
    }

    return node;
  }

  private _minValue(node: TreeNode): number {
    let minv = node.value;
    while (node.left !== null) {
      minv = node.left.value;
      node = node.left;
    }
    return minv;
  }
}

export default function TreesPage() {
  const treeDiagram = `
    graph TD
      A[8] --> B[3]
      A --> C[10]
      B --> D[1]
      B --> E[6]
      C --> F[14]
      E --> G[4]
      E --> H[7]
  `;

  return (
    <DsaLayout title="Trees">
      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Introduction to Trees</h2>
          <p className="text-gray-700">A tree is a hierarchical data structure consisting of nodes connected by edges. Each tree has a root node, and every node has zero or more child nodes.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Binary Search Tree Structure</h2>
          <p className="text-gray-700 mb-4">The following diagram illustrates the structure of a Binary Search Tree:</p>
          <MermaidDiagram chart={treeDiagram} />
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Types of Trees</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li className="flex items-center">
              Binary Trees: Each node has at most two children
              <TypeModal
                title="Binary Trees"
                description="Each node has at most two children"
                content={
                  <div>
                    <p>A binary tree is a tree data structure in which each node has at most two children, referred to as the left child and the right child.</p>
                    <pre className="bg-gray-100 dark:bg-zinc-800 p-2 rounded mt-2">
                      <code>{`
class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  // Methods for insertion, traversal, etc.
}
                      `}</code>
                    </pre>
                  </div>
                }
              />
            </li>
            <li className="flex items-center">
              Binary Search Trees (BST): A binary tree with the property that the left subtree of a node contains only nodes with keys less than the {`node's`} key, and the right subtree only nodes with keys greater than the {`node's`} key
              <TypeModal
                title="Binary Search Trees (BST)"
                description="A binary tree with ordered nodes"
                content={
                  <div>
                    <p>A binary search tree is a binary tree where nodes are ordered. For each node, all elements in its left subtree are less than the node, and all elements in its right subtree are greater.</p>
                    <pre className="bg-gray-100 dark:bg-zinc-800 p-2 rounded mt-2">
                      <code>{`
class BSTNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    this.root = this._insertRec(this.root, value);
  }

  _insertRec(node, value) {
    if (node === null) {
      return new BSTNode(value);
    }

    if (value < node.value) {
      node.left = this._insertRec(node.left, value);
    } else if (value > node.value) {
      node.right = this._insertRec(node.right, value);
    }

    return node;
  }

  // Other methods like search, delete, etc.
}
                      `}</code>
                    </pre>
                  </div>
                }
              />
            </li>
            <li className="flex items-center">
              AVL Trees: Self-balancing BST where the height of the left and right subtrees of every node differs by at most one
              <TypeModal
                title="AVL Trees"
                description="Self-balancing Binary Search Tree"
                content={
                  <div>
                    <p>An AVL tree is a self-balancing binary search tree where the height of the left and right subtrees of every node differs by at most one.</p>
                    <pre className="bg-gray-100 dark:bg-zinc-800 p-2 rounded mt-2">
                      <code>{`
class AVLNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.height = 1;
  }
}

class AVLTree {
  constructor() {
    this.root = null;
  }

  height(node) {
    return node ? node.height : 0;
  }

  balanceFactor(node) {
    return this.height(node.left) - this.height(node.right);
  }

  rotateRight(y) {
    let x = y.left;
    let T2 = x.right;

    x.right = y;
    y.left = T2;

    y.height = Math.max(this.height(y.left), this.height(y.right)) + 1;
    x.height = Math.max(this.height(x.left), this.height(x.right)) + 1;

    return x;
  }

  rotateLeft(x) {
    let y = x.right;
    let T2 = y.left;

    y.left = x;
    x.right = T2;

    x.height = Math.max(this.height(x.left), this.height(x.right)) + 1;
    y.height = Math.max(this.height(y.left), this.height(y.right)) + 1;

    return y;
  }

  insert(value) {
    this.root = this._insertRec(this.root, value);
  }

  _insertRec(node, value) {
    if (node === null) {
      return new AVLNode(value);
    }

    if (value < node.value) {
      node.left = this._insertRec(node.left, value);
    } else if (value > node.value) {
      node.right = this._insertRec(node.right, value);
    } else {
      return node;
    }

    node.height = 1 + Math.max(this.height(node.left), this.height(node.right));

    let balance = this.balanceFactor(node);

    // Left Left Case
    if (balance > 1 && value < node.left.value) {
      return this.rotateRight(node);
    }

    // Right Right Case
    if (balance < -1 && value > node.right.value) {
      return this.rotateLeft(node);
    }

    // Left Right Case
    if (balance > 1 && value > node.left.value) {
      node.left = this.rotateLeft(node.left);
      return this.rotateRight(node);
    }

    // Right Left Case
    if (balance < -1 && value < node.right.value) {
      node.right = this.rotateRight(node.right);
      return this.rotateLeft(node);
    }

    return node;
  }

  // Other methods like delete, search, etc.
}
                      `}</code>
                    </pre>
                  </div>
                }
              />
            </li>
            <li className="flex items-center">
              Red-Black Trees: Self-balancing BST with an extra bit of data per node denoting its color (red or black), used to ensure the tree remains balanced during insertions and deletions
              <TypeModal
                title="Red-Black Trees"
                description="Self-balancing BST with color properties"
                content={
                  <div>
                    <p>A Red-Black tree is a self-balancing binary search tree where each node has an extra bit for denoting the color of the node, either red or black.</p>
                    <pre className="bg-gray-100 dark:bg-zinc-800 p-2 rounded mt-2">
                      <code>{`
class RBNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = null;
    this.color = 'RED';
  }
}

class RedBlackTree {
  constructor() {
    this.root = null;
  }

  rotateLeft(node) {
    let rightChild = node.right;
    node.right = rightChild.left;
    if (rightChild.left !== null) {
      rightChild.left.parent = node;
    }
    rightChild.parent = node.parent;
    if (node.parent === null) {
      this.root = rightChild;
    } else if (node === node.parent.left) {
      node.parent.left = rightChild;
    } else {
      node.parent.right = rightChild;
    }
    rightChild.left = node;
    node.parent = rightChild;
  }

  rotateRight(node) {
    let leftChild = node.left;
    node.left = leftChild.right;
    if (leftChild.right !== null) {
      leftChild.right.parent = node;
    }
    leftChild.parent = node.parent;
    if (node.parent === null) {
      this.root = leftChild;
    } else if (node === node.parent.right) {
      node.parent.right = leftChild;
    } else {
      node.parent.left = leftChild;
    }
    leftChild.right = node;
    node.parent = leftChild;
  }

  insert(value) {
    let node = new RBNode(value);
    let parent = null;
    let current = this.root;

    while (current !== null) {
      parent = current;
      if (node.value < current.value) {
        current = current.left;
      } else {
        current = current.right;
      }
    }

    node.parent = parent;
    if (parent === null) {
      this.root = node;
    } else if (node.value < parent.value) {
      parent.left = node;
    } else {
      parent.right = node;
    }

    this.fixInsert(node);
  }

  fixInsert(node) {
    while (node !== this.root && node.parent.color === 'RED') {
      if (node.parent === node.parent.parent.left) {
        let uncle = node.parent.parent.right;
        if (uncle !== null && uncle.color === 'RED') {
          node.parent.color = 'BLACK';
          uncle.color = 'BLACK';
          node.parent.parent.color = 'RED';
          node = node.parent.parent;
        } else {
          if (node === node.parent.right) {
            node = node.parent;
            this.rotateLeft(node);
          }
          node.parent.color = 'BLACK';
          node.parent.parent.color = 'RED';
          this.rotateRight(node.parent.parent);
        }
      } else {
        let uncle = node.parent.parent.left;
        if (uncle !== null && uncle.color === 'RED') {
          node.parent.color = 'BLACK';
          uncle.color = 'BLACK';
          node.parent.parent.color = 'RED';
          node = node.parent.parent;
        } else {
          if (node === node.parent.left) {
            node = node.parent;
            this.rotateRight(node);
          }
          node.parent.color = 'BLACK';
          node.parent.parent.color = 'RED';
          this.rotateLeft(node.parent.parent);
        }
      }
    }
    this.root.color = 'BLACK';
  }

  // Other methods like delete, search, etc.
}
                      `}</code>
                    </pre>
                  </div>
                }
              />
            </li>
            <li className="flex items-center">
              B-Trees: Self-balancing tree data structure that maintains sorted data and allows searches, sequential access, insertions, and deletions in logarithmic time
              <TypeModal
                title="B-Trees"
                description="Self-balancing tree for databases and file systems"
                content={
                  <div>
                    <p>A B-tree is a self-balancing tree data structure that maintains sorted data and allows searches, sequential access, insertions, and deletions in logarithmic time. It is commonly used in databases and file systems.</p>
                    <pre className="bg-gray-100 dark:bg-zinc-800 p-2 rounded mt-2">
                      <code>{`
class BTreeNode {
  constructor(leaf = false) {
    this.leaf = leaf;
    this.keys = [];
    this.children = [];
  }
}

class BTree {
  constructor(t) {
    this.root = new BTreeNode(true);
    this.t = t; // Minimum degree
  }

  search(k, node = this.root) {
    let i = 0;
    while (i < node.keys.length && k > node.keys[i]) {
      i++;
    }
    if (i < node.keys.length && k === node.keys[i]) {
      return node;
    }
    if (node.leaf) {
      return null;
    }
    return this.search(k, node.children[i]);
  }

  insert(k) {
    let root = this.root;
    if (root.keys.length === 2 * this.t - 1) {
      let newRoot = new BTreeNode();
      this.root = newRoot;
      newRoot.children.push(root);
      this.splitChild(newRoot, 0);
      this.insertNonFull(newRoot, k);
    } else {
      this.insertNonFull(root, k);
    }
  }

  insertNonFull(node, k) {
    let i = node.keys.length - 1;
    if (node.leaf) {
      node.keys.push(null);
      while (i >= 0 && k < node.keys[i]) {
        node.keys[i + 1] = node.keys[i];
        i--;
      }
      node.keys[i + 1] = k;
    } else {
      while (i >= 0 && k < node.keys[i]) {
        i--;
      }
      i++;
      if (node.children[i].keys.length === 2 * this.t - 1) {
        this.splitChild(node, i);
        if (k > node.keys[i]) {
          i++;
        }
      }
      this.insertNonFull(node.children[i], k);
    }
  }

  splitChild(parent, i) {
    let t = this.t;
    let child = parent.children[i];
    let newChild = new BTreeNode(child.leaf);
    parent.keys.splice(i, 0, child.keys[t - 1]);
    parent.children.splice(i + 1, 0, newChild);
    newChild.keys = child.keys.splice(t, t - 1);
    if (!child.leaf) {
      newChild.children = child.children.splice(t, t);
    }
  }

  // Other methods like delete, etc.
}
                      `}</code>
                    </pre>
                  </div>
                }
              />
            </li>
            <li className="flex items-center">
              Trie (Prefix Tree): A tree-like data structure used to store and retrieve strings efficiently
              <TypeModal
                title="Trie (Prefix Tree)"
                description="Tree-like structure for efficient string operations"
                content={
                  <div>
                    <p>A Trie, also called a prefix tree, is an efficient information retrieval data structure. {`It's`} commonly used to store and search strings, making it ideal for tasks like autocomplete and spell checking.</p>
                    <pre className="bg-gray-100 dark:bg-zinc-800 p-2 rounded mt-2">
                      <code>{`
class TrieNode {
  constructor() {
    this.children = {};
    this.isEndOfWord = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    let node = this.root;
    for (let char of word) {
      if (!node.children[char]) {
        node.children[char] = new TrieNode();
      }
      node = node.children[char];
    }
    node.isEndOfWord = true;
  }

  search(word) {
    let node = this.root;
    for (let char of word) {
      if (!node.children[char]) {
        return false;
      }
      node = node.children[char];
    }
    return node.isEndOfWord;
  }

  startsWith(prefix) {
    let node = this.root;
    for (let char of prefix) {
      if (!node.children[char]) {
        return false;
      }
      node = node.children[char];
    }
    return true;
  }
}
                      `}</code>
                    </pre>
                  </div>
                }
              />
            </li>
            <li className="flex items-center">
              Heap: A specialized tree-based data structure that satisfies the heap property
              <TypeModal
                title="Heap"
                description="Tree-based structure satisfying the heap property"
                content={
                  <div>
                    <p>A heap is a specialized tree-based data structure that satisfies the heap property. In a max heap, for any given node I, the value of I is greater than or equal to the values of its children. In a min heap, the value of I is less than or equal to the values of its children.</p>
                    <pre className="bg-gray-100 dark:bg-zinc-800 p-2 rounded mt-2">
                      <code>{`
class MinHeap {
  constructor() {
    this.heap = [];
  }

  parent(i) {
    return Math.floor((i - 1) / 2);
  }

  leftChild(i) {
    return 2 * i + 1;
  }

  rightChild(i) {
    return 2 * i + 2;
  }

  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  insert(key) {
    this.heap.push(key);
    this.heapifyUp(this.heap.length - 1);
  }

  heapifyUp(i) {
    while (i > 0 && this.heap[this.parent(i)] > this.heap[i]) {
      this.swap(i, this.parent(i));
      i = this.parent(i);
    }
  }

  extractMin() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();

    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown(0);

    return min;
  }

  heapifyDown(i) {
    let minIndex = i;
    const left = this.leftChild(i);
    const right = this.rightChild(i);

    if (left < this.heap.length && this.heap[left] < this.heap[minIndex]) {
      minIndex = left;
    }

    if (right < this.heap.length && this.heap[right] < this.heap[minIndex]) {
      minIndex = right;
    }

    if (minIndex !== i) {
      this.swap(i, minIndex);
      this.heapifyDown(minIndex);
    }
  }
}
                      `}</code>
                    </pre>
                  </div>
                }
              />
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Characteristics of Trees</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Hierarchical structure with a root node and child nodes</li>
            <li>Acyclic (no cycles or loops)</li>
            <li>Connected (all nodes are reachable from the root)</li>
            <li>Dynamic size (can grow or shrink)</li>
            <li>Efficient for searching, inserting, and deleting data (especially in balanced trees)</li>
            <li>Can represent hierarchical relationships between data</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Time Complexity (for Binary Search Tree)</h2>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Operation</TableHead>
                <TableHead>Average Case</TableHead>
                <TableHead>Worst Case</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Search</TableCell>
                <TableCell>O(log n)</TableCell>
                <TableCell>O(n)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Insertion</TableCell>
                <TableCell>O(log n)</TableCell>
                <TableCell>O(n)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Deletion</TableCell>
                <TableCell>O(log n)</TableCell>
                <TableCell>O(n)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Traversal</TableCell>
                <TableCell>O(n)</TableCell>
                <TableCell>O(n)</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Common Operations and Their Implementations</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Insertion</AccordionTrigger>
              <AccordionContent>
                <p className="mb-2">Inserting a new node into a Binary Search Tree:</p>
                <pre className="bg-gray-100 dark:bg-zinc-800 p-2 rounded"><code>{`
insert(value: number): void {
  this.root = this._insertRec(this.root, value);
}

private _insertRec(node: TreeNode | null, value: number): TreeNode {
  if (node === null) {
    return new TreeNode(value);
  }

  if (value < node.value) {
    node.left = this._insertRec(node.left, value);
  } else if (value > node.value) {
    node.right = this._insertRec(node.right, value);
  }

  return node;
}
                `}</code></pre>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Search</AccordionTrigger>
              <AccordionContent>
                <p className="mb-2">Searching for a value in a Binary Search Tree:</p>
                <pre className="bg-gray-100 dark:bg-zinc-800 p-2 rounded"><code>{`
search(value: number): boolean {
  return this._searchRec(this.root, value);
}

private _searchRec(node: TreeNode | null, value: number): boolean {
  if (node === null) {
    return false;
  }

  if (value === node.value) {
    return true;
  }

  if (value < node.value) {
    return this._searchRec(node.left, value);
  }

  return this._searchRec(node.right, value);
}
                `}</code></pre>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Deletion</AccordionTrigger>
              <AccordionContent>
                <p className="mb-2">Deleting a node from a Binary Search Tree:</p>
                <pre className="bg-gray-100 dark:bg-zinc-800 p-2 rounded"><code>{`
delete(value: number): void {
  this.root = this._deleteRec(this.root, value);
}

private _deleteRec(node: TreeNode | null, value: number): TreeNode | null {
  if (node === null) {
    return null;
  }

  if (value < node.value) {
    node.left = this._deleteRec(node.left, value);
  } else if (value > node.value) {
    node.right = this._deleteRec(node.right, value);
  } else {
    if (node.left === null) {
      return node.right;
    } else if (node.right === null) {
      return node.left;
    }

    node.value = this._minValue(node.right);
    node.right = this._deleteRec(node.right, node.value);
  }

  return node;
}

private _minValue(node: TreeNode): number {
  let minv = node.value;
  while (node.left !== null) {
    minv = node.left.value;
    node = node.left;
  }
  return minv;
}
                `}</code></pre>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Traversal (Inorder)</AccordionTrigger>
              <AccordionContent>
                <p className="mb-2">Performing an inorder traversal of a Binary Search Tree:</p>
                <pre className="bg-gray-100 dark:bg-zinc-800 p-2 rounded"><code>{`
inorderTraversal(): number[] {
  const result: number[] = [];
  this._inorderRec(this.root, result);
  return result;
}

private _inorderRec(node: TreeNode | null, result: number[]): void {
  if (node !== null) {
    this._inorderRec(node.left, result);
    result.push(node.value);
    this._inorderRec(node.right, result);
  }
}
                `}</code></pre>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>
      </div>
    </DsaLayout>
  )
}

