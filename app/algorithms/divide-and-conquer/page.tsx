import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import Link from "next/link";

const DivideAndConquerPage = () => {
    return (
        <div className="space-y-8">
            <Card className="mx-auto">
                <CardHeader>
                    <CardTitle>Divide and Conquer</CardTitle>
                    <CardDescription>
                        Learn the divide and conquer paradigm for solving problems by breaking them into smaller subproblems.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Topics Covered</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4">
                        {/* Divide and Conquer Topics */}
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out">
                            <Link href="#merge-sort" className="block text-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 font-semibold">Merge Sort</Link>
                        </div>
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out">
                            <Link href="#quick-sort" className="block text-center text-teal-600 dark:text-teal-400 hover:text-teal-800 dark:hover:text-teal-300 font-semibold">Quick Sort</Link>
                        </div>
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out">
                            <Link href="#strassens-matrix-multiplication" className="block text-center text-orange-600 dark:text-orange-400 hover:text-orange-800 dark:hover:text-orange-300 font-semibold">{`Strassen's`} Matrix Multiplication</Link>
                        </div>
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out">
                            <Link href="#closest-pair-of-points" className="block text-center text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300 font-semibold">Closest Pair of Points</Link>
                        </div>
                    </div>

                    <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-gray-100">Divide and Conquer Algorithms Details</h2>

                    {/* Merge Sort */}
                    <div id="merge-sort" className="border-t border-gray-200 pt-4 mt-4 dark:border-gray-700">
                        <h3 className="font-medium text-xl mb-4 text-indigo-600 dark:text-indigo-400">Merge Sort</h3>
                        <div className="mb-4">
                            <h4 className="font-semibold text-gray-900 dark:text-gray-200">Characteristics:</h4>
                            <p className="text-zinc-500 text-sm dark:text-zinc-400">
                                A divide and conquer algorithm that splits the array into halves, recursively sorts each half, and merges them back together.
                            </p>
                        </div>
                        <div className="mb-4">
                            <h4 className="font-semibold text-gray-900 dark:text-gray-200">Time Complexity:</h4>
                            <p className="text-sm dark:text-zinc-400">
                                O(n log n) for both best and worst case.
                            </p>
                        </div>
                        <div className="mb-4">
                            <h4 className="font-semibold text-gray-900 dark:text-gray-200">Implementation:</h4>
                            <div className="dark:bg-zinc-800 dark:text-zinc-300 text-zinc-700 bg-zinc-200 mt-2 w-full overflow-scroll">
                                <pre className="text-sm">
                                    {`
function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));

    return merge(left, right);
}

function merge(left, right) {
    let result = [], i = 0, j = 0;
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) result.push(left[i++]);
        else result.push(right[j++]);
    }
    return result.concat(left.slice(i)).concat(right.slice(j));
}` }
                                </pre>
                            </div>
                        </div>
                    </div>

                    {/* Quick Sort */}
                    <div id="quick-sort" className="mt-8 border-t border-gray-200 pt-4 dark:border-gray-700">
                        <h3 className="font-medium text-xl mb-4 text-teal-600 dark:text-teal-400">Quick Sort</h3>
                        <div className="mb-4">
                            <h4 className="font-semibold text-gray-900 dark:text-gray-200">Characteristics:</h4>
                            <p className="text-zinc-500 text-sm dark:text-zinc-400">
                                A divide and conquer algorithm that selects a pivot and partitions the array around the pivot, then recursively sorts the subarrays.
                            </p>
                        </div>
                        <div className="mb-4">
                            <h4 className="font-semibold text-gray-900 dark:text-gray-200">Time Complexity:</h4>
                            <p className="text-sm dark:text-zinc-400">
                                O(n log n) on average, O(n²) in the worst case.
                            </p>
                        </div>
                        <div className="mb-4">
                            <h4 className="font-semibold text-gray-900 dark:text-gray-200">Implementation:</h4>
                            <div className="dark:bg-zinc-800 dark:text-zinc-300 text-zinc-700 bg-zinc-200 mt-2 w-full overflow-scroll">
                                <pre className="text-sm">
                                    {`
function quickSort(arr) {
    if (arr.length <= 1) return arr;
    let pivot = arr[arr.length - 1];
    let left = [], right = [];
    
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) left.push(arr[i]);
        else right.push(arr[i]);
    }
    
    return [...quickSort(left), pivot, ...quickSort(right)];
}` }
                                </pre>
                            </div>
                        </div>
                    </div>

                    {/* Strassen's Matrix Multiplication */}
                    <div id="strassens-matrix-multiplication" className="mt-8 border-t border-gray-200 pt-4 dark:border-gray-700">
                        <h3 className="font-medium text-xl mb-4 text-orange-600 dark:text-orange-400">{`Strassen's`} Matrix Multiplication</h3>
                        <div className="mb-4">
                            <h4 className="font-semibold text-gray-900 dark:text-gray-200">Characteristics:</h4>
                            <p className="text-zinc-500 text-sm dark:text-zinc-400">
                                An optimized algorithm for matrix multiplication that reduces the number of multiplications required.
                            </p>
                        </div>
                        <div className="mb-4">
                            <h4 className="font-semibold text-gray-900 dark:text-gray-200">Time Complexity:</h4>
                            <p className="text-sm dark:text-zinc-400">
                                O(n^log2(7)) ≈ O(n^2.81).
                            </p>
                        </div>
                        <div className="mb-4">
                            <h4 className="font-semibold text-gray-900 dark:text-gray-200">Implementation:</h4>
                            <div className="dark:bg-zinc-800 dark:text-zinc-300 text-zinc-700 bg-zinc-200 mt-2 w-full overflow-scroll">
                                <pre className="text-sm">
                                    {`
function strassen(A, B) {
    if (A.length === 1) return [[A[0][0] * B[0][0]]];
    
    let mid = A.length / 2;
    let A11 = A.slice(0, mid).map(row => row.slice(0, mid));
    let A12 = A.slice(0, mid).map(row => row.slice(mid));
    let A21 = A.slice(mid).map(row => row.slice(0, mid));
    let A22 = A.slice(mid).map(row => row.slice(mid));
    
    let B11 = B.slice(0, mid).map(row => row.slice(0, mid));
    let B12 = B.slice(0, mid).map(row => row.slice(mid));
    let B21 = B.slice(mid).map(row => row.slice(0, mid));
    let B22 = B.slice(mid).map(row => row.slice(mid));
    
    let M1 = strassen(A11, subtract(B12, B22));
    let M2 = strassen(add(A11, A12), B22);
    let M3 = strassen(add(A21, A22), B11);
    let M4 = strassen(A22, subtract(B21, B11));
    let M5 = strassen(add(A11, A22), add(B11, B22));
    let M6 = strassen(subtract(A12, A22), add(B21, B22));
    let M7 = strassen(subtract(A11, A21), add(B11, B12));
    
    let C11 = add(subtract(add(M5, M4), M2), M6);
    let C12 = add(M1, M2);
    let C21 = add(M3, M4);
    let C22 = add(subtract(add(M5, M1), M3), M7);
    
    return combine(C11, C12, C21, C22);
}` }
                                </pre>
                            </div>
                        </div>
                    </div>

                    {/* Closest Pair of Points */}
                    <div id="closest-pair-of-points" className="mt-8 border-t border-gray-200 pt-4 dark:border-gray-700">
                        <h3 className="font-medium text-xl mb-4 text-purple-600 dark:text-purple-400">Closest Pair of Points</h3>
                        <div className="mb-4">
                            <h4 className="font-semibold text-gray-900 dark:text-gray-200">Characteristics:</h4>
                            <p className="text-zinc-500 text-sm dark:text-zinc-400">
                                A divide and conquer algorithm for finding the closest pair of points in a set of points in a 2D plane.
                            </p>
                        </div>
                        <div className="mb-4">
                            <h4 className="font-semibold text-gray-900 dark:text-gray-200">Time Complexity:</h4>
                            <p className="text-sm dark:text-zinc-400">
                                O(n log n) for the divide and conquer approach.
                            </p>
                        </div>
                        <div className="mb-4">
                            <h4 className="font-semibold text-gray-900 dark:text-gray-200">Implementation:</h4>
                            <div className="dark:bg-zinc-800 dark:text-zinc-300 text-zinc-700 bg-zinc-200 mt-2 w-full overflow-scroll">
                                <pre className="text-sm">
                                    {`
function closestPair(points) {
    points.sort((a, b) => a[0] - b[0]);
    
    function recursiveClosest(points) {
        if (points.length <= 3) return bruteForce(points);
        
        let mid = Math.floor(points.length / 2);
        let left = points.slice(0, mid);
        let right = points.slice(mid);
        
        let leftPair = recursiveClosest(left);
        let rightPair = recursiveClosest(right);
        let minDist = Math.min(leftPair.dist, rightPair.dist);
        
        return combine(leftPair, rightPair, minDist);
    }

    return recursiveClosest(points);
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

export default DivideAndConquerPage;
