import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import Link from "next/link";

const SortingAlgorithmsPage = () => {
    return (
        <div className="space-y-8">
            <Card className="mx-auto">
                <CardHeader>
                    <CardTitle>Sorting Algorithms</CardTitle>
                    <CardDescription>
                        Learn about different sorting techniques, their characteristics, time complexities, common operations, and implementations.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <h2 className="text-2xl font-semibold mb-4">Topics Covered</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4">
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out">
                            <Link href="#bubble-sort" className="block text-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-semibold">Bubble Sort</Link>
                        </div>
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out">
                            <Link href="#quick-sort" className="block text-center text-green-600 dark:text-green-400 hover:text-green-800 dark:hover:text-green-300 font-semibold">Quick Sort</Link>
                        </div>
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out">
                            <Link href="#merge-sort" className="block text-center text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-300 font-semibold">Merge Sort</Link>
                        </div>
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out">
                            <Link href="#insertion-sort" className="block text-center text-yellow-600 dark:text-yellow-400 hover:text-yellow-800 dark:hover:text-yellow-300 font-semibold">Insertion Sort</Link>
                        </div>
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out">
                            <Link href="#heap-sort" className="block text-center text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300 font-semibold">Heap Sort</Link>
                        </div>
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out">
                            <Link href="#selection-sort" className="block text-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 font-semibold">Selection Sort</Link>
                        </div>
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out">
                            <Link href="#radix-sort" className="block text-center text teal-600 dark:text-teal-400 hover:text-teal-800 dark:hover:text-teal-300 font-semibold">Radix Sort</Link>
                        </div>
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out">
                            <Link href="#shell-sort" className="block text-center text-pink-600 dark:text-pink-400 hover:text-pink-800 dark:hover:text-pink-300 font-semibold">Shell Sort</Link>
                        </div>
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out">
                            <Link href="#tim-sort" className="block text-center text-orange-600 dark:text-orange-400 hover:text-orange-800 dark:hover:text-orange-300 font-semibold">Tim Sort</Link>
                        </div>
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out">
                            <Link href="#cocktail-shaker-sort" className="block text-center text-yellow-600 dark:text-yellow-400 hover:text-yellow-800 dark:hover:text-yellow-300 font-semibold">Cocktail Shaker Sort</Link>
                        </div>
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out">
                            <Link href="#gnome-sort" className="block text-center text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-300 font-semibold">Gnome Sort</Link>
                        </div>
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out">
                            <Link href="#counting-sort" className="block text-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 font-semibold">Counting Sort</Link>
                        </div>
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out">
                            <Link href="#bucket-sort" className="block text-center text-teal-600 dark:text-teal-400 hover:text-teal-800 dark:hover:text-teal-300 font-semibold">Bucket Sort</Link>
                        </div>
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out">
                            <Link href="#pigeonhole-sort" className="block text-center text-orange-600 dark:text-orange-400 hover:text-orange-800 dark:hover:text-orange-300 font-semibold">Pigeonhole Sort</Link>
                        </div>
                    </div>

                    <h2 className="text-2xl font-semibold mt-8 mb-4">Sorting Algorithms Details</h2>

                    {/* Bubble Sort */}
                    <div id="bubble-sort" className="border-t border-gray-200 pt-4 mt-4 dark:border-gray-700">
                        <h3 className="text-blue-600 font-medium text-xl mb-4">Bubble Sort</h3>
                        <div className="mb-4">
                            <h4 className="font-semibold">Characteristics:</h4>
                            <p className="text-zinc-500 text-sm dark:text-zinc-400">
                                Simple, stable, and comparison-based algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if needed.
                            </p>
                        </div>
                        <div className="mb-4">
                            <h4 className="font-semibold">Time Complexity:</h4>
                            <p className="text-sm dark:text-zinc-400">
                                <strong className="text-zinc-800 dark:text-zinc-200">Best:</strong> O(n), <strong className="text-zinc-800 dark:text-zinc-200">Average:</strong> O(n²), <strong className="text-zinc-800 dark:text-zinc-200">Worst:</strong> O(n²)
                            </p>
                        </div>
                        <div className="mb-4">
                            <h4 className="font-semibold">Common Operations:</h4>
                            <ul className="list-disc list-inside text-sm text-zinc-500 dark:text-zinc-400">
                                <li>Compare adjacent elements</li>
                                <li>Swap elements if needed</li>
                                <li>Repeat the process for the entire list</li>
                            </ul>
                        </div>
                        <h4 className="mt-4 font-semibold">Implementation:</h4>
                        <div className="dark:bg-zinc-800 dark:text-zinc-300 text-zinc-700 bg -zinc-200 mt-2 w-full overflow-scroll">
                            <pre className="text-sm">
                                {`
function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; 
      }
    }
  }
  return arr;
}`}
                            </pre>
                        </div>
                    </div>

                    {/* Quick Sort */}
                    <div id="quick-sort" className="mt-8 border-t border-gray-200 pt-4 dark:border-gray-700">
                        <h3 className="text-green-600 font-medium text-xl mb-4">Quick Sort</h3>
                        <div className="mb-4">
                            <h4 className="font-semibold">Characteristics:</h4>
                            <p className="text-zinc-500 text-sm dark:text-zinc-400">
                                Divide-and-conquer algorithm that selects a pivot element and partitions the array into two sub-arrays. It’s efficient and widely used in practice.
                            </p>
                        </div>
                        <div className="mb-4">
                            <h4 className="font-semibold">Time Complexity:</h4>
                            <p className="text-sm dark:text-zinc-400">
                                <strong className="text-zinc-800 dark:text-zinc-200">Best:</strong> O(n log n), <strong className="text-zinc-800 dark:text-zinc-200">Average:</strong> O(n log n), <strong className="text-zinc-800 dark:text-zinc-200">Worst:</strong> O(n²)
                            </p>
                        </div>
                        <div className="mb-4">
                            <h4 className="font-semibold">Common Operations:</h4>
                            <ul className="list-disc list-inside text-sm text-zinc-500 dark:text-zinc-400">
                                <li>Partition</li>
                                <li>Recursion</li>
                            </ul>
                        </div>
                        <h4 className="mt-4 font-semibold">Implementation:</h4>
                        <div className="dark:bg-zinc-800 dark:text-zinc-300 text-zinc-700 bg-zinc-200 mt-2 w-full overflow-scroll">
                            <pre className="text-sm">
                                {`
function quickSort(arr) {
  if (arr.length <= 1) return arr;
  const pivot = arr[arr.length - 1];
  let left = [], right = [];
  for (let i = 0; i < arr.length - 1; i++) {
    arr[i] < pivot ? left.push(arr[i]) : right.push(arr[i]);
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}`}
                            </pre>
                        </div>
                    </div>

                    {/* Merge Sort */}
                    <div id="merge-sort" className="mt-8 border-t border-gray-200 pt-4 dark:border-gray-700">
                        <h3 className="text-red-600 font-medium text-xl mb-4">Merge Sort</h3>
                        <div className="mb-4">
                            <h4 className="font-semibold">Characteristics:</h4>
                            <p className="text-zinc-500 text-sm dark:text-zinc-400">
                                A stable, divide-and-conquer algorithm that divides the array into two halves, sorts them, and merges them back together.
                            </p>
                        </div>
                        <div className="mb-4">
                            <h4 className="font-semibold">Time Complexity:</h4>
                            <p className="text-sm dark:text-zinc-400">
                                <strong className="text-zinc-800 dark:text-zinc-200">Best:</strong> O(n log n), <strong className="text-zinc-800 dark:text-zinc-200">Average:</strong> O(n log n), <strong className="text-zinc-800 dark:text-zinc-200">Worst:</strong> O(n log n)
                            </p>
                        </div>
                        <div className="mb-4">
                            <h4 className="font-semibold">Common Operations:</h4>
                            <ul className="list-disc list-inside text-sm text-zinc-500 dark:text-zinc-400">
                                <li>Divide</li>
                                <li>Merge</li>
                            </ul>
                        </div>
                        <h4 className="mt-4 font-semibold"> Implementation:</h4>
                        <div className="dark:bg-zinc-800 dark:text-zinc-300 text-zinc-700 bg-zinc-200 mt-2 w-full overflow-scroll">
                            <pre className="text-sm">
                                {`
function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

function merge(left, right) {
  let result = [], leftIndex = 0, rightIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }
  return result.concat(left.slice(leftIndex), right.slice(rightIndex));
}`}
                            </pre>
                        </div>
                    </div>

                    {/* Insertion Sort */}
                    <div id="insertion-sort" className="mt-8 border-t border-gray-200 pt-4 dark:border-gray-700">
                        <h3 className="text-yellow-600 font-medium text-xl mb-4">Insertion Sort</h3>
                        <div className="mb-4">
                            <h4 className="font-semibold">Characteristics:</h4>
                            <p className="text-zinc-500 text-sm dark:text-zinc-400">
                                A simple, stable sorting algorithm that builds the final sorted array one item at a time by inserting each element into its correct position.
                            </p>
                        </div>
                        <div className="mb-4">
                            <h4 className="font-semibold">Time Complexity:</h4>
                            <p className="text-sm dark:text-zinc-400">
                                <strong className="text-zinc-800 dark:text-zinc-200">Best:</strong> O(n), <strong className="text-zinc-800 dark:text-zinc-200">Average:</strong> O(n²), <strong className="text-zinc-800 dark:text-zinc-200">Worst:</strong> O(n²)
                            </p>
                        </div>
                        <div className="mb-4">
                            <h4 className="font-semibold">Common Operations:</h4>
                            <ul className="list-disc list-inside text-sm text-zinc-500 dark:text-zinc-400">
                                <li>Compare adjacent elements</li>
                                <li>Insert element in sorted sublist</li>
                            </ul>
                        </div>
                        <h4 className="mt-4 font-semibold">Implementation:</h4>
                        <div className="dark:bg-zinc-800 dark:text-zinc-300 text-zinc-700 bg-zinc-200 mt-2 w-full overflow-scroll">
                            <pre className="text-sm">
                                {`
function insertionSort(arr) {
  let n = arr.length;
  for (let i = 1; i < n; i++) {
    let key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
  return arr;
}`}
                            </pre>
                        </div>
                    </div>

                    {/* Heap Sort */}
                    <div id="heap-sort" className="mt-8 border-t border-gray-200 pt-4 dark:border-gray-700">
                        <h3 className="text-purple-600 font-medium text-xl mb-4">Heap Sort</h3>
                        <div className="mb-4">
                            <h4 className="font-semibold">Characteristics:</h4>
                            <p className="text-zinc-500 text-sm dark:text-zinc-400">
                                Comparison-based sorting algorithm using a binary heap data structure. Efficient and has a time complexity of O(n log n).
                            </p>
                        </div>
                        <div className="mb-4">
                            <h4 className="font-semibold">Time Complexity:</h4>
                            <p className="text-sm dark:text-zinc-400">
                                <strong className="text-zinc-800 dark:text-zinc-200">Best:</strong> O(n log n), <strong className="text-zinc-800 dark:text-zinc-200">Average:</strong> O(n log n), <strong className="text-zinc-800 dark:text-zinc-200">Worst:</strong> O(n log n)
                            </p>
                        </div>
                        <div className="mb-4">
                            <h4 className="font-semibold">Common Operations:</h4>
                            <ul className="list-disc list-inside text-sm text-zinc-500 dark:text-zinc-400">
                                <li>Build a heap</li>
                                <li>Extract max/min</li>
                                <li>Heapify</li>
                            </ul>
                        </div>
                        <h4 className="mt-4 font-semibold">Implementation:</h4>
                        <div className="dark:bg-zinc-800 dark:text-zinc-300 text-zinc-700 bg-zinc-200 mt-2 w-full overflow-scroll">
                            <pre className="text-sm">
                                {`
function heapSort(arr) {
  const n = arr.length;

  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(arr, n, i);
  }

  for (let i = n - 1; i >= 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]];
    heapify(arr, i, 0);
  }

  return arr;
}

function heapify(arr, n, i) {
  let largest = i;
  let left = 2 * i + 1;
  let right = 2 * i + 2;

  if (left < n && arr[left] > arr[largest]) largest = left;
  if (right < n && arr[right] > arr[largest]) largest = right;
  
  if (largest !== i) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]];
    heapify(arr, n, largest);
  }
}`}
                            </pre>
                        </div>
                    </div>

                    {/* Selection Sort */}
                    <div id="selection-sort" className="mt-8 border-t border-gray-200 pt-4 dark:border-gray-700">
                        <h3 className="text-indigo-600 font-medium text-xl mb-4">Selection Sort</h3>
                        <div className="mb-4">
                            <h4 className="font-semibold">Characteristics:</h4>
                            <p className="text-zinc-500 text-sm dark:text-zinc-400">
                                An in-place, comparison-based algorithm that repeatedly selects the minimum element from the unsorted portion and swaps it with the first unsorted element.
                            </p>
                        </div>
                        <div className="mb-4">
                            <h4 className="font-semibold">Time Complexity:</h4>
                            <p className="text-sm dark:text-zinc-400">
                                <strong className="text-zinc-800 dark:text-zinc-200">Best:</strong> O(n²), <strong className="text-zinc-800 dark:text-zinc-200">Average:</strong> O(n²), <strong className="text-zinc-800 dark:text-zinc-200">Worst:</strong> O(n²)
                            </p>
                        </div>
                        <div className="mb-4">
                            <h4 className="font-semibold">Common Operations:</h4>
                            <ul className="list-disc list-inside text-sm text-zinc-500 dark:text-zinc-400">
                                <li>Find the minimum element in unsorted portion</li>
                                <li>Swap with the first unsorted element</li>
                            </ul>
                        </div>
                        <h4 className="mt-4 font-semibold">Implementation:</h4>
                        <div className="dark:bg-zinc-800 dark:text-zinc-300 text-zinc-700 bg-zinc-200 mt-2 w-full overflow-scroll">
                            <pre className="text-sm">
                                {`
function selectionSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let minIdx = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIdx]) {
        minIdx = j;
      }
    }
    if (minIdx !== i) {
      [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
    }
  }
  return arr;
}`}
                            </pre>
                        </div>
                    </div>

                    {/* Radix Sort */}
                    <div id="radix-sort" className="mt-8 border-t border-gray-200 pt-4 dark:border-gray-700">
                        <h3 className="text-teal-600 font-medium text-xl mb-4">Radix Sort</h3>
                        <div className="mb-4">
                            <h4 className="font-semibold">Characteristics:</h4>
                            <p className="text-zinc-500 text-sm dark:text-zinc-400">
                                A non-comparison-based sorting algorithm that processes numbers digit by digit starting from the least significant digit. It uses counting sort as a subroutine.
                            </p>
                        </div>
                        <div className="mb-4">
                            <h4 className="font-semibold">Time Complexity:</h4>
                            <p className="text-sm dark:text-zinc-400">
                                <strong className="text-zinc-800 dark:text-zinc-200">Best:</strong> O(nk), <strong className="text-zinc-800 dark:text-zinc-200">Average:</strong> O(nk), <strong className="text-zinc-800 dark:text-zinc-200">Worst:</strong> O(nk)
                            </p>
                        </div>
                        <div className="mb-4">
                            <h4 className="font-semibold">Common Operations:</h4>
                            <ul className="list-disc list-inside text-sm text-zinc-500 dark:text-zinc-400">
                                <li>Sort by individual digit</li>
                                <li>Use stable sub-sorting algorithm (like Counting Sort)</li>
                            </ul>
                        </div>
                        <h4 className="mt-4 font-semibold">Implementation:</h4>
                        <div className="dark:bg-zinc-800 dark:text-zinc-300 text-zinc-700 bg-zinc-200 mt-2 w-full overflow-scroll">
                            <pre className="text-sm">
                                {`
function countingSort(arr, exp) {
  let n = arr.length;
  let output = new Array(n);
  let count = new Array(10).fill(0);

  for (let i = 0; i < n; i++) {
    let digit = Math.floor(arr[i] / exp) % 10;
    count[digit]++;
  }

  for (let i = 1; i < 10; i++) {
    count[i] += count[i - 1];
  }

  for (let i = n - 1; i >= 0; i--) {
    let digit = Math.floor(arr[i] / exp) % 10;
    output[count[digit] - 1] = arr[i];
    count[digit]--;
  }

  for (let i = 0; i < n; i++) {
    arr[i] = output[i];
  }
}

function radixSort(arr) {
  let max = Math.max(...arr);
  for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10) {
    countingSort(arr, exp);
  }
  return arr;
}`}
                            </pre>
                        </div>
                    </div>

                    {/* Shell Sort */}
                    <div id="shell-sort" className="mt-8 border-t border-gray-200 pt-4 dark:border-gray-700">
                        <h3 className="text-pink-600 font-medium text-xl mb-4">Shell Sort</h3>
                        <div className="mb-4">
                            <h4 className="font-semibold">Characteristics:</h4>
                            <p className="text-zinc-500 text-sm dark:text-zinc-400">
                                An optimization of insertion sort that allows the exchange of items that are far apart, leading to faster sorting.
                            </p>
                        </div>
                        <div className="mb-4">
                            <h4 className="font-semibold">Time Complexity:</h4>
                            <p className="text-sm dark:text-zinc-400">
                                <strong className="text-zinc-800 dark:text-zinc-200">Best:</strong> O(n log n), <strong className="text-zinc-800 dark:text-zinc-200">Average:</strong> O(n^(3/2)), <strong className="text-zinc-800 dark:text-zinc-200">Worst:</strong> O(n²)
                            </p>
                        </div>
                        <div className="mb-4">
                            <h4 className="font-semibold">Common Operations:</h4>
                            <ul className="list-disc list-inside text-sm text-zinc-500 dark:text-zinc-400">
                                <li>Sort elements based on gap values</li>
                                <li>Reduce gap until it becomes 1</li>
                            </ul>
                        </div>
                        <h4 className="mt-4 font-semibold">Implementation:</h4>
                        <div className="dark:bg-zinc-800 dark:text-zinc-300 text-zinc-700 bg-zinc-200 ```javascript
mt-2 w-full overflow-scroll">
                            <pre className="text-sm">
                                {`
function shellSort(arr) {
  let n = arr.length;
  for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
    for (let i = gap; i < n; i++) {
      let temp = arr[i];
      let j = i;
      while (j >= gap && arr[j - gap] > temp) {
        arr[j] = arr[j - gap];
        j -= gap;
      }
      arr[j] = temp;
    }
  }
  return arr;
}`}
                            </pre>
                        </div>
                    </div>

                    {/* Tim Sort */}
                    <div id="tim-sort" className="mt-8 border-t border-gray-200 pt-4 dark:border-gray-700">
                        <h3 className="text-orange-600 font-medium text-xl mb-4">Tim Sort</h3>
                        <div className="mb-4">
                            <h4 className="font-semibold">Characteristics:</h4>
                            <p className="text-zinc-500 text-sm dark:text-zinc-400">
                                A hybrid sorting algorithm derived from merge sort and insertion sort. Tim Sort is the default sorting algorithm for {`Python's`} sorted() function.
                            </p>
                        </div>
                        <div className="mb-4">
                            <h4 className="font-semibold">Time Complexity:</h4>
                            <p className="text-sm dark:text-zinc-400">
                                <strong className="text-zinc-800 dark:text-zinc-200">Best:</strong> O(n), <strong className="text-zinc-800 dark:text-zinc-200">Average:</strong> O(n log n), <strong className="text-zinc-800 dark:text-zinc-200">Worst:</strong> O(n log n)
                            </p>
                        </div>
                        <div className="mb-4">
                            <h4 className="font-semibold">Common Operations:</h4>
                            <ul className="list-disc list-inside text-sm text-zinc-500 dark:text-zinc-400">
                                <li>Divide array into runs</li>
                                <li>Use insertion sort for small arrays</li>
                                <li>Use merge sort for larger arrays</li>
                            </ul>
                        </div>
                        <h4 className="mt-4 font-semibold">Implementation:</h4>
                        <div className="dark:bg-zinc-800 dark:text-zinc-300 text-zinc-700 bg-zinc-200 mt-2 w-full overflow-scroll">
                            <pre className="text-sm">
                                {`
function insertionSort(arr, left, right) {
  for (let i = left + 1; i <= right; i++) {
    let temp = arr[i];
    let j = i - 1;
    while (j >= left && arr[j] > temp) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = temp;
  }
}

function timSort(arr) {
  const RUN = 32;
  let n = arr.length;

  for (let i = 0; i < n; i += RUN) {
    insertionSort(arr, i, Math.min((i + RUN - 1), (n - 1)));
  }

  for (let size = RUN; size < n; size = 2 * size) {
    for (let left = 0; left < n; left += 2 * size) {
      let right = Math.min(n - 1, left + 2 * size - 1);
      let mid = left + size - 1;
      merge(arr, left, mid, right);
    }
  }
  return arr;
}

function merge(arr, left, mid, right) {
  let len1 = mid - left + 1, len2 = right - mid;
  let leftArr = new Array(len1), rightArr = new Array(len2);

  for (let i = 0; i < len1; i++) leftArr[i] = arr[left + i];
  for (let i = 0; i < len2; i++) rightArr[i] = arr[mid + 1 + i];

  let i = 0, j = 0, k = left;
  while (i < len1 && j < len2) {
    if (leftArr[i] <= rightArr[j]) {
      arr[k++] = leftArr[i++];
    } else {
      arr[k++] = rightArr[j++];
    }
  }

  while (i < len1) arr[k++] = leftArr[i++];
  while (j < len2) arr[k++] = rightArr[j++];
}`}
                            </pre>
                        </div>
                    </div>

                    {/* Cocktail Shaker Sort */}
                    <div id="cocktail-shaker-sort" className="mt-8 border-t border-gray-200 pt-4 dark:border-gray-700">
                        <h3 className="text-yellow-600 font-medium text-xl mb-4">Cocktail Shaker Sort</h3>
                        <div className="mb-4">
                            <h4 className="font-semibold">Characteristics:</h4>
                            <p className="text-zinc-500 text-sm dark:text-zinc-400">
                                A variation of bubble sort that sorts in both directions, i.e., forwards and backwards through the list.
                            </p>
                        </div>
                        <div className="mb-4">
                            <h4 className="font-semibold">Time Complexity:</h4>
                            <p className="text-sm dark:text-zinc-400">
                                <strong className="text-zinc-800 dark:text-zinc-200">Best:</strong> O(n), <strong className="text-zinc-800 dark:text-zinc-200">Average:</strong> O(n²), <strong className="text-zinc-800 dark:text-zinc-200">Worst:</strong> O(n²)
                            </p>
                        </div>
                        <div className="mb-4">
                            <h4 className="font-semibold">Common Operations:</h4>
                            <ul className="list-disc list-inside text-sm text-zinc-500 dark:text-zinc-400">
                                <li>Bubble sort forward and backward</li>
                                <li>Decrease range after each pass</li>
                            </ul>
                        </div>
                        <h4 className="mt-4 font-semibold">Implementation:</h4>
                        <div className="dark:bg-zinc-800 dark:text-zinc-300 text-zinc-700 bg-zinc-200 mt-2 w-full overflow-scroll">
                            <pre className="text-sm">
                                {`
function cocktailShakerSort(arr) {
  let n = arr.length;
  let swapped = true;
  let start = 0;
  let end = n - 1;

  while (swapped) {
    swapped = false;
    for (let i = start; i < end; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;
      }
    }
    if (!swapped) break;
    swapped = false;
    end--;

    for (let i = end - 1; i >= start; i--) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;
      }
    }
    start++;
  }
  return arr;
}`}
                            </pre>
                        </div>
                    </div>

                    {/* Gnome Sort */}
                    <div id="gnome-sort" className="mt-8 border-t border-gray-200 pt-4 dark:border-gray-700">
                        <h3 className="text-red-600 font-medium text-xl mb-4">Gnome Sort</h3>
                        <div className="mb-4">
                            <h4 className="font-semibold">Characteristics:</h4>
                            <p className="text-zinc-500 text-sm dark:text-zinc-400">
                                A simple comparison-based algorithm that works similarly to insertion sort but moves elements backwards rather than forwards.
                            </p>
                        </div>
                        <div className="mb-4">
                            <h4 className="font-semibold">Time Complexity:</h4>
                            <p className="text-sm dark:text-zinc-400">
                                <strong className="text-zinc-800 dark:text-zinc-200">Best:</strong> O(n), <strong className="text-zinc-800 dark:text-zinc-200">Average:</strong> O(n²), <strong className="text-zinc-800 dark:text-zinc-200">Worst:</strong> O(n²)
                            </p>
                        </div>
                        <div className="mb-4">
                            <h4 className="font-semibold">Common Operations:</h4>
                            <ul className="list-disc list-inside text-sm text-zinc-500 dark:text-zinc-400">
                                <li>Compare adjacent elements</li>
                                <li>Swap and move back if needed</li>
                            </ul>
                        </div>
                        <h4 className="mt-4 font-semibold">Implementation:</h4>
                        <div className="dark:bg-zinc-800 dark:text-zinc-300 text-zinc-700 bg-zinc-200 mt-2 w-full overflow-scroll">
                            <pre className="text-sm">
                                {`
function gnomeSort(arr) {
  let i = 0;
  let n = arr.length;
  while (i < n) {
    if (i === 0 || arr[i - 1] <= arr[i]) {
      i++;
    } else {
      [arr[i], arr[i - 1]] = [arr[i - 1], arr[i]];
      i--;
    }
  }
  return arr;
}`}
                            </pre>
                        </div>
                    </div>

                    {/* Counting Sort */}
                    <div id="counting-sort" className="mt-8 border-t border-gray-200 pt-4 dark:border-gray-700">
                        <h3 className="text-indigo-600 font-medium text-xl mb-4">Counting Sort</h3>
                        <div className="mb-4">
                            <h4 className="font-semibold">Characteristics:</h4>
                            <p className="text-zinc-500 text-sm dark:text-zinc-400">
                                A non-comparison sorting algorithm that counts the frequency of elements to sort them. It works well when the range of elements is small.
                            </p>
                        </div>
                        <div className="mb-4">
                            <h4 className="font-semibold">Time Complexity:</h4>
                            <p className="text-sm dark:text-zinc-400">
                                <strong className="text-zinc-800 dark:text-zinc-200">Best:</strong> O(n + k), <strong className="text-zinc-800 dark:text-zinc-200">Average:</strong> O(n + k), <strong className="text-zinc-800 dark:text-zinc-200">Worst:</strong> O(n + k)
                            </p>
                        </div>
                        <div className="mb-4">
                            <h4 className="font-semibold">Common Operations:</h4>
                            <ul className="list-disc list-inside text-sm text-zinc-500 dark:text-zinc-400">
                                <li>Count frequency of elements</li>
                                <li>Compute position of elements based on counts</li>
                            </ul>
                        </div>
                        <h4 className="mt-4 font-semibold">Implementation:</h4>
                        <div className="dark:bg-zinc-800 dark:text-zinc-300 text-zinc-700 bg-zinc-200 mt-2 w-full overflow-scroll">
                            <pre className="text-sm">
                                {`
function countingSort(arr) {
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  let range = max - min + 1;
  let count = new Array(range).fill(0);
  let output = new Array(arr.length);

  for (let i = 0; i < arr.length; i++) {
    count[arr[i] - min]++;
  }

  for (let i = 1; i < count.length; i++) {
    count[i] += count[i - 1];
  }

  for (let i = arr.length - 1; i >= 0; i--) {
    output[count[arr[i] - min] - 1] = arr[i];
    count[arr[i] - min]--;
  }

  for (let i = 0; i < arr.length; i++) {
    arr[i] = output[i];
  }

  return arr;
}`}
                            </pre>
                        </div>
                    </div>

                    {/* Bucket Sort */}
                    <div id="bucket-sort" className="mt-8 border-t border-gray-200 pt-4 dark:border-gray-700">
                        <h3 className="text-teal-600 font-medium text-xl mb-4">Bucket Sort</h3>
                        <div className="mb-4">
                            <h4 className="font-semibold">Characteristics:</h4>
                            <p className="text-zinc-500 text-sm dark:text-zinc-400">
                                A non-comparison-based algorithm that distributes elements into buckets and sorts the individual buckets.
                            </p>
                        </div>
                        <div className="mb-4">
                            <h4 className="font-semibold">Time Complexity:</h4>
                            <p className="text-sm dark:text-zinc-400">
                                <strong className="text-zinc-800 dark:text-zinc-200">Best:</strong> O(n + k), <strong className="text-zinc-800 dark:text-zinc-200" > Average:</strong> O(n + k), <strong className="text-zinc-800 dark:text-zinc-200">Worst:</strong> O(n²)
                            </p>
                        </div>
                        <div className="mb-4">
                            <h4 className="font-semibold">Common Operations:</h4>
                            <ul className="list-disc list-inside text-sm text-zinc-500 dark:text-zinc-400">
                                <li>Distribute elements into buckets</li>
                                <li>Sort buckets individually</li>
                            </ul>
                        </div>
                        <h4 className="mt-4 font-semibold">Implementation:</h4>
                        <div className="dark:bg-zinc-800 dark:text-zinc-300 text-zinc-700 bg-zinc-200 mt-2 w-full overflow-scroll">
                            <pre className="text-sm">
                                {`
function bucketSort(arr) {
  let n = arr.length;
  if (n <= 1) return arr;

  let min = Math.min(...arr);
  let max = Math.max(...arr);

  let bucketCount = Math.floor(n);
  let buckets = Array.from({ length: bucketCount }, () => []);

  for (let i = 0; i < n; i++) {
    let index = Math.floor((arr[i] - min) * (bucketCount - 1) / (max - min));
    buckets[index].push(arr[i]);
  }

  buckets.forEach(bucket => bucket.sort((a, b) => a - b));

  return [].concat(...buckets);
}`}
                            </pre>
                        </div>
                    </div>

                    {/* Pigeonhole Sort */}
                    <div id="pigeonhole-sort" className="mt-8 border-t border-gray-200 pt-4 dark:border-gray-700">
                        <h3 className="text-orange-600 font-medium text-xl mb-4">Pigeonhole Sort</h3>
                        <div className="mb-4">
                            <h4 className="font-semibold">Characteristics:</h4>
                            <p className="text-zinc-500 text-sm dark:text-zinc-400">
                                A sorting algorithm based on the idea of sorting elements by placing them into pigeonholes, which are like buckets.
                            </p>
                        </div>
                        <div className="mb-4">
                            <h4 className="font-semibold">Time Complexity:</h4>
                            <p className="text-sm dark:text-zinc-400">
                                <strong className="text-zinc-800 dark:text-zinc-200">Best:</strong> O(n + range), <strong className="text-zinc-800 dark:text-zinc-200">Average:</strong> O(n + range), <strong className="text-zinc-800 dark:text-zinc-200">Worst:</strong> O(n + range)
                            </p>
                        </div>
                        <div className="mb-4">
                            <h4 className="font-semibold">Common Operations:</h4>
                            <ul className="list-disc list-inside text-sm text-zinc-500 dark:text-zinc-400">
                                <li>Distribute elements into pigeonholes</li>
                                <li>Sort each pigeonhole individually</li>
                            </ul>
                        </div>
                        <h4 className="mt-4 font-semibold">Implementation:</h4>
                        <div className="dark:bg-zinc-800 dark:text-zinc-300 text-zinc-700 bg-zinc-200 mt-2 w-full overflow-scroll">
                            <pre className="text-sm">
                                {`
function pigeonholeSort(arr) {
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  let range = max - min + 1;
  let holes = Array.from({ length: range }, () => []);

  for (let i = 0; i < arr.length; i++) {
    holes[arr[i] - min].push(arr[i]);
  }

  let result = [];
  holes.forEach(hole => {
    result.push(...hole);
  });

  return result;
}`}
                            </pre>
                        </div>
                    </div>

                </CardContent>
            </Card>
        </div>
    );
};

export default SortingAlgorithmsPage;