import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import Link from "next/link";

const SearchAlgorithmsPage = () => {
    return (
        <div className="space-y-8">
            <Card className="mx-auto">
                <CardHeader>
                    <CardTitle>Search Algorithms</CardTitle>
                    <CardDescription>
                        Explore various search techniques, their characteristics, time complexities, common operations, and implementations.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <h2 className="text-2xl font-semibold mb-4">Topics Covered</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4">
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out">
                            <Link href="#linear-search" className="block text-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-semibold">Linear Search</Link>
                        </div>
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out">
                            <Link href="#binary-search" className="block text-center text-green-600 dark:text-green-400 hover:text-green-800 dark:hover:text-green-300 font-semibold">Binary Search</Link>
                        </div>
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out">
                            <Link href="#jump-search" className="block text-center text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-300 font-semibold">Jump Search</Link>
                        </div>
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out">
                            <Link href="#interpolation-search" className="block text-center text-yellow-600 dark:text-yellow-400 hover:text-yellow-800 dark:hover:text-yellow-300 font-semibold">Interpolation Search</Link>
                        </div>
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out">
                            <Link href="#exponential-search" className="block text-center text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300 font-semibold">Exponential Search</Link>
                        </div>
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out">
                            <Link href="#fibonacci-search" className="block text-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 font-semibold">Fibonacci Search</Link>
                        </div>
                    </div>

                    <h2 className="text-2xl font-semibold mt-8 mb-4">Search Algorithms Details</h2>

                    {/* Linear Search */}
                    <div id="linear-search" className="border-t border-gray-200 pt-4 mt-4 dark:border-gray-700">
                        <h3 className="text-blue-600 font-medium text-xl mb-4">Linear Search</h3>
                        <div className="mb-4">
                            <h4 className="font-semibold">Characteristics:</h4>
                            <p className="text-zinc-500 text-sm dark:text-zinc-400">
                                Simple search algorithm that checks every element of the list sequentially to find a match.
                            </p>
                        </div>
                        <div className="mb-4">
                            <h4 className="font-semibold">Time Complexity:</h4>
                            <p className="text-sm dark:text-zinc-400">
                                <strong className="text-zinc-800 dark:text-zinc-200">Best:</strong> O(1), <strong className="text-zinc-800 dark:text-zinc-200">Average:</strong> O(n), <strong className="text-zinc-800 dark:text-zinc-200">Worst:</strong> O(n)
                            </p>
                        </div>
                        <div className="mb-4">
                            <h4 className="font-semibold">Common Operations:</h4>
                            <ul className="list-disc list-inside text-sm text-zinc-500 dark:text-zinc-400">
                                <li>Iterate through the list</li>
                                <li>Compare each element with the target</li>
                            </ul>
                        </div>
                        <h4 className="mt-4 font-semibold">Implementation:</h4>
                        <div className="dark:bg-zinc-800 dark:text-zinc-300 text-zinc-700 bg-zinc-200 mt-2 w-full overflow-scroll">
                            <pre className="text-sm">
                                {`
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i; // Return index if target is found
    }
  }
  return -1; // Return -1 if target is not found
}` }
                            </pre>
                        </div>
                    </div>

                    {/* Binary Search */}
                    <div id="binary-search" className="mt-8 border-t border-gray-200 pt-4 dark:border-gray-700">
                        <h3 className="text-green-600 font-medium text-xl mb-4">Binary Search</h3>
                        <div className="mb-4">
                            <h4 className="font-semibold">Characteristics:</h4>
                            <p className="text-zinc-500 text-sm dark:text-zinc-400">
                                Efficient divide-and-conquer search algorithm that works on sorted arrays by repeatedly dividing the search interval in half.
                            </p>
                        </div>
                        <div className="mb-4">
                            <h4 className="font-semibold">Time Complexity:</h4>
                            <p className="text-sm dark:text-zinc-400">
                                <strong className="text-zinc-800 dark:text-zinc-200">Best:</strong> O(1), <strong className="text-zinc-800 dark:text-zinc-200">Average:</strong> O(log n), <strong className="text-zinc-800 dark:text-zinc-200">Worst:</strong> O(log n)
                            </p>
                        </div>
                        <div className="mb-4">
                            <h4 className="font-semibold">Common Operations:</h4>
                            <ul className="list-disc list-inside text-sm text-zinc-500 dark:text-zinc-400">
                                <li>Compare the target with the middle element</li>
                                <li>Recursively narrow down the search range</li>
                            </ul>
                        </div>
                        <h4 className="mt-4 font-semibold">Implementation:</h4>
                        <div className="dark:bg-zinc-800 dark:text-zinc-300 text-zinc-700 bg-zinc-200 mt-2 w-full overflow-scroll">
                            <pre className="text-sm">
                                {`
function binarySearch(arr, target) {
  let left = 0, right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid; // Found target
    else if (arr[mid] < target) left = mid + 1; // Narrow search to right half
    else right = mid - 1; // Narrow search to left half
  }
  return -1; // Target not found
}` }
                            </pre>
                        </div>
                    </div>

                    {/* Jump Search */}
                    <div id="jump-search" className="mt-8 border-t border-gray-200 pt-4 dark:border-gray-700">
                        <h3 className="text-red-600 font-medium text-xl mb-4">Jump Search</h3>
                        <div className="mb-4">
                            <h4 className="font-semibold">Characteristics:</h4>
                            <p className="text-zinc-500 text-sm dark:text-zinc-400">
                                Search algorithm that works by jumping ahead by a fixed number of steps in a sorted array and then performing a linear search.
                            </p>
                        </div>
                        <div className="mb-4">
                            <h4 className="font-semibold">Time Complexity:</h4>
                            <p className="text-sm dark:text-zinc-400">
                                <strong className="text-zinc-800 dark:text-zinc-200">Best:</strong> O(√n), <strong className="text-zinc-800 dark:text-zinc-200">Average:</strong> O(√n), <strong className="text-zinc-800 dark:text-zinc-200">Worst:</strong> O(√n)
                            </p>
                        </div>
                        <div className="mb-4">
                            <h4 className="font-semibold">Common Operations:</h4>
                            <ul className="list-disc list-inside text-sm text-zinc-500 dark:text-zinc-400">
                                <li>Jump ahead by a fixed step</li>
                                <li>Perform linear search in the block</li>
                            </ul>
                        </div>
                        <h4 className="mt-4 font-semibold">Implementation:</h4>
                        <div className="dark:bg-zinc-800 dark:text-zinc-300 text-zinc-700 bg-zinc-200 mt-2 w-full overflow-scroll">
                            <pre className="text-sm">
                                {`
function jumpSearch(arr, target) {
  let n = arr.length;
  let step = Math.floor(Math.sqrt(n));
  let prev = 0;
  
  while (arr[Math.min(step, n) - 1] < target) {
    prev = step;
    step += Math.floor(Math.sqrt(n));
    if (prev >= n) return -1;
  }

  for (let i = prev; i < Math.min(step, n); i++) {
    if (arr[i] === target) return i;
  }

  return -1;
}` }
                            </pre>
                        </div>
                    </div>

                    {/* Interpolation Search */}
                    <div id="interpolation-search" className="mt-8 border-t border-gray-200 pt-4 dark:border-gray-700">
                        <h3 className="text-yellow-600 font-medium text-xl mb-4">Interpolation Search</h3>
                        <div className="mb-4">
                            <h4 className="font-semibold">Characteristics:</h4>
                            <p className="text-zinc-500 text-sm dark:text-zinc-400">
                                Similar to binary search but the position of the middle element is determined using interpolation instead of division.
                            </p>
                        </div>
                        <div className="mb-4">
                            <h4 className="font-semibold">Time Complexity:</h4>
                            <p className="text-sm dark:text-zinc-400">
                                <strong className="text-zinc-800 dark:text-zinc-200">Best:</strong> O(log log n), <strong className="text-zinc-800 dark:text-zinc-200">Average:</strong> O(log log n), <strong className="text-zinc-800 dark:text-zinc-200">Worst:</strong> O(n)
                            </p>
                        </div>
                        <div className="mb-4">
                            <h4 className="font-semibold">Common Operations:</h4>
                            <ul className="list-disc list-inside text-sm text-zinc-500 dark:text-zinc-400">
                                <li>Estimate the middle point based on the value</li>
                                <li>Refine the search region based on value location</li>
                            </ul>
                        </div>
                        <h4 className="mt-4 font-semibold">Implementation:</h4>
                        <div className="dark:bg-zinc-800 dark:text-zinc-300 text-zinc-700 bg-zinc-200 mt-2 w-full overflow-scroll">
                            <pre className="text-sm">
                                {`
function interpolationSearch(arr, target) {
  let low = 0, high = arr.length - 1;
  while (low <= high && target >= arr[low] && target <= arr[high]) {
    let pos = low + Math.floor(((target - arr[low]) * (high - low)) / (arr[high] - arr[low]));
    
    if (arr[pos] === target) return pos;
    else if (arr[pos] < target) low = pos + 1;
    else high = pos - 1;
  }
  return -1;
}` }
                            </pre>
                        </div>
                    </div>

                    {/* Exponential Search */}
                    <div id="exponential-search" className="mt-8 border-t border-gray-200 pt-4 dark:border-gray-700">
                        <h3 className="text-purple-600 font-medium text-xl mb-4">Exponential Search</h3>
                        <div className="mb-4">
                            <h4 className="font-semibold">Characteristics:</h4>
                            <p className="text-zinc-500 text-sm dark:text-zinc-400">
                                A search algorithm for sorted arrays, which first finds a range where the element might be and then uses binary search.
                            </p>
                        </div>
                        <div className="mb-4">
                            <h4 className="font-semibold">Time Complexity:</h4>
                            <p className="text-sm dark:text-zinc-400">
                                <strong className="text-zinc-800 dark:text-zinc-200">Best:</strong> O(log n), <strong className="text-zinc-800 dark:text-zinc-200">Average:</strong> O(log n), <strong className="text-zinc-800 dark:text-zinc-200">Worst:</strong> O(log n)
                            </p>
                        </div>
                        <div className="mb-4">
                            <h4 className="font-semibold">Common Operations:</h4>
                            <ul className="list-disc list-inside text-sm text-zinc-500 dark:text-zinc-400">
                                <li>Double the range until the element is within it</li>
                                <li>Use binary search within the range</li>
                            </ul>
                        </div>
                        <h4 className="mt-4 font-semibold">Implementation:</h4>
                        <div className="dark:bg-zinc-800 dark:text-zinc-300 text-zinc-700 bg-zinc-200 mt-2 w-full overflow-scroll">
                            <pre className="text-sm">
                                {`
function exponentialSearch(arr, target) {
  let n = arr.length;
  if (arr[0] === target) return 0;
  
  let i = 1;
  while (i < n && arr[i] <= target) {
    i *= 2;
  }
  
  return binarySearch(arr.slice(i / 2, Math.min(i, n)), target);
}` }
                            </pre>
                        </div>
                    </div>

                    {/* Fibonacci Search */}
                    <div id="fibonacci-search" className="mt-8 border-t border-gray-200 pt-4 dark:border-gray-700">
                        <h3 className="text-indigo-600 font-medium text-xl mb-4">Fibonacci Search</h3>
                        <div className="mb-4">
                            <h4 className="font-semibold">Characteristics:</h4>
                            <p className="text-zinc-500 text-sm dark:text-zinc-400">
                                Fibonacci search is an efficient searching algorithm based on the Fibonacci numbers to narrow the search interval.
                            </p>
                        </div>
                        <div className="mb-4">
                            <h4 className="font-semibold">Time Complexity:</h4>
                            <p className="text-sm dark:text-zinc-400">
                                <strong className="text-zinc-800 dark:text-zinc-200">Best:</strong> O(log n), <strong className="text-zinc-800 dark:text-zinc-200">Average:</strong> O(log n), <strong className="text-zinc-800 dark:text-zinc-200">Worst:</strong> O(log n)
                            </p>
                        </div>
                        <div className="mb-4">
                            <h4 className="font-semibold">Common Operations:</h4>
                            <ul className="list-disc list-inside text-sm text-zinc-500 dark:text-zinc-400">
                                <li>Calculate Fibonacci numbers</li>
                                <li>Use Fibonacci index to determine search positions</li>
                            </ul>
                        </div>
                        <h4 className="mt-4 font-semibold">Implementation:</h4>
                        <div className="dark:bg-zinc-800 dark:text-zinc-300 text-zinc-700 bg-zinc-200 mt-2 w-full overflow-scroll">
                            <pre className="text-sm">
                                {`
function fibonacciSearch(arr, target) {
  let n = arr.length;
  let fibMMm2 = 0;
  let fibMMm1 = 1;
  let fibM = fibMMm1 + fibMMm2;
  
  while (fibM < n) {
    fibMMm2 = fibMMm1;
    fibMMm1 = fibM;
    fibM = fibMMm1 + fibMMm2;
  }

  let offset = -1;
  
  while (fibM > 1) {
    let i = Math.min(offset + fibMMm2, n - 1);
    
    if (arr[i] < target) {
      fibM = fibMMm1;
      fibMMm1 = fibMMm2;
      fibMMm2 = fibM - fibMMm1;
      offset = i;
    } else if (arr[i] > target) {
      fibM = fibMMm2;
      fibMMm2 = fibMMm1 - fibMMm2;
      fibMMm1 = fibM - fibMMm2;
    } else return i;
  }

  return (arr[offset + 1] === target) ? offset + 1 : -1;
}` }
                            </pre>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default SearchAlgorithmsPage;
