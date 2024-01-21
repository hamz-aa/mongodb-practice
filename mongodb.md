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
1. **db.**<u>_collection name_</u>**.insertOne():** This command inserts data in json format in the specified collection. It also generates a unique id of the inserted object. Example usage: db.users.insertOne({ name: "Hamza" })
1. **db.**<u>_collection name_</u>**.find():** This command displays everything inside the specified collection.
1. **db.**<u>_collection name_</u>**.insertMany():** This command is used to insert more than one objects in the specified collection. It takes an array of objects. Example usage: db.users.insertMany([{ name: "Fazal" }, { name: "Osama" }])

## Query Commands