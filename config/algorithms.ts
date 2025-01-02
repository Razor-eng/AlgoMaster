import { Algorithm } from "@/types";

export const algorithms: Algorithm[] = [
    {
        title: "Sorting Algorithms",
        description: "Learn about different sorting techniques and their time complexities.",
        topics: ["Bubble Sort", "Quick Sort", "Merge Sort", "Insertion Sort", "Heap Sort"],
        slug: "sorting-algorithms"
    },
    {
        title: "Searching Algorithms",
        description: "Understand linear and binary search techniques and their use cases.",
        topics: ["Linear Search", "Binary Search", "Interpolation Search", "Exponential Search"],
        slug: "searching-algorithms"
    },
    {
        title: "Dynamic Programming",
        description: "Explore dynamic programming and its applications in solving optimization problems.",
        topics: ["Fibonacci Sequence", "Knapsack Problem", "Longest Common Subsequence", "Matrix Chain Multiplication"],
        slug: "dynamic-programming"
    },
    {
        title: "Greedy Algorithms",
        description: "Learn about greedy approaches and their applications in optimization problems.",
        topics: ["Huffman Coding", "Activity Selection", "Fractional Knapsack", "Kruskal's Algorithm"],
        slug: "greedy-algorithms"
    },
    {
        title: "Graph Algorithms",
        description: "Explore algorithms for traversing and searching in graphs.",
        topics: ["Dijkstra's Algorithm", "BFS", "DFS", "Bellman-Ford Algorithm"],
        slug: "graph-algorithms"
    },
    {
        title: "Backtracking Algorithms",
        description: "Understand backtracking and how it is used in solving constraint satisfaction problems.",
        topics: ["N-Queens Problem", "Sudoku Solver", "Hamiltonian Path", "Subset Sum Problem"],
        slug: "backtracking-algorithms"
    },
    {
        title: "Divide and Conquer",
        description: "Learn the divide and conquer paradigm for solving problems by breaking them into smaller subproblems.",
        topics: ["Merge Sort", "Quick Sort", "Strassen's Matrix Multiplication", "Closest Pair of Points"],
        slug: "divide-and-conquer"
    },
    {
        title: "String Matching Algorithms",
        description: "Understand algorithms for searching substrings within larger strings.",
        topics: ["Naive String Matching", "KMP Algorithm", "Rabin-Karp Algorithm", "Boyer-Moore Algorithm"],
        slug: "string-matching-algorithms"
    }
];
