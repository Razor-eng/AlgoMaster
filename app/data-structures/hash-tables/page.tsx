import DsaLayout from '@/components/DsaLayout'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import MermaidDiagram from '@/components/MermaidDiagram'
import { TypeModal } from '@/components/TypeModal'

class HashTable<T> {
  private table: Array<Array<[string, T]>>
  private size: number

  constructor(size: number = 53) {
    this.table = new Array(size)
    this.size = size
  }

  private hash(key: string): number {
    let total = 0
    const WEIRD_PRIME = 31
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      const char = key[i]
      const value = char.charCodeAt(0) - 96
      total = (total * WEIRD_PRIME + value) % this.size
    }
    return total
  }

  set(key: string, value: T): void {
    const index = this.hash(key)
    if (!this.table[index]) {
      this.table[index] = []
    }
    this.table[index].push([key, value])
  }

  get(key: string): T | undefined {
    const index = this.hash(key)
    if (this.table[index]) {
      for (let i = 0; i < this.table[index].length; i++) {
        if (this.table[index][i][0] === key) {
          return this.table[index][i][1]
        }
      }
    }
    return undefined
  }

  remove(key: string): boolean {
    const index = this.hash(key)
    if (this.table[index]) {
      for (let i = 0; i < this.table[index].length; i++) {
        if (this.table[index][i][0] === key) {
          this.table[index].splice(i, 1)
          return true
        }
      }
    }
    return false
  }

  keys(): string[] {
    const keysArr: string[] = []
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i]) {
        for (let j = 0; j < this.table[i].length; j++) {
          keysArr.push(this.table[i][j][0])
        }
      }
    }
    return keysArr
  }

  values(): T[] {
    const valuesArr: T[] = []
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i]) {
        for (let j = 0; j < this.table[i].length; j++) {
          valuesArr.push(this.table[i][j][1])
        }
      }
    }
    return valuesArr
  }
}

export default function HashTablesPage() {
  const hashTableDiagram = `
    graph TD
      A[Hash Table] --> B[0]
      A --> C[1]
      A --> D[2]
      A --> E[...]
      A --> F[n-1]
      B --> G["key1: value1"]
      C --> H["key2: value2"]
      C --> I["key3: value3"]
      D --> J["key4: value4"]
      F --> K["key5: value5"]
  `;

  return (
    <DsaLayout title="Hash Tables">
      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Introduction to Hash Tables</h2>
          <p className="text-gray-700">A hash table is a data structure that implements an associative array abstract data type, a structure that can map keys to values. It uses a hash function to compute an index into an array of buckets or slots, from which the desired value can be found.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Hash Table Structure</h2>
          <p className="text-gray-700 mb-4">The following diagram illustrates the structure of a hash table:</p>
          <MermaidDiagram chart={hashTableDiagram} />
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Types of Hash Tables</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li className="flex items-center">
              Open Addressing: All elements are stored directly in the hash table array
              <TypeModal
                title="Open Addressing"
                description="All elements are stored directly in the hash table array"
                content={
                  <div>
                    <p>In open addressing, all elements are stored in the hash table array itself. When a collision occurs, the element is placed in the next available slot.</p>
                    <pre className="bg-gray-100 dark:bg-zinc-800 p-2 rounded mt-2">
                      <code>{`
class OpenAddressingHashTable {
  constructor(size = 53) {
    this.table = new Array(size);
    this.size = 0;
  }

  hash(key) {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      total = (total + key.charCodeAt(i)) % this.table.length;
    }
    return total;
  }

  set(key, value) {
    let index = this.hash(key);
    while (this.table[index] !== undefined) {
      index = (index + 1) % this.table.length;
    }
    this.table[index] = [key, value];
    this.size++;
  }

  get(key) {
    let index = this.hash(key);
    while (this.table[index] !== undefined) {
      if (this.table[index][0] === key) {
        return this.table[index][1];
      }
      index = (index + 1) % this.table.length;
    }
    return undefined;
  }
}
                      `}</code>
                    </pre>
                  </div>
                }
              />
            </li>
            <li className="flex items-center">
              Separate Chaining: Each bucket is independent and has some sort of list of entries with the same index
              <TypeModal
                title="Separate Chaining"
                description="Each bucket has a list of entries with the same index"
                content={
                  <div>
                    <p>In separate chaining, each bucket is independent and contains a list of all the entries hashed to that index.</p>
                    <pre className="bg-gray-100 dark:bg-zinc-800 p-2 rounded mt-2">
                      <code>{`
class SeparateChainingHashTable {
  constructor(size = 53) {
    this.table = new Array(size);
  }

  hash(key) {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      total = (total + key.charCodeAt(i)) % this.table.length;
    }
    return total;
  }

  set(key, value) {
    let index = this.hash(key);
    if (!this.table[index]) {
      this.table[index] = [];
    }
    this.table[index].push([key, value]);
  }

  get(key) {
    let index = this.hash(key);
    if (this.table[index]) {
      for (let i = 0; i < this.table[index].length; i++) {
        if (this.table[index][i][0] === key) {
          return this.table[index][i][1];
        }
      }
    }
    return undefined;
  }
}
                      `}</code>
                    </pre>
                  </div>
                }
              />
            </li>
            <li className="flex items-center">
              Double Hashing: Uses two hash functions to reduce the number of collisions
              <TypeModal
                title="Double Hashing"
                description="Uses two hash functions to reduce collisions"
                content={
                  <div>
                    <p>Double hashing uses two hash functions to reduce the number of collisions and distribute the elements more uniformly.</p>
                    <pre className="bg-gray-100 dark:bg-zinc-800 p-2 rounded mt-2">
                      <code>{`
class DoubleHashingHashTable {
  constructor(size = 53) {
    this.table = new Array(size);
    this.size = 0;
  }

  hash1(key) {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      total = (total + key.charCodeAt(i)) % this.table.length;
    }
    return total;
  }

  hash2(key) {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      total = (total + key.charCodeAt(i) * 13) % this.table.length;
    }
    return total;
  }

  set(key, value) {
    let index = this.hash1(key);
    let step = this.hash2(key);
    while (this.table[index] !== undefined) {
      index = (index + step) % this.table.length;
    }
    this.table[index] = [key, value];
    this.size++;
  }

  get(key) {
    let index = this.hash1(key);
    let step = this.hash2(key);
    while (this.table[index] !== undefined) {
      if (this.table[index][0] === key) {
        return this.table[index][1];
      }
      index = (index + step) % this.table.length;
    }
    return undefined;
  }
}
                      `}</code>
                    </pre>
                  </div>
                }
              />
            </li>
            <li className="flex items-center">
              Robin Hood Hashing: Open addressing scheme that moves keys around to reduce variance in probe sequence length
              <TypeModal
                title="Robin Hood Hashing"
                description="Moves keys to reduce variance in probe sequence length"
                content={
                  <div>
                    <p>Robin Hood hashing is an open addressing scheme that moves keys around to reduce the variance in probe sequence length, improving performance.</p>
                    <pre className="bg-gray-100 dark:bg-zinc-800 p-2 rounded mt-2">
                      <code>{`
class RobinHoodHashTable {
  constructor(size = 53) {
    this.table = new Array(size);
    this.size = 0;
  }

  hash(key) {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      total = (total + key.charCodeAt(i)) % this.table.length;
    }
    return total;
  }

  set(key, value) {
    let index = this.hash(key);
    let distance = 0;
    while (true) {
      if (this.table[index] === undefined) {
        this.table[index] = [key, value, distance];
        this.size++;
        return;
      }
      if (this.table[index][0] === key) {
        this.table[index][1] = value;
        return;
      }
      if (this.table[index][2] < distance) {
        [key, value, distance] = [this.table[index][0], this.table[index][1], distance];
        this.table[index] = [key, value, distance];
      }
      index = (index + 1) % this.table.length;
      distance++;
    }
  }

  get(key) {
    let index = this.hash(key);
    let distance = 0;
    while (this.table[index] !== undefined && distance <= this.table[index][2]) {
      if (this.table[index][0] === key) {
        return this.table[index][1];
      }
      index = (index + 1) % this.table.length;
      distance++;
    }
    return undefined;
  }
}
                      `}</code>
                    </pre>
                  </div>
                }
              />
            </li>
            <li className="flex items-center">
              Cuckoo Hashing: Uses two hash functions to provide worst-case O(1) lookup time
              <TypeModal
                title="Cuckoo Hashing"
                description="Uses two hash functions for O(1) lookup time"
                content={
                  <div>
                    <p>Cuckoo hashing uses two hash functions to provide worst-case O(1) lookup time. It may occasionally require rebuilding the hash table, but this occurs rarely.</p>
                    <pre className="bg-gray-100 dark:bg-zinc-800 p-2 rounded mt-2">
                      <code>{`
class CuckooHashTable {
  constructor(size = 53) {
    this.table1 = new Array(size);
    this.table2 = new Array(size);
    this.size = size;
  }

  hash1(key) {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      total = (total + key.charCodeAt(i)) % this.size;
    }
    return total;
  }

  hash2(key) {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      total = (total + key.charCodeAt(i) * 13) % this.size;
    }
    return total;
  }

  set(key, value) {
    if (this.get(key) !== undefined) {
      this.remove(key);
    }
    
    let index1 = this.hash1(key);
    let index2 = this.hash2(key);
    
    if (!this.table1[index1]) {
      this.table1[index1] = [key, value];
      return;
    }
    
    if (!this.table2[index2]) {
      this.table2[index2] = [key, value];
      return;
    }
    
    let temp = this.table1[index1];
    this.table1[index1] = [key, value];
    this.rehash(temp[0], temp[1], 2);
  }

  rehash(key, value, count) {
    if (count > 100) {
      this.resize();
      this.set(key, value);
      return;
    }
    
    let index1 = this.hash1(key);
    let index2 = this.hash2(key);
    
    if (!this.table2[index2]) {
      this.table2[index2] = [key, value];
      return;
    }
    
    let temp = this.table2[index2];
    this.table2[index2] = [key, value];
    this.rehash(temp[0], temp[1], count + 1);
  }

  get(key) {
    let index1 = this.hash1(key);
    let index2 = this.hash2(key);
    
    if (this.table1[index1] && this.table1[index1][0] === key) {
      return this.table1[index1][1];
    }
    if (this.table2[index2] && this.table2[index2][0] === key) {
      return this.table2[index2][1];
    }
    return undefined;
  }

  remove(key) {
    let index1 = this.hash1(key);
    let index2 = this.hash2(key);
    
    if (this.table1[index1] && this.table1[index1][0] === key) {
      this.table1[index1] = undefined;
      return true;
    }
    if (this.table2[index2] && this.table2[index2][0] === key) {
      this.table2[index2] = undefined;
      return true;
    }
    return false;
  }

  resize() {
    let oldTable1 = this.table1;
    let oldTable2 = this.table2;
    this.size *= 2;
    this.table1 = new Array(this.size);
    this.table2 = new Array(this.size);
    
    oldTable1.forEach(item => {
      if (item) this.set(item[0], item[1]);
    });
    oldTable2.forEach(item => {
      if (item) this.set(item[0], item[1]);
    });
  }
}
                      `}</code>
                    </pre>
                  </div>
                }
              />
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Characteristics of Hash Tables</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Fast access for lookups, insertions, and deletions (average case O(1))</li>
            <li>Uses a hash function to map keys to indices</li>
            <li>Handles collisions through various methods (e.g., chaining, open addressing)</li>
            <li>Dynamically resizable to maintain efficiency</li>
            <li>Provides key-value pair storage</li>
            <li>Non-ordered structure (does not maintain insertion order)</li>
            <li>Efficient for large datasets</li>
            <li>Supports fast data retrieval based on unique keys</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Time Complexity</h2>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Operation</TableHead>
                <TableHead>Average Case</TableHead>
                <TableHead>Worst Case</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Insert</TableCell>
                <TableCell>O(1)</TableCell>
                <TableCell>O(n)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Delete</TableCell>
                <TableCell>O(1)</TableCell>
                <TableCell>O(n)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Search</TableCell>
                <TableCell>O(1)</TableCell>
                <TableCell>O(n)</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Common Operations and Their Implementations</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Hash Function</AccordionTrigger>
              <AccordionContent>
                <p className="mb-2">A simple hash function for string keys:</p>
                <pre className="bg-gray-100 dark:bg-zinc-800 p-2 rounded"><code>{`
private hash(key: string): number {
  let total = 0
  const WEIRD_PRIME = 31
  for (let i = 0; i < Math.min(key.length, 100); i++) {
    const char = key[i]
    const value = char.charCodeAt(0) - 96
    total = (total * WEIRD_PRIME + value) % this.size
  }
  return total
}
                `}</code></pre>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Set (Insert)</AccordionTrigger>
              <AccordionContent>
                <p className="mb-2">Inserting a key-value pair into the hash table:</p>
                <pre className="bg-gray-100 dark:bg-zinc-800 p-2 rounded"><code>{`
set(key: string, value: T): void {
  const index = this.hash(key)
  if (!this.table[index]) {
    this.table[index] = []
  }
  this.table[index].push([key, value])
}
                `}</code></pre>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Get (Search)</AccordionTrigger>
              <AccordionContent>
                <p className="mb-2">Retrieving a value by its key:</p>
                <pre className="bg-gray-100 dark:bg-zinc-800 p-2 rounded"><code>{`
get(key: string): T | undefined {
  const index = this.hash(key)
  if (this.table[index]) {
    for (let i = 0; i < this.table[index].length; i++) {
      if (this.table[index][i][0] === key) {
        return this.table[index][i][1]
      }
    }
  }
  return undefined
}
                `}</code></pre>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Remove (Delete)</AccordionTrigger>
              <AccordionContent>
                <p className="mb-2">Removing a key-value pair from the hash table:</p>
                <pre className="bg-gray-100 dark:bg-zinc-800 p-2 rounded"><code>{`
remove(key: string): boolean {
  const index = this.hash(key)
  if (this.table[index]) {
    for (let i = 0; i < this.table[index].length; i++) {
      if (this.table[index][i][0] === key) {
        this.table[index].splice(i, 1)
        return true
      }
    }
  }
  return false
}
                `}</code></pre>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>Keys and Values</AccordionTrigger>
              <AccordionContent>
                <p className="mb-2">Retrieving all keys and values from the hash table:</p>
                <pre className="bg-gray-100 dark:bg-zinc-800 p-2 rounded"><code>{`
keys(): string[] {
  const keysArr: string[] = []
  for (let i = 0; i < this.table.length; i++) {
    if (this.table[i]) {
      for (let j = 0; j < this.table[i].length; j++) {
        keysArr.push(this.table[i][j][0])
      }
    }
  }
  return keysArr
}

values(): T[] {
  const valuesArr: T[] = []
  for (let i = 0; i < this.table.length; i++) {
    if (this.table[i]) {
      for (let j = 0; j < this.table[i].length; j++) {
        valuesArr.push(this.table[i][j][1])
      }
    }
  }
  return valuesArr
}
                `}</code></pre>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>
      </div>
    </DsaLayout>
  )
}

