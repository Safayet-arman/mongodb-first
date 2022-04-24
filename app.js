const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/FruitDB", {
  useNewUrlParser: true
});
const fruitSchema = new mongoose.Schema({
  name: String,
  rating: Number,
  review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
  name: "Apple",
  rating: 7,
  review:"good taste"
});
// fruit.save();

const personSchema = new mongoose.Schema({
  name: String,
  age: Number
});

const Person = mongoose.model("Person", personSchema);

const person = new Person({
  name: "Arman",
  age: 21
});
// person.save();


const kiwi = new Fruit({
 name: "kiwi",
 score: 10,
 review: "Best One"
});

const Orange = new Fruit({
  name: "orange",
  score: 3,
  review: "not bad"
});

const banana = new Fruit({
  name: "Banana",
  score: 7,
  review: "love this"
});
// Fruit.insertMany([kiwi,Orange,banana], function(err){
//   if(err){
//     console.log(err);
//   }else{
//     console.log("successfully saved");
//   }
// });

Fruit.find(function(err,fruits){
  if(err){
    console.log(err);
  }else{
    console.log(fruits);

    //closing mongoserver
    mongoose.connection.close();

    fruits.forEach(function(fruit){
      console.log(fruit.name);
    });
  }
});

