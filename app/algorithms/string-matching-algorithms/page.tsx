import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import Link from "next/link";

const StringMatchingPage = () => {
    return (
        <div className="space-y-8">
            <Card className="mx-auto">
                <CardHeader>
                    <CardTitle>String Matching Algorithms</CardTitle>
                    <CardDescription>
                        Understand algorithms for searching substrings within larger strings.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <h2 className="text-2xl font-semibold mb-4">Topics Covered</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4">
                        {/* String Matching Topics */}
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out">
                            <Link href="#naive-string-matching" className="block text-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-semibold">Naive String Matching</Link>
                        </div>
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out">
                            <Link href="#kmp-algorithm" className="block text-center text-green-600 dark:text-green-400 hover:text-green-800 dark:hover:text-green-300 font-semibold">KMP Algorithm</Link>
                        </div>
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out">
                            <Link href="#rabin-karp-algorithm" className="block text-center text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-300 font-semibold">Rabin-Karp Algorithm</Link>
                        </div>
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out">
                            <Link href="#boyer-moore-algorithm" className="block text-center text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300 font-semibold">Boyer-Moore Algorithm</Link>
                        </div>
                    </div>

                    <h2 className="text-2xl font-semibold mt-8 mb-4">String Matching Algorithms Details</h2>

                    {/* Naive String Matching */}
                    <div id="naive-string-matching" className="border-t border-gray-200 pt-4 mt-4 dark:border-gray-700">
                        <h3 className="font-medium text-xl mb-4 text-blue-600">Naive String Matching</h3>
                        <div className="mb-4">
                            <h4 className="font-semibold">Characteristics:</h4>
                            <p className="text-zinc-500 text-sm dark:text-zinc-400">
                                A brute-force algorithm that checks for the occurrence of the pattern at every position in the text.
                            </p>
                        </div>
                        <div className="mb-4">
                            <h4 className="font-semibold">Time Complexity:</h4>
                            <p className="text-sm dark:text-zinc-400">
                                O((n - m + 1) * m) in the worst case, where n is the length of the text and m is the length of the pattern.
                            </p>
                        </div>
                        <div className="mb-4">
                            <h4 className="font-semibold">Implementation:</h4>
                            <div className="dark:bg-zinc-800 dark:text-zinc-300 text-zinc-700 bg-zinc-200 mt-2 w-full overflow-scroll">
                                <pre className="text-sm">
                                    {`
function naiveSearch(text, pattern) {
    let n = text.length;
    let m = pattern.length;
    for (let i = 0; i <= n - m; i++) {
        let j = 0;
        while (j < m && text[i + j] === pattern[j]) {
            j++;
        }
        if (j === m) {
            console.log('Pattern found at index ' + i);
        }
    }
}` }
                                </pre>
                            </div>
                        </div>
                    </div>

                    {/* KMP Algorithm */}
                    <div id="kmp-algorithm" className="mt-8 border-t border-gray-200 pt-4 dark:border-gray-700">
                        <h3 className="font-medium text-xl mb-4 text-green-600">KMP Algorithm</h3>
                        <div className="mb-4">
                            <h4 className="font-semibold">Characteristics:</h4>
                            <p className="text-zinc-500 text-sm dark:text-zinc-400">
                                The Knuth-Morris-Pratt (KMP) algorithm improves upon the brute-force approach by utilizing partial matching information from the pattern itself.
                            </p>
                        </div>
                        <div className="mb-4">
                            <h4 className="font-semibold">Time Complexity:</h4>
                            <p className="text-sm dark:text-zinc-400">
                                O(n + m), where n is the length of the text and m is the length of the pattern.
                            </p>
                        </div>
                        <div className="mb-4">
                            <h4 className="font-semibold">Implementation:</h4>
                            <div className="dark:bg-zinc-800 dark:text-zinc-300 text-zinc-700 bg-zinc-200 mt-2 w-full overflow-scroll">
                                <pre className="text-sm">
                                    {`
function KMP(text, pattern) {
    let lps = computeLPS(pattern);
    let i = 0, j = 0;
    while (i < text.length) {
        if (pattern[j] === text[i]) {
            i++;
            j++;
        }
        if (j === pattern.length) {
            console.log('Pattern found at index ' + (i - j));
            j = lps[j - 1];
        } else if (i < text.length && pattern[j] !== text[i]) {
            if (j !== 0) {
                j = lps[j - 1];
            } else {
                i++;
            }
        }
    }
}

function computeLPS(pattern) {
    let lps = Array(pattern.length).fill(0);
    let j = 0;
    for (let i = 1; i < pattern.length; i++) {
        while (j > 0 && pattern[i] !== pattern[j]) {
            j = lps[j - 1];
        }
        if (pattern[i] === pattern[j]) {
            j++;
            lps[i] = j;
        }
    }
    return lps;
}` }
                                </pre>
                            </div>
                        </div>
                    </div>

                    {/* Rabin-Karp Algorithm */}
                    <div id="rabin-karp-algorithm" className="mt-8 border-t border-gray-200 pt-4 dark:border-gray-700">
                        <h3 className="font-medium text-xl mb-4 text-red-600">Rabin-Karp Algorithm</h3>
                        <div className="mb-4">
                            <h4 className="font-semibold">Characteristics:</h4>
                            <p className="text-zinc-500 text-sm dark:text-zinc-400">
                                The Rabin-Karp algorithm uses hashing to find pattern matches efficiently, checking if hash values of substrings match the pattern.
                            </p>
                        </div>
                        <div className="mb-4">
                            <h4 className="font-semibold">Time Complexity:</h4>
                            <p className="text-sm dark:text-zinc-400">
                                O(n) on average, but O(n * m) in the worst case, where n is the length of the text and m is the length of the pattern.
                            </p>
                        </div>
                        <div className="mb-4">
                            <h4 className="font-semibold">Implementation:</h4>
                            <div className="dark:bg-zinc-800 dark:text-zinc-300 text-zinc-700 bg-zinc-200 mt-2 w-full overflow-scroll">
                                <pre className="text-sm">
                                    {`
function rabinKarp(text, pattern) {
    const d = 256; // number of characters in the alphabet
    const q = 101; // a prime number
    let m = pattern.length;
    let n = text.length;
    let p = 0; // hash value for the pattern
    let t = 0; // hash value for the text
    let h = 1;

    for (let i = 0; i < m - 1; i++) {
        h = (h * d) % q;
    }

    for (let i = 0; i < m; i++) {
        p = (d * p + pattern[i].charCodeAt(0)) % q;
        t = (d * t + text[i].charCodeAt(0)) % q;
    }

    for (let i = 0; i <= n - m; i++) {
        if (p === t) {
            let match = true;
            for (let j = 0; j < m; j++) {
                if (text[i + j] !== pattern[j]) {
                    match = false;
                    break;
                }
            }
            if (match) {
                console.log('Pattern found at index ' + i);
            }
        }

        if (i < n - m) {
            t = (d * (t - text[i].charCodeAt(0) * h) + text[i + m].charCodeAt(0)) % q;
            if (t < 0) {
                t = (t + q);
            }
        }
    }
}` }
                                </pre>
                            </div>
                        </div>
                    </div>

                    {/* Boyer-Moore Algorithm */}
                    <div id="boyer-moore-algorithm" className="mt-8 border-t border-gray-200 pt-4 dark:border-gray-700">
                        <h3 className="font-medium text-xl mb-4 text-purple-600">Boyer-Moore Algorithm</h3>
                        <div className="mb-4">
                            <h4 className="font-semibold">Characteristics:</h4>
                            <p className="text-zinc-500 text-sm dark:text-zinc-400">
                                The Boyer-Moore algorithm uses heuristic techniques (bad character and good suffix) to skip over sections of the text, making it more efficient than brute force.
                            </p>
                        </div>
                        <div className="mb-4">
                            <h4 className="font-semibold">Time Complexity:</h4>
                            <p className="text-sm dark:text-zinc-400">
                                O(n / m) in the best case, O(n + m) in the worst case.
                            </p>
                        </div>
                        <div className="mb-4">
                            <h4 className="font-semibold">Implementation:</h4>
                            <div className="dark:bg-zinc-800 dark:text-zinc-300 text-zinc-700 bg-zinc-200 mt-2 w-full overflow-scroll">
                                <pre className="text-sm">
                                    {`
function boyerMoore(text, pattern) {
    let m = pattern.length;
    let n = text.length;
    let badChar = preprocessBadCharacter(pattern);
    let s = 0;

    while (s <= (n - m)) {
        let j = m - 1;
        while (j >= 0 && pattern[j] === text[s + j]) {
            j--;
        }
        if (j < 0) {
            console.log('Pattern found at index ' + s);
            s += (s + m < n) ? m - badChar[text[s + m]] : 1;
        } else {
            s += Math.max(1, j - badChar[text[s + j]]);
        }
    }
}

function preprocessBadCharacter(pattern) {
    let badChar = Array(256).fill(-1);
    for (let i = 0; i < pattern.length; i++) {
        badChar[pattern[i].charCodeAt(0)] = i;
    }
    return badChar;
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

export default StringMatchingPage;