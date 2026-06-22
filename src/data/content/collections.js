export const COLLECTIONS_CONTENT = {
  overview: `The Java Collections Framework is a unified architecture for storing and manipulating groups of objects. It provides interfaces, implementations, and algorithms. The two root interfaces are Collection (List, Set, Queue) and Map (separate hierarchy). Every collection trades off between speed, ordering, uniqueness, and thread safety — picking the right one is a core interview skill.`,

  interviewQA: [
    {
      q: 'What is the difference between ArrayList and LinkedList?',
      a: `ArrayList is backed by a dynamic array. get(i) is O(1) — direct index access. add() at end is amortized O(1) but O(n) when resizing. remove() or insert in the middle is O(n) due to shifting. LinkedList is a doubly linked list. add/remove at head or tail is O(1). get(i) is O(n) — must traverse from head. LinkedList uses more memory per element (stores next + prev pointers). Use ArrayList for most cases. Use LinkedList only when you frequently insert/remove at both ends — and even then ArrayDeque is usually better.`
    },
    {
      q: 'What is the difference between HashMap, LinkedHashMap, and TreeMap?',
      a: `HashMap stores key-value pairs with no guaranteed order. O(1) average for get/put. LinkedHashMap extends HashMap and maintains insertion order via a doubly linked list. Same O(1) performance. Use for LRU caches or when iteration order matters. TreeMap stores keys in sorted order (natural or Comparator). Backed by a Red-Black Tree. O(log n) for all operations. Has range methods: firstKey(), lastKey(), floorKey(), ceilingKey(), subMap(). Use when you need sorted keys or range queries.`
    },
    {
      q: 'What is the difference between HashSet, LinkedHashSet, and TreeSet?',
      a: `HashSet is backed by a HashMap internally — elements are HashMap keys, dummy object is the value. No ordering, O(1) add/contains/remove. LinkedHashSet extends HashSet and maintains insertion order. O(1) operations. TreeSet is backed by a TreeMap. Maintains sorted order. O(log n) operations. Has methods like first(), last(), floor(), ceiling(), headSet(), tailSet(). Rule: Set = no duplicates. The variant determines ordering and performance.`
    },
    {
      q: 'How does ArrayList resize internally?',
      a: `ArrayList default capacity is 10. When full, it grows by 50% — new capacity = old capacity * 1.5 (specifically (oldCapacity * 3) / 2 + 1). It calls Arrays.copyOf() to create a new array and copy elements — O(n) operation. Amortized over many inserts, the cost averages out to O(1) per insert. If you know the expected size, use new ArrayList<>(initialCapacity) to avoid resizing overhead.`
    },
    {
      q: 'What is PriorityQueue and how does it work internally?',
      a: `PriorityQueue is a min-heap by default — poll() always returns the smallest element. Backed by an Object[] array representing the heap. insert() is O(log n) — element added at end, then sifted up. poll() is O(log n) — root removed, last element placed at root, sifted down. peek() is O(1) — just returns root. For max-heap: new PriorityQueue<>(Collections.reverseOrder()) or custom Comparator. Used for Dijkstra's algorithm, task scheduling, top-K problems.`
    },
    {
      q: 'When would you use ArrayDeque over LinkedList?',
      a: `ArrayDeque is backed by a resizable array. LinkedList is a doubly linked list. ArrayDeque is faster in practice — better cache locality (contiguous memory), no node allocation overhead. ArrayDeque does not allow null elements. LinkedList allows nulls. For stack operations (push/pop) and queue operations (offer/poll), always prefer ArrayDeque over LinkedList. Java docs themselves recommend ArrayDeque over Stack and LinkedList for these use cases.`
    },
    {
      q: 'How would you implement an LRU Cache using Java Collections?',
      a: `Use LinkedHashMap with access-order mode: new LinkedHashMap<>(capacity, 0.75f, true). The third parameter true enables access-order (most recently accessed moves to tail). Override removeEldestEntry() to evict when size exceeds capacity. get() and put() both count as access — eldest (least recently used) is at head and gets evicted first. This gives O(1) get and put, same as HashMap, with automatic LRU eviction.`
    },
    {
      q: 'What is the difference between fail-fast and fail-safe iterators?',
      a: `Fail-fast iterators throw ConcurrentModificationException if the collection is modified during iteration. They check a modCount field — if it changes, exception is thrown. ArrayList, HashMap, HashSet use fail-fast iterators. Fail-safe iterators work on a copy of the collection — modifications don't affect ongoing iteration. No exception thrown. ConcurrentHashMap, CopyOnWriteArrayList use fail-safe iterators. Trade-off: fail-safe uses more memory (copy), fail-fast is memory efficient but unsafe under concurrent modification.`
    },
    {
      q: 'What is the difference between Comparable and Comparator?',
      a: `Comparable is implemented by the class itself — defines natural ordering. One sort order per class. Method: compareTo(T o). Example: String, Integer implement Comparable. Comparator is external — defines custom ordering. Multiple sort orders possible. Method: compare(T o1, T o2). Use Comparable when there is one obvious natural order. Use Comparator when you need multiple orderings, or when you can't modify the class. TreeMap and TreeSet accept a Comparator in their constructor for custom key ordering.`
    },
  ],

  code: [
    {
      title: 'List — ArrayList vs LinkedList',
      code: `// ArrayList — random access O(1)
List<String> arrayList = new ArrayList<>();
arrayList.add("Java");
arrayList.add("Python");
arrayList.get(0);          // O(1)
arrayList.remove(0);       // O(n) — shifts elements

// ArrayList with initial capacity — avoid resizing
List<String> list = new ArrayList<>(100);

// LinkedList — fast head/tail ops
LinkedList<String> linkedList = new LinkedList<>();
linkedList.addFirst("Java");   // O(1)
linkedList.addLast("Python");  // O(1)
linkedList.removeFirst();      // O(1)
linkedList.get(0);             // O(n) — traverses

// ArrayDeque — better than LinkedList for stack/queue
Deque<String> deque = new ArrayDeque<>();
deque.push("Java");    // stack push
deque.pop();           // stack pop
deque.offer("Python"); // queue enqueue
deque.poll();          // queue dequeue`
    },
    {
      title: 'Map variants — HashMap, LinkedHashMap, TreeMap',
      code: `// HashMap — no ordering
Map<String, Integer> hashMap = new HashMap<>();
hashMap.put("banana", 2);
hashMap.put("apple", 1);
hashMap.put("cherry", 3);
// iteration order not guaranteed

// LinkedHashMap — insertion order
Map<String, Integer> linkedMap = new LinkedHashMap<>();
linkedMap.put("banana", 2);
linkedMap.put("apple", 1);
linkedMap.put("cherry", 3);
// iterates: banana, apple, cherry

// TreeMap — sorted by key
Map<String, Integer> treeMap = new TreeMap<>();
treeMap.put("banana", 2);
treeMap.put("apple", 1);
treeMap.put("cherry", 3);
// iterates: apple, banana, cherry

// TreeMap range operations
TreeMap<Integer, String> tm = new TreeMap<>();
tm.put(1, "one"); tm.put(3, "three"); tm.put(5, "five");
tm.floorKey(4);    // 3 — largest key <= 4
tm.ceilingKey(4);  // 5 — smallest key >= 4
tm.subMap(1, 4);   // {1=one, 3=three}`
    },
    {
      title: 'Set variants — HashSet, LinkedHashSet, TreeSet',
      code: `// HashSet — no ordering, O(1)
Set<String> hashSet = new HashSet<>();
hashSet.add("Java");
hashSet.add("Java"); // duplicate ignored
hashSet.contains("Java"); // O(1)

// LinkedHashSet — insertion order
Set<String> linkedSet = new LinkedHashSet<>();
linkedSet.add("banana");
linkedSet.add("apple");
// iterates: banana, apple

// TreeSet — sorted order, O(log n)
Set<String> treeSet = new TreeSet<>();
treeSet.add("banana");
treeSet.add("apple");
treeSet.add("cherry");
// iterates: apple, banana, cherry

TreeSet<Integer> ts = new TreeSet<>();
ts.add(1); ts.add(3); ts.add(5);
ts.floor(4);    // 3
ts.ceiling(4);  // 5
ts.headSet(3);  // [1] — elements < 3
ts.tailSet(3);  // [3, 5] — elements >= 3`
    },
    {
      title: 'PriorityQueue — min/max heap',
      code: `// Min-heap (default) — poll() returns smallest
PriorityQueue<Integer> minHeap = new PriorityQueue<>();
minHeap.offer(5);
minHeap.offer(1);
minHeap.offer(3);
minHeap.poll(); // 1 — smallest

// Max-heap — poll() returns largest
PriorityQueue<Integer> maxHeap =
    new PriorityQueue<>(Collections.reverseOrder());
maxHeap.offer(5);
maxHeap.offer(1);
maxHeap.offer(3);
maxHeap.poll(); // 5 — largest

// Top-K largest elements — classic interview pattern
public int[] topKFrequent(int[] nums, int k) {
    Map<Integer, Integer> freq = new HashMap<>();
    for (int n : nums) freq.merge(n, 1, Integer::sum);

    // Min-heap of size k
    PriorityQueue<Integer> pq =
        new PriorityQueue<>(Comparator.comparingInt(freq::get));

    for (int num : freq.keySet()) {
        pq.offer(num);
        if (pq.size() > k) pq.poll(); // remove least frequent
    }
    return pq.stream().mapToInt(i -> i).toArray();
}`
    },
    {
      title: 'LRU Cache using LinkedHashMap',
      code: `class LRUCache extends LinkedHashMap<Integer, Integer> {
    private final int capacity;

    public LRUCache(int capacity) {
        super(capacity, 0.75f, true); // true = access-order
        this.capacity = capacity;
    }

    public int get(int key) {
        return super.getOrDefault(key, -1);
    }

    public void put(int key, int value) {
        super.put(key, value);
    }

    @Override
    protected boolean removeEldestEntry(Map.Entry<Integer, Integer> eldest) {
        return size() > capacity; // evict LRU when over capacity
    }
}

// Usage
LRUCache cache = new LRUCache(3);
cache.put(1, 1);
cache.put(2, 2);
cache.put(3, 3);
cache.get(1);    // access 1 — moves to most recent
cache.put(4, 4); // evicts 2 (least recently used)`
    },
    {
      title: 'Comparable vs Comparator',
      code: `// Comparable — natural ordering inside the class
class Student implements Comparable<Student> {
    String name;
    int grade;

    @Override
    public int compareTo(Student other) {
        return Integer.compare(this.grade, other.grade); // sort by grade
    }
}

// Comparator — external, multiple orderings
List<Student> students = new ArrayList<>();

// Sort by name
students.sort(Comparator.comparing(s -> s.name));

// Sort by grade descending
students.sort(Comparator.comparingInt((Student s) -> s.grade).reversed());

// Sort by grade, then name
students.sort(Comparator.comparingInt((Student s) -> s.grade)
                        .thenComparing(s -> s.name));

// TreeMap with custom Comparator
TreeMap<String, Integer> map =
    new TreeMap<>(Comparator.reverseOrder()); // reverse alphabetical`
    }
  ],

  deepDive: `**ArrayList internals**
Backed by Object[] elementData. Default capacity = 10. Growth: newCapacity = oldCapacity + (oldCapacity >> 1) — approximately 1.5x. Uses Arrays.copyOf() for resizing — creates new array, copies all elements O(n). trimToSize() shrinks array to exact size. ensureCapacity(n) pre-allocates space.

**LinkedHashMap internals**
Extends HashMap. Each Entry node has two extra pointers: before and after. These form a doubly linked list across all entries in insertion or access order. The head of this list is the eldest entry. removeEldestEntry() is called after every put() — if it returns true, the head (eldest) entry is removed. This is the mechanism behind LRU cache implementation.

**TreeMap / TreeSet internals**
Backed by a Red-Black Tree (same as HashMap's collision tree). Self-balancing — height stays O(log n). All operations (put, get, remove, contains) are O(log n). Supports NavigableMap interface: lowerKey, floorKey, ceilingKey, higherKey, descendingMap, subMap, headMap, tailMap. Null keys not allowed (can't compare null).

**PriorityQueue internals**
Backed by Object[] queue. Parent of element at index i is at (i-1)/2. Children of element at i are at 2i+1 and 2i+2. siftUp() called on insert — new element bubbles up until heap property restored. siftDown() called on remove — last element placed at root, sinks down. heapify() used in constructor when building from collection — O(n) using bottom-up approach.

**Fail-fast mechanism**
ArrayList and HashMap maintain a modCount field. Iterator stores expectedModCount at creation. Every next() call checks: if modCount != expectedModCount → throw ConcurrentModificationException. Modifications via Iterator's own remove() method update expectedModCount — safe. External modification during iteration is unsafe.

**Collection choosing guide**
Need ordering + duplicates → List. Need uniqueness → Set. Need key-value → Map. Need ordering by insertion → Linked variants. Need sorted order → Tree variants. Need priority → PriorityQueue. Need thread safety → ConcurrentHashMap, CopyOnWriteArrayList.`,

  revisionNotes: `**List**
- ArrayList: Object[] backed, O(1) get, O(n) insert/remove middle, grows 1.5x
- LinkedList: doubly linked, O(1) head/tail ops, O(n) get(i), more memory
- ArrayDeque: faster than LinkedList for stack/queue, no null, prefer over Stack

**Map**
- HashMap: no order, O(1) avg
- LinkedHashMap: insertion order, O(1) avg, LRU cache with accessOrder=true
- TreeMap: sorted keys, O(log n), has floor/ceiling/subMap

**Set**
- HashSet: backed by HashMap, no order, O(1)
- LinkedHashSet: insertion order, O(1)
- TreeSet: sorted, O(log n), has floor/ceiling/headSet/tailSet

**PriorityQueue**
- Min-heap by default, poll() → smallest
- Max-heap: new PriorityQueue<>(Collections.reverseOrder())
- insert/remove O(log n), peek O(1)

**Fail-fast vs fail-safe**
- Fail-fast: ConcurrentModificationException on structural change during iteration (ArrayList, HashMap)
- Fail-safe: works on copy, no exception (ConcurrentHashMap, CopyOnWriteArrayList)

**Comparable vs Comparator**
- Comparable: inside class, one natural order, compareTo()
- Comparator: external, multiple orders, compare()
- TreeMap/TreeSet accept Comparator in constructor

**LRU Cache**
- LinkedHashMap(capacity, 0.75f, true) + override removeEldestEntry()
- accessOrder=true moves accessed entry to tail, head = LRU`
}