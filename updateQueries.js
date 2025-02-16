// 1. Update a single document ($set)
// Q: Update the city of the user with _id: 123 to "Hyderabad".

db.user.updateOne({ _id: 123 }, { $set: { city: "Hyderabad" } });

// 2. Update multiple documents ($set + updateMany)
// Q: Update all users whose country is "India" and set isIndian to true.

db.user.updateMany({ country: "India" }, { $set: { isIndian: true } });

// 3. Increment a numeric field ($inc)
// Q: Increase the age of all users by 1.

db.user.updateMany({},{$inc:{age:1}});

// 4. Append values to an array ($push)
// Q: Add "cricket" to the hobbies array of user _id: 123.

db.user.updateOne({_id:123},{$push:{hobbies:"cricket"}});

// 5. Append values to an array only if not present ($addToSet)
// Q: Add "football" to the hobbies array, but only if it's not already present.

db.user.updateOne({_id:123},{$addToSet:{hobbies:"football"}});

// 6. Remove a specific value from an array ($pull)
// Q: Remove "football" from the hobbies array.

db.user.updateOne({_id:123},{$pull:{hobbies:"football"}})

// 7. Remove the first or last element from an array ($pop)
// Q: Remove the last element from the hobbies array.

db.users.updateOne({_id:123},{$pop:{hobbies:1}})

// 8. Rename a field ($rename)
// Q: Rename the field fullName to name.

db.user.updateMany({},{$rename:{fullName:"name"}})

// 9. Multiply a field’s value ($mul)
// Q: Double the salary of all users.

db.user.updateMany({},{$mul:{salary:2}})

// 10. Update a nested field inside an object (dot notation)
// Q: Update the city inside the address object of user _id: 123.

db.user.updateOne({_id:123},{$set:{"address.city":"Hyderabad"}})

// 11. Update a specific element in an array ($set with array index)
// Q: Update the second item (index 1) in hobbies to "swimming".

db.user.updateOne({_id:123},{$set:{"hobbies.1":"swimming"}})

// 12. Update only if a field exists ($exists)
// Q: Set isPremium to true for users who have the subscription field.

db.user.updateMany({subscription:{$exists:true}},{$set:{isPremium:true}})

// 13. Remove a field ($unset)
// Q: Remove the age field from all users.

db.user.updateMany({},{$unset:{age:""}})

// 14. Conditionally update ($cond inside $set)
// Q: If age > 30, set category to "Senior", else "Junior".

db.users.updateMany(
    {},
    { $set: { category: { $cond: { if: { $gt: ["$age", 30] }, then: "Senior", else: "Junior" } } } }
  )
  
// 15. Update using $currentDate
// Q: Update the lastLogin field to the current date-time.

db.users.updateOne({_id:123},{$currentDate:{lastLogin:true}})

// 16. Replace an entire document (replaceOne)
// Q: Replace a user document _id: 123 with a new structure.

db.user.replaceOne({_id:123},{name:"Ashik",city:"Hyderabad",age:26});