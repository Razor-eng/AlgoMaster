import DsaLayout from '@/components/DsaLayout'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import MermaidDiagram from '@/components/MermaidDiagram'
import { TypeModal } from '@/components/TypeModal'

class Queue<T> {
  private items: T[];

  constructor() {
    this.items = [];
  }

  enqueue(element: T): void {
    this.items.push(element);
  }

  dequeue(): T | undefined {
    return this.items.shift();
  }

  front(): T | undefined {
    return this.items[0];
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }

  size(): number {
    return this.items.length;
  }

  clear(): void {
    this.items = [];
  }

  print(): void {
    console.log(this.items.toString());
  }
}

export default function QueuesPage() {
  const queueDiagram = `
    graph TD
      A[Empty Queue] -->|Enqueue 1| B[1]
      B -->|Enqueue 2| C[1 2]
      C -->|Enqueue 3| D[1 2 3]
      D -->|Dequeue| E[2 3]
      E -->|Dequeue| F[3]
      F -->|Dequeue| G[Empty Queue]
  `;

  return (
    <DsaLayout title="Queues">
      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Introduction to Queues</h2>
          <p className="text-gray-700">A queue is a linear data structure that follows the First-In-First-Out (FIFO) principle. Elements are added to the rear (enqueue) and removed from the front (dequeue) of the queue.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Queue Operations</h2>
          <p className="text-gray-700 mb-4">The following diagram illustrates the basic operations of a queue:</p>
          <MermaidDiagram chart={queueDiagram} />
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Types of Queues</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li className="flex items-center">
              Simple Queue: Basic FIFO queue
              <TypeModal
                title="Simple Queue"
                description="Basic First-In-First-Out (FIFO) queue"
                content={
                  <div>
                    <p>A simple queue follows the basic FIFO principle where elements are added to the rear and removed from the front.</p>
                    <pre className="bg-gray-100 dark:bg-zinc-800 p-2 rounded mt-2">
                      <code>{`
class SimpleQueue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.items.shift();
  }

  isEmpty() {
    return this.items.length === 0;
  }
}
                      `}</code>
                    </pre>
                  </div>
                }
              />
            </li>
            <li className="flex items-center">
              Circular Queue: Last position is connected to the first position
              <TypeModal
                title="Circular Queue"
                description="Last position is connected to the first position"
                content={
                  <div>
                    <p>A circular queue is a variation of a queue where the last position is connected back to the first position to make a circle.</p>
                    <pre className="bg-gray-100 dark:bg-zinc-800 p-2 rounded mt-2">
                      <code>{`
class CircularQueue {
  constructor(size) {
    this.items = new Array(size);
    this.maxSize = size;
    this.front = -1;
    this.rear = -1;
  }

  enqueue(element) {
    if (this.isFull()) {
      return "Queue is full";
    }
    if (this.isEmpty()) {
      this.front = 0;
    }
    this.rear = (this.rear + 1) % this.maxSize;
    this.items[this.rear] = element;
  }

  dequeue() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    const item = this.items[this.front];
    if (this.front === this.rear) {
      this.front = -1;
      this.rear = -1;
    } else {
      this.front = (this.front + 1) % this.maxSize;
    }
    return item;
  }

  isFull() {
    return (this.rear + 1) % this.maxSize === this.front;
  }

  isEmpty() {
    return this.front === -1 && this.rear === -1;
  }
}
                      `}</code>
                    </pre>
                  </div>
                }
              />
            </li>
            <li className="flex items-center">
              Priority Queue: Elements have priorities and are dequeued based on their priority
              <TypeModal
                title="Priority Queue"
                description="Elements have priorities and are dequeued based on their priority"
                content={
                  <div>
                    <p>A priority queue is a type of queue where each element has a priority associated with it. Elements with higher priority are dequeued before elements with lower priority.</p>
                    <pre className="bg-gray-100 dark:bg-zinc-800 p-2 rounded mt-2">
                      <code>{`
class PriorityQueue {
  constructor() {
    this.items = [];
  }

  enqueue(element, priority) {
    const queueElement = { element, priority };
    if (this.isEmpty()) {
      this.items.push(queueElement);
    } else {
      let added = false;
      for (let i = 0; i < this.items.length; i++) {
        if (queueElement.priority < this.items[i].priority) {
          this.items.splice(i, 0, queueElement);
          added = true;
          break;
        }
      }
      if (!added) {
        this.items.push(queueElement);
      }
    }
  }

  dequeue() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.items.shift().element;
  }

  isEmpty() {
    return this.items.length === 0;
  }
}
                      `}</code>
                    </pre>
                  </div>
                }
              />
            </li>
            <li className="flex items-center">
              Double-ended Queue (Deque): Elements can be added or removed from both ends
              <TypeModal
                title="Double-ended Queue (Deque)"
                description="Elements can be added or removed from both ends"
                content={
                  <div>
                    <p>A double-ended queue, or deque, is a queue-like data structure that allows insertion and deletion at both ends.</p>
                    <pre className="bg-gray-100 dark:bg-zinc-800 p-2 rounded mt-2">
                      <code>{`
class Deque {
  constructor() {
    this.items = {};
    this.frontIndex = 0;
    this.backIndex = 0;
  }

  addFront(element) {
    this.items[--this.frontIndex] = element;
  }

  addBack(element) {
    this.items[this.backIndex++] = element;
  }

  removeFront() {
    if (this.isEmpty()) {
      return "Deque is empty";
    }
    const item = this.items[this.frontIndex];
    delete this.items[this.frontIndex];
    this.frontIndex++;
    return item;
  }

  removeBack() {
    if (this.isEmpty()) {
      return "Deque is empty";
    }
    const item = this.items[--this.backIndex];
    delete this.items[this.backIndex];
    return item;
  }

  isEmpty() {
    return this.frontIndex === this.backIndex;
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
          <h2 className="text-2xl font-semibold mb-4">Characteristics of Queues</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Follows First-In-First-Out (FIFO) principle</li>
            <li>Elements are added at one end (rear) and removed from the other end (front)</li>
            <li>Supports enqueue (insert) and dequeue (remove) operations</li>
            <li>Can be implemented using arrays or linked lists</li>
            <li>Useful for managing tasks in various algorithms and systems</li>
            <li>Fixed size in array implementation, dynamic size in linked list implementation</li>
            <li>Efficient for add and remove operations (O(1) time complexity)</li>
            <li>Used in breadth-first search algorithms and handling of asynchronous data</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Time Complexity</h2>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Operation</TableHead>
                <TableHead>Time Complexity</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Enqueue</TableCell>
                <TableCell>O(1)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Dequeue</TableCell>
                <TableCell>O(1)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Front</TableCell>
                <TableCell>O(1)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Search</TableCell>
                <TableCell>O(n)</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Common Operations and Their Implementations</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Enqueue (Add element)</AccordionTrigger>
              <AccordionContent>
                <p className="mb-2">Adding an element to the rear of the queue:</p>
                <pre className="bg-gray-100 dark:bg-zinc-800 p-2 rounded"><code>{`
enqueue(element: T): void {
  this.items.push(element);
}
                `}</code></pre>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Dequeue (Remove element)</AccordionTrigger>
              <AccordionContent>
                <p className="mb-2">Removing and returning the front element from the queue:</p>
                <pre className="bg-gray-100 dark:bg-zinc-800 p-2 rounded"><code>{`
dequeue(): T | undefined {
  return this.items.shift();
}
                `}</code></pre>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Front (View front element)</AccordionTrigger>
              <AccordionContent>
                <p className="mb-2">Viewing the front element without removing it:</p>
                <pre className="bg-gray-100 dark:bg-zinc-800 p-2 rounded"><code>{`
front(): T | undefined {
  return this.items[0];
}
                `}</code></pre>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>isEmpty (Check if queue is empty)</AccordionTrigger>
              <AccordionContent>
                <p className="mb-2">Checking if the queue is empty:</p>
                <pre className="bg-gray-100 dark:bg-zinc-800 p-2 rounded"><code>{`
isEmpty(): boolean {
  return this.items.length === 0;
}
                `}</code></pre>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>size (Get queue size)</AccordionTrigger>
              <AccordionContent>
                <p className="mb-2">Getting the number of elements in the queue:</p>
                <pre className="bg-gray-100 dark:bg-zinc-800 p-2 rounded"><code>{`
size(): number {
  return this.items.length;
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

