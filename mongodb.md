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

1.
