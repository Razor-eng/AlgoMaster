import DsaLayout from '@/components/DsaLayout'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import MermaidDiagram from '@/components/MermaidDiagram'
import { TypeModal } from '@/components/TypeModal'

class ListNode<T> {
  value: T;
  next: ListNode<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList<T> {
  head: ListNode<T> | null;
  tail: ListNode<T> | null;
  length: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value: T): LinkedList<T> {
    const newNode = new ListNode(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail!.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop(): ListNode<T> | null {
    if (!this.head) return null;
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  shift(): ListNode<T> | null {
    if (!this.head) return null;
    const currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return currentHead;
  }

  unshift(value: T): LinkedList<T> {
    const newNode = new ListNode(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index: number): ListNode<T> | null {
    if (index < 0 || index >= this.length) return null;
    let counter = 0;
    let current = this.head;
    while (counter !== index) {
      current = current!.next;
      counter++;
    }
    return current;
  }

  set(index: number, value: T): boolean {
    const foundNode = this.get(index);
    if (foundNode) {
      foundNode.value = value;
      return true;
    }
    return false;
  }

  insert(index: number, value: T): boolean {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return !!this.push(value);
    if (index === 0) return !!this.unshift(value);

    const newNode = new ListNode(value);
    const prev = this.get(index - 1);
    const temp = prev!.next;
    prev!.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }

  remove(index: number): ListNode<T> | null {
    if (index < 0 || index >= this.length) return null;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    const previousNode = this.get(index - 1);
    const removed = previousNode!.next;
    previousNode!.next = removed!.next;
    this.length--;
    return removed;
  }

  reverse(): LinkedList<T> {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let next;
    let prev = null;
    for (let i = 0; i < this.length; i++) {
      next = node!.next;
      node!.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }
}

export default function LinkedListsPage() {
  const linkedListDiagram = `
    graph LR
      A[Head] --> B[Node 1]
      B --> C[Node 2]
      C --> D[Node 3]
      D --> E[Node 4]
      E --> F[Null]
      B -->|Data| G[Value 1]
      C -->|Data| H[Value 2]
      D -->|Data| I[Value 3]
      E -->|Data| J[Value 4]
  `;

  return (
    <DsaLayout title="Linked Lists">
      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Introduction to Linked Lists</h2>
          <p className="text-gray-700">A linked list is a linear data structure where elements are stored in nodes. Each node contains a data field and a reference (or link) to the next node in the sequence.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Linked List Structure</h2>
          <p className="text-gray-700 mb-4">The following diagram illustrates the structure of a singly linked list:</p>
          <MermaidDiagram chart={linkedListDiagram} />
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Types of Linked Lists</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li className="flex items-center">
              Singly Linked List: Each node has a link to the next node
              <TypeModal
                title="Singly Linked List"
                description="Each node has a link to the next node"
                content={
                  <div>
                    <p>In a singly linked list, each node contains data and a reference (or link) to the next node in the sequence.</p>
                    <pre className="bg-gray-100 dark:bg-zinc-800 p-2 rounded mt-2">
                      <code>{`
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
  }
  
  // Methods for insertion, deletion, etc.
}
                      `}</code>
                    </pre>
                  </div>
                }
              />
            </li>
            <li className="flex items-center">
              Doubly Linked List: Each node has links to both the next and previous nodes
              <TypeModal
                title="Doubly Linked List"
                description="Each node has links to both the next and previous nodes"
                content={
                  <div>
                    <p>In a doubly linked list, each node contains data and references to both the next and previous nodes in the sequence.</p>
                    <pre className="bg-gray-100 dark:bg-zinc-800 p-2 rounded mt-2">
                      <code>{`
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  
  // Methods for insertion, deletion, etc.
}
                      `}</code>
                    </pre>
                  </div>
                }
              />
            </li>
            <li className="flex items-center">
              Circular Linked List: The last node points back to the first node or to any other node before it thereby forming a circle
              <TypeModal
                title="Circular Linked List"
                description="The last node points back to the first node"
                content={
                  <div>
                    <p>In a circular linked list, the last node points back to the first node, creating a closed loop.</p>
                    <pre className="bg-gray-100 dark:bg-zinc-800 p-2 rounded mt-2">
                      <code>{`
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class CircularLinkedList {
  constructor() {
    this.head = null;
  }
  
  add(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      newNode.next = this.head;
    } else {
      let current = this.head;
      while (current.next !== this.head) {
        current = current.next;
      }
      current.next = newNode;
      newNode.next = this.head;
    }
  }
  
  // Other methods...
}
                      `}</code>
                    </pre>
                  </div>
                }
              />
            </li>
            <li className="flex items-center">
              Circular Doubly Linked List: A combination of circular and doubly linked list
              <TypeModal
                title="Circular Doubly Linked List"
                description="A combination of circular and doubly linked list"
                content={
                  <div>
                    <p>A circular doubly linked list combines features of both circular and doubly linked lists. Each node has references to both the next and previous nodes, and the last node points back to the first node.</p>
                    <pre className="bg-gray-100 dark:bg-zinc-800 p-2 rounded mt-2">
                      <code>{`
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class CircularDoublyLinkedList {
  constructor() {
    this.head = null;
  }
  
  add(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      newNode.next = newNode;
      newNode.prev = newNode;
    } else {
      const last = this.head.prev;
      last.next = newNode;
      newNode.prev = last;
      newNode.next = this.head;
      this.head.prev = newNode;
    }
  }
  
  // Other methods...
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
          <h2 className="text-2xl font-semibold mb-4">Characteristics of Linked Lists</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Dynamic size (can grow or shrink at runtime)</li>
            <li>Efficient insertion and deletion at any position</li>
            <li>No waste of memory due to dynamic allocation</li>
            <li>Can be used to implement other data structures like stacks, queues, and graphs</li>
            <li>Non-contiguous memory allocation</li>
            <li>Traversal in one direction (for singly linked lists)</li>
            <li>No random access (elements must be accessed sequentially)</li>
            <li>Extra memory needed for storing pointers</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Time Complexity</h2>
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
                <TableCell>Access</TableCell>
                <TableCell>O(n)</TableCell>
                <TableCell>O(n)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Search</TableCell>
                <TableCell>O(n)</TableCell>
                <TableCell>O(n)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Insertion</TableCell>
                <TableCell>O(1)</TableCell>
                <TableCell>O(1)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Deletion</TableCell>
                <TableCell>O(1)</TableCell>
                <TableCell>O(1)</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Common Operations and Their Implementations</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Push (Add to end)</AccordionTrigger>
              <AccordionContent>
                <p className="mb-2">Adding a new node to the end of the linked list:</p>
                <pre className="bg-gray-100 dark:bg-zinc-800 p-2 rounded"><code>{`
push(value: T): LinkedList<T> {
  const newNode = new ListNode(value);
  if (!this.head) {
    this.head = newNode;
    this.tail = newNode;
  } else {
    this.tail!.next = newNode;
    this.tail = newNode;
  }
  this.length++;
  return this;
}
                `}</code></pre>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Pop (Remove from end)</AccordionTrigger>
              <AccordionContent>
                <p className="mb-2">Removing the last node from the linked list:</p>
                <pre className="bg-gray-100 dark:bg-zinc-800 p-2 rounded"><code>{`
pop(): ListNode<T> | null {
  if (!this.head) return null;
  let current = this.head;
  let newTail = current;
  while (current.next) {
    newTail = current;
    current = current.next;
  }
  this.tail = newTail;
  this.tail.next = null;
  this.length--;
  if (this.length === 0) {
    this.head = null;
    this.tail = null;
  }
  return current;
}
                `}</code></pre>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Shift (Remove from beginning)</AccordionTrigger>
              <AccordionContent>
                <p className="mb-2">Removing the first node from the linked list:</p>
                <pre className="bg-gray-100 dark:bg-zinc-800 p-2 rounded"><code>{`
shift(): ListNode<T> | null {
  if (!this.head) return null;
  const currentHead = this.head;
  this.head = currentHead.next;
  this.length--;
  if (this.length === 0) {
    this.tail = null;
  }
  return currentHead;
}
                `}</code></pre>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Unshift (Add to beginning)</AccordionTrigger>
              <AccordionContent>
                <p className="mb-2">Adding a new node to the beginning of the linked list:</p>
                <pre className="bg-gray-100 dark:bg-zinc-800 p-2 rounded"><code>{`
unshift(value: T): LinkedList<T> {
  const newNode = new ListNode(value);
  if (!this.head) {
    this.head = newNode;
    this.tail = newNode;
  } else {
    newNode.next = this.head;
    this.head = newNode;
  }
  this.length++;
  return this;
}
                `}</code></pre>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>Get (Retrieve node at index)</AccordionTrigger>
              <AccordionContent>
                <p className="mb-2">Retrieving a node at a specific index:</p>
                <pre className="bg-gray-100 dark:bg-zinc-800 p-2 rounded"><code>{`
get(index: number): ListNode<T> | null {
  if (index < 0 || index >= this.length) return null;
  let counter = 0;
  let current = this.head;
  while (counter !== index) {
    current = current!.next;
    counter++;
  }
  return current;
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

