export interface DataStructure {
  title: string;
  description: string;
  topics: string[];
  slug: string;
}

export const dataStructures: DataStructure[] = [
  {
    title: "Arrays",
    description: "Learn about static and dynamic arrays, their operations and time complexities.",
    topics: ["One-dimensional Arrays", "Multi-dimensional Arrays", "Dynamic Arrays"],
    slug: "arrays"
  },
  {
    title: "Queues",
    description: "Understand the FIFO principle, enqueue and dequeue operations, and different types of queues.",
    topics: ["Queue Operations", "Circular Queues", "Priority Queues", "Double-ended Queues (Deque)"],
    slug: "queues"
  },
  {
    title: "Stacks",
    description: "Learn about the LIFO principle, push and pop operations, and applications of stacks.",
    topics: ["Stack Operations", "Applications of Stacks", "Implementing Stacks using Arrays/Linked Lists"],
    slug: "stacks"
  },
  {
    title: "Linked Lists",
    description: "Master singly and doubly linked lists, and their common operations.",
    topics: ["Singly Linked Lists", "Doubly Linked Lists", "Circular Lists"],
    slug: "linked-lists"
  },
  {
    title: "Trees",
    description: "Explore different tree structures and their applications.",
    topics: ["Binary Trees", "BST", "AVL Trees", "Red-Black Trees"],
    slug: "trees"
  },
  {
    title: "Hash Tables",
    description: "Understand hash functions, collision resolution, and hash table operations.",
    topics: ["Hash Functions", "Collision Resolution", "Open Addressing"],
    slug: "hash-tables"
  },
  {
    title: "Graphs",
    description: "Learn about graph representations and fundamental algorithms.",
    topics: ["Adjacency Lists", "Adjacency Matrices", "Graph Traversal"],
    slug: "graphs"
  },
  {
    title: "Heaps",
    description: "Study priority queues and heap operations.",
    topics: ["Binary Heaps", "Min/Max Heaps", "Heap Operations"],
    slug: "heaps"
  }
];
