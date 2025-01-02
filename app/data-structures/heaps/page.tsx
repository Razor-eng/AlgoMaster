import DsaLayout from '@/components/DsaLayout'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import MermaidDiagram from '@/components/MermaidDiagram'
import { TypeModal } from '@/components/TypeModal'

class Heap<T> {
  private items: T[];
  private compare: (a: T, b: T) => number;

  constructor(compare: (a: T, b: T) => number) {
    this.items = [];
    this.compare = compare;
  }

  insert(element: T): void {
    this.items.push(element);
    this.bubbleUp();
  }

  remove(): T | undefined {
    const root = this.items[0];
    const end = this.items.pop();
    if (this.items.length > 0 && end !== undefined) {
      this.items[0] = end;
      this.bubbleDown();
    }
    return root;
  }

  peek(): T | undefined {
    return this.items[0];
  }

  private bubbleUp(): void {
    let index = this.items.length - 1;
    const element = this.items[index];
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      const parent = this.items[parentIndex];
      if (this.compare(element, parent) >= 0) break;
      this.items[index] = parent;
      index = parentIndex;
    }
    this.items[index] = element;
  }

  private bubbleDown(): void {
    let index = 0;
    const length = this.items.length;
    const element = this.items[0];
    while (true) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIndex < length) {
        leftChild = this.items[leftChildIndex];
        if (this.compare(leftChild, element) < 0) swap = leftChildIndex;
      }

      if (rightChildIndex < length) {
        rightChild = this.items[rightChildIndex];
        if (
          (swap === null && this.compare(rightChild, element) < 0) ||
          (swap !== null && rightChild !== undefined && leftChild !== undefined && this.compare(rightChild, leftChild) < 0)
        ) {
          swap = rightChildIndex;
        }
      }

      if (swap === null) break;
      this.items[index] = this.items[swap];
      index = swap;
    }
    this.items[index] = element;
  }
}

export default function HeapsPage() {
  const heapDiagram = `
    graph TD
      A[Empty Heap] -->|Insert 10| B[10]
      B -->|Insert 5| C[5 10]
      C -->|Insert 3| D[3 10 5]
      D -->|Remove| E[5 10]
      E -->|Remove| F[10]
      F -->|Remove| G[Empty Heap]
  `;

  return (
    <DsaLayout title="Heaps">
      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Introduction to Heaps</h2>
          <p className="text-gray-700">A heap is a specialized tree-based data structure that satisfies the heap property. It is used to implement efficient priority queues and supports fast access to the largest or smallest element.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Heap Operations</h2>
          <p className="text-gray-700 mb-4">The following diagram illustrates the basic operations of a heap:</p>
          <MermaidDiagram chart={heapDiagram} />
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Types of Heaps</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li className="flex items-center">
              Max-Heap: Parent nodes are always larger than child nodes
              <TypeModal
                title="Max-Heap"
                description="Parent nodes are always larger than child nodes"
                content={
                  <div>
                    <p>A Max-Heap is a complete binary tree where the value of each parent node is greater than or equal to its children. The maximum element is always at the root.</p>
                    <pre className="bg-gray-100 dark:bg-zinc-800 p-2 rounded mt-2 w-fit">
                      <code>{`
class MaxHeap {
  constructor() {
    this.items = [];
  }

  insert(element) {
    this.items.push(element);
    this.bubbleUp();
  }

  remove() {
    const root = this.items[0];
    const end = this.items.pop();
    if (this.items.length > 0 && end !== undefined) {
      this.items[0] = end;
      this.bubbleDown();
    }
    return root;
  }

  peek() {
    return this.items[0];
  }

  bubbleUp() {
    let index = this.items.length - 1;
    const element = this.items[index];
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      const parent = this.items[parentIndex];
      if (element <= parent) break;
      this.items[index] = parent;
      index = parentIndex;
    }
    this.items[index] = element;
  }

  bubbleDown() {
    let index = 0;
    const length = this.items.length;
    const element = this.items[0];
    while (true) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIndex < length) {
        leftChild = this.items[leftChildIndex];
        if (leftChild > element) swap = leftChildIndex;
      }

      if (rightChildIndex < length) {
        rightChild = this.items[rightChildIndex];
        if (
          (swap === null && rightChild > element) ||
          (swap !== null && rightChild > leftChild)
        ) {
          swap = rightChildIndex;
        }
      }

      if (swap === null) break;
      this.items[index] = this.items[swap];
      index = swap;
    }
    this.items[index] = element;
  }
}
                      `}</code>
                    </pre>
                  </div>
                }
              />
            </li>
            <li className="flex items-center">
              Min-Heap: Parent nodes are always smaller than child nodes
              <TypeModal
                title="Min-Heap"
                description="Parent nodes are always smaller than child nodes"
                content={
                  <div>
                    <p>A Min-Heap is a complete binary tree where the value of each parent node is smaller than or equal to its children. The minimum element is always at the root.</p>
                    <pre className="bg-gray-100 dark:bg-zinc-800 p-2 rounded mt-2">
                      <code>{`
class MinHeap {
  constructor() {
    this.items = [];
  }

  insert(element) {
    this.items.push(element);
    this.bubbleUp();
  }

  remove() {
    const root = this.items[0];
    const end = this.items.pop();
    if (this.items.length > 0 && end !== undefined) {
      this.items[0] = end;
      this.bubbleDown();
    }
    return root;
  }

  peek() {
    return this.items[0];
  }

  bubbleUp() {
    let index = this.items.length - 1;
    const element = this.items[index];
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      const parent = this.items[parentIndex];
      if (element >= parent) break;
      this.items[index] = parent;
      index = parentIndex;
    }
    this.items[index] = element;
  }

  bubbleDown() {
    let index = 0;
    const length = this.items.length;
    const element = this.items[0];
    while (true) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIndex < length) {
        leftChild = this.items[leftChildIndex];
        if (leftChild < element) swap = leftChildIndex;
      }

      if (rightChildIndex < length) {
        rightChild = this.items[rightChildIndex];
        if (
          (swap === null && rightChild < element) ||
          (swap !== null && rightChild < leftChild)
        ) {
          swap = rightChildIndex;
        }
      }

      if (swap === null) break;
      this.items[index] = this.items[swap];
      index = swap;
    }
    this.items[index] = element;
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
          <h2 className="text-2xl font-semibold mb-4">Characteristics of Heaps</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Complete binary tree structure</li>
            <li>Root is either the maximum (Max-Heap) or minimum (Min-Heap) element</li>
            <li>Efficient access to the largest or smallest element</li>
            <li>Supports insert and remove operations in O(log n) time complexity</li>
            <li>Used in algorithms like heapsort and in priority queues</li>
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
                <TableCell>Insert</TableCell>
                <TableCell>O(log n)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Remove</TableCell>
                <TableCell>O(log n)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Peek</TableCell>
                <TableCell>O(1)</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </section>
      </div>
    </DsaLayout>
  );
}
