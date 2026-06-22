export const STRING_CONTENT = {
  overview: `String is a final, immutable class in Java. Once created, its content cannot be changed. Java optimizes String memory using the String Pool (String Constant Pool) — a special area in the heap where identical string literals are reused rather than duplicated.

String is the most commonly used class in Java and has several interview-critical behaviors around memory, equality, and mutability that differ from StringBuilder and StringBuffer.`,

  interviewQA: [
    {
      q: 'Why is String immutable in Java?',
      a: `String is immutable for five key reasons: (1) Security — strings are used for class names, file paths, network URLs, and DB connections. Mutability would allow malicious code to change them mid-execution. (2) Thread Safety — immutable objects are inherently thread-safe, no synchronization needed. (3) String Pool optimization — immutability allows safe sharing of pooled strings across references. (4) Stable hashCode — since content never changes, hashCode is computed once and cached, making String an ideal HashMap key. (5) Caching — JVM can cache the hash without worrying about it becoming stale.`
    },
    {
      q: 'What is the String Pool and how does it work?',
      a: `The String Pool (String Constant Pool) is a special memory area inside the heap. When you write String s = "Java", JVM first checks if "Java" exists in the pool. If yes, it returns the existing reference. If no, it creates a new object in the pool and returns its reference. This means multiple variables can point to the same object: String s1 = "Java"; String s2 = "Java" — both s1 and s2 point to the same pooled object. This saves memory by avoiding duplicate String objects.`
    },
    {
      q: 'What is the difference between String s = "Java" and String s = new String("Java")?',
      a: `String s = "Java" uses the String Pool — JVM checks the pool, reuses existing object or creates one there. String s = new String("Java") always creates a new object on the heap, bypassing the pool. If "Java" wasn't in the pool before, it also creates a pool entry. So new String("Java") can create up to 2 objects: one in the pool and one on the heap. The variable points to the heap object, not the pool object. This is why new String() is generally discouraged.`
    },
    {
      q: 'What does intern() do?',
      a: `intern() moves a heap String reference to point to the pool instead. If the string value exists in the pool, it returns that pool reference. If not, it adds the string to the pool and returns the pool reference. Example: String s = new String("Java"); s = s.intern(); — after intern(), s now points to the pool object instead of the heap object. Useful when you want to reduce memory by consolidating heap strings into the pool.`
    },
    {
      q: 'What is the difference between == and equals() for Strings?',
      a: `== compares references (memory addresses). equals() compares content (characters). String a = "Java"; String b = "Java"; — a == b is true because both point to the same pool object. String a = new String("Java"); String b = "Java"; — a == b is false because a points to heap, b points to pool. a.equals(b) is true because content is same. Rule: always use equals() to compare String content, never ==.`
    },
    {
      q: 'What is the difference between String, StringBuilder, and StringBuffer?',
      a: `String is immutable — every modification creates a new object. StringBuilder is mutable and not thread-safe, fastest for single-threaded string manipulation. StringBuffer is mutable and thread-safe via synchronized methods, but slower than StringBuilder. Use String for fixed values, StringBuilder for string manipulation in single-threaded code, StringBuffer only when you need thread-safe mutation (rare in modern code — prefer external synchronization with StringBuilder instead).`
    },
    {
      q: 'Why does StringBuilder not override equals()?',
      a: `StringBuilder is mutable — its content can change at any time. If equals() were based on content and StringBuilder were used as a HashMap key, its hashCode would change when content changed, breaking the HashMap (the key would be in the wrong bucket). So StringBuilder uses Object.equals() which compares references. This is consistent with the rule: mutable objects should not override equals()/hashCode() if they might be used as HashMap keys.`
    },
    {
      q: 'What happens when you concatenate Strings using + in a loop?',
      a: `Each + creates a new String object — O(n²) time and memory. "a" + "b" + "c" compiles to new StringBuilder().append("a").append("b").append("c").toString(). But in a loop, the compiler creates a new StringBuilder on every iteration, which is inefficient. Always use StringBuilder explicitly in loops: StringBuilder sb = new StringBuilder(); for(...) { sb.append(x); } String result = sb.toString();`
    },
    {
      q: 'Why is String a good HashMap key?',
      a: `Three reasons: (1) Immutable — content never changes, so hashCode is stable and consistent. (2) hashCode is cached — String computes hashCode once and caches it, making repeated HashMap lookups fast. (3) equals() is properly overridden — content comparison works correctly. A mutable object as a HashMap key is dangerous — if you modify it after insertion, its hashCode changes, and HashMap can no longer find it in the correct bucket.`
    },
  ],

  code: [
    {
      title: 'String Pool — literal vs new',
      code: `// Literal — uses String Pool
String s1 = "Java";
String s2 = "Java";
System.out.println(s1 == s2);      // true  — same pool object
System.out.println(s1.equals(s2)); // true  — same content

// new String() — creates heap object
String s3 = new String("Java");
System.out.println(s1 == s3);      // false — different objects
System.out.println(s1.equals(s3)); // true  — same content

// intern() — get pool reference
String s4 = s3.intern();
System.out.println(s1 == s4);      // true  — both point to pool`
    },
    {
      title: 'Immutability in action',
      code: `String s = "Java";
s.concat("8");         // new object created, original unchanged
System.out.println(s); // "Java" — not "Java8"

s = s.concat("8");     // reassign reference
System.out.println(s); // "Java8" — s now points to new object

// Each operation creates a new String object
String result = "Hello";
result = result.toUpperCase(); // new object
result = result.trim();        // new object
result = result.replace("H", "J"); // new object`
    },
    {
      title: 'String vs StringBuilder vs StringBuffer',
      code: `// String — immutable, bad for loops
String s = "";
for (int i = 0; i < 1000; i++) {
    s += i; // creates 1000 new String objects — O(n²)
}

// StringBuilder — mutable, fast, not thread-safe
StringBuilder sb = new StringBuilder();
for (int i = 0; i < 1000; i++) {
    sb.append(i); // modifies same object — O(n)
}
String result = sb.toString();

// StringBuffer — mutable, thread-safe, slower
StringBuffer sbf = new StringBuffer();
sbf.append("Java");
sbf.append("8");
System.out.println(sbf.toString()); // "Java8"`
    },
    {
      title: 'equals() behavior across String types',
      code: `// String — overrides equals() — content comparison
String a = new String("Java");
String b = new String("Java");
System.out.println(a.equals(b)); // true

// StringBuilder — does NOT override equals()
StringBuilder sb1 = new StringBuilder("Java");
StringBuilder sb2 = new StringBuilder("Java");
System.out.println(sb1.equals(sb2)); // false — reference comparison

// StringBuffer — does NOT override equals()
StringBuffer sbf1 = new StringBuffer("Java");
StringBuffer sbf2 = new StringBuffer("Java");
System.out.println(sbf1.equals(sbf2)); // false — reference comparison

// Compare StringBuilder content manually
System.out.println(sb1.toString().equals(sb2.toString())); // true`
    },
    {
      title: 'Common interview patterns',
      code: `// 1. Reverse a String
String s = "Hello";
String reversed = new StringBuilder(s).reverse().toString();

// 2. Check palindrome
boolean isPalindrome = s.equals(new StringBuilder(s).reverse().toString());

// 3. Count character frequency
Map<Character, Integer> freq = new HashMap<>();
for (char c : s.toCharArray()) {
    freq.merge(c, 1, Integer::sum);
}

// 4. Check anagram
char[] a1 = "listen".toCharArray();
char[] a2 = "silent".toCharArray();
Arrays.sort(a1);
Arrays.sort(a2);
boolean isAnagram = Arrays.equals(a1, a2);

// 5. String to int and back
int num = Integer.parseInt("42");
String str = String.valueOf(42);`
    }
  ],

  deepDive: `**String class internals**
String is backed by a char[] array (byte[] in Java 9+ with compact strings). The class is final — cannot be subclassed. The value array is private and final — no way to modify it after construction.

**Why hashCode is cached**
String caches its hashCode in a private int hash field (default 0). First call to hashCode() computes and stores it. Every subsequent call returns the cached value directly. This is safe only because String is immutable — content never changes, so hash never becomes stale.

**String Pool location**
Java 6 and earlier: String Pool was in PermGen (permanent generation) — fixed size, could cause OutOfMemoryError.
Java 7+: String Pool moved to the main heap — can be garbage collected, dynamic sizing.
Java 8: PermGen removed entirely, replaced by Metaspace.

**Compact Strings (Java 9+)**
Before Java 9: String stored as char[] — each char = 2 bytes (UTF-16).
Java 9+: String uses byte[] with an encoding flag. Latin-1 strings (ASCII) use 1 byte per char — 50% memory reduction for typical English strings.

**String interning performance**
intern() is backed by a native hash table (C++ level). Looking up an interned string is O(1). The pool is not unbounded — JVM has internal limits, and excessive interning can cause memory pressure.

**+ operator compilation**
String a = "Hello" + " " + "World" compiles to a single string literal at compile time (constant folding). String a = s1 + s2 compiles to new StringBuilder().append(s1).append(s2).toString() at runtime.`,

  revisionNotes: `**String fundamentals**
- String is final, immutable, stored in String Pool
- Immutability reasons: security, thread safety, pool optimization, stable hashCode, HashMap key safety
- String Pool is in heap (Java 7+), was in PermGen before

**Creation — must know**
- "Java" → checks pool, reuses or creates in pool
- new String("Java") → creates heap object + pool object, variable → heap
- intern() → moves reference from heap to pool

**== vs equals()**
- == compares references (memory addresses)
- equals() compares content (characters)
- Always use equals() for String comparison

**String vs StringBuilder vs StringBuffer**
- String: immutable, thread-safe, new object on every change
- StringBuilder: mutable, NOT thread-safe, fastest
- StringBuffer: mutable, thread-safe (synchronized), slower
- Use StringBuilder in loops, never use + in loops

**equals() override**
- String overrides equals() → content comparison
- StringBuilder does NOT override equals() → reference comparison
- StringBuffer does NOT override equals() → reference comparison
- Reason: mutable objects shouldn't override equals() if used as keys

**HashMap key rule**
- String is ideal HashMap key: immutable + cached hashCode + overrides equals()
- Mutable object as key = dangerous: content changes → hashCode changes → key lost in wrong bucket`
}