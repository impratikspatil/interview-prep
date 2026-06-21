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
      language: 'java',
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

// computeIfAbsent — common pattern for frequency map
Map<String, Integer> freq = new HashMap<>();
String[] words = {"a", "b", "a", "c", "b", "a"};
for (String w : words) {
    freq.merge(w, 1, Integer::sum);
}
// {a=3, b=2, c=1}`
    },
    {
      title: 'Override hashCode + equals (correct way)',
      language: 'java',
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
      language: 'java',
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
\`\`\`
Node<K,V> {
  int hash;
  K key;
  V value;
  Node<K,V> next;
}
\`\`\`
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
| Operation | Average | Worst |
|-----------|---------|-------|
| put/get   | O(1)    | O(log n) Java 8+ |
| resize    | -       | O(n)  |`,

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