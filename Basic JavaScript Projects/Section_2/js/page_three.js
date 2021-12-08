//This is an exercise using dictionaries and KVP's(Key Value Pairs)
function my_Dictionary() {
    var Animal = {
        Species: "Dog",
        Color: "Black",
        Breed: "Labrador",
        Age: 5,
        Sound: "Bark!",
    };
    document.getElementById("Dictionary").innerHTML = Animal.Sound;
}

//This is an exercise to determine the data type of a variable
document.write(typeof "Word");
document.write(typeof 3);

//this is an example of how JavaScript is type coercion
document.write('10' + 5);
//The above statement will return the string 105 because it added the number 5 to the string 10

//this is an exercise in Nan(not a number)
function my_Function() {
    document.getElementById('test').innerHTML = 0/0;
}
//additional examples of NaN
//document.getElementById('test').innerHTML = isNaN('This is a string'); would return True
//document.getElementById('test').innerHTML = isNaN('007'); would return False

//exercise in console.log() method
//the console can be used to debug in the browser
console.log(2 + 2);
console.log(10 < 2); //boolean logic displayed to the console

document.write(3 == 3); //comparison operator and boolean logic to display True
document.write(3 == 4); //comparison operator and boolean logic to display False

//triple equal comparison operator compares BOTH value and data type.
A = 10;
B = 10;
document.write(A === B); // evaluates to True
C = 82
D = '82'
document.write(C === D);//evaluates to False because they are not the same data type

//In JavaScript, there are three Boolean logical operators:

// AND written: &&

// OR written: ||

// NOT written: !

// This is an exercise in using a ternary operator (?) (Ternary means 'made up of three parts')
// the ternary operator operates on three values
// It can be used to assign a value to a variable based on a condition. 
// This is also referred to as a conditional operator in that it assigns a value to a variable based on a condition.
document.write(Bigger = (5 > 1) ? 'Left number is bigger':'Right number is bigger');
// if five is bigger than one, display the message on the left side
function Ride_Function() {
    var Height, Can_Ride;
    Height = document.getElementById("Height").value;
    Can_Ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_Ride + " to ride.";
}

//This is an exersise with keywords and constructors
//The “this” keyword indicates the object that is the owner of the code.
//When used within an object, the value of “this” is the object. When used with a function, the value of “this” is the object that possesses the function.
function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

//Here we are creating a new variable, Jack. The keyword 'new' is telling the program that there will be a new instance of something. 
//That something is using the constructor "Vehicle", requiring the attributes to be passed in. 
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Eric = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function keyword_Function() {
    document.getElementById("Keywords_and_Constructors").innerHTML = 
    "Erik drives a " + Eric.Vehicle_Color + "-colored" + Eric.Vehicle_Model +
    " manufactured in " + Eric.Vehicle_Year;
}

//This is an exersise of nesting functions
function count_Function() {
    document.getElementById("Counting").innerHTML = Count()
    function Count() {
        var Starting_Point = 9;
        function Plus_one() {Starting_Point += 1;}
        Plus_one();
        return Starting_Point;
    }
}

//This is an exersise in global vs local variables but I also wanted to use an example of debugging using the console.log method
function Add_numbers_1() {
    var X = 10;
    console.log(15 + X);
}
function Add_numbers_2() {
    console.log(X + 100);
}
//This function will execute because X is local to it
Add_numbers_1();
//This function will not execute because X is local to another function
//However, open the console in the browser and you will see the error explaining why the function doesn't run
Add_numbers_2();

//this is an exersise in conditional statements but I used this example to remember the Date().getHours() method that returns
 //the hour of the specified date according to local time. 
 function get_Date() {
     current_hour = new Date().getHours();
     if (new Date().getHours() < 18) {
         document.getElementById("Greeting").innerHTML = "How are you today at " + current_hour + " hundred hours?";
     }
 }

 function Time_function() {
     var Time = new Date().getHours();
     var Reply;
     if (Time < 12 == Time > 0) {
         Reply = "It is morning time!";
     }
     else if (Time >= 12 == Time < 18) {
         Reply = "Is is afternoon time!";
     }
     else {
         Reply = "It is evening time!";
     }
     document.getElementById("Time_of_day").innerHTML = Reply;
 }