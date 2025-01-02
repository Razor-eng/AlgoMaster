import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import Link from "next/link";

const GraphAlgorithmsPage = () => {
    return (
        <div className="space-y-8">
            <Card className="mx-auto">
                <CardHeader>
                    <CardTitle>Graph Algorithms</CardTitle>
                    <CardDescription>
                        Learn about key graph algorithms, their characteristics, time complexities, and example implementations.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <h2 className="text-2xl font-semibold mb-4">Topics Covered</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4">
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out">
                            <Link href="#bfs" className="block text-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-semibold">Breadth-First Search (BFS)</Link>
                        </div>
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out">
                            <Link href="#dfs" className="block text-center text-green-600 dark:text-green-400 hover:text-green-800 dark:hover:text-green-300 font-semibold">Depth-First Search (DFS)</Link>
                        </div>
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out">
                            <Link href="#dijkstra" className="block text-center text-yellow-600 dark:text-yellow-400 hover:text-yellow-800 dark:hover:text-yellow-300 font-semibold">{`Dijkstra's`} Algorithm</Link>
                        </div>
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out">
                            <Link href="#prim" className="block text-center text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300 font-semibold">{`Prim's`} Algorithm</Link>
                        </div>
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out">
                            <Link href="#kruskal" className="block text-center text-pink-600 dark:text-pink-400 hover:text-pink-800 dark:hover:text-pink-300 font-semibold">{`Kruskal's`} Algorithm</Link>
                        </div>
                    </div>

                    <h2 className="text-2xl font-semibold mt-8 mb-4">Graph Algorithms Details</h2>

                    {/* BFS */}
                    <div id="bfs" className="border-t border-gray-200 pt-4 mt-4 dark:border-gray-700">
                        <h3 className="text-blue-600 font-medium text-xl mb-4">Breadth-First Search (BFS)</h3>
                        <div className="mb-4">
                            <h4 className="font-semibold">Characteristics:</h4>
                            <p className="text-zinc-500 text-sm dark:text-zinc-400">
                                BFS explores the graph level by level. It is used to find the shortest path in an unweighted graph and for traversing graph structures.
                            </p>
                        </div>
                        <div className="mb-4">
                            <h4 className="font-semibold">Time Complexity:</h4>
                            <p className="text-sm dark:text-zinc-400">
                                <strong className="text-zinc-800 dark:text-zinc-200">Best:</strong> O(V + E), <strong className="text-zinc-800 dark:text-zinc-200">Average:</strong> O(V + E), <strong className="text-zinc-800 dark:text-zinc-200">Worst:</strong> O(V + E)
                            </p>
                        </div>
                        <div className="mb-4">
                            <h4 className="font-semibold">Common Operations:</h4>
                            <ul className="list-disc list-inside text-sm text-zinc-500 dark:text-zinc-400">
                                <li>Explore neighbors of each vertex</li>
                                <li>Use a queue for traversing the graph</li>
                            </ul>
                        </div>
                        <h4 className="mt-4 font-semibold">Implementation:</h4>
                        <div className="dark:bg-zinc-800 dark:text-zinc-300 text-zinc-700 bg-zinc-200 mt-2 w-full overflow-scroll">
                            <pre className="text-sm">
                                {`
function bfs(graph, start) {
  let visited = new Set();
  let queue = [start];
  visited.add(start);

  while (queue.length > 0) {
    let node = queue.shift();
    console.log(node);
    for (let neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
      }
    }
  }
}` }
                            </pre>
                        </div>
                    </div>

                    {/* DFS */}
                    <div id="dfs" className="mt-8 border-t border-gray-200 pt-4 dark:border-gray-700">
                        <h3 className="text-green-600 font-medium text-xl mb-4">Depth-First Search (DFS)</h3>
                        <div className="mb-4">
                            <h4 className="font-semibold">Characteristics:</h4>
                            <p className="text-zinc-500 text-sm dark:text-zinc-400">
                                DFS explores the graph by going deep into the graph before backtracking. It uses a stack or recursion for traversal.
                            </p>
                        </div>
                        <div className="mb-4">
                            <h4 className="font-semibold">Time Complexity:</h4>
                            <p className="text-sm dark:text-zinc-400">
                                <strong className="text-zinc-800 dark:text-zinc-200">Best:</strong> O(V + E), <strong className="text-zinc-800 dark:text-zinc-200">Average:</strong> O(V + E), <strong className="text-zinc-800 dark:text-zinc-200">Worst:</strong> O(V + E)
                            </p>
                        </div>
                        <div className="mb-4">
                            <h4 className="font-semibold">Common Operations:</h4>
                            <ul className="list-disc list-inside text-sm text-zinc-500 dark:text-zinc-400">
                                <li>Explore neighbors recursively</li>
                                <li>Use a stack or recursion for traversal</li>
                            </ul>
                        </div>
                        <h4 className="mt-4 font-semibold">Implementation:</h4>
                        <div className="dark:bg-zinc-800 dark:text-zinc-300 text-zinc-700 bg-zinc-200 mt-2 w-full overflow-scroll">
                            <pre className="text-sm">
                                {`
function dfs(graph, node, visited = new Set()) {
  visited.add(node);
  console.log(node);

  for (let neighbor of graph[node]) {
    if (!visited.has(neighbor)) {
      dfs(graph, neighbor, visited);
    }
  }
}` }
                            </pre>
                        </div>
                    </div>

                    {/* Dijkstra's Algorithm */}
                    <div id="dijkstra" className="mt-8 border-t border-gray-200 pt-4 dark:border-gray-700">
                        <h3 className="text-yellow-600 font-medium text-xl mb-4">{`Dijkstra's`} Algorithm</h3>
                        <div className="mb-4">
                            <h4 className="font-semibold">Characteristics:</h4>
                            <p className="text-zinc-500 text-sm dark:text-zinc-400">
                                {`Dijkstra's`} algorithm is used to find the shortest path between nodes in a graph with non-negative weights.
                            </p>
                        </div>
                        <div className="mb-4">
                            <h4 className="font-semibold">Time Complexity:</h4>
                            <p className="text-sm dark:text-zinc-400">
                                <strong className="text-zinc-800 dark:text-zinc-200">Best:</strong> O(V log V + E), <strong className="text-zinc-800 dark:text-zinc-200">Average:</strong> O(V log V + E), <strong className="text-zinc-800 dark:text-zinc-200">Worst:</strong> O(V log V + E)
                            </p>
                        </div>
                        <div className="mb-4">
                            <h4 className="font-semibold">Common Operations:</h4>
                            <ul className="list-disc list-inside text-sm text-zinc-500 dark:text-zinc-400">
                                <li>Maintain a priority queue to store vertices</li>
                                <li>Update shortest path estimates for each vertex</li>
                            </ul>
                        </div>
                        <h4 className="mt-4 font-semibold">Implementation:</h4>
                        <div className="dark:bg-zinc-800 dark:text-zinc-300 text-zinc-700 bg-zinc-200 mt-2 w-full overflow-scroll">
                            <pre className="text-sm">
                                {`
function dijkstra(graph, start) {
  let distances = {};
  let priorityQueue = new PriorityQueue();
  priorityQueue.enqueue(start, 0);

  distances[start] = 0;

  while (!priorityQueue.isEmpty()) {
    let currentNode = priorityQueue.dequeue();
    let currentDistance = distances[currentNode];

    for (let neighbor in graph[currentNode]) {
      let distance = graph[currentNode][neighbor];
      let newDistance = currentDistance + distance;

      if (newDistance < (distances[neighbor] || Infinity)) {
        distances[neighbor] = newDistance;
        priorityQueue.enqueue(neighbor, newDistance);
      }
    }
  }

  return distances;
}` }
                            </pre>
                        </div>
                    </div>

                    {/* Prim's Algorithm */}
                    <div id="prim" className="mt-8 border-t border-gray-200 pt-4 dark:border-gray-700">
                        <h3 className="text-purple-600 font-medium text-xl mb-4">{`Prim's`} Algorithm</h3>
                        <div className="mb-4">
                            <h4 className="font-semibold">Characteristics:</h4>
                            <p className="text-zinc-500 text-sm dark:text-zinc-400">
                                {`Prim's`} algorithm is a greedy algorithm used to find the minimum spanning tree of a graph.
                            </p>
                        </div>
                        <div className="mb-4">
                            <h4 className="font-semibold">Time Complexity:</h4>
                            <p className="text-sm dark:text-zinc-400">
                                <strong className="text-zinc-800 dark:text-zinc-200">Best:</strong> O(E log V), <strong className="text-zinc-800 dark:text-zinc-200">Average:</strong> O(E log V), <strong className="text-zinc-800 dark:text-zinc-200">Worst:</strong> O(E log V)
                            </p>
                        </div>
                        <div className="mb-4">
                            <h4 className="font-semibold">Common Operations:</h4>
                            <ul className="list-disc list-inside text-sm text-zinc-500 dark:text-zinc-400">
                                <li>Always add the minimum weight edge</li>
                                <li>Greedy approach to build the minimum spanning tree</li>
                            </ul>
                        </div>
                        <h4 className="mt-4 font-semibold">Implementation:</h4>
                        <div className="dark:bg-zinc-800 dark:text-zinc-300 text-zinc-700 bg-zinc-200 mt-2 w-full overflow-scroll">
                            <pre className="text-sm">
                                {`
function prim(graph, start) {
  let minHeap = new MinHeap();
  let mst = [];
  let visited = new Set();

  visited.add(start);
  minHeap.add({ node: start, weight: 0 });

  while (!minHeap.isEmpty()) {
    let currentNode = minHeap.extractMin().node;

    for (let neighbor in graph[currentNode]) {
      if (!visited.has(neighbor)) {
        minHeap.add({ node: neighbor, weight: graph[currentNode][neighbor] });
        visited.add(neighbor);
      }
    }
  }

  return mst;
}` }
                            </pre>
                        </div>
                    </div>

                    {/* Kruskal's Algorithm */}
                    <div id="kruskal" className="mt-8 border-t border-gray-200 pt-4 dark:border-gray-700">
                        <h3 className="text-pink-600 font-medium text-xl mb-4">{`Kruskal's`} Algorithm</h3>
                        <div className="mb-4">
                            <h4 className="font-semibold">Characteristics:</h4>
                            <p className="text-zinc-500 text-sm dark:text-zinc-400">
                                {`Kruskal's`} algorithm is a greedy algorithm used to find the minimum spanning tree in a graph by considering edges in increasing weight.
                            </p>
                        </div>
                        <div className="mb-4">
                            <h4 className="font-semibold">Time Complexity:</h4>
                            <p className="text-sm dark:text-zinc-400">
                                <strong className="text-zinc-800 dark:text-zinc-200">Best:</strong> O(E log V), <strong className="text-zinc-800 dark:text-zinc-200">Average:</strong> O(E log V), <strong className="text-zinc-800 dark:text-zinc-200">Worst:</strong> O(E log V)
                            </p>
                        </div>
                        <div className="mb-4">
                            <h4 className="font-semibold">Common Operations:</h4>
                            <ul className="list-disc list-inside text-sm text-zinc-500 dark:text-zinc-400">
                                <li>Sort edges by weight</li>
                                <li>Check if adding an edge creates a cycle</li>
                            </ul>
                        </div>
                        <h4 className="mt-4 font-semibold">Implementation:</h4>
                        <div className="dark:bg-zinc-800 dark:text-zinc-300 text-zinc-700 bg-zinc-200 mt-2 w-full overflow-scroll">
                            <pre className="text-sm">
                                {`
function kruskal(graph) {
  let edges = Object.values(graph);
  edges.sort((a, b) => a.weight - b.weight);

  let mst = [];
  let uf = new UnionFind();

  for (let edge of edges) {
    let [u, v, weight] = edge;

    if (uf.find(u) !== uf.find(v)) {
      uf.union(u, v);
      mst.push(edge);
    }
  }

  return mst;
}` }
                            </pre>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default GraphAlgorithmsPage;
