function Cat(name, breed) {
    this.name = name;
    this.breed = breed;
}

// let's make some cats!
var cheshire = new Cat("Cheshire Cat", "British Shorthair");
var gary = new Cat("Gary", "Domestic Shorthair");

// add a method "meow" to the Cat class that will allow
// all cats to print "Meow!" to the console
Cat.prototype.meow = function(){
    console.log('meow')
}

// add code here to make the cats meow!
cheshire.meow()
gary.meow()

// Dog.prototype.bark = function() {
//   console.log("Woof");
// };
// buddy.bark();

// // here we make snoopy
// var snoopy = new Dog("Beagle");
// /// this time it works!
// snoopy.bark();
