import DsaLayout from '@/components/DsaLayout'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import MermaidDiagram from '@/components/MermaidDiagram'
import { TypeModal } from '@/components/TypeModal'

class Stack<T> {
  private items: T[];

  constructor() {
    this.items = [];
  }

  push(element: T): void {
    this.items.push(element);
  }

  pop(): T | undefined {
    return this.items.pop();
  }

  peek(): T | undefined {
    return this.items[this.items.length - 1];
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

export default function StacksPage() {
  const stackDiagram = `
    graph TD
      A[Empty Stack] -->|Push 1| B[1]
      B -->|Push 2| C[2<br>1]
      C -->|Push 3| D[3<br>2<br>1]
      D -->|Pop| E[2<br>1]
      E -->|Pop| F[1]
      F -->|Pop| G[Empty Stack]
  `;

  return (
    <DsaLayout title="Stacks">
      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Introduction to Stacks</h2>
          <p className="text-gray-700">A stack is a linear data structure that follows the Last-In-First-Out (LIFO) principle. Elements are added to and removed from the same end, called the top of the stack.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Stack Operations</h2>
          <p className="text-gray-700 mb-4">The following diagram illustrates the basic operations of a stack:</p>
          <MermaidDiagram chart={stackDiagram} />
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Types of Stacks</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li className="flex items-center">
              Array-based Stack: Implemented using an array
              <TypeModal
                title="Array-based Stack"
                description="Stack implemented using an array"
                content={
                  <div>
                    <p>An array-based stack uses a fixed-size array to store elements. The top of the stack is typically represented by an index pointing to the last inserted element.</p>
                    <pre className="bg-gray-100 dark:bg-zinc-800 p-2 rounded mt-2">
                      <code>{`
class ArrayStack {
  constructor(size) {
    this.items = new Array(size);
    this.top = -1;
  }

  push(element) {
    if (this.top === this.items.length - 1) {
      throw new Error("Stack overflow");
    }
    this.items[++this.top] = element;
  }

  pop() {
    if (this.isEmpty()) {
      throw new Error("Stack underflow");
    }
    return this.items[this.top--];
  }

  isEmpty() {
    return this.top === -1;
  }
}
                      `}</code>
                    </pre>
                  </div>
                }
              />
            </li>
            <li className="flex items-center">
              Linked List-based Stack: Implemented using a linked list
              <TypeModal
                title="Linked List-based Stack"
                description="Stack implemented using a linked list"
                content={
                  <div>
                    <p>A linked list-based stack uses a linked list to store elements. The top of the stack is represented by the head of the linked list.</p>
                    <pre className="bg-gray-100 dark:bg-zinc-800 p-2 rounded mt-2">
                      <code>{`
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedListStack {
  constructor() {
    this.top = null;
  }

  push(element) {
    const newNode = new Node(element);
    newNode.next = this.top;
    this.top = newNode;
  }

  pop() {
    if (this.isEmpty()) {
      throw new Error("Stack underflow");
    }
    const data = this.top.data;
    this.top = this.top.next;
    return data;
  }

  isEmpty() {
    return this.top === null;
  }
}
                      `}</code>
                    </pre>
                  </div>
                }
              />
            </li>
            <li className="flex items-center">
              Dynamic Array Stack: Uses a resizable array for better space efficiency
              <TypeModal
                title="Dynamic Array Stack"
                description="Stack using a resizable array for better space efficiency"
                content={
                  <div>
                    <p>A dynamic array stack uses a resizable array to store elements. It automatically grows or shrinks the underlying array as needed.</p>
                    <pre className="bg-gray-100 dark:bg-zinc-800 p-2 rounded mt-2">
                      <code>{`
class DynamicArrayStack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    if (this.isEmpty()) {
      throw new Error("Stack underflow");
    }
    return this.items.pop();
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
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Characteristics of Stacks</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Follows Last-In-First-Out (LIFO) principle</li>
            <li>Elements are added and removed from the same end (top)</li>
            <li>Supports push (insert) and pop (remove) operations</li>
            <li>Access to elements other than the top is not allowed</li>
            <li>Useful for tracking state in algorithms and runtime environments</li>
            <li>Can be implemented using arrays or linked lists</li>
            <li>Fixed size in array implementation, dynamic size in linked list implementation</li>
            <li>Efficient for add and remove operations (O(1) time complexity)</li>
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
                <TableCell>Push</TableCell>
                <TableCell>O(1)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Pop</TableCell>
                <TableCell>O(1)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Peek</TableCell>
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
              <AccordionTrigger>Push (Add element)</AccordionTrigger>
              <AccordionContent>
                <p className="mb-2">Adding an element to the top of the stack:</p>
                <pre className="bg-gray-100 dark:bg-zinc-800 p-2 rounded"><code>{`
push(element: T): void {
  this.items.push(element);
}
                `}</code></pre>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Pop (Remove element)</AccordionTrigger>
              <AccordionContent>
                <p className="mb-2">Removing and returning the top element from the stack:</p>
                <pre className="bg-gray-100 dark:bg-zinc-800 p-2 rounded"><code>{`
pop(): T | undefined {
  return this.items.pop();
}
                `}</code></pre>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Peek (View top element)</AccordionTrigger>
              <AccordionContent>
                <p className="mb-2">Viewing the top element without removing it:</p>
                <pre className="bg-gray-100 dark:bg-zinc-800 p-2 rounded"><code>{`
peek(): T | undefined {
  return this.items[this.items.length - 1];
}
                `}</code></pre>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>isEmpty (Check if stack is empty)</AccordionTrigger>
              <AccordionContent>
                <p className="mb-2">Checking if the stack is empty:</p>
                <pre className="bg-gray-100 dark:bg-zinc-800 p-2 rounded"><code>{`
isEmpty(): boolean {
  return this.items.length === 0;
}
                `}</code></pre>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>size (Get stack size)</AccordionTrigger>
              <AccordionContent>
                <p className="mb-2">Getting the number of elements in the stack:</p>
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

