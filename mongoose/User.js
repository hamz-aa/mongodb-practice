import mongoose, { mongo } from "mongoose";

// this file contains schema

// separate schema for address property
const addressSchema = new mongoose.Schema({
  street: String,
  city: String,
});

const userSchema = new mongoose.Schema({
  name: String,
  age: {
    type: Number,
    min: 1,
    max: 100,
    // we can perform custom validations as well
    validate: {
      validator: (v) => v % 2 === 0,
      message: (props) => `${props.value} is not an even number`,
    },
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    minLength: 10,
  },
  createdAt: {
    type: Date,
    // the immutable property means that once the property is set, it cannot be changed again
    // for instance, when we create a new user and set its createdAt property,
    // we cannot change it later
    immutable: true,
    default: () => Date.now(),
  },
  updatedAt: {
    type: Date,
    default: () => Date.now(),
  },
  // the value of this attribute is going to be another user object which we'll link through id
  bestFriend: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User",
  },
  hobbies: [String],
  // there are two ways of creating nested properties.
  // first one is defined below
  //   address: { street: String, city: String },
  // this is the second way of creating nested properties
  // we create a separate schema and then link it to our property as we did below
  address: addressSchema,
});

// applying methods on every instance of our user
// we cannot use arrow function because we have to reference 'this' inside our function
userSchema.methods.sayHi = function () {
  console.log(`Hi! My name is ${this.name}`);
};

// mongoose.model(collection, schema)
export default mongoose.model("User", userSchema);
