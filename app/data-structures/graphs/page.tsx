import DsaLayout from '@/components/DsaLayout'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import MermaidDiagram from '@/components/MermaidDiagram'
import { TypeModal } from '@/components/TypeModal'

class Graph {
  private adjacencyList: Map<number, number[]>;

  constructor() {
    this.adjacencyList = new Map();
  }

  addVertex(vertex: number): void {
    if (!this.adjacencyList.has(vertex)) {
      this.adjacencyList.set(vertex, []);
    }
  }

  addEdge(vertex1: number, vertex2: number): void {
    this.adjacencyList.get(vertex1)?.push(vertex2);
    this.adjacencyList.get(vertex2)?.push(vertex1);
  }

  removeEdge(vertex1: number, vertex2: number): void {
    this.adjacencyList.set(vertex1, this.adjacencyList.get(vertex1)?.filter(v => v !== vertex2) || []);
    this.adjacencyList.set(vertex2, this.adjacencyList.get(vertex2)?.filter(v => v !== vertex1) || []);
  }

  removeVertex(vertex: number): void {
    while (this.adjacencyList.get(vertex)?.length) {
      const adjacentVertex = this.adjacencyList.get(vertex)?.pop();
      if (adjacentVertex !== undefined) {
        this.removeEdge(vertex, adjacentVertex);
      }
    }
    this.adjacencyList.delete(vertex);
  }

  bfs(startVertex: number): number[] {
    const visited: Set<number> = new Set();
    const queue: number[] = [];
    const result: number[] = [];

    visited.add(startVertex);
    queue.push(startVertex);

    while (queue.length > 0) {
      const currentVertex = queue.shift();
      if (currentVertex !== undefined) {
        result.push(currentVertex);

        this.adjacencyList.get(currentVertex)?.forEach(neighbor => {
          if (!visited.has(neighbor)) {
            visited.add(neighbor);
            queue.push(neighbor);
          }
        });
      }
    }

    return result;
  }

  dfs(startVertex: number): number[] {
    const visited: Set<number> = new Set();
    const result: number[] = [];

    const dfsHelper = (vertex: number) => {
      visited.add(vertex);
      result.push(vertex);

      this.adjacencyList.get(vertex)?.forEach(neighbor => {
        if (!visited.has(neighbor)) {
          dfsHelper(neighbor);
        }
      });
    };

    dfsHelper(startVertex);
    return result;
  }
}

export default function GraphsPage() {
  const graphDiagram = `
    graph TD
      A[1] --- B[2]
      A --- C[3]
      B --- D[4]
      C --- D
      C --- E[5]
      D --- E
  `;

  return (
    <DsaLayout title="Graphs">
      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Introduction to Graphs</h2>
          <p className="text-gray-700">A graph is a non-linear data structure consisting of vertices (or nodes) and edges that connect these vertices. Graphs are used to represent networks, relationships, and various other complex structures.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Graph Structure</h2>
          <p className="text-gray-700 mb-4">The following diagram illustrates the structure of an undirected graph:</p>
          <MermaidDiagram chart={graphDiagram} />
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Types of Graphs</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li className="flex items-center">
              Undirected Graphs: Edges have no direction
              <TypeModal
                title="Undirected Graphs"
                description="Edges have no direction"
                content={
                  <div>
                    <p>In an undirected graph, edges have no direction. The relationship between two vertices connected by an edge is symmetric.</p>
                    <pre className="bg-gray-100 dark:bg-zinc-800 p-2 rounded mt-2">
                      <code>{`
class UndirectedGraph {
  constructor() {
    this.adjacencyList = new Map();
  }

  addVertex(vertex) {
    if (!this.adjacencyList.has(vertex)) {
      this.adjacencyList.set(vertex, []);
    }
  }

  addEdge(vertex1, vertex2) {
    this.adjacencyList.get(vertex1).push(vertex2);
    this.adjacencyList.get(vertex2).push(vertex1);
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
              Directed Graphs (Digraphs): Edges have a direction
              <TypeModal
                title="Directed Graphs (Digraphs)"
                description="Edges have a direction"
                content={
                  <div>
                    <p>In a directed graph, each edge has a direction, indicating a one-way relationship between two vertices.</p>
                    <pre className="bg-gray-100 dark:bg-zinc-800 p-2 rounded mt-2">
                      <code>{`
class DirectedGraph {
  constructor() {
    this.adjacencyList = new Map();
  }

  addVertex(vertex) {
    if (!this.adjacencyList.has(vertex)) {
      this.adjacencyList.set(vertex, []);
    }
  }

  addEdge(source, destination) {
    this.adjacencyList.get(source).push(destination);
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
              Weighted Graphs: Edges have associated weights or costs
              <TypeModal
                title="Weighted Graphs"
                description="Edges have associated weights or costs"
                content={
                  <div>
                    <p>In a weighted graph, each edge has an associated weight or cost, which can represent distance, time, or any other metric.</p>
                    <pre className="bg-gray-100 dark:bg-zinc-800 p-2 rounded mt-2">
                      <code>{`
class WeightedGraph {
  constructor() {
    this.adjacencyList = new Map();
  }

  addVertex(vertex) {
    if (!this.adjacencyList.has(vertex)) {
      this.adjacencyList.set(vertex, []);
    }
  }

  addEdge(vertex1, vertex2, weight) {
    this.adjacencyList.get(vertex1).push({node: vertex2, weight});
    this.adjacencyList.get(vertex2).push({node: vertex1, weight});
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
              Cyclic Graphs: Contain at least one cycle
              <TypeModal
                title="Cyclic Graphs"
                description="Contain at least one cycle"
                content={
                  <div>
                    <p>A cyclic graph contains at least one cycle, which is a path of edges and vertices wherein a vertex is reachable from itself.</p>
                    <pre className="bg-gray-100 dark:bg-zinc-800 p-2 rounded mt-2">
                      <code>{`
class CyclicGraph {
  constructor() {
    this.adjacencyList = new Map();
  }

  addVertex(vertex) {
    if (!this.adjacencyList.has(vertex)) {
      this.adjacencyList.set(vertex, []);
    }
  }

  addEdge(vertex1, vertex2) {
    this.adjacencyList.get(vertex1).push(vertex2);
    this.adjacencyList.get(vertex2).push(vertex1);
  }

  hasCycle() {
    const visited = new Set();
    const recStack = new Set();

    for (let vertex of this.adjacencyList.keys()) {
      if (this.hasCycleUtil(vertex, visited, recStack)) {
        return true;
      }
    }

    return false;
  }

  hasCycleUtil(vertex, visited, recStack) {
    if (recStack.has(vertex)) {
      return true;
    }
    if (visited.has(vertex)) {
      return false;
    }

    visited.add(vertex);
    recStack.add(vertex);

    for (let neighbor of this.adjacencyList.get(vertex)) {
      if (this.hasCycleUtil(neighbor, visited, recStack)) {
        return true;
      }
    }

    recStack.delete(vertex);
    return false;
  }
}
                      `}</code>
                    </pre>
                  </div>
                }
              />
            </li>
            <li className="flex items-center">
              Acyclic Graphs: Contain no cycles
              <TypeModal
                title="Acyclic Graphs"
                description="Contain no cycles"
                content={
                  <div>
                    <p>An acyclic graph is a graph that contains no cycles. Trees are a special case of acyclic graphs.</p>
                    <pre className="bg-gray-100 dark:bg-zinc-800 p-2 rounded mt-2">
                      <code>{`
class AcyclicGraph {
  constructor() {
    this.adjacencyList = new Map();
  }

  addVertex(vertex) {
    if (!this.adjacencyList.has(vertex)) {
      this.adjacencyList.set(vertex, []);
    }
  }

  addEdge(vertex1, vertex2) {
    // Assuming we're maintaining acyclicity
    if (!this.willCreateCycle(vertex1, vertex2)) {
      this.adjacencyList.get(vertex1).push(vertex2);
    }
  }

  willCreateCycle(start, end) {
    const visited = new Set();
    const stack = [end];

    while (stack.length > 0) {
      const vertex = stack.pop();
      if (vertex === start) {
        return true;
      }
      visited.add(vertex);
      for (let neighbor of this.adjacencyList.get(vertex)) {
        if (!visited.has(neighbor)) {
          stack.push(neighbor);
        }
      }
    }

    return false;
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
          <h2 className="text-2xl font-semibold mb-4">Characteristics of Graphs</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Vertices (Nodes): Fundamental units of the graph</li>
            <li>Edges: Connections between vertices</li>
            <li>Flexibility in representing relationships</li>
            <li>Can be sparse or dense</li>
            <li>May contain cycles or be acyclic</li>
            <li>Can be used to model various real-world scenarios</li>
            <li>Support for both directed and undirected relationships</li>
            <li>Ability to assign weights to edges for weighted graphs</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Time Complexity</h2>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Operation</TableHead>
                <TableHead>Adjacency List</TableHead>
                <TableHead>Adjacency Matrix</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Add Vertex</TableCell>
                <TableCell>O(1)</TableCell>
                <TableCell>O(V^2)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Add Edge</TableCell>
                <TableCell>O(1)</TableCell>
                <TableCell>O(1)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Remove Vertex</TableCell>
                <TableCell>O(V + E)</TableCell>
                <TableCell>O(V^2)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Remove Edge</TableCell>
                <TableCell>O(E)</TableCell>
                <TableCell>O(1)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Query</TableCell>
                <TableCell>O(V)</TableCell>
                <TableCell>O(1)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>DFS</TableCell>
                <TableCell>O(V + E)</TableCell>
                <TableCell>O(V^2)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>BFS</TableCell>
                <TableCell>O(V + E)</TableCell>
                <TableCell>O(V^2)</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Common Operations and Their Implementations</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Add Vertex</AccordionTrigger>
              <AccordionContent>
                <p className="mb-2">Adding a new vertex to the graph:</p>
                <pre className="bg-gray-100 dark:bg-zinc-800 p-2 rounded"><code>{`
addVertex(vertex: number): void {
  if (!this.adjacencyList.has(vertex)) {
    this.adjacencyList.set(vertex, []);
  }
}
                `}</code></pre>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Add Edge</AccordionTrigger>
              <AccordionContent>
                <p className="mb-2">Adding an edge between two vertices:</p>
                <pre className="bg-gray-100 dark:bg-zinc-800 p-2 rounded"><code>{`
addEdge(vertex1: number, vertex2: number): void {
  this.adjacencyList.get(vertex1)?.push(vertex2);
  this.adjacencyList.get(vertex2)?.push(vertex1);
}
                `}</code></pre>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Remove Vertex</AccordionTrigger>
              <AccordionContent>
                <p className="mb-2">Removing a vertex and all its connections:</p>
                <pre className="bg-gray-100 dark:bg-zinc-800 p-2 rounded"><code>{`
removeVertex(vertex: number): void {
  while (this.adjacencyList.get(vertex)?.length) {
    const adjacentVertex = this.adjacencyList.get(vertex)?.pop();
    if (adjacentVertex !== undefined) {
      this.removeEdge(vertex, adjacentVertex);
    }
  }
  this.adjacencyList.delete(vertex);
}
                `}</code></pre>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Breadth-First Search (BFS)</AccordionTrigger>
              <AccordionContent>
                <p className="mb-2">Performing a breadth-first search traversal:</p>
                <pre className="bg-gray-100 dark:bg-zinc-800 p-2 rounded"><code>{`
bfs(startVertex: number): number[] {
  const visited: Set<number> = new Set();
  const queue: number[] = [];
  const result: number[] = [];

  visited.add(startVertex);
  queue.push(startVertex);

  while (queue.length > 0) {
    const currentVertex = queue.shift();
    if (currentVertex !== undefined) {
      result.push(currentVertex);

      this.adjacencyList.get(currentVertex)?.forEach(neighbor => {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.push(neighbor);
        }
      });
    }
  }

  return result;
}
                `}</code></pre>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>Depth-First Search (DFS)</AccordionTrigger>
              <AccordionContent>
                <p className="mb-2">Performing a depth-first search traversal:</p>
                <pre className="bg-gray-100 dark:bg-zinc-800 p-2 rounded"><code>{`
dfs(startVertex: number): number[] {
  const visited: Set<number> = new Set();
  const result: number[] = [];

  const dfsHelper = (vertex: number) => {
    visited.add(vertex);
    result.push(vertex);

    this.adjacencyList.get(vertex)?.forEach(neighbor => {
      if (!visited.has(neighbor)) {
        dfsHelper(neighbor);
      }
    });
  };

  dfsHelper(startVertex);
  return result;
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

