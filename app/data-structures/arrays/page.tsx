import DsaLayout from '@/components/DsaLayout'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import MermaidDiagram from '@/components/MermaidDiagram'
import { TypeModal } from '@/components/TypeModal'

export default function ArraysPage() {
  const arrayDiagram = `
    graph LR
      A[Array] --> B[Index 0]
      A --> C[Index 1]
      A --> D[Index 2]
      A --> E[Index 3]
      A --> F[Index 4]
      B --> G[Element 1]
      C --> H[Element 2]
      D --> I[Element 3]
      E --> J[Element 4]
      F --> K[Element 5]
  `;

  return (
    <DsaLayout title="Arrays">
      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Introduction to Arrays</h2>
          <p className="text-gray-700">An array is a collection of elements, each identified by an index or a key. It is one of the most fundamental data structures in computer science, providing a way to store multiple items of the same type together.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Array Structure</h2>
          <p className="text-gray-700 mb-4">The following diagram illustrates the structure of an array:</p>
          <MermaidDiagram chart={arrayDiagram} />
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Types of Arrays</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li className="flex items-center">
              One-dimensional Arrays: Linear arrays with a single index
              <TypeModal
                title="One-dimensional Arrays"
                description="Linear arrays with a single index"
                content={
                  <div>
                    <p>One-dimensional arrays are the simplest form of arrays. They are a linear collection of elements, each accessed by a single index.</p>
                    <pre className="bg-gray-100 dark:bg-zinc-800 p-2 rounded mt-2">
                      <code>{`
// Example in JavaScript
let arr = [1, 2, 3, 4, 5];

// Accessing elements
console.log(arr[0]); // Output: 1
console.log(arr[3]); // Output: 4
                      `}</code>
                    </pre>
                  </div>
                }
              />
            </li>
            <li className="flex items-center">
              Multi-dimensional Arrays: Arrays with two or more indices (e.g., 2D arrays, 3D arrays)
              <TypeModal
                title="Multi-dimensional Arrays"
                description="Arrays with two or more indices"
                content={
                  <div>
                    <p>Multi-dimensional arrays are arrays of arrays. They can be visualized as tables (2D) or cubes (3D) of data.</p>
                    <pre className="bg-gray-100 dark:bg-zinc-800 p-2 rounded mt-2">
                      <code>{`
// Example of a 2D array in JavaScript
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

// Accessing elements
console.log(matrix[1][2]); // Output: 6
                      `}</code>
                    </pre>
                  </div>
                }
              />
            </li>
            <li className="flex items-center">
              Jagged Arrays: Arrays of arrays with different lengths
              <TypeModal
                title="Jagged Arrays"
                description="Arrays of arrays with different lengths"
                content={
                  <div>
                    <p>Jagged arrays are multi-dimensional arrays where each sub-array can have a different length.</p>
                    <pre className="bg-gray-100 dark:bg-zinc-800 p-2 rounded mt-2">
                      <code>{`
// Example in JavaScript
let jaggedArray = [
  [1, 2, 3],
  [4, 5],
  [6, 7, 8, 9]
];

// Accessing elements
console.log(jaggedArray[1][1]); // Output: 5
console.log(jaggedArray[2][3]); // Output: 9
                      `}</code>
                    </pre>
                  </div>
                }
              />
            </li>
            <li className="flex items-center">
              Dynamic Arrays: Arrays that can grow or shrink in size
              <TypeModal
                title="Dynamic Arrays"
                description="Arrays that can grow or shrink in size"
                content={
                  <div>
                    <p>Dynamic arrays automatically resize themselves when elements are added or removed. In JavaScript, all arrays are dynamic by default.</p>
                    <pre className="bg-gray-100 dark:bg-zinc-800 p-2 rounded mt-2">
                      <code>{`
// Example in JavaScript
let dynamicArray = [];

// Adding elements
dynamicArray.push(1);
dynamicArray.push(2);
console.log(dynamicArray); // Output: [1, 2]

// Removing elements
dynamicArray.pop();
console.log(dynamicArray); // Output: [1]
                      `}</code>
                    </pre>
                  </div>
                }
              />
            </li>
            <li className="flex items-center">
              Associative Arrays: Arrays that use named keys instead of numeric indices
              <TypeModal
                title="Associative Arrays"
                description="Arrays that use named keys instead of numeric indices"
                content={
                  <div>
                    <p>Associative arrays, also known as maps or dictionaries in other languages, use string keys instead of numeric indices. In JavaScript, objects can be used as associative arrays.</p>
                    <pre className="bg-gray-100 dark:bg-zinc-800 p-2 rounded mt-2">
                      <code>{`
// Example in JavaScript
let assocArray = {
  "name": "John",
  "age": 30,
  "city": "New York"
};

// Accessing elements
console.log(assocArray["name"]); // Output: John
console.log(assocArray.age);     // Output: 30
                      `}</code>
                    </pre>
                  </div>
                }
              />
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Characteristics of Arrays</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Fixed size (in most programming languages)</li>
            <li>Elements are stored in contiguous memory locations</li>
            <li>Allows random access of elements</li>
            <li>Can be multi-dimensional</li>
            <li>Efficient for accessing elements by index</li>
            <li>Homogeneous data structure (all elements are of the same type)</li>
            <li>Static memory allocation (for fixed-size arrays)</li>
            <li>Bound checking is required to prevent index out of range errors</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Time Complexity</h2>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Operation</TableHead>
                <TableHead>Time Complexity</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Access</TableCell>
                <TableCell>O(1)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Search</TableCell>
                <TableCell>O(n)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Insertion</TableCell>
                <TableCell>O(n)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Deletion</TableCell>
                <TableCell>O(n)</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Common Operations and Their Implementations</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Declaration and Initialization</AccordionTrigger>
              <AccordionContent>
                <p className="mb-2">Arrays can be declared and initialized in various ways:</p>
                <pre className="bg-gray-100 dark:bg-zinc-800 p-2 rounded"><code>{`
// JavaScript examples

// Declaration
let arr1;

// Declaration and initialization
let arr2 = new Array();
let arr3 = [];

// Declaration and initialization with elements
let arr4 = [1, 2, 3, 4, 5];

// Declaration with size (in some languages)
let arr5 = new Array(5); // Creates an array of length 5
                `}</code></pre>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Accessing Elements</AccordionTrigger>
              <AccordionContent>
                <p className="mb-2">Elements in an array are accessed using their index:</p>
                <pre className="bg-gray-100 dark:bg-zinc-800 p-2 rounded"><code>{`
function accessElement(arr, index) {
  if (index < 0 || index >= arr.length) {
    return "Index out of bounds";
  }
  return arr[index];
}

let arr = [10, 20, 30, 40, 50];
console.log(accessElement(arr, 2)); // Output: 30
console.log(accessElement(arr, 5)); // Output: Index out of bounds
                `}</code></pre>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Inserting Elements</AccordionTrigger>
              <AccordionContent>
                <p className="mb-2">Inserting elements can be done at the end, beginning, or at a specific index:</p>
                <pre className="bg-gray-100 dark:bg-zinc-800 p-2 rounded"><code>{`
function insertAtEnd(arr, element) {
  arr.push(element);
  return arr;
}

function insertAtBeginning(arr, element) {
  arr.unshift(element);
  return arr;
}

function insertAtIndex(arr, element, index) {
  if (index < 0 || index > arr.length) {
    return "Invalid index";
  }
  arr.splice(index, 0, element);
  return arr;
}

let arr = [1, 2, 3];
console.log(insertAtEnd(arr, 4));        // Output: [1, 2, 3, 4]
console.log(insertAtBeginning(arr, 0));  // Output: [0, 1, 2, 3, 4]
console.log(insertAtIndex(arr, 5, 2));   // Output: [0, 1, 5, 2, 3, 4]
                `}</code></pre>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Deleting Elements</AccordionTrigger>
              <AccordionContent>
                <p className="mb-2">Deleting elements can be done from the end, beginning, or at a specific index:</p>
                <pre className="bg-gray-100 dark:bg-zinc-800 p-2 rounded"><code>{`
function deleteFromEnd(arr) {
  return arr.pop();
}

function deleteFromBeginning(arr) {
  return arr.shift();
}

function deleteAtIndex(arr, index) {
  if (index < 0 || index >= arr.length) {
    return "Invalid index";
  }
  return arr.splice(index, 1)[0];
}

let arr = [1, 2, 3, 4, 5];
console.log(deleteFromEnd(arr));       // Output: 5, arr is now [1, 2, 3, 4]
console.log(deleteFromBeginning(arr)); // Output: 1, arr is now [2, 3, 4]
console.log(deleteAtIndex(arr, 1));    // Output: 3, arr is now [2, 4]
                `}</code></pre>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>Searching Elements</AccordionTrigger>
              <AccordionContent>
                <p className="mb-2">Searching for elements in an array typically involves iterating through the array:</p>
                <pre className="bg-gray-100 dark:bg-zinc-800 p-2 rounded"><code>{`
function linearSearch(arr, element) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === element) {
      return i;
    }
  }
  return -1;
}

let arr = [1, 2, 3, 4, 5];
console.log(linearSearch(arr, 3)); // Output: 2
console.log(linearSearch(arr, 6)); // Output: -1

// JavaScript also provides built-in methods
console.log(arr.indexOf(3));     // Output: 2
console.log(arr.includes(6));    // Output: false
                `}</code></pre>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>
      </div>
    </DsaLayout>
  )
}

