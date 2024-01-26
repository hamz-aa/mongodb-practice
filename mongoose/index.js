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
    // all the validations that we perform in the schema are only applicable
    // on the create() and save() method
    // const user = await User.create({
    //   name: "Hamza",
    //   age: 22,
    //   email: "hamza@mail.com",
    //   hobbies: ["reading", "running", "coding"],
    //   address: {
    //     street: "main street",
    //   },
    // });

    // this below line will not work as createdAt is set as immutable in schema
    // user.createdAt = 5;

    // basic queries
    // const user = await User.findById("65b38f266c79c22e493fcfaf");
    // const user = await User.find({ name: "Hamza" });
    // const user = await User.findOne({ name: "Hamza" });
    // const user = await User.exists({ name: "Hamza" });
    // await User.deleteOne({ name: "Hamza" });

    // useful query methods
    // const user = await User.where("name").equals("Hamza");
    // const user = await User.where("age").gt("12");
    // const user = await User.where("age").gt(12).where("name").equals("Hamza");
    // const user = await User.where("name")
    //   .equals("Hamza")
    //   .limit(1)
    //   .select("age");

    // connecting one user with another
    // user[0].bestFriend = "65b36a256d34d9db1c7beb4f";
    // user[0].save();

    // we can populate our bestFriend property because of the connection we made above
    // const user = await User.where("name")
    //   .equals("Hamza")
    //   .limit(1)
    //   .populate("bestFriend")
    //   .select("age");

    const user = await User.findOne({ name: "Hamza" });

    // await user.save();
    console.log(user);

    user.sayHi();
  } catch (error) {
    console.log(error.message);
    // console.log(error.errors.age);
  }
}
