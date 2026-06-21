export const SECTIONS = [
  {
    id: 'java',
    label: 'Java',
    icon: '☕',
    topics: [
      { id: 'hashmap', label: 'HashMap Internals', difficulty: 'intermediate', tags: ['collections', 'core'] },
      { id: 'collections', label: 'Collections Framework', difficulty: 'intermediate', tags: ['core'] },
      { id: 'concurrenthashmap', label: 'ConcurrentHashMap', difficulty: 'advanced', tags: ['concurrency'] },
      { id: 'multithreading', label: 'Multithreading', difficulty: 'advanced', tags: ['concurrency'] },
      { id: 'executor', label: 'Executor Framework', difficulty: 'advanced', tags: ['concurrency'] },
      { id: 'jvm', label: 'JVM Architecture', difficulty: 'advanced', tags: ['internals'] },
      { id: 'gc', label: 'Garbage Collection', difficulty: 'advanced', tags: ['internals'] },
      { id: 'string-pool', label: 'String Pool', difficulty: 'beginner', tags: ['core'] },
      { id: 'synchronization', label: 'Synchronization', difficulty: 'advanced', tags: ['concurrency'] },
      { id: 'volatile', label: 'Volatile', difficulty: 'advanced', tags: ['concurrency'] },
      { id: 'atomic', label: 'Atomic Classes', difficulty: 'advanced', tags: ['concurrency'] },
      { id: 'java8', label: 'Java 8 Features', difficulty: 'intermediate', tags: ['modern'] },
    ]
  },
  {
    id: 'spring',
    label: 'Spring Boot',
    icon: '🌿',
    topics: [
      { id: 'di', label: 'Dependency Injection', difficulty: 'beginner', tags: ['core'] },
      { id: 'ioc', label: 'IOC Container', difficulty: 'intermediate', tags: ['core'] },
      { id: 'bean-lifecycle', label: 'Bean Lifecycle', difficulty: 'intermediate', tags: ['core'] },
      { id: 'spring-mvc', label: 'Spring MVC', difficulty: 'intermediate', tags: ['web'] },
      { id: 'spring-security', label: 'Spring Security', difficulty: 'intermediate', tags: ['security'] },
      { id: 'jwt', label: 'JWT Authentication', difficulty: 'intermediate', tags: ['security'] },
      { id: 'oauth2', label: 'OAuth2', difficulty: 'advanced', tags: ['security'] },
      { id: 'spring-jpa', label: 'Spring Data JPA', difficulty: 'intermediate', tags: ['data'] },
      { id: 'hibernate', label: 'Hibernate', difficulty: 'intermediate', tags: ['data'] },
      { id: 'transactions', label: 'Transactions', difficulty: 'advanced', tags: ['data'] },
      { id: 'microservices', label: 'Microservices', difficulty: 'advanced', tags: ['architecture'] },
    ]
  },
  {
    id: 'database',
    label: 'Database',
    icon: '🗄️',
    topics: [
      { id: 'indexing', label: 'Indexing', difficulty: 'intermediate', tags: ['performance'] },
      { id: 'query-opt', label: 'Query Optimization', difficulty: 'advanced', tags: ['performance'] },
      { id: 'joins', label: 'Joins', difficulty: 'beginner', tags: ['sql'] },
      { id: 'acid', label: 'ACID Properties', difficulty: 'intermediate', tags: ['transactions'] },
      { id: 'db-transactions', label: 'Transactions', difficulty: 'intermediate', tags: ['transactions'] },
      { id: 'isolation', label: 'Isolation Levels', difficulty: 'advanced', tags: ['transactions'] },
      { id: 'locks', label: 'Locks', difficulty: 'advanced', tags: ['concurrency'] },
      { id: 'normalization', label: 'Normalization', difficulty: 'intermediate', tags: ['design'] },
      { id: 'postgres', label: 'PostgreSQL Internals', difficulty: 'advanced', tags: ['internals'] },
      { id: 'redis', label: 'Redis', difficulty: 'intermediate', tags: ['caching'] },
    ]
  },
  {
    id: 'system-design',
    label: 'System Design',
    icon: '🏗️',
    topics: [
      { id: 'load-balancer', label: 'Load Balancer', difficulty: 'intermediate', tags: ['infrastructure'] },
      { id: 'api-gateway', label: 'API Gateway', difficulty: 'intermediate', tags: ['infrastructure'] },
      { id: 'caching', label: 'Caching', difficulty: 'intermediate', tags: ['performance'] },
      { id: 'rate-limiter', label: 'Rate Limiter', difficulty: 'intermediate', tags: ['design'] },
      { id: 'message-queues', label: 'Message Queues', difficulty: 'intermediate', tags: ['async'] },
      { id: 'sharding', label: 'Database Sharding', difficulty: 'advanced', tags: ['scale'] },
      { id: 'replication', label: 'Replication', difficulty: 'advanced', tags: ['scale'] },
      { id: 'url-shortener', label: 'URL Shortener', difficulty: 'intermediate', tags: ['design'] },
      { id: 'notification', label: 'Notification System', difficulty: 'advanced', tags: ['design'] },
      { id: 'distributed', label: 'Distributed Systems', difficulty: 'advanced', tags: ['concepts'] },
    ]
  },
  {
    id: 'dsa',
    label: 'DSA',
    icon: '🧮',
    topics: [
      { id: 'arrays', label: 'Arrays & Strings', difficulty: 'beginner', tags: ['linear'] },
      { id: 'linked-list', label: 'Linked Lists', difficulty: 'beginner', tags: ['linear'] },
      { id: 'sliding-window', label: 'Sliding Window', difficulty: 'intermediate', tags: ['patterns'] },
      { id: 'two-pointers', label: 'Two Pointers', difficulty: 'intermediate', tags: ['patterns'] },
      { id: 'binary-search', label: 'Binary Search', difficulty: 'intermediate', tags: ['searching'] },
      { id: 'trees', label: 'Trees & BST', difficulty: 'intermediate', tags: ['trees'] },
      { id: 'graphs', label: 'Graphs', difficulty: 'intermediate', tags: ['graphs'] },
      { id: 'dp', label: 'Dynamic Programming', difficulty: 'advanced', tags: ['optimization'] },
      { id: 'hashing', label: 'Hashing', difficulty: 'intermediate', tags: ['patterns'] },
      { id: 'sorting', label: 'Sorting Algorithms', difficulty: 'intermediate', tags: ['sorting'] },
    ]
  },
  {
    id: 'devops',
    label: 'DevOps',
    icon: '⚙️',
    topics: [
      { id: 'docker', label: 'Docker', difficulty: 'intermediate', tags: ['containers'] },
      { id: 'kubernetes', label: 'Kubernetes', difficulty: 'advanced', tags: ['containers'] },
      { id: 'jenkins', label: 'Jenkins', difficulty: 'intermediate', tags: ['cicd'] },
      { id: 'gitlab-cicd', label: 'GitLab CI/CD', difficulty: 'intermediate', tags: ['cicd'] },
      { id: 'azure', label: 'Azure', difficulty: 'intermediate', tags: ['cloud'] },
      { id: 'aws', label: 'AWS', difficulty: 'intermediate', tags: ['cloud'] },
      { id: 'monitoring', label: 'Monitoring', difficulty: 'intermediate', tags: ['observability'] },
      { id: 'logging', label: 'Logging', difficulty: 'beginner', tags: ['observability'] },
    ]
  },
]

export const DIFFICULTY_CONFIG = {
  beginner:     { label: 'Beginner',     color: '#2dd4aa', bg: '#0d2e26' },
  intermediate: { label: 'Intermediate', color: '#f59e0b', bg: '#2d1f06' },
  advanced:     { label: 'Advanced',     color: '#f26450', bg: '#2d1008' },
}

export const TABS = ['Overview', 'Interview Q&A', 'Code', 'Deep Dive', 'Revision Notes']