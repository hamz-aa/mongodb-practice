import mongoose from "mongoose";
import User from "./User.js";

// connecting mongoose with a local database
mongoose.connect("mongodb://localhost/testdb");

// imported User model from User.js and created a new user
// const user = new User({ name: "Hamza", age: 21 });

// saving the data to the database
// this is an asynchronous method so we can use then and catch
// user.save().then(() => console.log("User Saved"));

// but it is better to use async await than using promises
run();

// async function run() {
//   // another way to create a user
//   const user = await User.create({ name: "Hamza", age: 21 });

//   // can change a property of our user object this way
//   user.name = "Fazal";

//   // const user = new User({ name: "Hamza", age: 21 });
//   // await user.save();
//   console.log(user);
// }

async function run() {
  try {
    const user = await User.create({
      name: "Hamza",
      age: 21,
      hobbies: ["reading", "running", "coding"],
      address: {
        street: "main street",
      },
    });

    await user.save();
    console.log(user);
  } catch (error) {
    console.log(error.message);
  }
}
