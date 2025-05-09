# MongoDB vs MySQL: Command Comparison
This guide provides a side-by-side comparison of common database operations between MySQL (SQL) and MongoDB (NoSQL).

## Database and Table Operations
| Operation | MySQL (SQL) | MongoDB |
|-----------|-------------|---------|
| Create Database | `CREATE DATABASE mydb;` | `use mydb` |
| Switch Database | `USE mydb;` | `use mydb` |
| Show Databases | `SHOW DATABASES;` | `show dbs` |
| Drop Database | `DROP DATABASE mydb;` | `use mydb`<br>`db.dropDatabase()` |
| Create Table/Collection | ```CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100),
  age INT
);``` | `db.createCollection("users")` |
| Show Tables/Collections | `SHOW TABLES;` | `show collections` |
| Drop Table/Collection | `DROP TABLE users;` | `db.users.drop()` |
| Truncate Table/Collection | `TRUNCATE TABLE users;` | `db.users.deleteMany({})` |

## Data Manipulation
| Operation | MySQL (SQL) | MongoDB |
|-----------|-------------|---------|
| Insert One Record | ```INSERT INTO users (name, email, age)
VALUES ('John', 'john@example.com', 30);``` | ```db.users.insertOne({
  name: "John",
  email: "john@example.com",
  age: 30
})``` |
| Insert Multiple Records | ```INSERT INTO users (name, email, age) VALUES
('John', 'john@example.com', 30),
('Jane', 'jane@example.com', 25);``` | ```db.users.insertMany([
  { name: "John", email: "john@example.com", age: 30 },
  { name: "Jane", email: "jane@example.com", age: 25 }
])``` |
| Select All Records | `SELECT * FROM users;` | `db.users.find()` |
| Select Specific Fields | `SELECT name, email FROM users;` | `db.users.find({}, { name: 1, email: 1, _id: 0 })` |
| Get One Record | `SELECT * FROM users LIMIT 1;` | `db.users.findOne()` |
| Count Records | `SELECT COUNT(*) FROM users;` | `db.users.countDocuments()` |
| Update One Record | ```UPDATE users
SET email = 'john.doe@example.com'
WHERE name = 'John';``` | ```db.users.updateOne(
  { name: "John" },
  { $set: { email: "john.doe@example.com" } }
)``` |
| Update Multiple Records | ```UPDATE users
SET active = true
WHERE age >= 18;``` | ```db.users.updateMany(
  { age: { $gte: 18 } },
  { $set: { active: true } }
)``` |
| Delete One Record | ```DELETE FROM users
WHERE name = 'John';``` | `db.users.deleteOne({ name: "John" })` |
| Delete Multiple Records | ```DELETE FROM users
WHERE age < 18;``` | `db.users.deleteMany({ age: { $lt: 18 } })` |

## Queries and Filtering
| Operation | MySQL (SQL) | MongoDB |
|-----------|-------------|---------|
| Equal Condition | ```SELECT * FROM users
WHERE age = 30;``` | `db.users.find({ age: 30 })` |
| Not Equal Condition | ```SELECT * FROM users
WHERE age != 30;``` | `db.users.find({ age: { $ne: 30 } })` |
| Greater Than | ```SELECT * FROM users
WHERE age > 25;``` | `db.users.find({ age: { $gt: 25 } })` |
| Less Than or Equal | ```SELECT * FROM users
WHERE age <= 40;``` | `db.users.find({ age: { $lte: 40 } })` |
| Between Values | ```SELECT * FROM users
WHERE age BETWEEN 25 AND 40;``` | ```db.users.find({
  age: { $gte: 25, $lte: 40 }
})``` |
| IN Operator | ```SELECT * FROM users
WHERE status IN ('active', 'pending');``` | ```db.users.find({
  status: { $in: ["active", "pending"] }
})``` |
| IS NULL | ```SELECT * FROM users
WHERE phone IS NULL;``` | `db.users.find({ phone: null })` |
| EXISTS | ```SELECT * FROM users
WHERE EXISTS (
  SELECT 1 FROM orders
  WHERE orders.user_id = users.id
);``` | ```db.users.find({
  "orders": { $exists: true }
})``` |
| AND Condition | ```SELECT * FROM users
WHERE age > 25 AND status = 'active';``` | ```db.users.find({
  age: { $gt: 25 },
  status: "active"
})``` |
| OR Condition | ```SELECT * FROM users
WHERE age < 18 OR age > 60;``` | ```db.users.find({
  $or: [
    { age: { $lt: 18 } },
    { age: { $gt: 60 } }
  ]
})``` |
| Like (Pattern Matching) | ```SELECT * FROM users
WHERE name LIKE 'J%';``` | ```db.users.find({
  name: /^J/
})``` |

## Sorting, Limiting and Pagination
| Operation | MySQL (SQL) | MongoDB |
|-----------|-------------|---------|
| Sort Ascending | ```SELECT * FROM users
ORDER BY age ASC;``` | `db.users.find().sort({ age: 1 })` |
| Sort Descending | ```SELECT * FROM users
ORDER BY age DESC;``` | `db.users.find().sort({ age: -1 })` |
| Multiple Sort Fields | ```SELECT * FROM users
ORDER BY age DESC, name ASC;``` | `db.users.find().sort({ age: -1, name: 1 })` |
| Limit Results | ```SELECT * FROM users
LIMIT 10;``` | `db.users.find().limit(10)` |
| Offset Results | ```SELECT * FROM users
LIMIT 10 OFFSET 20;``` | `db.users.find().skip(20).limit(10)` |

## Aggregation and Analytics
| Operation | MySQL (SQL) | MongoDB |
|-----------|-------------|---------|
| Sum | `SELECT SUM(amount) FROM orders;` | ```db.orders.aggregate([
  { $group: {
    _id: null,
    total: { $sum: "$amount" }
  }}
])``` |
| Average | `SELECT AVG(age) FROM users;` | ```db.users.aggregate([
  { $group: {
    _id: null,
    average: { $avg: "$age" }
  }}
])``` |
| Min/Max | ```SELECT MIN(age), MAX(age)
FROM users;``` | ```db.users.aggregate([
  { $group: {
    _id: null,
    min: { $min: "$age" },
    max: { $max: "$age" }
  }}
])``` |
| Group By | ```SELECT city, COUNT(*) AS count
FROM users
GROUP BY city;``` | ```db.users.aggregate([
  { $group: {
    _id: "$city",
    count: { $sum: 1 }
  }}
])``` |
| Group By with Filter | ```SELECT city, COUNT(*) AS count
FROM users
WHERE age > 21
GROUP BY city
HAVING count > 5;``` | ```db.users.aggregate([
  { $match: { age: { $gt: 21 } } },
  { $group: {
    _id: "$city",
    count: { $sum: 1 }
  }},
  { $match: { count: { $gt: 5 } } }
])``` |

## Joins / Lookups
| Operation | MySQL (SQL) | MongoDB |
|-----------|-------------|---------|
| Inner Join | ```SELECT u.name, o.product
FROM users u
INNER JOIN orders o
  ON u.id = o.user_id;``` | ```db.users.aggregate([
  { $lookup: {
    from: "orders",
    localField: "_id",
    foreignField: "user_id",
    as: "orders"
  }},
  { $unwind: "$orders" },
  { $project: {
    name: 1,
    product: "$orders.product"
  }}
])``` |
| Left Join | ```SELECT u.name, o.product
FROM users u
LEFT JOIN orders o
  ON u.id = o.user_id;``` | ```db.users.aggregate([
  { $lookup: {
    from: "orders",
    localField: "_id",
    foreignField: "user_id",
    as: "orders"
  }},
  { $project: {
    name: 1,
    products: "$orders.product"
  }}
])``` |

## Indexing
| Operation | MySQL (SQL) | MongoDB |
|-----------|-------------|---------|
| Create Index | `CREATE INDEX idx_name ON users(name);` | `db.users.createIndex({ name: 1 })` |
| Create Unique Index | ```CREATE UNIQUE INDEX idx_email
ON users(email);``` | ```db.users.createIndex(
  { email: 1 },
  { unique: true }
)``` |
| Create Compound Index | ```CREATE INDEX idx_name_age
ON users(name, age);``` | `db.users.createIndex({ name: 1, age: 1 })` |
| Drop Index | `DROP INDEX idx_name ON users;` | `db.users.dropIndex("name_1")` |
| Show Indexes | `SHOW INDEX FROM users;` | `db.users.getIndexes()` |

## Transaction Management
| Operation | MySQL (SQL) | MongoDB |
|-----------|-------------|---------|
| Start Transaction | `START TRANSACTION;` | ```const session = db.getMongo().startSession()
session.startTransaction()``` |
| Commit Transaction | `COMMIT;` | ```session.commitTransaction()
session.endSession()``` |
| Rollback Transaction | `ROLLBACK;` | ```session.abortTransaction()
session.endSession()``` |

## Data Type Differences
| MySQL Types | MongoDB Types |
|-------------|---------------|
| INT, BIGINT | Number (32-bit or 64-bit integer) |
| DECIMAL | Decimal128 |
| FLOAT, DOUBLE | Number (64-bit float) |
| VARCHAR, TEXT | String |
| DATE, DATETIME | Date (stored as milliseconds since Unix epoch) |
| BOOLEAN | Boolean |
| BLOB | BinData (Binary data) |
| JSON | Object, Array (native JSON support) |
| — | ObjectId (default for _id field) |
| — | Null |
| — | Regular Expression |
| — | JavaScript code |
| — | Timestamp |

## Key Conceptual Differences
| Concept | MySQL | MongoDB |
|---------|-------|---------|
| Structure | Tables, Rows, Columns | Collections, Documents, Fields |
| Schema | Fixed schema | Dynamic/flexible schema |
| Relationships | Foreign keys, Joins | Embedded documents, References |
| Atomicity | Transactions across tables | Transactions across documents (post v4.0) |
| Query Language | SQL | MongoDB Query Language |
| Scaling | Vertical scaling, sharding complex | Built-in horizontal scaling with sharding |

Remember that while these commands perform similar functions, the underlying data models are fundamentally different. MySQL follows a relational model with fixed schemas, while MongoDB uses a document-oriented model with flexible schemas.