// 1. Find all documents in a collection
// Q: Retrieve all documents from the users collection.

db.user.find({});

// 2. Find a document with a specific field value
// Q: Retrieve a user with the username "ashik".

db.user.find({ username: "ashik" });

// 3. Find documents with multiple conditions ($and is implicit)
// Q: Find all users who have age 25 and city "Hyderabad".

db.user.find({ username: "ashik", age: 26, city: "Hyderabad" });

// 4. Find documents where a field is greater than a value ($gt)
// Q: Find all users older than 30.

db.user.find({ age: { $gt: 30 } });

// 5. Find documents where a field is between two values ($gte, $lte)
// Q: Find all users between 20 and 30 years old.

db.user.find({ age: { $gte: 20, $lte: 30 } });

// 6. Find documents where a field matches one of multiple values ($in)
// Q: Find users whose city is either "Hyderabad", "Bangalore", or "Mumbai".

db.user.find({ city: { $in: ["Hyderabad", "Bangalore", "Mumbai"] } });

// 7. Find documents where a field does NOT match specific values ($nin)
// Q: Find users who don’t live in "Hyderabad", "Bangalore", or "Mumbai".

db.user.find({ city: { $nin: ["Hyderabad", "Bangalore", "Mumbai"] } });

// 8. Find documents where a field exists ($exists)
// Q: Find users who have an email field.

db.user.find({ email: { $exists: true } });

// 9. Find documents where a field matches a pattern ($regex)
// Q: Find users whose names start with "Mu".

db.user.find({ username: { $regex: "^Mu", $options: "i" } });

// 10. Find documents where a field contains an array ($all)
// Q: Find users who have both "football" and "cricket" in their hobbies array.

db.user.find({ hobbies: { $all: ["football", "cricket"] } });

// 11. Find documents where an array contains at least one value ($in for arrays)
// Q: Find users who like either "football" or "cricket".

db.user.find({ hobbies: { $in: ["football", "cricket"] } });

// 12. Find documents where an array has a specific length ($size)
// Q: Find users who have exactly 3 hobbies.

db.user.find({ hobbies: { $size: 3 } });

// 13. Find documents where an array contains an object with a specific field
// Q: Find users who have an address where the city is "Hyderabad".

db.user.find({ "addresses.city": "Hyderabad" });

// 14. Find documents using $or (OR condition)
// Q: Find users who are either from "Hyderabad" or "Mumbai".

db.user.find({ $or: [{ city: "Hyderabad" }, { city: "Mumbai" }] });

// 15. Find documents where a field is null
// Q: Find users whose email is null.

db.user.find({ email: null });

// 16. Find a single document (findOne)
// Q: Retrieve only one user who is from "Hyderabad".

db.user.findOne({ city: "Hyderabad" });

// 17. Sort documents (sort())
// Q: Find all users and sort them by age in descending order.

db.user.find().sort({ age: -1 });

// 18. Limit the number of results (limit())
// Q: Get the top 5 youngest users.

db.user.find().sort({ age: 1 }).limit(5);

// 19. Find distinct values (distinct())
// Q: Get a list of all unique cities from users.

db.user.distinct("city");

// 20. Count documents (countDocuments())
// Q: Count how many users are from "Hyderabad".

db.user.countDocuments({ city: "Hyderabad" });

// 21. Find documents using $nor (NOT OR)
// Q: Find users who are neither from "Hyderabad" nor "Mumbai".

db.user.find({ $nor: [{ city: "Hyderabad" }, { city: "Mumbai" }] });

// 22. Find documents where a field is true or false
// Q: Find users who have verified their email.

db.user.find({ emailVerified: true });

// 23. Find documents where a field is not equal to a value ($ne)
// Q: Find all users except those from "Hyderabad".

db.user.find({ city: { $ne: "Hyderabad" } });

// 24. Find documents where an array has at least one element ($exists + $ne)
// Q: Find users who have any hobbies listed.

db.user.find({ hobbies: { $exists: true, $ne: [] } });

// 25. Find documents using $elemMatch for complex array queries
// Q: Find users who have an address in "Hyderabad" and pincode "500001".

db.user.find({
  addressses: { $elemMatch: { city: "Hyderabad", pincode: 500001 } },
});

// 26. Find documents where an array field does NOT contain a specific value
// Q: Find users whose hobbies do not include "football".

db.user.find({ hobbies: { $ne: "football" } });

// 27. Find documents using $mod (Modulo)
// Q: Find users whose age is an even number.

db.user.find({ age: { $mod: [2, 0] } });

// 28. Find documents using $type (Check field type)
// Q: Find all users where phoneNumber is a string.

db.user.find({ phoneNumber: { $type: "string" } });

// 29. Find documents using $where (Custom JavaScript condition)
// Q: Find users whose age is double their yearsOfExperience.

db.user.find({ $where: "this.age===this.age.yearsOfExperience*2" });

// 30. Find documents where a string field ends with a specific value ($regex)
// Q: Find all users whose email ends with "@gmail.com".

db.user.find({ email: { $regex: "@gmail\\.com$", $options: "i" } });

// 31. Find documents where a field contains an object with a specific structure
// Q: Find users whose profile field contains { age: 25, gender: "male" }.

db.user.find({ profile: { age: 25, gender: "male" } });
// 👉 Exact match on the entire object structure.

// 32. Find documents where a field contains an object with missing keys ($exists: false)
// Q: Find users whose profile field does not have an age key.

db.user.find({ "profile.age": { $exists: false } });

// 33. Find documents where a date is greater than a specific value
// Q: Find users who joined after "2024-01-01".

db.user.find({ joinedDate: { $gt: ISODate("2024-01-01") } });

// 34. Find documents where a field is an empty array
// Q: Find users who have no friends.

db.user.find({ friends: { $size: 0 } });

// 35. Find documents where an array contains at least 3 elements
// Q: Find users who have at least 3 items in hobbies.

db.user.find({ hobbies: { $size: { $gte: 3 } } });

// 36. Find documents where a field is an object
// Q: Find users whose profile field is an object, not a string.

db.user.find({ hobbies: { $type: "object" } });

// 37. Find documents where a number field is near a specific value ($near)
// Q: Find users located within 10 km of coordinates [78.4867, 17.3850].

db.user.find({
  location: {
    $near: {
      $geometry: { type: "Point", coordinates: [78.4867, 17.385] },
      $maxDistance: 10000,
    }
  },
});

// 38. Find documents using $text search for indexed text fields
// Q: Find users whose bio contains "fitness" or "trainer".

db.users.createIndex({bio:"text"})
db.users.find({$text:{$search:"fitness trainer"}})
// $text allows full-text search.

// 39. Find documents using $expr for field comparisons
// Q: Find users whose age is greater than their yearsOfExperience.

db.users.find({$expr:{$gt:["$age","$yearsOfExperience"]}});

// 40. Find documents using $rand for random selection
// Q: Get a random user.

db.users.find().sort({$rand:1}).limit(1)
