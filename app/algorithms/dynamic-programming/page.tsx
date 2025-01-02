import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import Link from "next/link";

const DynamicProgrammingPage = () => {
    return (
        <div className="space-y-8">
            <Card className="mx-auto">
                <CardHeader>
                    <CardTitle>Dynamic Programming Algorithms</CardTitle>
                    <CardDescription>
                        Explore key dynamic programming algorithms, their characteristics, time complexities, and common use cases.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <h2 className="text-2xl font-semibold mb-4">Topics Covered</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4">
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out">
                            <Link href="#fibonacci" className="block text-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-semibold">Fibonacci Sequence</Link>
                        </div>
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out">
                            <Link href="#knapsack" className="block text-center text-green-600 dark:text-green-400 hover:text-green-800 dark:hover:text-green-300 font-semibold">Knapsack Problem</Link>
                        </div>
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out">
                            <Link href="#longest-common-subsequence" className="block text-center text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-300 font-semibold">Longest Common Subsequence</Link>
                        </div>
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out">
                            <Link href="#matrix-chain-multiplication" className="block text-center text-yellow-600 dark:text-yellow-400 hover:text-yellow-800 dark:hover:text-yellow-300 font-semibold">Matrix Chain Multiplication</Link>
                        </div>
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out">
                            <Link href="#edit-distance" className="block text-center text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300 font-semibold">Edit Distance</Link>
                        </div>
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out">
                            <Link href="#coin-change" className="block text-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 font-semibold">Coin Change Problem</Link>
                        </div>
                    </div>

                    <h2 className="text-2xl font-semibold mt-8 mb-4">Dynamic Programming Algorithms Details</h2>

                    {/* Fibonacci Sequence */}
                    <div id="fibonacci" className="border-t border-gray-200 pt-4 mt-4 dark:border-gray-700">
                        <h3 className="text-blue-600 font-medium text-xl mb-4">Fibonacci Sequence</h3>
                        <div className="mb-4">
                            <h4 className="font-semibold">Characteristics:</h4>
                            <p className="text-zinc-500 text-sm dark:text-zinc-400">
                                The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones, usually starting with 0 and 1.
                            </p>
                        </div>
                        <div className="mb-4">
                            <h4 className="font-semibold">Time Complexity:</h4>
                            <p className="text-sm dark:text-zinc-400">
                                <strong className="text-zinc-800 dark:text-zinc-200">Best:</strong> O(n), <strong className="text-zinc-800 dark:text-zinc-200">Average:</strong> O(n), <strong className="text-zinc-800 dark:text-zinc-200">Worst:</strong> O(n)
                            </p>
                        </div>
                        <div className="mb-4">
                            <h4 className="font-semibold">Common Operations:</h4>
                            <ul className="list-disc list-inside text-sm text-zinc-500 dark:text-zinc-400">
                                <li>Recursively compute the Fibonacci sequence</li>
                                <li>Store previously computed results (memoization) to avoid redundant calculations</li>
                            </ul>
                        </div>
                        <h4 className="mt-4 font-semibold">Implementation:</h4>
                        <div className="dark:bg-zinc-800 dark:text-zinc-300 text-zinc-700 bg-zinc-200 mt-2 w-full overflow-scroll">
                            <pre className="text-sm">
                                {`
function fibonacci(n) {
  let dp = [0, 1];
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
}` }
                            </pre>
                        </div>
                    </div>

                    {/* Knapsack Problem */}
                    <div id="knapsack" className="mt-8 border-t border-gray-200 pt-4 dark:border-gray-700">
                        <h3 className="text-green-600 font-medium text-xl mb-4">Knapsack Problem</h3>
                        <div className="mb-4">
                            <h4 className="font-semibold">Characteristics:</h4>
                            <p className="text-zinc-500 text-sm dark:text-zinc-400">
                                Given a set of items, each with a weight and a value, the goal is to determine the maximum value that can be obtained by packing the items in a knapsack without exceeding its capacity.
                            </p>
                        </div>
                        <div className="mb-4">
                            <h4 className="font-semibold">Time Complexity:</h4>
                            <p className="text-sm dark:text-zinc-400">
                                <strong className="text-zinc-800 dark:text-zinc-200">Best:</strong> O(n * W), <strong className="text-zinc-800 dark:text-zinc-200">Average:</strong> O(n * W), <strong className="text-zinc-800 dark:text-zinc-200">Worst:</strong> O(n * W)
                            </p>
                        </div>
                        <div className="mb-4">
                            <h4 className="font-semibold">Common Operations:</h4>
                            <ul className="list-disc list-inside text-sm text-zinc-500 dark:text-zinc-400">
                                <li>Initialize a DP table to store the maximum value for each weight</li>
                                <li>Iterate over each item and each capacity value</li>
                            </ul>
                        </div>
                        <h4 className="mt-4 font-semibold">Implementation:</h4>
                        <div className="dark:bg-zinc-800 dark:text-zinc-300 text-zinc-700 bg-zinc-200 mt-2 w-full overflow-scroll">
                            <pre className="text-sm">
                                {`
function knapsack(values, weights, W) {
  let n = values.length;
  let dp = Array(n + 1).fill().map(() => Array(W + 1).fill(0));

  for (let i = 1; i <= n; i++) {
    for (let w = 1; w <= W; w++) {
      if (weights[i - 1] <= w) {
        dp[i][w] = Math.max(dp[i - 1][w], dp[i - 1][w - weights[i - 1]] + values[i - 1]);
      } else {
        dp[i][w] = dp[i - 1][w];
      }
    }
  }
  return dp[n][W];
}` }
                            </pre>
                        </div>
                    </div>

                    {/* Longest Common Subsequence */}
                    <div id="longest-common-subsequence" className="mt-8 border-t border-gray-200 pt-4 dark:border-gray-700">
                        <h3 className="text-red-600 font-medium text-xl mb-4">Longest Common Subsequence</h3>
                        <div className="mb-4">
                            <h4 className="font-semibold">Characteristics:</h4>
                            <p className="text-zinc-500 text-sm dark:text-zinc-400">
                                The longest common subsequence (LCS) problem is about finding the longest sequence that appears in both strings in the same order.
                            </p>
                        </div>
                        <div className="mb-4">
                            <h4 className="font-semibold">Time Complexity:</h4>
                            <p className="text-sm dark:text-zinc-400">
                                <strong className="text-zinc-800 dark:text-zinc-200">Best:</strong> O(m * n), <strong className="text-zinc-800 dark:text-zinc-200">Average:</strong> O(m * n), <strong className="text-zinc-800 dark:text-zinc-200">Worst:</strong> O(m * n)
                            </p>
                        </div>
                        <div className="mb-4">
                            <h4 className="font-semibold">Common Operations:</h4>
                            <ul className="list-disc list-inside text-sm text-zinc-500 dark:text-zinc-400">
                                <li>Initialize a DP table</li>
                                <li>Fill the table by comparing characters from both strings</li>
                            </ul>
                        </div>
                        <h4 className="mt-4 font-semibold">Implementation:</h4>
                        <div className="dark:bg-zinc-800 dark:text-zinc-300 text-zinc-700 bg-zinc-200 mt-2 w-full overflow-scroll">
                            <pre className="text-sm">
                                {`
function lcs(X, Y) {
  let m = X.length, n = Y.length;
  let dp = Array(m + 1).fill().map(() => Array(n + 1).fill(0));

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (X[i - 1] === Y[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }
  return dp[m][n];
}` }
                            </pre>
                        </div>
                    </div>

                    {/* Matrix Chain Multiplication */}
                    <div id="matrix-chain-multiplication" className="mt-8 border-t border-gray-200 pt-4 dark:border-gray-700">
                        <h3 className="text-yellow-600 font-medium text-xl mb-4">Matrix Chain Multiplication</h3>
                        <div className="mb-4">
                            <h4 className="font-semibold">Characteristics:</h4>
                            <p className="text-zinc-500 text-sm dark:text-zinc-400">
                                The matrix chain multiplication problem is about determining the optimal way to multiply a chain of matrices to minimize the total number of scalar multiplications.
                            </p>
                        </div>
                        <div className="mb-4">
                            <h4 className="font-semibold">Time Complexity:</h4>
                            <p className="text-sm dark:text-zinc-400">
                                <strong className="text-zinc-800 dark:text-zinc-200">Best:</strong> O(n³), <strong className="text-zinc-800 dark:text-zinc-200">Average:</strong> O(n³), <strong className="text-zinc-800 dark:text-zinc-200">Worst:</strong> O(n³)
                            </p>
                        </div>
                        <div className="mb-4">
                            <h4 className="font-semibold">Common Operations:</h4>
                            <ul className="list-disc list-inside text-sm text-zinc-500 dark:text-zinc-400">
                                <li>Use dynamic programming to store intermediate results</li>
                                <li>Compute the minimum number of scalar multiplications</li>
                            </ul>
                        </div>
                        <h4 className="mt-4 font-semibold">Implementation:</h4>
                        <div className="dark:bg-zinc-800 dark:text-zinc-300 text-zinc-700 bg-zinc-200 mt-2 w-full overflow-scroll">
                            <pre className="text-sm">
                                {`
function matrixChainMultiplication(p) {
  let n = p.length;
  let dp = Array(n).fill().map(() => Array(n).fill(0));

  for (let l = 2; l < n; l++) {
    for (let i = 1; i < n - l + 1; i++) {
      let j = i + l - 1;
      dp[i][j] = Infinity;
      for (let k = i; k < j; k++) {
        dp[i][j] = Math.min(dp[i][j], dp[i][k] + dp[k + 1][j] + p[i - 1] * p[k] * p[j]);
      }
    }
  }
  return dp[1][n - 1];
}` }
                            </pre>
                        </div>
                    </div>

                    {/* Edit Distance */}
                    <div id="edit-distance" className="mt-8 border-t border-gray-200 pt-4 dark:border-gray-700">
                        <h3 className="text-purple-600 font-medium text-xl mb-4">Edit Distance</h3>
                        <div className="mb-4">
                            <h4 className="font-semibold">Characteristics:</h4>
                            <p className="text-zinc-500 text-sm dark:text-zinc-400">
                                The edit distance problem computes the minimum number of operations required to transform one string into another. Operations include insertions, deletions, and substitutions.
                            </p>
                        </div>
                        <div className="mb-4">
                            <h4 className="font-semibold">Time Complexity:</h4>
                            <p className="text-sm dark:text-zinc-400">
                                <strong className="text-zinc-800 dark:text-zinc-200">Best:</strong> O(m * n), <strong className="text-zinc-800 dark:text-zinc-200">Average:</strong> O(m * n), <strong className="text-zinc-800 dark:text-zinc-200">Worst:</strong> O(m * n)
                            </p>
                        </div>
                        <div className="mb-4">
                            <h4 className="font-semibold">Common Operations:</h4>
                            <ul className="list-disc list-inside text-sm text-zinc-500 dark:text-zinc-400">
                                <li>Initialize a DP table</li>
                                <li>Compute the minimum number of insertions, deletions, and substitutions</li>
                            </ul>
                        </div>
                        <h4 className="mt-4 font-semibold">Implementation:</h4>
                        <div className="dark:bg-zinc-800 dark:text-zinc-300 text-zinc-700 bg-zinc-200 mt-2 w-full overflow-scroll">
                            <pre className="text-sm">
                                {`
function editDistance(str1, str2) {
  let m = str1.length, n = str2.length;
  let dp = Array(m + 1).fill().map(() => Array(n + 1).fill(0));

  for (let i = 0; i <= m; i++) {
    for (let j = 0; j <= n; j++) {
      if (i === 0) dp[i][j] = j;
      else if (j === 0) dp[i][j] = i;
      else if (str1[i - 1] === str2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
      }
    }
  }
  return dp[m][n];
}` }
                            </pre>
                        </div>
                    </div>

                    {/* Coin Change Problem */}
                    <div id="coin-change" className="mt-8 border-t border-gray-200 pt-4 dark:border-gray-700">
                        <h3 className="text-indigo-600 font-medium text-xl mb-4">Coin Change Problem</h3>
                        <div className="mb-4">
                            <h4 className="font-semibold">Characteristics:</h4>
                            <p className="text-zinc-500 text-sm dark:text-zinc-400">
                                Given an amount and a set of coin denominations, the goal is to find the minimum number of coins required to make the amount.
                            </p>
                        </div>
                        <div className="mb-4">
                            <h4 className="font-semibold">Time Complexity:</h4>
                            <p className="text-sm dark:text-zinc-400">
                                <strong className="text-zinc-800 dark:text-zinc-200">Best:</strong> O(n * amount), <strong className="text-zinc-800 dark:text-zinc-200">Average:</strong> O(n * amount), <strong className="text-zinc-800 dark:text-zinc-200">Worst:</strong> O(n * amount)
                            </p>
                        </div>
                        <div className="mb-4">
                            <h4 className="font-semibold">Common Operations:</h4>
                            <ul className="list-disc list-inside text-sm text-zinc-500 dark:text-zinc-400">
                                <li>Initialize a DP table</li>
                                <li>Iterate over each coin denomination</li>
                            </ul>
                        </div>
                        <h4 className="mt-4 font-semibold">Implementation:</h4>
                        <div className="dark:bg-zinc-800 dark:text-zinc-300 text-zinc-700 bg-zinc-200 mt-2 w-full overflow-scroll">
                            <pre className="text-sm">
                                {`
function coinChange(coins, amount) {
  let dp = Array(amount + 1).fill(Infinity);
  dp[0] = 0;

  for (let i = 1; i <= amount; i++) {
    for (let coin of coins) {
      if (i >= coin) {
        dp[i] = Math.min(dp[i], dp[i - coin] + 1);
      }
    }
  }

  return dp[amount] === Infinity ? -1 : dp[amount];
}` }
                            </pre>
                        </div>
                    </div>

                </CardContent>
            </Card>
        </div>
    );
};

export default DynamicProgrammingPage;
