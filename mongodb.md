# MongoDB

**Commands with Explanation**

## Basic Commands

1. **mongosh:** Write this command to enter the terminal for mongodb
1. **show dbs:** This commands displays all available databases.
1. **use** <u>_name of db_</u>**:** This command opens the database you specify. If the database does not exist exist then it creates it and opens it. Example usage: use appdb
1. **show collections:** This command displays the collections that exist within a database.
1. **db.dropDatabase():** This commands delete the database you're currently inside.
1. **exit:** This command exits the mongosh terminal.

## Insert Commands

1. **db:** Access the current database.
1. **db.**<u>_collection name_</u>**.insertOne():** This command inserts data in json format in the specified collection. It also generates a unique id of the inserted object. Example usage:  
   `db.users.insertOne({ name: "Hamza" })`
1. **db.**<u>_collection name_</u>**.find():** This command displays everything inside the specified collection.
1. **db.**<u>_collection name_</u>**.insertMany():** This command is used to insert more than one objects in the specified collection. It takes an array of objects. Example usage:  
   `db.users.insertMany([{ name: "Fazal" }, { name: "Osama" }])`

## Query Commands

1. **db.**<u>_collection name_</u>**.find().limit(**_n_**):** This command limits the search results to _n_ number of objects.
1. **db.**<u>_collection name_</u>**.find().sort({** _key_ : _1 or -1_ **}):** This command returns the sorted collection. It takes an object and sorts based on the key. The key can have value 1 for alphabetical order and -1 for reverse alphabetical order. Example usage :  
   `db.users.find().sort({ name: 1})`  
   The function can also take multiple arguments. Example usage:  
   `db.users.find().sort({ name: 1, age: -1})`
1. **db.**<u>_collection name_</u>**.find().skip(**_n_**):** This command skips n number of items. Example usage:  
   `db.users.find().skip(1).limit(2)`
1. **db.**<u>_collection name_</u>**.find(**_{ key : value }_**):** This command is used to find an item based on the provided key value pair. Example usage:  
   `db.users.find({ name: 'Hamza' })`
1. **db.**<u>_collection name_</u>**.find(**_{ key : value }, { key : 1 or 0 }_**):** This command is used to find the item based on the first key value pair and return only those elements of the item that are described in the second key value pair. Example usage:  
    `db.users.find({ name: 'Hamza' }, { name: 1, age: 1 })`  
   This above written command finds the object containing `name: 'Hamza'` but does not return the entire object rather only returns the **name** and **age** properties of the object. If you want all elements of the object to be returned except the specified one then put key to be 0 in the second object. Example usage:  
   `db.users.find({ name: 'Hamza' }, { age: 0 })`  
   The above command will return all properties of the found object except the age property. Put `_id: 0` if you do not want the id to be returned as well.

## Complex Query Commands

1. **db.**<u>_collection name_</u>**.find(**_{ key : { $op : value } }_**):** This is a complex query statement in mongodb. The value corresponding to a key is another object that can have a list of operations. Example usage:  
   `db.users.find({ name: { $eq : 'Hamza' }})`  
   The **op** can have the following list of values:

   - **$eq:** _for equal_
   - **$ne:** _for not equal_
   - **$gt:** _for greater than_
   - **$lt:** _for less than_
   - **$gte:** _for greater than or equal to_
   - **$lte:** _for less than or equal to_
   - **$in:** _checks for a value in the provided list and returns it_
   - **$nin:** _does the opposite of $in. Returns all the values except those provided in the list_
   - **$exists:** _checks if a property exists and returns it_

1. **db.**<u>_collection name_</u>**.find(**_{ key : { $in : [ list ] } }_**):** This command using the **$in** op checks if a value exists in the provided list and then returns it. Example usage:  
   `db.users.find({ name: { $in : ['Hamza', 'Fazal']}})`

1. **db.**<u>_collection name_</u>**.find(**_{ key : { $exists : true or false } }_**):** This command checks if a property exists and returns the object containing that property. If we pass false to $exists, then it returns all those items that do not contain the specified property. Example usage:  
   `db.users.find({ name: { $exists : true }})`

1. **db.**<u>_collection name_</u>**.find(**_{ key : { $op : val , $op : val } }_**):** We can have an **AND** operation by combining different **$op** using commas ( , ). Example usage:  
   `db.users.find({ age : { $gte: 19, $lte: 40 }})`  
   This above command checks if age is greater than or equal to 19 and less than or equal to 40 and returns only those items that match this description.

1. **db.**<u>_collection name_</u>**.find(**_{ $and : [{ key : val }, { key : val }, ...] }_**):** This query performs and **AND** operation. It takes an array of objects and checks if any item has the provided set of properties and returns that item. Example usage:  
   `db.users.find({ $and: [{age:15}, {name:'Hamza'}]})`

1. **db.**<u>_collection name_</u>**.find(**_{ $or : [{ key : val }, { key : val }, ...] }_**):** This command performs the **OR** operation. Example usage:  
   `db.users.find({ $or : [{age:15}, {name:'Hamza'}]})`

1. **db.**<u>_collection name_</u>**.find(**_{ key : { $not : { key : val }}}_**):** This command performs the **NOT** operation. It does the opposite of whats provided. Example usage:  
   `db.users.find({ age : { $not : { $lte : 20 }}})`

1. **db.**<u>_collection name_</u>**.find(**_{ $expr : { $op : [ '$property_01', '$property_02' ] }}_**):** This command is used to compare two properties of an object. It compares based on the **$op** you provide. Example usage:  
   `db.users.find({$expr: { $gt: ['$balance', '$debt']}})`

1. **db.**<u>_collection name_</u>**.find(**_{ parent_key.child_key : val }_**):** If we have nested properties, we can access them using the dot ( . ) operator. Example usage:  
   `db.users.find({ 'address.street' : '123 Main Street' })`

1. **db.**<u>_collection name_</u>**.findOne(**_{ key : value }_**):** This query returns the first object that matches the first provided key value pair.

1. **db.**<u>_collection name_</u>**.countDocuments(**_{ key : value }_**):** This command counts the number of documents that match the provided key value pair.

## Update Commands

1. **db.**<u>_collection name_</u>**.updateOne(**_{ key : value }, { $set : { key : value }}_**):** This command updates the first field that contains the provided key value pair in the first object. In the second object, we provide the key we want to update along with the new value. Example usage:  
   `db.users.updateOne({name: 'Hamza'}, {$set: {age: 20}})`

1. **db.**<u>_collection name_</u>**.updateOne(**_{ key : value }, { $inc : { key : value }}_**):** This command updates the first found item by incrementing the specified key's value by the provided amount. Example usage:  
   `db.users.updateOne({name: 'Hamza'}, {$inc: {age: 2}})`

1. **db.**<u>_collection name_</u>**.updateOne(**_{ key : value }, { $rename : { old_column_name : new_column_name }}_**):** This command is used to rename a column. Example usage:  
   `db.users.updateOne({name: 'Hamza'}, {$rename: { name: 'f_name' }})`

1. **db.**<u>_collection name_</u>**.updateOne(**_{ key : value }, { $unset : { key : '' }}_**):** This command will remove the specified key from the object. Example usage:  
   `db.users.updateOne({name: 'Hamza'}, {$unset: { name: '' }})`

1.
