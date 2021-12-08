document.write('Lets see where this ends up');

function addition_Function(){
    var addition = 2 + 2;
    document.getElementById("Math").innerHTML = "2 + 2 = " + addition;
}

//I had trouble understanding the modulo operator so this function is the practice of calculating one
function modulus_Operator(){
    var simple_math = 25 % 6;
    document.getElementById('modulo').innerHTML = 'When you divide 25 by 6 you have a remainder of: ' + simple_math;
}

//what is interesting about this is that it shows up directly after line 1, not after the functions
var X = 5;
document.write(X);
X++;
document.write(X);

//return a random number between 0 and 1
window.alert(Math.random());

//return a random number between 2 given numbers; up to 100 in this case
window.alert(Math.random() * 100);


