/*
console.log("Hello, welcome to Practice.js!");

let a = 5;
let b = 10;

function add(a, b) {
    return a + b;
}

console.log("The sum of a and b is: " + add(a, b));

/*
This is a comment
spanning multiple lines.
It explains the purpose of the code.


// This is a single-line comment explaining the next line of code.

console.log("The square of 2 is", (2+2)); 
console.log(3>2);
console.log(3==2);
*/

/*
var mon = 1;
var tue = 2;
var wed = 3;

console.log(mon + tue + wed); 

var overtime = 2;
 overtime += 4; 
 overtime += 6;

 console.log(overtime);
 */

 // if else statement practice

/*
 var result = 10;

 if(result > 40) {
    console.log("You Passed The Test!")
 } else {
    console.log("You Did Not Pass The Test...")
 }
*/



// If, esle if, else statement
/*
var place = "second";

if (place == "first") {
    console.log ("Gold")
} else if (place == "second") {
    console.log("Silver")
} else if (place == "Third") {
    console.log("Bronze")
} else {
    console.log("No Medal to Be Won")
}
*/


// Switch Statement 

/*
var place = 'first';

switch(place) {
    case 'fifth':
        console.log('Gold');
            break;
    case 'second':
        console.log('Silver');
        break;
    case 'third':
        console.log('Bronze');
        break;
    default:
        console.log('No Medal To Be Won');
}
*/

// gor loop practice
/*
for (var j =  1; j<101; j++) {
    console.log(j)
}
*/

// For loop

/*
for (var i = 1; i <= 3; i++) {
    console.log(i);
}
console.log('GO!');

console.log('--------------------');
for (var i = 10; i > 0; i--) {
    console.log(i)
}
console.log('Happy New Year!!!')
*/


// WHILE LOOP
/*
var counter = 3;
while (counter >= 0) {
    console.log(counter);
    counter = counter - 1;
}
console.log("GO!");
*/

// NESTED LOOPS
/*
for (i = 0; i < 2; i++) {
    for (j = 1; j <= 7; j++) {
        console.log("Week" +i+ "day" +j)
    }
}
*/
/*
for (var year =2023; year < 2025; year++) {
    console.log(year);
    for (var month = 6; month < 9; month++) {
        console.log("-----", month)
    }
}

console.log('-----------------');
*/
/*
for (var i = 100; i > 10; i = i - 10) {
    for (var j = 10; j > 4; j = j - 5) {
        console.log(i + " divided by " + j + " is " + (i / j)); 
    }
}


var cubes = 'ABCDEFG';
//styling console output using CSS with a %c format specifier
for (var i = 0; i < cubes.length; i++) {
    var styles = "font-size: 40px; border-radius: 10px; border: 1px solid blue; background: pink; color: purple";
    console.log("%c" + cubes[i], styles)
}




function letterFinder(word, match) {
    for (var i = 0; i < word.length; i++) {
        if (word[i] == match) {
            console.log("Found the", match, "at ", i);
        } else {
            console.log('---No match found at', i);
        }
    }
}

letterFinder("test", "t");


// OBJECTS IN JAVASCRIPT
var assistantManager = {
    rangeTilesPerTurn: 4,
    health: 100,
    socialSkills: 70,
    streetSmarts: 60,
    specialAbility: "Young and Ambitious",
    greetinf: "Let's make some money!"
}

console.log(assistantManager);

console.log("Assistant Manager's health is:", assistantManager.health);

assistantManager.health += 20;
console.log("Assistant Manager's health after a boost is:", assistantManager.health);

var house = {
    rooms: 4,
    color : "red",
    price: 250000
}

var house2 = {}
house2.rooms = 3;
house2.color = "blue";
house2.priceUSD = 25000;
console.log(house2)


var car = {}
car ["color"] = "red";
car["priceUSD"] = 1233;
car["Model"] = "Toyota";
car.age = "12 years"

console.log(car)


Math.random();
var decimal = Math.random();
console.log(decimal);

console.log(decimal * 10);


var rounded = Math.ceil(0.001)
var rounded = Math.ceil(4.2657);
var rounded = Math.ceil(10.9);
console.log(rounded);


var decimal = Math.random();

var roumded = Math.ceil(decimal);

console.log(roumded);


var veggies = ["carrot", "broccoli", "asparagus", "cauliflower", "corn"];

console.log(veggies.length)

console.log(veggies[2]);

for (var i = 0; i < veggies.length; i++) {
    console.log(veggies[i]);
}

var greeting = "Howdy";
console.log(greeting.length);
console.log(greeting[1]);

for (var i = 0; i < greeting.length; i++) {
    console.log(greeting[i]);
}


var greet = 'Hello, ';
var user = 'Lisa';


console.log(greet + user);

console.log(greet.concat(user));  


var  car = {};
car.mileage = 10000;
car.color = "red";

console.log(car);

car.turnKey = function() {
    console.log("The engine is running");
};
car.lightsOn = function() {
    console.log("The lights are on");
}
console.log(car);
car.turnKey();
car.lightsOn(); 
*/

// Using Typeof Operator

// var test = typeof('What is this?')
// var test = typeof(42);
// var test = typeof(true);
// var test = typeof(undefined);
// var test = typeof(3.13)
// var test = typeof({name: 'Alice', age: 30});
var test = typeof (function() {});
console.log(test);