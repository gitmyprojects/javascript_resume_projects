//This file is used to practice various JavaScript elements including the alert box and writing to a document
//outside of the html file
//I also practiced using quotations inside of a string as well as 
//using the <br> tag to print the strings to separate lines
//I also used the syntax for storing a value in a variable

alert('Hello, World!');

var x = ('Hello, to Liam!<br>')
window.alert(x);
document.write('Displayed using JS outside of the HTML<br>');
document.write(x);
document.write("Lisa said to Bart \"I\'m telling!\"<br>\"Eat my shorts\" he responded.");

//concatenate using the + operator
//I added the break tag to the beginning of the string as an example of when 
//I dont know how the string before it ended or where its at in the file. 
//By adding it to the beginning, I ensure its on it's own new line without having to look
//through the file
document.write("<br>Connect this string to "
+ "another string." + "Why not add one more?");

//two strings assigned to one variable
var y = ("<br>String " + "plus another string assigned to one variable")
document.write(y)

//assigning values to multiple variables in one statement then concatinating
var family = 'Doe\'s', dad = 'John', mom = 'Jane', child = 'Jack';
document.write('<br>' + dad + ' ' + family)

// str.fontcolor method to change the font color
var blues = ('<br>I have the blues');
var blues = blues.fontcolor("blue");
document.write(blues)

//print and expression using a statement
document.write(3+3);

//this function is practice with adding a method (fontcolor) to a variable to change the text
function My_First_Function() {
    var str = 'This text is Green';
    var result = str.fontcolor("green");
    document.getElementById("Green_Text").innerHTML = result;
}

//this is just practice using a different event; onmouseover
function Blinking_Function() {
    var text = 'Look at me!';
    var result = text.blink();
    document.getElementById('blink').innerHTML = result;
}

//this function gets called using the id and is an example of using the += operatorate to concatenate strings
function myFunction() {
    var sentence = 'I am learning';
    sentence += ' a lot from this practice!';
    document.getElementById('concatenate').innerHTML = sentence;
}

//this is help with understanding the DOM. the getElementsByTagName method gathers all the paragraph elements and stores them in the foo variable.
var foo = document.getElementsByTagName('p');
document.write('<br>', foo);

