//Fundamentals part 1
/*
let js= 'xmen';
console.log(45+23+5);
console.log('Johnson');
console.log(23);
 let aname='Johnson';
let firstName='johnson';
 if(aname==firstName) alert("Hey guys both are same");
 else alert("Both are different");
console.log(firstName);
////////////////////////////////////////////////////////
//JavaScript is case sensitive
let _this_is_valid=31;
let $this_is_valid=31;
 
let Person= 'Cooldude69';
let PI = Person;
//////////////////////////////////////////////////////////
//Datatypes
/* The first one is Number - 31.0
                    Boolean - true or false
                    String - ' ' or " "
                    Undefined - let parent
                    null - empty value
                    big int - Too large integers
                    symbol - Value that is unique and cannot be changed

console.log(typeof true); 
 - typeof Tells the type of Datatype
///////////////////////////////////////////////////////////////////
//    const and var

const - immutable (Use 'const' for everything rather than 'let')
var - mutable (Avoid this completely)

var job= 'programmer';
console.log(job);
job='teacher';
console.log(job);

 2 ** 3 (2 to the power of 3)



const ageRevanth = 2023 - 2002;
const ageVignesh = 2023 - 2004;
console.log(ageRevanth,ageVignesh);
*/

// const firstName='Revanth';
// const lastName= 'Sai';
// console.log(firstName+' '+lastName); //Concatenation of strings by + sign
/////////////////////////////////////////////////////////////////
//  Assignment operators
/*
    += -= -- ++
*/
////////////////////////////////////////////////////////////////
// Math operators
/* 
    %,+,-,/,*,**
*/
///////////////////////////////////////////////////////////////
// Comparison operators
/* 
    >,<,>=,<=,
    console.log(ageRev > ageVig); //true
    console.log(ageRev >= 22); //false
*/
/////////////////////////////////////////////////////////////////
//Coding Challenge 1 
//Body mass index formula is - 
// BMI = mass/height**2 = mass/(height * height)

//mass in kg and weight in meter.

// var Markmass = 95;
// mass1= Markmass;
// var Johnmass = 85;
// mass2= Johnmass;
// var Markheight = 1.88;
// height1=Markheight;
// var Johnheight = 1.76;
// height2=Johnheight;
// const MarkBMI = mass1/height1**2;
// const JohnBMI = mass2/(height2 * height2);

// console.log(MarkBMI,JohnBMI);

//Coding Challenge 2 

// if(MarkBMI>JohnBMI)
// { console.log(`Mark(${MarkBMI}) has higher BMI than John(${JohnBMI})`);}
// else {console.log(`John(${JohnBMI}) has higher BMI than Mark(${MarkBMI})`);}
//////////////////////////////////////////////////////////////////////
//Type conversion
// Advantage: Type coersion
// String()
// Number()
// '23' - '10' - 3 => 10
//It does give integer answer for string too

// console.log(Boolean (1));
// console.log(Boolean(undefined));
// console.log(Boolean('Hey'));
// console.log(Boolean({}));
/////////////////////////////////////////////////////////////////
// Equality Operators ('===' and '==')

// const age = 19;
// if(age === 18){     //Strict because it even checks datatype similarity
//     console.log('You just became an adult!');
// }
// else {          //(==) Loose because '18' and 18 gives true
// if(age <=17){
//         console.log("Go to your schooling");
//     }
// else{
//         console.log("You are an adult");
//     }
// }

// const favourite = prompt("What's is your favourite number");
// console.log(favourite); //Gives the entered number
// //It gives string datatype to the entered number

// if(favourite === '23')
// {
//     console.log("Its a number as string datatype");
// }

//If you use Number() for favourite variable as Number(prompt()), then it will work 
//////////////////////////////////////////////////////////////////

//Boolean Logic (AND, OR & NOT Operators)

//And(& or &&) - Both variable must be true for TRUE
//Or(/ or ||) - Atleast one variable must be true for TRUE
//Not(!) - True becomes False and False becomes True

// age = 18;
// age1 = 3;
// if ((age >=18) & (age1<4))
// {
//     console.log("LOL");
// }

// const hasDriverLicense = true; // A
// const hasGoodVision = true ;   // B

// console.log(hasDriverLicense & hasGoodVision); // Can use && also
// console.log(hasDriverLicense / hasGoodVision); //Can use || also
// console.log(!hasDriverLicense); //False

// const shouldDrive= (hasDriverLicense&& hasGoodVision);
// if(shouldDrive){
//     console.log("Arjith can drive the car");
// }
// else{
//     console.log("He is not permitted for the task");
// }

// const isTired = false; // C
// console.log(hasDriverLicense ||hasGoodVision&&!isTired);
///////////////////////////////////////////////////////////////

//Coding Challenge 3

// const dolphinscore1 = Number(prompt("Enter the first turn score of dolphins"));
// const dolphinscore2 = Number(prompt("Enter the second turn score of dolphins"));
// const dolphinscore3 = Number(prompt("Enter the third turn score of dolphins"));
// const Koalascore1 = Number(prompt("Enter the first turn score of Koalas"));
// const Koalascore2 = Number(prompt("Enter the second turn score of Koalas"));
// const Koalascore3 = Number(prompt("Enter the third turn score of Koalas"));
// var Dolphin = {dolphinscore1,dolphinscore2,dolphinscore3};
// var Koala = {Koalascore1,Koalascore2,Koalascore3};
// const Average_of_Dolphins = (dolphinscore1+dolphinscore2+dolphinscore3)/3;
// const Average_of_Koalas = (Koalascore1+Koalascore2+Koalascore3)/3;
// console.log(Average_of_Dolphins,Average_of_Koalas);

// if(!(Average_of_Dolphins && Average_of_Koalas))
// {
//     console.log("Nobody won, Its a tie match");
// }

// if(dolphinscore1>Koalascore1 && dolphinscore1!=0 && (Average_of_Dolphins!=Average_of_Koalas))
// {   if(dolphinscore1>=100){
//     console.log(`The winner is ${"Dolphins"} at 1st turn`);

// }
//     if(dolphinscore2>Koalascore2 && dolphinscore2>=100)
//     {
//         console.log(`The winner is ${"Dolphins"} at 2nd turn`);
//     }
//     else{
//         console.log(`The winner is Koalas at 2nd turn`);
//         if(dolphinscore3>Koalascore3 && dolphinscore3>=100)
//         {
//             console.log("The winner is Dolphins at 3rd turn");
//         }
//         else{
//             console.log("The winner is Koalas at 3rd turn");
//         }
//     }
// }
// else{
//     if(Average_of_Koalas!=0 && (Average_of_Dolphins!=Average_of_Koalas)){
//         console.log("The winner is Koalas at 1st turn");

//     }
// }


// if(Average_of_Dolphins === Average_of_Koalas)
// {
//     console.log("Its a tie match or a draw match");
// }
// if(Average_of_Dolphins && (Average_of_Dolphins!=Average_of_Koalas))
// {   if(Average_of_Dolphins>Average_of_Koalas){
//     console.log("Dolphins won the gymnastics game");
// }
// else{
//     console.log("Koalas won the match");
// }
    
//     }
//////////////////////////////////////////////////////////////////////

//Switch statements

// Syntax

//Example:
// const day= 'monday';
// switch(day){
//     case 'monday': //day === 'monday'
//         console.log("Plan course structure");
//         console.log("Go to the coding meetup for plan");
//         break;
//     case 'tuesday':
//         console.log('See theory videos');
//         break;
//     case 'wednesday':
 //Etc
// }

//Using if/else statements

// if(day === 'monday'){
    
// } else if(day === 'tuesday'){

// }
// else if(day === 'wednesday'|| day === 'thursday'){

// }
// else if(day === 'friday'){
// }
//ETC

////////////////////////////////////////////////////////////////////

//Statements and Expressions

// Statements - if/else all the actions
//Expressions - All the set of datatype values 

///////////////////////////////////////////////////////////////////

//Conditional(Ternary) Operators(? , :)
//Example:

// const age = 23;
// age>=18 ? console.log("I like to drink water"):console.log("I like to eat you");

//////////////////////////////////////////////////////////////////

//Coding Challenge 3

// const bill_value = Number(prompt("Enter the bill value"));

// let tip;

// const total_tip = bill_value>=50 && bill_value<=300 ?
// tip=(bill_value*15)/100
// : tip=(bill_value*20)/100;

// console.log(`The bill was ${bill_value}, the tip was ${total_tip}, and the total bill is ${bill_value+total_tip}`);

///////////////////////////////////////////////////////////////////

