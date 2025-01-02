import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import Link from "next/link";

const GreedyAlgorithmsPage = () => {
    return (
        <div className="space-y-8">
            <Card className="mx-auto">
                <CardHeader>
                    <CardTitle>Greedy Algorithms</CardTitle>
                    <CardDescription>
                        Explore key greedy algorithms, their characteristics, time complexities, and example implementations.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <h2 className="text-2xl font-semibold mb-4">Topics Covered</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4">
                        {/* Greedy Algorithm Types */}
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out">
                            <Link href="#activity-selection" className="block text-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-semibold">Activity Selection</Link>
                        </div>
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out">
                            <Link href="#huffman-coding" className="block text-center text-green-600 dark:text-green-400 hover:text-green-800 dark:hover:text-green-300 font-semibold">Huffman Coding</Link>
                        </div>
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out">
                            <Link href="#fractional-knapsack" className="block text-center text-yellow-600 dark:text-yellow-400 hover:text-yellow-800 dark:hover:text-yellow-300 font-semibold">Fractional Knapsack</Link>
                        </div>
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out">
                            <Link href="#kruskals-algorithm" className="block text-center text-pink-600 dark:text-pink-400 hover:text-pink-800 dark:hover:text-pink-300 font-semibold">{`Kruskal's`} Algorithm</Link>
                        </div>
                    </div>

                    <h2 className="text-2xl font-semibold mt-8 mb-4">Greedy Algorithms Details</h2>

                    {/* Activity Selection */}
                    <div id="activity-selection" className="border-t border-gray-200 pt-4 mt-4 dark:border-gray-700">
                        <h3 className="font-medium text-xl text-blue-600 mb-4">Activity Selection</h3>
                        <div className="mb-4">
                            <h4 className="font-semibold">Characteristics:</h4>
                            <p className="text-zinc-500 text-sm dark:text-zinc-400">
                                A greedy algorithm that selects the maximum number of activities that {`don't`} overlap.
                            </p>
                        </div>
                        <div className="mb-4">
                            <h4 className="font-semibold">Time Complexity:</h4>
                            <p className="text-sm dark:text-zinc-400">
                                O(n log n) for sorting + O(n) for the greedy selection
                            </p>
                        </div>
                        <div className="mb-4">
                            <h4 className="font-semibold">Implementation:</h4>
                            <div className="dark:bg-zinc-800 dark:text-zinc-300 text-zinc-700 bg-zinc-200 mt-2 w-full overflow-scroll">
                                <pre className="text-sm">
                                    {`
function activitySelection(activities) {
    activities.sort((a, b) => a.finish - b.finish); // Sort by finish time
    let selectedActivities = [];
    let lastFinishTime = -1;

    for (let activity of activities) {
        if (activity.start >= lastFinishTime) {
            selectedActivities.push(activity);
            lastFinishTime = activity.finish;
        }
    }
    return selectedActivities;
}` }
                                </pre>
                            </div>
                        </div>
                    </div>

                    {/* Huffman Coding */}
                    <div id="huffman-coding" className="mt-8 border-t border-gray-200 pt-4 dark:border-gray-700">
                        <h3 className="font-medium text-xl text-green-600 mb-4">Huffman Coding</h3>
                        <div className="mb-4">
                            <h4 className="font-semibold">Characteristics:</h4>
                            <p className="text-zinc-500 text-sm dark:text-zinc-400">
                                A greedy algorithm for data compression using variable-length encoding based on frequency.
                            </p>
                        </div>
                        <div className="mb-4">
                            <h4 className="font-semibold">Time Complexity:</h4>
                            <p className="text-sm dark:text-zinc-400">
                                O(n log n) due to sorting and tree construction
                            </p>
                        </div>
                        <div className="mb-4">
                            <h4 className="font-semibold">Implementation:</h4>
                            <div className="dark:bg-zinc-800 dark:text-zinc-300 text-zinc-700 bg-zinc-200 mt-2 w-full overflow-scroll">
                                <pre className="text-sm">
                                    {`
function huffmanCoding(freq) {
    let pq = new MinHeap();
    for (let [char, freq] of Object.entries(freq)) {
        pq.insert({ char, freq });
    }
    
    while (pq.size() > 1) {
        let left = pq.extractMin();
        let right = pq.extractMin();
        let newNode = { 
            left, 
            right, 
            freq: left.freq + right.freq 
        };
        pq.insert(newNode);
    }
    
    return pq.extractMin();
}` }
                                </pre>
                            </div>
                        </div>
                    </div>

                    {/* Fractional Knapsack */}
                    <div id="fractional-knapsack" className="mt-8 border-t border-gray-200 pt-4 dark:border-gray-700">
                        <h3 className="font-medium text-xl text-yellow-600 mb-4">Fractional Knapsack</h3>
                        <div className="mb-4">
                            <h4 className="font-semibold">Characteristics:</h4>
                            <p className="text-zinc-500 text-sm dark:text-zinc-400">
                                A greedy algorithm that selects items based on their value-to-weight ratio for the fractional knapsack problem.
                            </p>
                        </div>
                        <div className="mb-4">
                            <h4 className="font-semibold">Time Complexity:</h4>
                            <p className="text-sm dark:text-zinc-400">
                                O(n log n) due to sorting the items by value-to-weight ratio.
                            </p>
                        </div>
                        <div className="mb-4">
                            <h4 className="font-semibold">Implementation:</h4>
                            <div className="dark:bg-zinc-800 dark:text-zinc-300 text-zinc-700 bg-zinc-200 mt-2 w-full overflow-scroll">
                                <pre className="text-sm">
                                    {`
function fractionalKnapsack(items, capacity) {
    items.sort((a, b) => (b.value / b.weight) - (a.value / a.weight)); // Sort by value-to-weight ratio

    let totalValue = 0;
    for (let item of items) {
        if (capacity <= 0) break;
        
        if (item.weight <= capacity) {
            totalValue += item.value;
            capacity -= item.weight;
        } else {
            totalValue += item.value * (capacity / item.weight);
            break;
        }
    }

    return totalValue;
}` }
                                </pre>
                            </div>
                        </div>
                    </div>

                    {/* Kruskal's Algorithm */}
                    <div id="kruskals-algorithm" className="mt-8 border-t border-gray-200 pt-4 dark:border-gray-700">
                        <h3 className="font-medium text-xl text-pink-600 mb-4">{`Kruskal's`} Algorithm</h3>
                        <div className="mb-4">
                            <h4 className="font-semibold">Characteristics:</h4>
                            <p className="text-zinc-500 text-sm dark:text-zinc-400">
                                A greedy algorithm used for finding the minimum spanning tree of a graph by selecting edges in increasing order of their weights.
                            </p>
                        </div>
                        <div className="mb-4">
                            <h4 className="font-semibold">Time Complexity:</h4>
                            <p className="text-sm dark:text-zinc-400">
                                O(E log E) due to sorting the edges by weight and the union-find operations.
                            </p>
                        </div>
                        <div className="mb-4">
                            <h4 className="font-semibold">Implementation:</h4>
                            <div className="dark:bg-zinc-800 dark:text-zinc-300 text-zinc-700 bg-zinc-200 mt-2 w-full overflow-scroll">
                                <pre className="text-sm">
                                    {`
function kruskal(graph) {
    let edges = graph.edges.sort((a, b) => a.weight - b.weight); // Sort edges by weight
    let parent = [];
    let rank = [];
    
    function find(u) {
        if (parent[u] !== u) parent[u] = find(parent[u]);
        return parent[u];
    }

    function union(u, v) {
        let rootU = find(u);
        let rootV = find(v);
        
        if (rootU !== rootV) {
            if (rank[rootU] > rank[rootV]) parent[rootV] = rootU;
            else if (rank[rootU] < rank[rootV]) parent[rootU] = rootV;
            else {
                parent[rootV] = rootU;
                rank[rootU]++;
            }
        }
    }

    for (let i = 0; i < graph.vertices; i++) {
        parent[i] = i;
        rank[i] = 0;
    }

    let mst = [];
    for (let edge of edges) {
        let { u, v, weight } = edge;
        if (find(u) !== find(v)) {
            mst.push(edge);
            union(u, v);
        }
    }

    return mst;
}` }
                                </pre>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default GreedyAlgorithmsPage;
