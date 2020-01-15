// Lecture Variables 1
/*
var name = 'Mohamed'; 
console.log(name);

var lastName ='Ahmed';
console.log(lastName);

var age =37;
console.log(age);

var fullAge= true;
console.log(fullAge);
*/

///////////////////////////////////////////
// Lecture Variables 2
/*
var name = 'Mohamed';
var age = 37;

var job, isMarried;
job = 'Engineer';
isMarried = true;

console.log(name  + ' ' + 'is a ' + 'Age' + ' ' + 
            age + ' Years old,  ' + 'job is ' + ' ' + 
            job + ', ' + 'Is he married?' + ' ' + 
            isMarried + '.');


var name = 'Abdel Hameed';
var age = 'thirty-six';

console.log(name  + ' ' + 'is a ' + 'Age' + ' ' + 
            age + ' Years old,  ' + 'job is ' + ' ' + 
            job + ', ' + 'Is he married?' + ' ' + 
            isMarried + '.');

var lastName = prompt('What is the last name?')
alert(lastName);
*/

///////////////////////////////////////////////////////
// Lecture: Operation
/*
var now = 2016;

var birthDate = now - 26;

birthDate = now - 26 * 2
//1964
//2016 - 52

var ageJohn = 30;
var ageMark = 30;

// excute group first
ageJohn = ageMark = (3 + 5) * 4 - 6;

// excute from right to left
// ageJohn = ageMark = 26

// john age will be 27
ageJohn++;

// mark age will be 52
ageMark *= 2;

console.log(ageJohn)
console.log(ageMark);

*/

//////////////////////////////////////////////////
// Lecture If/Else Statement
/*
var name = 'Mohamed';
var age ='37';
var isMarried = 'No';

if(isMarried === 'Yes'){
    console.log(name + ' is not married!');
}else {
    console.log(name + ' will hopefully get married soon!');
}

isMarried = false;
if(isMarried){
    console.log('No!');
}else{
    console.log('Yes!')
}
*/

///////////////////////////////////////////////////////
// Lecture 010 - Boolean Logic and Switch Statements
/*
var age = 16;
if(age < 16){
    console.log('Mohamed is a teenager');
}else if(age > 20 && age < 30){
    console.log('Mohamed is a young man')
}
else{
    console.log('Mohamed is a man');
}

var job = 'teacher';
//job = prompt('What does mohamed do?');
switch (job){
    case 'teacher':
        console.log('Mohamed teaches kids.');
        break;
    case 'driver':
        console.log('Mohamed drives a cob in lisbon.');
        break;
    case 'cop':
        console.log('Mohamed helps fight crime.');
        break;
    default:
        console.log('Mohamed does something else.');
}
*/

///////////////////////////////////////////////////
//Lecture 012 - Coding Challenge 1 Solution
/*
var johnHeight = 120;
var smithHeight = 123;
var williamHeight = 125;

var johnAge = 20;
var smithAge = 23;
var williamAge = 25;

var johnScore = johnHeight + johnAge * 5;
var smtihScore = smithHeight + smithAge * 5;
var williamScore = williamHeight + williamAge * 5;

if(johnScore > smtihScore && johnScore > williamScore)
{
   console.log('John win the game with ' + johnScore + ' Points.');
   }
else if (smtihScore > johnScore && smtihScore > williamScore)
{
   console.log('smith win the game with ' + smtihScore + ' Points.');
}
else if (williamScore > smtihScore && williamScore > johnScore  )
{
     console.log('william win the game with ' + williamScore + ' Points.');}
else{ console.log('third are draw.');}

*/

/////////////////////////////////////////////////////////
// Lecture Functions
/*
function calculateAge(today, yearOfbirth){
    var age = today - yearOfbirth;
    return age;
}
var ageJohn = calculateAge(2020, 1983);
console.log(ageJohn);

function yearUntilRetirement(name, year, retirementYear){
    var age = calculateAge(2020, year);
    var retirements = retirementYear - age;
    
    if(retirements >= 0){
        console.log(name + ' retires in ' + retirements + ' years.');
    }else{
        console.log(name + ' is already retired');
    }
    
}

yearUntilRetirement('John', 1983, 65);
yearUntilRetirement('Mike', 1990, 65);
yearUntilRetirement('Maria', 1940, 65);

*/

/////////////////////////////////////////////////////////
//Lecture 014 - Statements and Expressions
/*

//statement
if(x === 5){
    // do something
}
function someFunc(param){
    // some code
}


//expressions
3+4;
var x = 4;
var moreFun = function someFun(param){
    // some code
}

*/

//////////////////////////////////////////////////
//// Lecture 015 - Arrays //////

/*
var names = ['John', 'Jane', 'Mark'];
var years = new Array(1990, 1948, 1967);

console.log(names[0]);

names[1] = 'Mohamed';

console.log(names);

var john = ['John', 'Smith', 1990, 'Designer', false];

// add in the end of the array
john.push('Blue');
console.log(john);

// add int the bigining  of the array
john.unshift('Mr.');

//Remove the last element.
john.pop();

//Remove the first elements
john.shift();

// get the postion of the element in the array
// alert(john.indexOf('Smith'));

console.log(john);

// check if john is a teacher or not.

if(john.indexOf('Teacher') === -1){
    console.log('John is not a teacher!');
}

*/
/////////////////////////////////////////////////////////
/// Lecture 016 - Objects and Properties ///
/*
var john = {
   name: 'John',
   lastName: 'Smith',
   yearOfBirth: 1990,
   job: 'Teacher',
   isMarried: false   
};

console.log(john);
console.log(john.lastName);
console.log(john['yearOfBirth']);

var xyz = 'job';
console.log(john[xyz]);

john.lastName = 'Miller';
john['job'] = 'Programmer';

console.log(john);


// new different way to create an object

var jane = new Object();
jane.name = 'Jane';
jane.lastName = 'Smith';
jane['yearOfBirth'] = 1964;
jane['isMerried'] = true;

console.log(jane);
*/

/////////////////////////////////////////////////
// Lecture 017 - Objects and Methods ///

// v 1.0
/*
var john = {
    name: 'John',
    lastName: 'Smith',
    yearOfBirth: 1990,
    job: 'Teacher',
    isMarried: false,
    family:['Jane', 'Mark', 'Bob'],
    //calculateAge:function(yearOfBirth){
       // return 2020 - yearOfBirth;
   // }
    calculateAge:function(){
        return 2020 - this.yearOfBirth;
    }
    
};

console.log(john);
console.log(john.family[2]);
//console.log(john.calculateAge(john.yearOfBirth));
console.log(john.calculateAge());
var age = john.calculateAge();
john.age = age;

console.log(john);
*/

/*
// v 2.0

var john = {
    name: 'John',
    lastName: 'Smith',
    yearOfBirth: 1990,
    job: 'Teacher',
    isMarried: false,
    family:['Jane', 'Mark', 'Bob'],
    calculateAge:function(){
        this.age = 2020 - this.yearOfBirth;
    }
};

john.calculateAge();

console.log(john);


var mike = {
   
    yearOfBirth: 1983,   
    calculateAge:function(){
        this.age = 2020 - this.yearOfBirth;
    }
};

mike.calculateAge();
console.log(mike);

*/

//////////////////////////////////////////////////

///// 018 - Loops and Iteration ////////


/*
for(i = 0; i < 10 ; i++){
    console.log(i);
}
0, true, print 0, update i to 1
1, true, print 0, update i to 2 
.,
.,
.,
10, false, end the loop
*/

/*
// for loops //
var names = ['John', 'Jane', 'Mary', 'Mark', 'Bob'];

//for(i=0; i< 5;i++ ){
for(i=0; i< names.length;i++ ){
    console.log(names[i]);
}

for(i = names.length-1; i >= 0; i-- ){
    console.log(names[i]);
}

*/

/*
// while //
var names = ['John', 'Jane', 'Mary', 'Mark', 'Bob'];

var i = 0;
while(i < names.length){
    console.log(names[i]);
    i++;
}

for(i = 0; i <= 5; i++ ){
    console.log(i);
    
    if(i === 3)
        break;
}


for(i = 0; i <= 5; i++ ){
    //skip number 3
    if(i === 3)
        continue;
    
    console.log(i);
}

*/

/*
/// 019 - Coding Challenge 2 ///

var years = [2010,2000,1990,1980,1970,1960,1950];


function printFullage(years){
    
var ages = [];
var fullAge = [];
    
for(var i = 0; i < years.length; i++){
    ages[i] = 2020 - years[i];
}

for(i = 0; i < ages.length; i++){
    if(ages[i] >= 18)
    {
        console.log('Person ' + (i + 1) + ' is '+ ages[i] + ' years old, and is of full age!');
        fullAge.push(true);
    }
    else
    {
        console.log('Person ' + (i + 1) + ' is '+ ages[i] + ' years old, and is NOT of full age!');
         fullAge.push(false);
    }
}
    return fullAge;
}

var full_1 = printFullage(years);
var full_2 = printFullage([1999,2010,1915]);



var productsSales = new Array(2000, 5000, 6000, 7000);

function profitPoints(sales){
    var salesPoints = [];

for(var i = 0; i < sales.length; i++){
    salesPoints[i] = sales[i] - 3000;
}

for(i = 0; i < salesPoints.length; i++){
    if(salesPoints[i] > 1000){
        console.log('Product ' + (i + 1) + ' achieave the goal of profits!');
    }
    else {
        console.log('Product ' + (i + 1) + ' NOT achieave the goal of profits!');
    }
}
    return salesPoints;
}

console.log(profitPoints(productsSales));

*/





















































































