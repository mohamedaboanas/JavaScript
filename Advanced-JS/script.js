// Function constructor
/*
var john = {
    name: 'john',
    yearOfBirth: 1989,
    job: 'teacher'
};

var Person = function(name, yearOfBirth, job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;    
}

Person.prototype.calculateAge = function(){
        console.log(2020 - this.yearOfBirth);
    }

Person.prototype.lastName = 'Smith';
Person.prototype.company = 'SCI';

var mark = new Person('Mark', 1990, 'designer');
var john = new Person('John', 1980, 'designer');
var jane = new Person('Jane', 1948, 'retired');


mark.calculateAge();
john.calculateAge();
jane.calculateAge();

console.log(mark.lastName);
console.log(john.lastName);
console.log(jane.lastName);
*/

// object.create
/*
var personProto = {
    calculateAge: function(){
        console.log(2020 - this.yearOfBirth);
    }
};

var john = Object.create(personProto);
john.name = 'john';
john.yearOfBirth = 1980;
john.job = 'teacher';


var jane = Object.create(personProto, {
    name: { value: 'jane' },
    yearOfBirth: {value: 1980 },
    job: { value: 'teacher' }
    
});

*/

// Primitives vs Objects
/*
var a = 23;
var b = a;
a =30;
// different value
console.log(a);
console.log(a);

var obj1 ={
    name: 'john',
    age: 28
};

var obj2= obj1;
obj1.age = 30;

// The same value
console.log(obj2);
console.log(obj1);


// Function
var age = 27;
var obj = {
    name: 'Jonas',
    city: 'Lisbon'
};

function change(a, b){
    a = 30;
    b.city = 'San Francisco';
}

change(age, obj);

console.log(age);
console.log(obj.city);

*/

/*
///////////////////////////////////////
/// Lecture: Passing functions as arguments //

var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, func){
    var arrRes = [];
    
    for(i = 0; i < arr.length; i++){
        arrRes.push(func(arr[i]));
    }
    
    return arrRes;
}

function calculateAge(el){
    
    return 2020 - el;
}

function isFullAge(el){
    return el >= 18;
}

function maxHeartRate(el){
    if(el >= 18 && el <= 81){
        return Math.round(206.9 - (0.67 * el));
    } else {
        return -1;
    }
      
}


var ages = arrayCalc(years, calculateAge);
var fullAges = arrayCalc(ages, isFullAge);
var rates = arrayCalc(ages, maxHeartRate);

console.log(ages);
console.log(fullAges);
console.log(rates);

*/

/*
/////////////////////////////////////////////
/// Lecture: Function returning functions ///

function interviewQuestion(job)
{
    if(job === 'designer'){
        return function(name){
            console.log(name + ', can you please explain what UX design is?');
        }
    } else if (job === 'teacher'){
        return function(name){
            console.log('What subject do you tech, ' + name + ' ?'); 
        }
    } else {
        return function(name){
            console.log('Hello ' + name + ' , what do you do?');
        }
    }
}


var teacherQuestion = interviewQuestion('teacher');
var designerQuestion = interviewQuestion('designer');

teacherQuestion('john');
designerQuestion('jane');

interviewQuestion('teacher')('john');

*/

///////////////////////////////////////////////
//// Lecture: IIFE ///
/*
function game(){
    var score = Math.random() * 10;    
    console.log(score >= 5);
}
game();

(function (){
     var score = Math.random() * 10;    
    console.log(score >= 5);
})();

//console.log(score);


(function (goodLuck){
     var score = Math.random() * 10;    
    console.log(score >= 5 - goodLuck);
})(5);

*/

////////////////////////////////////
/// Lecture: Closures ///
/*
function retirement(retirementAge){
    var message = ' years left until retirement.';
    return function(yearOfBirth){
        var age = 2020 - yearOfBirth;
        console.log((retirementAge - age) + message);
    }
}

var retirementUS = retirement(66);
var retirementGermany = retirement(65);
var retirementIceland = retirement(67);

retirementUS(1983);
retirementGermany(1983);
retirementIceland(1983);

//retirement(66)(1983);

function interviewQuestion(job)
{
    return function(name){
        if(job === 'designer'){
             console.log(name + ', can you please explain what UX design is?');        
    } else if (job === 'teacher'){
            console.log('What subject do you tech, ' + name + ' ?');         
    } else {
        console.log('Hello ' + name + ' , what do you do?');
    }
    }
}

interviewQuestion('designer')('John');

*/
/*
/////////////////////////////////////////////////////
/// Lecture: Bind, Call and apply ///

var john = {
    
    name: 'John',
    age: 36,
    job: 'teacher',
    presentation: function(style, timeOfDay){
        if(style === 'formal'){
            console.log('Good ' + timeOfDay + ', Ladies and gentlemen! T\'m ' + this.name + ', and I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.' );
        }else if(style === 'friendly'){
            console.log('Hey! What\'s up? I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay + '.');
        }
    }
};


var emily = {
    name: 'Emily',
    age: 35,
    job: 'designer'
}


john.presentation('formal', 'morning');

// the call method, it is ;et us able to use the john object like presentation

john.presentation.call(emily, 'friendly', 'afternoon')

// Apply
//john.presentation.apply(emily, ['friendly', 'afternoon'])


// Bind
var johnFriendly = john.presentation.bind(john, 'friendly');

var emilyFormal = john.presentation.bind(john, 'formal');

johnFriendly('morning');
johnFriendly('night');
emilyFormal('afternoon');


var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, func){
    var arrRes = [];
    
    for(i = 0; i < arr.length; i++){
        arrRes.push(func(arr[i]));
    }
    
    return arrRes;
}

function calculateAge(el){
    
    return 2020 - el;
}

function isFullAge(limit, el){
    return el >= limit;
}

var ages = arrayCalc(years, calculateAge);

var fullJaban = arrayCalc(ages, isFullAge.bind(this, 20));

console.log(ages);
console.log(fullJaban);

*/

/////////////////////////////
// CODING CHALLENGE


/*
--- Let's build a fun quiz game in the console! ---

1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)

2. Create a couple of questions using the constructor

3. Store them all inside an array

4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).

5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.

6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).

7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).

/*

var Question = function(question, answers, correct){
    this.question = question,
        this.answers = answers,
        this.correct = correct
}

Question.prototype.displayQuestion = function (){
    console.log(this.question);
    
    for(var i = 0; i < this.answers.length; i++){
        console.log(i + ' : ' + this.answers[i] + '.');
    }
}

Question.prototype.checkAnswer = function (ans) {
    
    if(ans === this.correct){
        console.log('Correct answer!');
        
    } else{
        console.log('Wrong answer!');
    }
   
}

var q1 = new Question('What\'s your name?', ['Mohamed', 'Ahmed', 'Ali'], 0);
var q2 = new Question('What\'s your job?',  ['designer', 'developer', 'UX'], 0);
var q3 = new Question('What\'s your game?', ['Football', 'BascketBall', 'Swiming'], 0);

var quetions = [q1, q2, q3];
var qn = Math.floor(Math.random() * quetions.length);

quetions[qn].displayQuestion(qn);

var answer = parseInt(prompt('Please select your answer!'));

quetions[qn].checkAnswer(answer);


/*
--- Expert level ---

8. After you display the result, display the next random question, so that the game never ends (Hint: write a function for this and call it right after displaying the result)

9. Be careful: after Task 8, the game literally never ends. So include the option to quit the game if the user writes 'exit' instead of the answer. In this case, DON'T call the function from task 8.

10. Track the user's score to make the game more fun! So each time an answer is correct, add 1 point to the score (Hint: I'm going to use the power of closures for this, but you don't have to, just do this with the tools you feel more comfortable at this point).

11. Display the score in the console. Use yet another method for this.

*/

(function(){
    var Question = function(question, answers, correct){
    this.question = question,
        this.answers = answers,
        this.correct = correct
}

Question.prototype.displayQuestion = function (){
    console.log(this.question);
    
    for(var i = 0; i < this.answers.length; i++){
        console.log(i + ' : ' + this.answers[i] + '.');
    }
}

Question.prototype.checkAnswer = function (ans, callback) {
    var sc;
    if(ans === this.correct){
        console.log('Correct answer!');
       sc = callback(true);
        
    } else{
        console.log('Wrong answer!');
      sc = callback(false);
    }    
    
    this.displayScore(sc);
}

Question.prototype.displayScore = function(score){
      console.log('Your current score is: ' + score);
      console.log('--------------------------------');
}
var q1 = new Question('What\'s your name?', ['Mohamed', 'Ahmed', 'Ali'], 0);
var q2 = new Question('What\'s your job?',  ['designer', 'developer', 'UX'], 1);
var q3 = new Question('What\'s your game?', ['Football', 'BascketBall', 'Swiming'], 2);

var quetions = [q1, q2, q3];

function score(){
    var sc = 0;    
    return function(correct){
        if(correct){
            sc++;
        }
        return sc;
    }
}

var keepScore = score();

function nextQuestion (){
 
var qn = Math.floor(Math.random() * quetions.length);
quetions[qn].displayQuestion(qn);
var answer = prompt('Please select your answer!');
    
    if(answer !== 'exit'){
        quetions[qn].checkAnswer(parseInt(answer), keepScore);
         nextQuestion();
    }
}
   nextQuestion();

})();





































































































































































































