
//////////////////////////////////////
//JavaScript Fundamentals part 2
//////////////////////////////////////
//Activating strict mode

// let hasDriverLicense=false;
// const passTest=true;
// let hasDriversLicense=false;
// if(passTest) hasDriversLicense = true; hasDriverLicense=true;
// if(hasDriversLicense) console.log("I can drive");
//////////////////////////////////////////
//Functions

//Syntax: function function_name(){}
//Example:
// function logger() {
//     console.log("My name is Revanth");
// }
//Calling/Running/Invoking a function(below one)
// logger();

// function fruitProcessor(apples, oranges) {
//      const juice = `Juice with ${apples} apples and ${oranges} oranges`;
//      return juice;
// }
// const fruitjuice = fruitProcessor(5,6);
// console.log(fruitjuice);
//OR
// console.log(fruitProcessor(4,5));
///////////////////////////////////////////////
//Function Declarations vs Expressions

//Function Declaration example:

// function calcAge(birthyear){
//     const age = 2023 - birthyear;
//     return age;
// }
// const age1 = calcAge(2002);
// console.log(age1);

//Function Expression example:

// const calcAge2 = function (birthyear){
//     return 2023 - birthyear;
// }
// console.log(calcAge2);
////////////////////////////////////////////////
// Arrow function
//Example:

//  const calcAge3 = birthyear => 2023 - birthyear;
// const age = calcAge3(2002);
// console.log(age);

////////////////////////////////////////////////
//Functions calling other functions

// function Cutintopieces(fruit){
//     return fruit * 4;
// }

// const Fruitjuice = function (apples,oranges){
//     const applepieces = Cutintopieces(apples);
//     const orangepieces = Cutintopieces(oranges);

//     const Juice = `Juice's contain ${applepieces} apples and ${orangepieces} oranges.`
//     return Juice;
// }

// console.log(Fruitjuice(4,5));
/////////////////////////////////////////////////
//Coding Challenge on Functions


// const Average_score_of_team = (score1,score2,score3) => Average_score=(score1+score2+score3)/3;


// const checkWinner = function (){
//     const avgDolphins = Average_score_of_team(85,54,41);
//     const avgKoalas = Average_score_of_team(23,34,27);

//     if(avgDolphins > avgKoalas && avgDolphins >= 2*(avgKoalas)){
//         console.log(`The victory is Dolphins with Average score ${avgDolphins}`);}
//     else{
//         console.log(`The victory is Koalas with Average score ${avgKoalas}`);
//     }
//     }
// console.log(checkWinner());
////////////////////////////////////////////////////////
//Another try
// const calcAverage = (score1,score2,score3) => (score1+score2+score3)/3;
// const avgDolphins = calcAverage(85,54,41);
// const avgKoalas = calcAverage(23,34,27);

// function checkWinner(avgDolphins,avgKoalas){
//     if((avgDolphins>avgKoalas & avgDolphins >= 2*avgKoalas))
//     {
//         console.log(`avgDolphins is the winner and its score is ${avgDolphins}`);
// }
// else if((avgKoalas>avgDolphins & avgKoalas >= 2*avgDolphins)){
//     console.log(`avgKoalas is the winner and its score is ${avgKoalas}`)
// }
// else if((avgDolphins!=2*avgKoalas / avgKoalas!=2*avgDolphins))
// {
//     console.log(`No team wins and the scores are ${avgDolphins},${avgKoalas}`)
// }
// }
// checkWinner(avgDolphins,avgKoalas);
///////////////////////////////////////////////////////////
//Arrays

// The datatype values will be stored in the array in square brackets and also open brackets but by giving new keyword and Array as shown in the below example.

// Example:

// const friends = ['Revanth','Vignesh','Samarth'];
// console.log(friends);

// const years = new Array('Hello',2002,2003,2004,2000,2001);
// console.log(years);
// console.log(friends[1]);
// console.log(years[3]);
// console.log(years.length);
// console.log(years[years.length - 1]);
// friends[3]='Arjith';
// console.log(friends);

// Exercise:
// const calcAge2 = function (birthyear){
//         return 2023 - birthyear;
//     }
// const years1 = [2000,2001,2002,2003,2004];
// const age = calcAge2(years1[2]);
// console.log(age);

///////////////////////////////////////////////
//Array Operations

// const friends = ['Revanth','Vignesh','Samarth'];
// const newlength = friends.push('Arjith');
// console.log(friends);
// console.log(newlength);

// friends.unshift('Revanth'); //Inserts new elements at start of the array
// console.log(friends); 

// friends.pop(); //Removes last element of the array
// console.log(friends);

// friends.shift();
// console.log(friends);

// console.log(friends.indexOf('Revanth')); 
// console.log(friends.indexOf('Sai'));

// console.log(friends.includes('Revanth'));
// console.log(friends.includes('Sai'));

// if(friends.includes('Vignesh')){
//     console.log("Yes you have a brother Vignesh");
// }

////////////////////////////////////////////////////////
//Coding challenge2

// const calcTip = (bill_value) => bill_value>= 50 & bill_value<=300?
// Totaltip=(bill_value*15)/100: Totaltip= (bill_value*20)/100;
// const calculator = calcTip(100);
// console.log(calculator);

// const bills = [125,555,44];

// const tips = new Array(calcTip(bills[0]), calcTip(bills[1]),calcTip(bills[bills.length-1]));
// console.log(tips);

// const total = [bills[0]+tips[0],bills[1]+tips[1],bills[bills.length-1]+tips[tips.length-1]];

// console.log(total);
///////////////////////////////////////////////////////////
// Objects:
// Example of array:
// const RevanthArray = [
//     'Revanth',
//     'Sai',
//     'Mangichetty',
//     2023 - 2002,
//     'Student',
//     ['Vignesh','Samarth','Arjith']
// ];

//Example for Objects:
// const revanth = {
//     firstName : 'Revanth Sai',
//     lastName : 'Mangichetty',
//     age: 2023 - 2002,
//     job: 'Student',
//     friends: ['Vignesh','Samarth','Arjith']
// };
///////////////////////////////////////////////////
//Dot and Bracket operations:

// console.log(revanth);
// console.log(revanth.job);
// console.log(revanth['firstName']);

// const nameKey = 'Name';
// console.log(revanth['first'+nameKey]);
// console.log(revanth['last'+nameKey]);

// const interestedIn = prompt('What do you want to know about Revanth? Choose between First or last name, age, job, friends');


// if(revanth[InterestedIn]){
//     console.log(revanth[interestedIn]);    
// }else{
//     console.log("Out of the question you idiot");
// }

// revanth.location = 'India';
// console.log(revanth);
// revanth['instagram']='rrrrrrr@gmail.com';
// console.log(revanth);

// console.log(`${revanth.firstName} has ${revanth.friends.length} friends, and his best friend is called ${revanth.friends[0]}.`);
//////////////////////////////////////////////////////////////////
//Object Methods:

// Example:
// const revanth = {
//     firstName : 'Revanth Sai',
//     lastName : 'Mangichetty',
//     age: 2023 - 2002,
//     job: 'Student',
//     friends: ['Vignesh','Samarth','Arjith'],
//     hasDriversLicense: false,

    // calcAge: function (birthyear){
    //     return 2023 - birthyear;
    // }
//     calcAge: function (){
//     return 2023 - this.age;
//     },
//     getSummary: function() {
//         return`${revanth.firstName} is a ${revanth.age}-year old ${revanth.job}, and he ${revanth.hasDriversLicense?'have':'dont have'} a drivers license`
//     },
// };

// console.log(revanth['calcAge'](2002));
// console.log(revanth.calcAge());

//Challenge
//Revanth is a 21-year old student, and he dont have a drivers license
// console.log(`${revanth.firstName} is a ${revanth.age}-year old ${revanth.job}, and he ${revanth.hasDriversLicense?'have':'dont have'} a drivers license`)
// console.log(revanth.getSummary());
////////////////////////////////////////////////////////////
//Coding Challenge 3

// const revanth ={
//     firstName:'Revanth',
//     mass: 78,
//     height: 1.69,
//     Bmi: function() {
//         this.bmi = this.mass/this.height**2;
//         return this.bmi;
//     },
// }
// const vignesh = {
//     firstName:"Vignesh",
//     mass: 92,
//     height: 1.95,
//     Bmi: function() {
//         this.bmi = this.mass/this.height**2;
//         return this.bmi;
//     },
// }
// if(revanth.Bmi()>vignesh.Bmi()){
//     console.log(`${revanth.firstName}'s bmi ${revanth.Bmi().toFixed(2)} is higher than Vignesh's bmi ${vignesh.Bmi().toFixed(2)}`);
// }
// else if(vignesh.Bmi()>revanth.Bmi()){
//     console.log(`${vignesh.firstName}'s bmi ${vignesh.Bmi().toFixed(2)} is higher than Revanth's bmi ${revanth.Bmi().toFixed(2)}`);

// }
// console.log(revanth.Bmi().toFixed(2));

//////////////////////////////////////////////
//Iteration The for loop
// Example:

// for(let rep = 1;rep<=10;rep++){
//     console.log(`Lifting weights repetition ${rep} 🏋️`);
// }

// console.log('Lifting weights repetition 1 🏋️');
///////////////////////////////////////////////
//Looping Arrays Breaking and Continuing 

// continue keyword

// and 

// break keyword

//////////////////////////////////////////////
// Loop inside another loop

//for loop

// const revanth = [
//     'Revanth Sai',
//     'Mangichetty',
//     2023 - 2002,
//     'student',
//     ['Vignesh','Samarth','Arjith'],
// ];
// for (let i=revanth.length-1;i>=0;i--)
// {
//     console.log(`${revanth[i]}`)
// };

// for(let exercise =1; exercise < 4;exercise++){
//     console.log(`-------- Starting exercise ${exercise}`);

//     for(let rep = 1;rep< 6;rep++){
//         console.log(`Exercise number ${exercise} Repetition number ${rep}`) 
//     }
// }
///////////////////////////////////////////////////////

// while loop
// Example:

// let rep =1;
// while(rep <=10)
// {
// console.log(`Lifting weights repetition ${rep} 🏋️`);
// rep++;
// }
// let dice = Math.trunc(Math.random() * 6)+1;
// console.log(dice);
// while( dice !==6){
// console.log(`You rolled this number ${dice}`);  
// dice = Math.trunc(Math.random() * 6)+1;
// if(dice === 6)
// {
//     console.log(`The loop is about to end`);
// }
// }           
//////////////////////////////////////////////////////////\
//Coding Challenge-4
// const calcTip = function (bill_value) {
//     return (bill_value >= 50 && bill_value <= 300) ? (bill_value * 15)/100:(bill_value*20)/100; 
// } 

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips=[];
// const totals=[];
// // console.log(calcTip(bills[1]));
// for(let calc=0;calc<10;calc++){
//     totals[calc]=calcTip(bills[calc]) + bills[calc];
//     console.log(totals[calc]);
// }
// console.log(`The total array is ${totals}`);

// const arr=[];
// for(let totals_values=0;totals_values<10;totals_values++){
//     arr.push(totals[totals_values]);
// }

// let arr1=0;
// const calcAverage = function (arr) {
//     for(let i=0;i<10;i++){
//         arr1+=arr[i];
//     }
//     return arr1 / arr.length;
// }
//  const averagevalue = calcAverage(arr);
//  console.log(averagevalue);
//  console.log(`The average value is ${averagevalue}`); 

 