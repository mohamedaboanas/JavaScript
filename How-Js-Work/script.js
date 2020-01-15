//////////////////////////////////////
// Lecture: Hoisting
/*
// you can call function before you create it
// because the Hoisting with variable object
// calculateAge(2020);

function calculateAge(year){
    console.log(2020 - year);
}
calculateAge(1990);

// function expression 
// Hoisting not work with the expression function when you // call it befor you create it because is  
// not function declerations

// retirement(2020);
var retirement = function(year){
    console.log(65 - (2020 - year));
}
 retirement(2020);

// when you call varibale befor you declare it
// it will be undefind because the Hoisting 
// store the variable as undefind until excute.

// variables
console.log(age);
var age = 37;
console.log(age);

function foo(){
    var age = 56;
    console.log(age);
}
// deffrent result because the fisrt one is in the function // and store in it,
// but in the scpond one it store in the global excutions.
foo();
console.log(age);

*/

//////////////////////////////////////////////
// Lecture: Scoping //

// First scoping example - lexical scoping
/*
var a = 'Hello!';
first();

function first(){
    var b = 'Hi!';
    second();
    
    function second(){
        var c ='Hey!';
        console.log(a + b + c);
    }
}

*/

/*
// Example to show the difference 
// between execution stack and scope chain.

var a = 'Hello!';
first();

function first(){
    var b = 'Hi!';
    second();
    
    function second(){
        var c ='Hey!';
        third();
    }
}

function third(){
    var d = 'Mohamed';
    console.log(a + d);
}

*/

////////////////////////////////////////
// Lecture: the 'this' keyword //
 
/*
function calculateAge(year){
    console.log(2020 - year);
    console.log(this);
}
*/

var john = {
    name:'John',
    yearOfBirth: 1983,
    calculateAge: function(){
        // get all object data
        console.log(this);
        console.log(2020 -
                    this.yearOfBirth);        
        /*
        function innerFunction(){
            // 'this' keyword result will be the default(widow) empty!.
            console.log(this);
        }
        innerFunction();
        */
    }
}

john.calculateAge();

var mike = {
    name: 'Mike',
    yearOfBirth: 2010
};

// Mike object will take the 'this' keywork for john object!.
mike.calculateAge = john.calculateAge;
mike.calculateAge();


















