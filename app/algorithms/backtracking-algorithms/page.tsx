import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import Link from "next/link";

const BacktrackingAlgorithmsPage = () => {
    return (
        <div className="space-y-8">
            <Card className="mx-auto">
                <CardHeader>
                    <CardTitle>Backtracking Algorithms</CardTitle>
                    <CardDescription>
                        Learn how backtracking algorithms solve constraint satisfaction problems.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <h2 className="text-2xl font-semibold mb-4">Topics Covered</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4">
                        {/* Backtracking Algorithm Types */}
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out">
                            <Link href="#n-queens" className="block text-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-semibold">
                                N-Queens Problem
                            </Link>
                        </div>
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out">
                            <Link href="#sudoku-solver" className="block text-center text-green-600 dark:text-green-400 hover:text-green-800 dark:hover:text-green-300 font-semibold">
                                Sudoku Solver
                            </Link>
                        </div>
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out">
                            <Link href="#hamiltonian-path" className="block text-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 font-semibold">
                                Hamiltonian Path
                            </Link>
                        </div>
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out">
                            <Link href="#subset-sum" className="block text-center text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-300 font-semibold">
                                Subset Sum Problem
                            </Link>
                        </div>
                    </div>

                    <h2 className="text-2xl font-semibold mt-8 mb-4">Backtracking Algorithms Details</h2>

                    {/* N-Queens Problem */}
                    <div id="n-queens" className="border-t border-gray-200 pt-4 mt-4 dark:border-gray-700">
                        <h3 className="font-medium text-xl mb-4 text-blue-600 dark:text-blue-400">N-Queens Problem</h3>
                        <div className="mb-4">
                            <h4 className="font-semibold">Characteristics:</h4>
                            <p className="text-zinc-500 text-sm dark:text-zinc-400">
                                A backtracking algorithm that places N queens on an NxN chessboard such that no two queens threaten each other.
                            </p>
                        </div>
                        <div className="mb-4">
                            <h4 className="font-semibold">Time Complexity:</h4>
                            <p className="text-sm dark:text-zinc-400">
                                O(N!), where N is the number of queens.
                            </p>
                        </div>
                        <div className="mb-4">
                            <h4 className="font-semibold">Implementation:</h4>
                            <div className="dark:bg-zinc-800 dark:text-zinc-300 text-zinc-700 bg-zinc-200 mt-2 w-full overflow-scroll">
                                <pre className="text-sm">
                                    {`
function solveNQueens(N) {
    let solutions = [];
    let board = Array(N).fill().map(() => Array(N).fill(false));

    function isSafe(row, col) {
        for (let i = 0; i < col; i++) {
            if (board[row][i]) return false;
        }
        for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) {
            if (board[i][j]) return false;
        }
        for (let i = row, j = col; i < N && j >= 0; i++, j--) {
            if (board[i][j]) return false;
        }
        return true;
    }

    function solve(col) {
        if (col >= N) {
            solutions.push(board.map(row => row.map(cell => (cell ? 'Q' : '.')).join('')));
            return;
        }
        for (let row = 0; row < N; row++) {
            if (isSafe(row, col)) {
                board[row][col] = true;
                solve(col + 1);
                board[row][col] = false;
            }
        }
    }

    solve(0);
    return solutions;
}` }
                                </pre>
                            </div>
                        </div>
                    </div>

                    {/* Sudoku Solver */}
                    <div id="sudoku-solver" className="mt-8 border-t border-gray-200 pt-4 dark:border-gray-700">
                        <h3 className="font-medium text-xl mb-4 text-green-600 dark:text-green-400">Sudoku Solver</h3>
                        <div className="mb-4">
                            <h4 className="font-semibold">Characteristics:</h4>
                            <p className="text-zinc-500 text-sm dark:text-zinc-400">
                                A backtracking algorithm used to solve the Sudoku puzzle by trying numbers until a solution is found.
                            </p>
                        </div>
                        <div className="mb-4">
                            <h4 className="font-semibold">Time Complexity:</h4>
                            <p className="text-sm dark:text-zinc-400">
                                O(9^(n*n)), where n is the size of the board.
                            </p>
                        </div>
                        <div className="mb-4">
                            <h4 className="font-semibold">Implementation:</h4>
                            <div className="dark:bg-zinc-800 dark:text-zinc-300 text-zinc-700 bg-zinc-200 mt-2 w-full overflow-scroll">
                                <pre className="text-sm">
                                    {`
function isSafe(board, row, col, num) {
    for (let x = 0; x < 9; x++) {
        if (board[row][x] === num || board[x][col] === num || board[3 * Math.floor(row / 3) + Math.floor(x / 3)][3 * Math.floor(col / 3) + x % 3] === num) {
            return false;
        }
    }
    return true;
}

function solveSudoku(board) {
    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            if (board[row][col] === 0) {
                for (let num = 1; num <= 9; num++) {
                    if (isSafe(board, row, col, num)) {
                        board[row][col] = num;
                        if (solveSudoku(board)) return true;
                        board[row][col] = 0;
                    }
                }
                return false;
            }
        }
    }
    return true;
}` }
                                </pre>
                            </div>
                        </div>
                    </div>

                    {/* Hamiltonian Path */}
                    <div id="hamiltonian-path" className="mt-8 border-t border-gray-200 pt-4 dark:border-gray-700">
                        <h3 className="font-medium text-xl mb-4 text-indigo-600 dark:text-indigo-400">Hamiltonian Path</h3>
                        <div className="mb-4">
                            <h4 className="font-semibold">Characteristics:</h4>
                            <p className="text-zinc-500 text-sm dark:text-zinc-400">
                                A backtracking algorithm to find a path in a graph that visits each vertex exactly once.
                            </p>
                        </div>
                        <div className="mb-4">
                            <h4 className="font-semibold">Time Complexity:</h4>
                            <p className="text-sm dark:text-zinc-400">
                                O(V!), where V is the number of vertices in the graph.
                            </p>
                        </div>
                        <div className="mb-4">
                            <h4 className="font-semibold">Implementation:</h4>
                            <div className="dark:bg-zinc-800 dark:text-zinc-300 text-zinc-700 bg-zinc-200 mt-2 w-full overflow-scroll">
                                <pre className="text-sm">
                                    {`
function hamiltonianPath(graph) {
    let path = Array(graph.length).fill(-1);
    
    function isSafe(v, pos) {
        if (graph[path[pos - 1]][v] === 0) return false;
        for (let i = 0; i < pos; i++) {
            if (path[i] === v) return false;
        }
        return true;
    }

    function solve(pos) {
        if (pos === graph.length) return true;
        
        for (let v = 0; v < graph.length; v++) {
            if (isSafe(v, pos)) {
                path[pos] = v;
                if (solve(pos + 1)) return true;
                path[pos] = -1;
            }
        }
        return false;
    }

    path[0] = 0; // Start from the first vertex
    return solve(1) ? path : null;
}` }
                                </pre>
                            </div>
                        </div>
                    </div>

                    {/* Subset Sum Problem */}
                    <div id="subset-sum" className="mt-8 border-t border-gray-200 pt-4 dark:border-gray-700">
                        <h3 className="font-medium text-xl mb-4 text-red-600 dark:text-red-400">Subset Sum Problem</h3>
                        <div className="mb-4">
                            <h4 className="font-semibold">Characteristics:</h4>
                            <p className="text-zinc-500 text-sm dark:text-zinc-400">
                                A backtracking algorithm to find whether there is a subset of numbers that add up to a given sum.
                            </p>
                        </div>
                        <div className="mb-4">
                            <h4 className="font-semibold">Time Complexity:</h4>
                            <p className="text-sm dark:text-zinc-400">
                                O(2^n), where n is the number of elements in the set.
                            </p>
                        </div>
                        <div className="mb-4">
                            <h4 className="font-semibold">Implementation:</h4>
                            <div className="dark:bg-zinc-800 dark:text-zinc-300 text-zinc-700 bg-zinc-200 mt-2 w-full overflow-scroll">
                                <pre className="text-sm">
                                    {`
function subsetSum(arr, sum) {
    function findSubset(i, sum) {
        if (sum === 0) return true;
        if (i < 0 || sum < 0) return false;
        return findSubset(i - 1, sum) || findSubset(i - 1, sum - arr[i]);
    }
    return findSubset(arr.length - 1, sum);
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

export default BacktrackingAlgorithmsPage;
