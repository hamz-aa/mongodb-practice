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

// these below created methods are not saved in our database
// they are only available inside our code
// this saves extra space and helps in application testing and development

// applying methods on every instance of our user
// we cannot use arrow function because we have to reference 'this' inside our function
userSchema.methods.sayHi = function () {
  console.log(`Hi! My name is ${this.name}`);
};

// can create static methods as well
userSchema.statics.findByName = function (name) {
  return this.find({ name: new RegExp(name, "i") });
};

// query method
// this method will only be added to our query so we cannot call it directly like the above method
userSchema.query.byName = function (name) {
  return this.find({ name: new RegExp(name, "i") });
};

// virtual method
// a virtual method is a property that does not exist on the original schema
// it is based on properties that already exist in the schema
// for instance the below virtual property is based on email property of our schema
userSchema.virtual("namedEmail").get(function () {
  return `${this.name} <${this.email}>`;
});

// mongoose schema middleware
// you can either use pre() or post()
// pre() is for before you perform the specific action
// post() is for after you perform the specific action
// there are three main specific actions: save, remove, validate

// below we write a middleware for before we save the user
// we want to update the updatedAt property of our user
userSchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});

// example of post()
// 'this' won't work in post rather it passes us the document that it has saved
userSchema.post("save", function (doc, next) {
  doc.sayHi();
  next();
});

// mongoose.model(collection, schema)
export default mongoose.model("User", userSchema);
