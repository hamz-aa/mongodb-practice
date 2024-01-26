import mongoose, { mongo } from "mongoose";

// this file contains schema

// separate schema for address property
const addressSchema = new mongoose.Schema({
  street: String,
  city: String,
});

const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  email: String,
  createdAt: Date,
  updatedAt: Date,
  // the value of this attribute is going to be another user object which we'll link through id
  bestFriend: mongoose.SchemaTypes.ObjectId,
  hobbies: [String],
  // there are two ways of creating nested properties.
  // first one is defined below
  //   address: { street: String, city: String },
  // this is the second way of creating nested properties
  // we create a separate schema and then link it to our property as we did below
  address: addressSchema,
});

// mongoose.model(collection, schema)
export default mongoose.model("User", userSchema);
