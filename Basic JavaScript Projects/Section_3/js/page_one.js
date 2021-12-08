//----------------------------------------STRING METHODS-----------------------------------------------------------

//exercise in concat() method
function full_Sentence() {
    var part_1 = "I have ";
    var part_2 = "made this ";
    var part_3 = "into a complete ";
    var part_4 =  "sentence.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

//exercise in slice() method
//The numbers indicate which characters in your string will be cut out and displayed.
function slice_Method() {
    var Sentence = "All work and no play makes Johnny a dull boy.";
    var Section = Sentence.slice(27,33);
    document.getElementById("Slice").innerHTML = Section;
}

//this is an exercise using the toUpperCase method. What i did differently about this one is not only did i change the case, 
// but i changed the sentance as well. 
function upperCase() {
    var Sentence = "to upper";
    var changeCase = Sentence.toUpperCase();
    document.getElementById("Upper_Case").innerHTML = changeCase;
}

//this is an exercise using the search method to find the position of a string. The result of the function below is 4.
function search() {
    var Sentence = "one two three four";
    var search = Sentence.search("two");
    document.getElementById("search").innerHTML = search
}
//----------------------------------------END OF STRING METHODS-----------------------------------------------------------

//----------------------------------------NUMBER METHODS-----------------------------------------------------------

function string_Method() {
    var X = 182;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
    document.getElementById("after").innerHTML = (typeof X)
}

function precision_Method() {
    var X = 12938.3012987376112;
    document.getElementById("Precision").innerHTML = X.toPrecision(7);
}

//round to the arguement passed in
function toFixed_method() {
    var X = 5.56789
    document.getElementById("fixed").innerHTML = X.toFixed(3);
}

//----------------------------------------END OF NUMBER METHODS-----------------------------------------------------------

//--------------------------------------------TIMER----------------------------------------------
// This exercise will use:
//a nested function,
//a conditional(if) statement,
//the setTimeout method
//an alert box
//the clearTimeout method
    function countdown() {
        //this will look for the 'seconds' id then take the value and store it in the variable
        var seconds = document.getElementById("seconds").value;

        function tick() {
            seconds = seconds - 1;
            timer.innerHTML = seconds;
            //The statement “setTimeout(tick, 1000);” 
            //means that the program is pausing for 1,000 milliseconds (i.e., 1 second).
            var time = setTimeout(tick, 1000);
            if (seconds == -1) {
                alert('Times up!');
                clearTimeout(time);
                timer.innerHTML = ""
            }
        }
        tick()
    }


//left off : https://www.learncodinganywhere.com/Student/PageView/ViewPage?courseId=103&pageNumber=176