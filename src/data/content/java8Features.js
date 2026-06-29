export const JAVA8_CONTENT = {
  overview: `Java 8 was a landmark release that introduced functional programming to Java. The seven key features to remember are captured in the mnemonic DLFMDOS — Date & Time API, Lambda Expressions, Functional Interfaces, Method References, Default & Static methods in interfaces, Optional, and Stream API. Together, these features allow developers to write cleaner, more declarative, and less error-prone code. Streams and Lambdas are the most interview-tested topics, while Optional and the Date/Time API are commonly asked as secondary questions.`,

  interviewQA: [
    {
      q: 'What are the major features introduced in Java 8?',
      a: `Java 8 introduced: Lambda Expressions (pass behavior as data), Functional Interfaces (single abstract method interfaces like Predicate, Function, Consumer, Supplier), Stream API (declarative data processing pipelines), Optional (null-safe container), Default & Static methods in interfaces (add methods to interfaces without breaking existing implementations), Method References (shorthand for lambdas that call existing methods), and the new Date/Time API (LocalDate, LocalDateTime, ZonedDateTime replacing the old buggy Date class).`
    },
    {
      q: 'What is a Lambda Expression?',
      a: `A Lambda is an anonymous function — a block of code that can be passed around like a value. Syntax: (parameters) -> expression or (parameters) -> { statements }. Example: (a, b) -> a + b replaces the need to create an anonymous class implementing a functional interface. Lambdas can only be used where a functional interface is expected. They enable functional-style programming in Java and make code significantly more concise.`
    },
    {
      q: 'What is a Functional Interface?',
      a: `A Functional Interface is an interface with exactly one abstract method. It is the target type for lambda expressions and method references. Annotated with @FunctionalInterface (optional but recommended). Core built-in functional interfaces: Predicate<T> — takes T, returns boolean (test()). Function<T,R> — takes T, returns R (apply()). Consumer<T> — takes T, returns nothing (accept()). Supplier<T> — takes nothing, returns T (get()). BiFunction<T,U,R> — takes two inputs, returns R.`
    },
    {
      q: 'What is the difference between Predicate, Function, Consumer, and Supplier?',
      a: `Predicate<T>: input T → output boolean. Used for filtering. Example: Predicate<String> isLong = s -> s.length() > 5. Function<T,R>: input T → output R. Used for transformation. Example: Function<String,Integer> len = s -> s.length(). Consumer<T>: input T → no output (void). Used for side effects. Example: Consumer<String> print = System.out::println. Supplier<T>: no input → output T. Used for lazy value generation. Example: Supplier<List<String>> list = ArrayList::new.`
    },
    {
      q: 'What are Method References and what are the four types?',
      a: `Method References are shorthand for lambdas that call an existing method. Syntax: ClassName::methodName. Four types: 1) Static method reference — Math::abs equivalent to x -> Math.abs(x). 2) Instance method of a particular instance — obj::toString equivalent to () -> obj.toString(). 3) Instance method of an arbitrary instance — String::toUpperCase equivalent to s -> s.toUpperCase(). 4) Constructor reference — ArrayList::new equivalent to () -> new ArrayList<>(). Method references improve readability when the lambda body is just a method call.`
    },
    {
      q: 'What are Default and Static methods in interfaces?',
      a: `Before Java 8, interfaces could only have abstract methods. Java 8 added: Default methods — have a body, provide a default implementation, can be overridden by implementing classes. Used to add methods to existing interfaces without breaking backward compatibility. Static methods — belong to the interface itself, not to implementing classes. Called via InterfaceName.method(). Example: List.of() in Java 9, Comparator.comparing(). Key use case: Java 8 added forEach(), stream(), removeIf() to the Collection interface as default methods without breaking existing implementations.`
    },
    {
      q: 'What is Optional and why was it introduced?',
      a: `Optional<T> is a container that may or may not hold a non-null value. Introduced to reduce NullPointerExceptions and make null-handling explicit. Key methods: Optional.of(value) — wraps a non-null value (throws NPE if null). Optional.ofNullable(value) — wraps value or empty if null. Optional.empty() — empty Optional. isPresent() — check if value exists. get() — retrieve value (throws if empty). orElse(default) — return value or default. orElseGet(supplier) — return value or call supplier. ifPresent(consumer) — execute if value exists. map(function) — transform if present. Best practice: use as return type, never as method parameter or field.`
    },
    {
      q: 'What is the Stream API?',
      a: `Stream API provides a declarative way to process sequences of data. A Stream is not a data structure — it does not store data, does not modify the source, is single-use (reuse throws IllegalStateException), and is lazy (nothing executes until a terminal operation is called). Pipeline: Source → Intermediate Operations → Terminal Operation. Intermediate operations (filter, map, flatMap, distinct, sorted, limit, skip) return a Stream and are lazy. Terminal operations (collect, forEach, reduce, count, findFirst, anyMatch) trigger execution and return a result.`
    },
    {
      q: 'What is the difference between map() and flatMap()?',
      a: `map() transforms each element 1-to-1 and returns Stream<R>. flatMap() transforms each element to a Stream and then flattens all those streams into a single Stream. Use map() when each element produces one result. Use flatMap() when each element produces a collection or nested stream. Example: list.stream().map(s -> s.split("")) returns Stream<String[]>. list.stream().flatMap(s -> Arrays.stream(s.split(""))) returns Stream<String> — all characters flattened into a single stream.`
    },
    {
      q: 'What is the difference between findFirst() and findAny()?',
      a: `findFirst() returns the first element in encounter order — deterministic. findAny() returns any element — non-deterministic, but faster in parallel streams since it doesn't need to wait for encounter order. In sequential streams, both typically return the same element. In parallel streams, findAny() allows better optimization since any thread can return its local first element. Both return Optional<T>.`
    },
    {
      q: 'What is the new Date/Time API introduced in Java 8?',
      a: `Java 8 introduced java.time package replacing the broken java.util.Date and Calendar classes. Key classes: LocalDate — date only (2024-01-15), no time, no timezone. LocalTime — time only (10:30:00). LocalDateTime — date + time, no timezone. ZonedDateTime — date + time + timezone. Instant — machine timestamp (epoch seconds). Duration — time between two instants. Period — date-based amount (years, months, days). All classes are immutable and thread-safe. Key operations: now(), of(), plus(), minus(), format(), parse(). DateTimeFormatter for custom patterns.`
    },
    {
      q: 'What is reduce() in Stream API?',
      a: `reduce() combines all elements of a stream into a single result by applying a binary operator repeatedly. Two forms: reduce(identity, BinaryOperator) — starts with identity value, always returns T. reduce(BinaryOperator) — no identity, returns Optional<T> (stream may be empty). Example: list.stream().reduce(0, Integer::sum) sums all elements. list.stream().reduce((a,b) -> a > b ? a : b) finds maximum. Used for aggregation: sum, product, max, min, string concatenation.`
    },
    {
      q: 'What are the most important Collectors?',
      a: `Collectors.toList() — collects to List. Collectors.toSet() — collects to Set (removes duplicates). Collectors.toMap(keyMapper, valueMapper) — collects to Map. Collectors.joining(delimiter) — concatenates strings. Collectors.groupingBy(classifier) — groups elements by a key into Map<K, List<T>>. Collectors.partitioningBy(predicate) — splits into Map<Boolean, List<T>> — true group and false group. Collectors.counting() — counts elements. Collectors.summarizingInt() — stats (count, sum, min, max, avg). groupingBy is the most interview-tested Collector.`
    }
  ],

  code: [
    {
      title: 'Lambda Expressions',
      code: `// Old way — Anonymous class
Runnable r1 = new Runnable() {
    @Override
    public void run() {
        System.out.println("Running");
    }
};

// Lambda way
Runnable r2 = () -> System.out.println("Running");

// Lambda with parameters
Comparator<String> comp = (a, b) -> a.compareTo(b);

// Lambda with block body
Comparator<String> comp2 = (a, b) -> {
    int result = a.compareTo(b);
    return result;
};

// Assigning to functional interface
Predicate<Integer> isEven = n -> n % 2 == 0;
Function<String, Integer> length = s -> s.length();
Consumer<String> print = s -> System.out.println(s);
Supplier<List<String>> listFactory = () -> new ArrayList<>();`
    },
    {
      title: 'Functional Interfaces — Predicate, Function, Consumer, Supplier',
      code: `// Predicate<T> — T -> boolean
Predicate<String> isLong = s -> s.length() > 5;
Predicate<String> startsWithA = s -> s.startsWith("A");

// Predicate composition
Predicate<String> combined = isLong.and(startsWithA);
Predicate<String> either   = isLong.or(startsWithA);
Predicate<String> notLong  = isLong.negate();

isLong.test("Hello");       // false
isLong.test("Hello World"); // true

// Function<T,R> — T -> R
Function<String, Integer> len = String::length;
Function<Integer, String> toStr = Object::toString;

// Function composition
Function<String, String> lenStr = len.andThen(toStr);
lenStr.apply("Hello"); // "5"

// Consumer<T> — T -> void
Consumer<String> print = System.out::println;
Consumer<String> shout = s -> System.out.println(s.toUpperCase());
Consumer<String> both  = print.andThen(shout);
both.accept("hello"); // prints "hello" then "HELLO"

// Supplier<T> — () -> T
Supplier<List<String>> listFactory = ArrayList::new;
List<String> newList = listFactory.get(); // new ArrayList each time

// BiFunction<T,U,R> — (T,U) -> R
BiFunction<String, Integer, String> repeat = (s, n) -> s.repeat(n);
repeat.apply("ab", 3); // "ababab"`
    },
    {
      title: 'Method References — all 4 types',
      code: `// 1. Static method reference — ClassName::staticMethod
Function<String, Integer> parser = Integer::parseInt;
// same as: s -> Integer.parseInt(s)

List<String> nums = List.of("1","2","3");
nums.stream().map(Integer::parseInt).collect(Collectors.toList()); // [1,2,3]

// 2. Instance method of a particular instance — instance::method
String prefix = "Hello";
Predicate<String> startsWith = prefix::startsWith;
// same as: s -> prefix.startsWith(s)  -- note: inverted!
// Actually: s -> s.startsWith(prefix)
Predicate<String> checker = s -> s.startsWith(prefix);

// Correct particular instance reference
PrintStream ps = System.out;
Consumer<String> printer = ps::println;
// same as: s -> System.out.println(s)

// 3. Instance method of arbitrary instance — ClassName::instanceMethod
Function<String, String> upper = String::toUpperCase;
// same as: s -> s.toUpperCase()

List<String> names = List.of("ram", "shyam");
names.stream().map(String::toUpperCase).collect(Collectors.toList());

// 4. Constructor reference — ClassName::new
Supplier<ArrayList<String>> factory = ArrayList::new;
// same as: () -> new ArrayList<>()

Function<Integer, ArrayList<String>> sized = ArrayList::new;
// same as: n -> new ArrayList<>(n)`
    },
    {
      title: 'Default and Static methods in interfaces',
      code: `interface Greeter {
    // Abstract method — must implement
    String greet(String name);

    // Default method — can override or use as-is
    default String greetLoudly(String name) {
        return greet(name).toUpperCase();
    }

    // Static method — called on interface, not instances
    static Greeter formal() {
        return name -> "Good day, " + name;
    }
}

class CasualGreeter implements Greeter {
    @Override
    public String greet(String name) {
        return "Hey " + name + "!";
    }
    // greetLoudly() inherited for free
    // can override if needed
}

// Usage
Greeter casual = new CasualGreeter();
casual.greet("Ram");         // "Hey Ram!"
casual.greetLoudly("Ram");   // "HEY RAM!"

Greeter formal = Greeter.formal(); // static method on interface
formal.greet("Ram");         // "Good day, Ram"

// Real Java 8 examples — added to Collection as default methods
List<String> list = new ArrayList<>(List.of("b","a","c"));
list.sort(Comparator.naturalOrder());     // default method
list.forEach(System.out::println);        // default method
list.removeIf(s -> s.equals("a"));       // default method
list.replaceAll(String::toUpperCase);     // default method`
    },
    {
      title: 'Optional — safe null handling',
      code: `// Creating Optional
Optional<String> present = Optional.of("Hello");       // non-null only
Optional<String> maybe   = Optional.ofNullable(null);  // null-safe
Optional<String> empty   = Optional.empty();

// Checking and getting
present.isPresent();       // true
empty.isPresent();         // false
present.isEmpty();         // false (Java 11+)
present.get();             // "Hello" — throws if empty, avoid raw get()

// Safe retrieval
maybe.orElse("default");           // "default" if empty
maybe.orElseGet(() -> compute());  // lazy — only calls if empty
maybe.orElseThrow(() -> new RuntimeException("No value")); // throw custom

// Conditional execution
present.ifPresent(s -> System.out.println(s)); // prints if present
present.ifPresentOrElse(                        // Java 9+
    s -> System.out.println(s),
    () -> System.out.println("empty")
);

// Transforming
Optional<Integer> length = present.map(String::length); // Optional<Integer>
Optional<String> upper   = present.map(String::toUpperCase); // Optional<String>
present.filter(s -> s.length() > 3); // Optional("Hello") — passes filter
empty.filter(s -> s.length() > 3);   // Optional.empty()

// flatMap — when map returns Optional
Optional<Optional<String>> nested = present.map(s -> Optional.of(s.trim()));
Optional<String> flat = present.flatMap(s -> Optional.of(s.trim())); // better

// Real-world pattern
String result = Optional.ofNullable(getUserFromDB())
    .map(User::getEmail)
    .map(String::toLowerCase)
    .orElse("no-email@default.com");`
    },
    {
      title: 'Stream API — full pipeline',
      code: `List<String> names = List.of("Ram","Shyam","Ravi","Sita","Rita","Om");

// filter + map + collect
List<String> result = names.stream()
    .filter(s -> s.startsWith("R"))        // [Ram, Ravi, Rita]
    .map(String::toUpperCase)              // [RAM, RAVI, RITA]
    .sorted()                              // [RAM, RITA, RAVI]
    .collect(Collectors.toList());

// distinct, limit, skip
List<Integer> nums = List.of(1,2,2,3,3,4,5);
nums.stream().distinct().collect(Collectors.toList()); // [1,2,3,4,5]
nums.stream().limit(3).collect(Collectors.toList());   // [1,2,2]
nums.stream().skip(2).collect(Collectors.toList());    // [2,3,3,4,5]

// reduce
int sum = nums.stream().reduce(0, Integer::sum);       // 20
Optional<Integer> max = nums.stream().reduce(Integer::max); // Optional[5]

// Terminal operations
long count = names.stream().filter(s -> s.length() > 3).count(); // 2
boolean anyR = names.stream().anyMatch(s -> s.startsWith("R"));  // true
boolean allR = names.stream().allMatch(s -> s.startsWith("R"));  // false
Optional<String> first = names.stream().filter(s -> s.startsWith("S")).findFirst();

// flatMap — flatten nested collections
List<List<String>> nested = List.of(List.of("a","b"), List.of("c","d"));
List<String> flat = nested.stream()
    .flatMap(List::stream)
    .collect(Collectors.toList()); // [a, b, c, d]

// groupingBy — most asked Collector
Map<Integer, List<String>> byLength = names.stream()
    .collect(Collectors.groupingBy(String::length));
// {2=[Om], 3=[Ram], 4=[Ravi,Sita,Rita], 5=[Shyam]}

// partitioningBy
Map<Boolean, List<String>> partition = names.stream()
    .collect(Collectors.partitioningBy(s -> s.length() > 3));
// {false=[Ram,Om], true=[Shyam,Ravi,Sita,Rita]}

// joining
String joined = names.stream().collect(Collectors.joining(", ")); // Ram, Shyam, ...

// toMap
Map<String,Integer> nameLengths = names.stream()
    .collect(Collectors.toMap(s -> s, String::length));`
    },
    {
      title: 'Date & Time API',
      code: `import java.time.*;
import java.time.format.DateTimeFormatter;

// LocalDate — date only
LocalDate today    = LocalDate.now();
LocalDate dob      = LocalDate.of(1999, 6, 15);
LocalDate tomorrow = today.plusDays(1);
LocalDate nextYear = today.plusYears(1);

today.getDayOfWeek();  // MONDAY
today.getMonth();      // JUNE
today.isLeapYear();    // false

// LocalTime — time only
LocalTime now   = LocalTime.now();
LocalTime noon  = LocalTime.of(12, 0, 0);
LocalTime later = noon.plusHours(2).plusMinutes(30); // 14:30

// LocalDateTime — date + time, no timezone
LocalDateTime dt = LocalDateTime.now();
LocalDateTime meeting = LocalDateTime.of(2024, 6, 15, 10, 30);

// ZonedDateTime — with timezone
ZonedDateTime ist = ZonedDateTime.now(ZoneId.of("Asia/Kolkata"));
ZonedDateTime utc = ist.withZoneSameInstant(ZoneId.of("UTC"));

// Instant — machine time (epoch)
Instant now2 = Instant.now();
Instant future = now2.plusSeconds(3600);

// Duration — time between instants
Duration d = Duration.between(LocalTime.of(9,0), LocalTime.of(17,0));
d.toHours();   // 8
d.toMinutes(); // 480

// Period — date-based difference
Period p = Period.between(LocalDate.of(2000,1,1), LocalDate.now());
p.getYears();   // years of age

// Formatting
DateTimeFormatter fmt = DateTimeFormatter.ofPattern("dd-MM-yyyy");
String formatted = today.format(fmt);          // "29-06-2024"
LocalDate parsed = LocalDate.parse("29-06-2024", fmt);`
    }
  ],

  deepDive: `**Why Java 8 was a paradigm shift**
Before Java 8, Java was purely object-oriented — everything had to be wrapped in a class. Java 8 introduced functional programming constructs, allowing behavior to be treated as data. A lambda expression is essentially an instance of a functional interface, enabling anonymous functions to be passed around like values.

**How Lambdas work internally**
Lambdas are not just syntactic sugar for anonymous classes. The JVM uses invokedynamic bytecode instruction (introduced in Java 7) to bind lambdas at runtime. This is more efficient than creating a new class file for each lambda. The lambda is stored as a static or instance method in the enclosing class, and a functional interface proxy is generated lazily at first use.

**Variable capture in Lambdas**
Lambdas can capture local variables from the enclosing scope, but those variables must be effectively final (not modified after assignment). This is because lambdas may execute on a different thread, and mutable local variables would cause race conditions. Instance variables and static variables can be freely modified.

**Stream lazy evaluation — how it works**
When you write stream().filter().map().collect(), nothing executes for filter() or map() immediately. Each intermediate operation wraps the previous stage into a new lazy pipeline stage. When collect() is called, it pulls elements one by one through the entire pipeline. This means: if limit(1) is at the end, only one element flows through filter and map — not all of them. This short-circuiting optimization is the key benefit of lazy evaluation.

**Stateful vs Stateless intermediate operations**
Stateless operations (filter, map, flatMap) process each element independently — they don't need to see other elements. Stateful operations (sorted, distinct, limit) need to accumulate some state before producing results. sorted() must see all elements before outputting any. This has implications for parallel streams — stateful operations are more expensive to parallelize.

**Parallel Streams — when to use and risks**
parallelStream() splits the data source into chunks and processes them on the ForkJoinPool. Beneficial for: CPU-intensive operations, large data sets, operations with no shared mutable state. Avoid for: I/O operations, small data sets (overhead outweighs gain), operations with shared mutable state (race conditions), operations that depend on encounter order (findFirst on parallel stream is expensive). Always benchmark before using parallel streams.

**Optional anti-patterns**
Do not use Optional as method parameters — it forces callers to wrap values. Do not use Optional as field types — adds memory overhead and serialization issues. Do not use optional.get() without isPresent() — defeats the purpose. Do not use Optional.of() with potentially null values — use ofNullable(). The primary use case is as a return type to make the possibility of absence explicit in the API contract.

**Date/Time API design principles**
All java.time classes are immutable — operations return new instances. All classes are thread-safe. Clear separation of concerns: LocalDate/LocalTime/LocalDateTime for cases where timezone is irrelevant (birthdays, meetings). ZonedDateTime for global events. Instant for machine timestamps. The old Date class was mutable, not thread-safe, had confusing month indexing (0-based), and mixed date/time/timezone concerns in one class.`,

  revisionNotes: `**DLFMDOS — Java 8 Features**
- D — Date & Time API (java.time package)
- L — Lambda Expressions (anonymous functions)
- F — Functional Interfaces (SAM — Single Abstract Method)
- M — Method References (shorthand for lambdas)
- D — Default & Static methods in interfaces
- O — Optional (null-safe container)
- S — Stream API (declarative pipeline)

**Lambda**
- Syntax: (params) -> expression or (params) -> { body }
- Can only be used where a functional interface is expected
- Variables captured must be effectively final
- Internally uses invokedynamic — not anonymous classes

**Functional Interfaces**
- Predicate<T>: T -> boolean, test()
- Function<T,R>: T -> R, apply()
- Consumer<T>: T -> void, accept()
- Supplier<T>: () -> T, get()
- BiFunction<T,U,R>: (T,U) -> R, apply()

**Method References (4 types)**
- Static: Integer::parseInt
- Instance (specific): System.out::println
- Instance (arbitrary): String::toUpperCase
- Constructor: ArrayList::new

**Default & Static in interfaces**
- Default: has body, can be overridden, enables backward compatibility
- Static: belongs to interface, called via InterfaceName.method()

**Optional**
- of() — non-null only, ofNullable() — null-safe, empty() — empty
- orElse() vs orElseGet() — orElseGet is lazy (use for expensive defaults)
- Use as return type only, never as param or field
- map() transforms, flatMap() when mapper returns Optional

**Stream**
- Not a data structure, doesn't modify source, single-use, lazy
- Intermediate (lazy, return Stream): filter, map, flatMap, distinct, sorted, limit, skip
- Terminal (eager, triggers pipeline): collect, forEach, reduce, count, findFirst, anyMatch
- map: 1-to-1 transform | flatMap: 1-to-many, flattens
- findFirst: deterministic | findAny: faster in parallel
- groupingBy → Map<K, List<T>> | partitioningBy → Map<Boolean, List<T>>

**Date/Time**
- LocalDate: date only | LocalTime: time only | LocalDateTime: date+time
- ZonedDateTime: with timezone | Instant: epoch timestamp
- All immutable and thread-safe
- DateTimeFormatter for formatting/parsing`
}