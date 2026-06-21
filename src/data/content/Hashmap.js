export const HASHMAP_DIAGRAM = `<svg width="100%" viewBox="0 0 680 920" role="img" xmlns="http://www.w3.org/2000/svg">
  <title>HashMap internal working diagram</title>
  <defs>
    <marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M2 1L8 5L2 9" fill="none" stroke="context-stroke" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </marker>
  </defs>

  <text font-family="Inter,sans-serif" font-size="14" font-weight="500" fill="#c4c4d0" x="340" y="28" text-anchor="middle">put(key, value) — step by step</text>

  <g>
    <rect x="220" y="44" width="240" height="48" rx="8" stroke-width="0.5" fill="#1e1b3a" stroke="#534AB7"/>
    <text font-family="Inter,sans-serif" font-size="14" font-weight="500" fill="#c4c4d0" x="340" y="63" text-anchor="middle" dominant-baseline="central">1. key.hashCode()</text>
    <text font-family="Inter,sans-serif" font-size="12" fill="#8a8a9a" x="340" y="81" text-anchor="middle" dominant-baseline="central">Converts key to an integer</text>
  </g>
  <line x1="340" y1="92" x2="340" y2="112" stroke="#5a5a6a" stroke-width="1.5" marker-end="url(#arrow)"/>

  <g>
    <rect x="220" y="112" width="240" height="48" rx="8" stroke-width="0.5" fill="#1e1b3a" stroke="#534AB7"/>
    <text font-family="Inter,sans-serif" font-size="14" font-weight="500" fill="#c4c4d0" x="340" y="131" text-anchor="middle" dominant-baseline="central">2. Bit spreading</text>
    <text font-family="Inter,sans-serif" font-size="12" fill="#8a8a9a" x="340" y="149" text-anchor="middle" dominant-baseline="central">hash ^ (hash &gt;&gt;&gt; 16)</text>
  </g>
  <line x1="340" y1="160" x2="340" y2="180" stroke="#5a5a6a" stroke-width="1.5" marker-end="url(#arrow)"/>

  <g>
    <rect x="220" y="180" width="240" height="48" rx="8" stroke-width="0.5" fill="#1e1b3a" stroke="#534AB7"/>
    <text font-family="Inter,sans-serif" font-size="14" font-weight="500" fill="#c4c4d0" x="340" y="199" text-anchor="middle" dominant-baseline="central">3. Bucket index</text>
    <text font-family="Inter,sans-serif" font-size="12" fill="#8a8a9a" x="340" y="217" text-anchor="middle" dominant-baseline="central">index = hash &amp; (n - 1)</text>
  </g>
  <line x1="340" y1="228" x2="340" y2="248" stroke="#5a5a6a" stroke-width="1.5" marker-end="url(#arrow)"/>

  <polygon points="340,248 420,278 340,308 260,278" fill="none" stroke="#5a5a6a" stroke-width="0.8"/>
  <text font-family="Inter,sans-serif" font-size="12" fill="#8a8a9a" x="340" y="274" text-anchor="middle" dominant-baseline="central">Bucket</text>
  <text font-family="Inter,sans-serif" font-size="12" fill="#8a8a9a" x="340" y="290" text-anchor="middle" dominant-baseline="central">empty?</text>

  <line x1="260" y1="278" x2="160" y2="278" stroke="#5a5a6a" stroke-width="1.5" marker-end="url(#arrow)"/>
  <text font-family="Inter,sans-serif" font-size="11" fill="#5a5a6a" x="210" y="268" text-anchor="middle">Yes</text>
  <g>
    <rect x="60" y="255" width="100" height="44" rx="8" stroke-width="0.5" fill="#0d2e26" stroke="#0F6E56"/>
    <text font-family="Inter,sans-serif" font-size="14" font-weight="500" fill="#2dd4aa" x="110" y="274" text-anchor="middle" dominant-baseline="central">Insert</text>
    <text font-family="Inter,sans-serif" font-size="12" fill="#1D9E75" x="110" y="291" text-anchor="middle" dominant-baseline="central">directly</text>
  </g>

  <line x1="420" y1="278" x2="520" y2="278" stroke="#5a5a6a" stroke-width="1.5" marker-end="url(#arrow)"/>
  <text font-family="Inter,sans-serif" font-size="11" fill="#5a5a6a" x="470" y="268" text-anchor="middle">No</text>
  <g>
    <rect x="520" y="255" width="110" height="44" rx="8" stroke-width="0.5" fill="#2d1008" stroke="#993C1D"/>
    <text font-family="Inter,sans-serif" font-size="14" font-weight="500" fill="#f26450" x="575" y="274" text-anchor="middle" dominant-baseline="central">Collision!</text>
    <text font-family="Inter,sans-serif" font-size="12" fill="#D85A30" x="575" y="291" text-anchor="middle" dominant-baseline="central">chain at bucket</text>
  </g>

  <line x1="40" y1="330" x2="640" y2="330" stroke="#1a1a1f" stroke-width="0.5" stroke-dasharray="4 4"/>
  <text font-family="Inter,sans-serif" font-size="14" font-weight="500" fill="#c4c4d0" x="340" y="356" text-anchor="middle">Bucket array (default capacity = 16)</text>

  <g>
    <rect x="50" y="368" width="76" height="36" rx="4" stroke-width="0.5" fill="#131316" stroke="#2a2a32"/>
    <text font-family="Inter,sans-serif" font-size="11" fill="#5a5a6a" x="88" y="390" text-anchor="middle" dominant-baseline="central">bucket[0]</text>
  </g>
  <g>
    <rect x="134" y="368" width="76" height="36" rx="4" stroke-width="0.5" fill="#131316" stroke="#2a2a32"/>
    <text font-family="Inter,sans-serif" font-size="11" fill="#5a5a6a" x="172" y="390" text-anchor="middle" dominant-baseline="central">bucket[1]</text>
  </g>
  <g>
    <rect x="218" y="368" width="76" height="36" rx="4" stroke-width="0.5" fill="#0d2e26" stroke="#0F6E56"/>
    <text font-family="Inter,sans-serif" font-size="11" fill="#2dd4aa" x="256" y="390" text-anchor="middle" dominant-baseline="central">bucket[2]</text>
  </g>
  <g>
    <rect x="302" y="368" width="76" height="36" rx="4" stroke-width="0.5" fill="#131316" stroke="#2a2a32"/>
    <text font-family="Inter,sans-serif" font-size="11" fill="#5a5a6a" x="340" y="390" text-anchor="middle" dominant-baseline="central">bucket[3]</text>
  </g>
  <g>
    <rect x="386" y="368" width="76" height="36" rx="4" stroke-width="0.5" fill="#131316" stroke="#2a2a32"/>
    <text font-family="Inter,sans-serif" font-size="11" fill="#5a5a6a" x="424" y="390" text-anchor="middle" dominant-baseline="central">bucket[4]</text>
  </g>
  <text font-family="Inter,sans-serif" font-size="12" fill="#36363f" x="490" y="390" text-anchor="middle" dominant-baseline="central">...</text>
  <g>
    <rect x="516" y="368" width="76" height="36" rx="4" stroke-width="0.5" fill="#131316" stroke="#2a2a32"/>
    <text font-family="Inter,sans-serif" font-size="11" fill="#5a5a6a" x="554" y="390" text-anchor="middle" dominant-baseline="central">bucket[15]</text>
  </g>

  <line x1="256" y1="404" x2="256" y2="424" stroke="#5a5a6a" stroke-width="1.5" marker-end="url(#arrow)"/>
  <g>
    <rect x="190" y="424" width="130" height="36" rx="4" stroke-width="0.5" fill="#0d2e26" stroke="#0F6E56"/>
    <text font-family="Inter,sans-serif" font-size="11" fill="#2dd4aa" x="256" y="442" text-anchor="middle" dominant-baseline="central">Node(A) → Node(B)</text>
  </g>
  <text font-family="Inter,sans-serif" font-size="11" fill="#5a5a6a" x="256" y="478" text-anchor="middle">LinkedList or Tree</text>

  <line x1="40" y1="500" x2="640" y2="500" stroke="#1a1a1f" stroke-width="0.5" stroke-dasharray="4 4"/>
  <text font-family="Inter,sans-serif" font-size="14" font-weight="500" fill="#c4c4d0" x="340" y="524" text-anchor="middle">Collision handling — Java 8</text>

  <g>
    <rect x="50" y="538" width="260" height="52" rx="8" stroke-width="0.5" fill="#1e1b3a" stroke="#534AB7"/>
    <text font-family="Inter,sans-serif" font-size="14" font-weight="500" fill="#c4c4d0" x="180" y="557" text-anchor="middle" dominant-baseline="central">LinkedList</text>
    <text font-family="Inter,sans-serif" font-size="12" fill="#8a8a9a" x="180" y="575" text-anchor="middle" dominant-baseline="central">size ≤ 8 → O(n) search</text>
  </g>
  <line x1="310" y1="564" x2="370" y2="564" stroke="#5a5a6a" stroke-width="1.5" marker-end="url(#arrow)"/>
  <text font-family="Inter,sans-serif" font-size="11" fill="#5a5a6a" x="340" y="554" text-anchor="middle">size &gt; 8</text>
  <g>
    <rect x="370" y="538" width="260" height="52" rx="8" stroke-width="0.5" fill="#0d2e26" stroke="#0F6E56"/>
    <text font-family="Inter,sans-serif" font-size="14" font-weight="500" fill="#2dd4aa" x="500" y="557" text-anchor="middle" dominant-baseline="central">Red-Black Tree</text>
    <text font-family="Inter,sans-serif" font-size="12" fill="#1D9E75" x="500" y="575" text-anchor="middle" dominant-baseline="central">O(log n) search</text>
  </g>
  <path d="M 500 590 Q 500 610 340 610 Q 180 610 180 590" fill="none" stroke="#2a2a32" stroke-width="0.8" stroke-dasharray="4 3" marker-end="url(#arrow)"/>
  <text font-family="Inter,sans-serif" font-size="11" fill="#5a5a6a" x="340" y="625" text-anchor="middle">size &lt; 6 → reverts to LinkedList</text>

  <line x1="40" y1="645" x2="640" y2="645" stroke="#1a1a1f" stroke-width="0.5" stroke-dasharray="4 4"/>
  <text font-family="Inter,sans-serif" font-size="14" font-weight="500" fill="#c4c4d0" x="340" y="668" text-anchor="middle">Resizing — load factor 0.75</text>

  <g>
    <rect x="50" y="682" width="175" height="52" rx="8" stroke-width="0.5" fill="#131316" stroke="#2a2a32"/>
    <text font-family="Inter,sans-serif" font-size="14" font-weight="500" fill="#c4c4d0" x="138" y="701" text-anchor="middle" dominant-baseline="central">Capacity = 16</text>
    <text font-family="Inter,sans-serif" font-size="12" fill="#5a5a6a" x="138" y="719" text-anchor="middle" dominant-baseline="central">Threshold = 12 entries</text>
  </g>
  <line x1="225" y1="708" x2="275" y2="708" stroke="#5a5a6a" stroke-width="1.5" marker-end="url(#arrow)"/>
  <text font-family="Inter,sans-serif" font-size="11" fill="#5a5a6a" x="252" y="698" text-anchor="middle">&gt;12</text>
  <g>
    <rect x="275" y="682" width="175" height="52" rx="8" stroke-width="0.5" fill="#2d1f06" stroke="#854F0B"/>
    <text font-family="Inter,sans-serif" font-size="14" font-weight="500" fill="#f59e0b" x="363" y="701" text-anchor="middle" dominant-baseline="central">Resize → 32</text>
    <text font-family="Inter,sans-serif" font-size="12" fill="#BA7517" x="363" y="719" text-anchor="middle" dominant-baseline="central">Rehash all entries O(n)</text>
  </g>
  <text font-family="Inter,sans-serif" font-size="11" fill="#5a5a6a" x="468" y="696" text-anchor="start">Tip: init with</text>
  <text font-family="Inter,sans-serif" font-size="11" fill="#5a5a6a" x="468" y="712" text-anchor="start">new HashMap&lt;&gt;(64)</text>
  <text font-family="Inter,sans-serif" font-size="11" fill="#5a5a6a" x="468" y="728" text-anchor="start">to avoid resize</text>

  <line x1="40" y1="750" x2="640" y2="750" stroke="#1a1a1f" stroke-width="0.5" stroke-dasharray="4 4"/>
  <text font-family="Inter,sans-serif" font-size="14" font-weight="500" fill="#c4c4d0" x="340" y="774" text-anchor="middle">equals() + hashCode() contract</text>

  <g>
    <rect x="50" y="788" width="580" height="44" rx="8" stroke-width="0.5" fill="#2d1008" stroke="#993C1D"/>
    <text font-family="Inter,sans-serif" font-size="13" font-weight="500" fill="#f26450" x="340" y="807" text-anchor="middle" dominant-baseline="central">Rule: if a.equals(b) == true → a.hashCode() must == b.hashCode()</text>
    <text font-family="Inter,sans-serif" font-size="11" fill="#D85A30" x="340" y="824" text-anchor="middle" dominant-baseline="central">Reverse not required — same hashCode does NOT mean equals</text>
  </g>

  <g>
    <rect x="50" y="844" width="175" height="52" rx="8" stroke-width="0.5" fill="#0d2e26" stroke="#0F6E56"/>
    <text font-family="Inter,sans-serif" font-size="13" font-weight="500" fill="#2dd4aa" x="138" y="862" text-anchor="middle" dominant-baseline="central">Same key twice</text>
    <text font-family="Inter,sans-serif" font-size="11" fill="#1D9E75" x="138" y="880" text-anchor="middle" dominant-baseline="central">Value overwritten</text>
  </g>
  <g>
    <rect x="253" y="844" width="175" height="52" rx="8" stroke-width="0.5" fill="#1e1b3a" stroke="#534AB7"/>
    <text font-family="Inter,sans-serif" font-size="13" font-weight="500" fill="#c4c4d0" x="340" y="862" text-anchor="middle" dominant-baseline="central">Same hash, ≠ equals</text>
    <text font-family="Inter,sans-serif" font-size="11" fill="#8a8a9a" x="340" y="880" text-anchor="middle" dominant-baseline="central">Separate entries in bucket</text>
  </g>
  <g>
    <rect x="456" y="844" width="174" height="52" rx="8" stroke-width="0.5" fill="#2d1f06" stroke="#854F0B"/>
    <text font-family="Inter,sans-serif" font-size="13" font-weight="500" fill="#f59e0b" x="543" y="862" text-anchor="middle" dominant-baseline="central">null key</text>
    <text font-family="Inter,sans-serif" font-size="11" fill="#BA7517" x="543" y="880" text-anchor="middle" dominant-baseline="central">Always → bucket[0]</text>
  </g>
</svg>`

export const HASHMAP_CONTENT = {
  overview: `HashMap is Java's most-used data structure for key-value storage. Internally it's an array of Node objects (buckets). Each Node holds: hash, key, value, and a next pointer for chaining.

Default capacity is 16 buckets. When entries exceed capacity × load factor (0.75), the array doubles and all entries are rehashed — an O(n) operation.`,

  interviewQA: [
    {
      q: 'How does HashMap work internally?',
      a: `HashMap uses an array of Node objects called buckets. On put(key, value), it calls hashCode() on the key, applies bit spreading (hash ^ hash>>>16), then uses (n-1) & hash to find the bucket index. If the bucket is empty it inserts directly. If occupied, it chains using a LinkedList. In Java 8, if a chain exceeds 8 entries it converts to a Red-Black Tree for O(log n) lookup.`
    },
    {
      q: 'What is bit spreading and why is it needed?',
      a: `Bit spreading is: hash = h ^ (h >>> 16). The bucket index only uses low bits of the hash (index = hash & (n-1)). Without spreading, keys with different high bits but identical low bits all land in the same bucket. Spreading folds high 16 bits into low 16 bits so the full hash influences bucket selection — better distribution, fewer collisions.`
    },
    {
      q: 'What happens during a collision?',
      a: `When two keys map to the same bucket index, they are chained. Java 7: always a LinkedList (O(n) worst case). Java 8+: starts as a LinkedList, converts to Red-Black Tree when chain length exceeds 8 AND table size ≥ 64 → O(log n) search. Tree shrinks back to LinkedList when size drops below 6.`
    },
    {
      q: 'Why must you override hashCode() when overriding equals()?',
      a: `The contract: if a.equals(b) is true, then a.hashCode() must equal b.hashCode(). If you override equals() without hashCode(), two logically equal objects may produce different hash codes, landing in different buckets. HashMap will treat them as different keys — map.get() returns null even when the key logically exists.`
    },
    {
      q: 'When does HashMap resize?',
      a: `When the number of entries exceeds capacity × loadFactor (default: 16 × 0.75 = 12). It doubles the array size (16 → 32) and rehashes all entries — O(n). Avoid unnecessary resizing with new HashMap<>(expectedSize).`
    },
    {
      q: 'Why is HashMap capacity always a power of 2?',
      a: `It makes the bucket index formula (n-1) & hash work as a fast modulo. When n is a power of 2, (n-1) is all 1s in low bits — a perfect bitmask. This replaces hash % n with bitwise AND, which is significantly faster.`
    },
  ],

  code: [
    {
      title: 'Basic HashMap operations',
      code: `Map<String, Integer> map = new HashMap<>();

// put — O(1) average
map.put("Java", 1);
map.put("Python", 2);

// get — O(1) average
int val = map.get("Java"); // 1

// getOrDefault — safe retrieval
int count = map.getOrDefault("Go", 0);

// putIfAbsent — only inserts if key absent
map.putIfAbsent("Java", 99); // no-op, key exists

// merge — common pattern for frequency map
Map<String, Integer> freq = new HashMap<>();
String[] words = {"a", "b", "a", "c", "b", "a"};
for (String w : words) {
    freq.merge(w, 1, Integer::sum);
}
// {a=3, b=2, c=1}`
    },
    {
      title: 'Override hashCode + equals (correct way)',
      code: `public class Person {
    private String name;
    private int age;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Person)) return false;
        Person p = (Person) o;
        return age == p.age && Objects.equals(name, p.name);
    }

    @Override
    public int hashCode() {
        return Objects.hash(name, age); // always override both!
    }
}`
    },
    {
      title: 'Common interview patterns',
      code: `// 1. Two Sum using HashMap — O(n)
public int[] twoSum(int[] nums, int target) {
    Map<Integer, Integer> map = new HashMap<>();
    for (int i = 0; i < nums.length; i++) {
        int complement = target - nums[i];
        if (map.containsKey(complement))
            return new int[]{map.get(complement), i};
        map.put(nums[i], i);
    }
    return new int[]{};
}

// 2. Group Anagrams — O(n * k log k)
public List<List<String>> groupAnagrams(String[] strs) {
    Map<String, List<String>> map = new HashMap<>();
    for (String s : strs) {
        char[] chars = s.toCharArray();
        Arrays.sort(chars);
        String key = new String(chars);
        map.computeIfAbsent(key, k -> new ArrayList<>()).add(s);
    }
    return new ArrayList<>(map.values());
}`
    }
  ],

  deepDive: `**Internal Node structure**
Node<K,V> {
  int hash;
  K key;
  V value;
  Node<K,V> next;
}
Stored in: Node<K,V>[] table (the bucket array)

**put() algorithm step by step**
1. Null key check — null key always goes to bucket[0]
2. hashCode() → 32-bit int
3. hash = h ^ (h >>> 16) — bit spreading
4. i = (n-1) & hash — bucket index
5. If table[i] is null — insert new Node
6. If table[i].hash == hash && table[i].key.equals(key) — update value
7. Else — traverse chain; insert at end

**Treeification conditions**
- Bucket size >= 8 AND table.length >= 64 → Red-Black Tree
- If table < 64, HashMap resizes instead of treeifying

**Time complexity**
put/get: O(1) average, O(log n) worst case (Java 8+)
resize: O(n)`,

  revisionNotes: `**Must-know for interview**
- Internal structure: Node[] table (array of buckets)
- put() flow: hashCode → bit spreading → (n-1)&hash → insert/chain
- Bit spreading: hash ^ (hash >>> 16) — folds high bits into low bits
- Collision: LinkedList → Red-Black Tree at size > 8 (Java 8+)
- Tree reverts to LL when size < 6
- Resize: at capacity × 0.75, doubles array, rehashes all entries
- Default: capacity=16, loadFactor=0.75, threshold=12

**Contract rule (critical)**
equals() true → hashCodes must be equal
Always override both or HashMap breaks

**null handling**
- null key → bucket[0]
- null values allowed
- HashMap is not thread-safe (use ConcurrentHashMap)`
}