"use strict";

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0,
    close: 24,
  },
}

const restaurant = {
  name: "Revanth Sai",
  location: "Karnataka, Belgaum",
  categories: ["Italian", "Kannada", "veggie", "organic"],
  starterMenu: ["Something", "someone", 'ash', "truck"],
  mainMenu: ["Pizza", "Pasta", "Risotto", 'York'],
  openingHours: openingHours,
  // openingHours: {
  //   thu: {
  //     open: 12,
  //     close: 22,
  //   },
  //   fri: {
  //     open: 11,
  //     close: 23,
  //   },
  //   sat: {
  //     open: 0,
  //     close: 24,
  //   },
  // },
  //order: function()
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  //orderPasta: function()
  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  //orderDelivery: function()
  orderDelivery({ starterIndex2, mainIndex1, time, address }) {

    console.log(`Order received ${this.starterMenu[starterIndex2]} and ${this.mainMenu[mainIndex1
    ]} and time: ${time} and to address: ${address}`);
  },

  //orderPizza: function()
  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  }
};

// console.log('--- OR ---');
// console.log(3 || 'Revanth');
// console.log('' || 'Revanth');
// console.log(true  || 0);
// console.log(undefined||null);
// console.log(0 || 'Hello'||23);

// const guests1 = restaurant.numGuests ? restaurant.numGuests:11;
// console.log(guests1);
// const guest2 = restaurant.numGuests || 10
// console.log(guest2);

// console.log('--- AND ---');
// console.log(0 && 'Revanth');
// console.log(7 && 'Revanth');


// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Via del Sole, 21',
//   mainIndex1:2,
//   starterIndex2:2,
// });


// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// Default values
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// Mutating variables
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };
// ({ a, b } = obj);
// console.log(a, b);

// Nested objects
// const {
//   fri: { open, close },
// } = openingHours;
// console.log(open, close);

// const obj1 = [...restaurant.mainMenu, "Dosa"];
// console.log(obj1);

// Copy array
// const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 arrays
// const menu1 = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu1);

// Iterables: arrays, strings, maps, sets. NOT OBJECTS

// const str = "Revanth";
// const letters = [...str, " ", ".M"];
// console.log(...letters);
// console.log(...str);

// Real world Example
// const ingredients = [
//   [prompt("Let's make pasta! Ingredient 1?")],
//   [prompt("Let's make pasta! Ingredient 2?")],
//   [prompt("Let's make pasta! Ingredient 3?")],
// ];

// console.log(ingredients);
// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// restaurant.orderPasta(...ingredients);

// Objects
// const newRestaurant = { ...restaurant, founder: "Guiseppe" };
// console.log(newRestaurant);

// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = "Revanth";
// console.log(restaurantCopy.name);
// console.log(restaurant.name);

// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];
/////////////////////////////////////////////////////////////////
// Destructuring Arrays
// const [x, y, z] = arr;
// console.log(x, y, z);
// console.log(arr);

// let [main, secondary] = restaurant.categories;
// console.log(main, secondary);

// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// Receive 2 return values from a function
// const [starter, mainCourse] = restaurant.order(3, 2);
// console.log(starter, mainCourse);

// Nested destructuring
// const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);

// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// Default values
// const [p, q, r] = [8, 9,12];
// console.log(p, q, r);
///////////////////////////////////////////////////////////////////
//Destructuring Objects
// const {name, openingHours,categories}=restaurant;
// console.log(name,openingHours,categories);

// const {name: restaurantName, openingHours: hours, categories:tags,}=restaurant;
// console.log(restaurantName,hours,tags);

// const {menu = [], starterMenu: starters = []}= restaurant;
// console.log(menu,starters);
//Mutating variables
// let a =111;
// let b=999;
// const obj = {a:23,b:7,c:14};
// ({a,b} = obj);
// console.log(a,b);

//Nested objects
// const {fri:{open:o, close:c}}= openingHours;
// console.log(o, c);

////////////////////////////////////////////////////////////
//Spread Operator (...)
// const arr = [7,8,9];
// const badNewarr = [1,2,arr[0],arr[1],arr[2]];
// console.log(badNewarr);

// const newarr = [1,2, ...arr];
// console.log(newarr);

// console.log(...newarr);
// console.log(1,2,7,8,9);

// const newMenu = [...restaurant.mainMenu, 'Gnocci']
/////////////////////////////////////////////////////////////
//Rest Pattern and Parameters

//SPREAD, because on RIGHT side of =
// const arr = [1,2,...[3,4]];
// console.log(arr);
//REST, because on LEFT side of =
// const [a,b, ...others]=[1,2,3,4,5];
// console.log(a,b,others);

// const [Pizza, , Risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(Pizza,Risotto,otherFood);

//Objects
// const { sat , ...weekdays} = restaurant.openingHours;
// console.log(weekdays);

//Functions
// const add= function(...numbers){
// let sum = 0;
// for(let i =0; i<numbers.length;i++){
//   sum+=numbers[i];
// }
// console.log(sum);
// }
// add(2,3,1);
// add(5,3,7,2);
// add(4,5,6,6,7,3,3);

// const x= [31, 6, 8];
// add(...x);

// restaurant.orderPizza('mushrooms','onion','olives','spinach');

// Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';


// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },

// };


// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.34,
//     draw: 1.5,
//     team2: 1.34,
//   },
// };
// console.log(game.odds);
// const [players1,players2]=game.players;

// const [gk1,...fieldPlayers1]=players1;

// const allPlayers = [...players1,...players2];

// const players1Final =[players1,'Thiago','Coutinho','Peristic'];

// const {odds: {team1,x:draw,team2},} = game;
// console.log(team1,draw,team2 );

// const printGoals = function(...players){
//   console.log(players);
//   console.log(`${players.length} - these many goals are scored`);

// }
// printGoals(...game.scored);
// team1 < team2 && console.log(`Team1 is going to win`);
// team2 < team1 && console.log(`Team2 is going to win`);
// team1 ==team2 && console.log(`Its a draw`);
///////////////////////////////////////////////////////////////////////
// for-of loop:

// const menu = [...restaurant.starterMenu,...restaurant.mainMenu ];

// for(const item of menu) console.log(item);

// for (const [i, el] of menu.entries()){
//   console.log(`${i+1}: ${el}`);
// }
// console.log([...menu.entries()]);

////////////////////////////////////////////////////////////////////////
// Enhanced Object Literals:
//openingHours



// if (restaurant.openingHours && restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);
////////////////////////////////////////////////////////////////////////
//With Optional chaining
// console.log(restaurant.openingHours.mon?.open);

// const days = ['mon','tue','wed','thu','fri','sat','sun'];
// for (const day of days){
//   const open = restaurant.openingHours[day]?.open ?? 'closed';
//   console.log(`On ${day}, we open at ${open}`);
// }

//Methods

// console.log(restaurant.order?.(0,1)??'Method does not exist');

//Arrays
// const users = [
//   {name: 'Revanth',email: 'yo@gmail.com'}
// ]
// console.log(users[0]?.email ?? 'User array empty');

// if(users.length>0)console.log(users[0].name);
// else console.log('User array empty');
////////////////////////////////////////////////////////////////////////////////
// const properties = Object.keys(openingHours);
// console.log(properties);

// let openStr = `We are open on ${properties.length} days`;
// for(const day of properties){
// openStr += ` ${day},`
// }
// console.log(openStr);

//Propertry values
// const values = Object.values(openingHours);
// console.log(values);

//Entire object
// const entries = Object.entries(openingHours);
// console.log(entries);

//[key,value]
// for ( const [key, {open, close}] of entries){
//   console.log(`On ${key} we open at ${open} and close at ${close}`);
// }

// for(const day of Object.keys(openingHours)){
//   console.log(day);
// }
///////////////////////////////////////////////////////////////////////////
//Coding challenge 2
// const odds={
//   team1: 1.34,
//     x: 1.5,
//     team2: 1.43,
//   }
// const game = {
//     team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: odds,
// };

//1.
// for (const [i,player] of game.scored.entries()){
//   console.log(`Goal ${i+1}: ${player}`);
// }

//2.
// let length = Object.keys(odds).length;
// let TotalProbability =0;
// for (const value of Object.values(odds)){
//   TotalProbability += value;

// }
// const average = TotalProbability/length;
// console.log(average.toFixed(2));

//3.
// console.log(Object.entries(odds));

// console.log(`odd of victory ${game.team1}: ${odds.team1}`);
// console.log(`odd of ${game.draw}: ${odds.draw}`);
// console.log(`odd of victory ${game.team2}: ${odds.team2}`);

// for(const [team , odd]of Object.entries(game.odds)){
//   const teamStr = team === 'x'? 'draw' : `victory ${game[team]}`
//   console.log(`Odd of ${teamStr}: ${odd}`);
// }

//BONUS
// const scorers = {
//   Gnarby: 1,
//   Hummels: 1,
//   Lewandowski: 2,
// };

///////////////////////////////////////////////////////////////////////////////
//Sets

// const ordersSet = new Set(['Pizza','Pizza','Risotto','Pasta','Pizza']);
// console.log(ordersSet);
//Duplicates will be eliminated

// console.log(new Set('Revanth'));
// console.log(ordersSet.size);

// console.log(ordersSet.has('Pizza'));
// console.log(ordersSet.has('Bread'));

// ordersSet.add('Garlic Bread');
// console.log(ordersSet);

// ordersSet.delete('Garlic Bread');
// console.log(ordersSet);

// ordersSet.clear();
// console.log(ordersSet);   //Set { empty set}

// for(const order of ordersSet) console.log(order);

//Example
// const staff = ['Waiter', 'Chef','Waiter','Manager','Chef','Waiter'];
// const staffUnique = [...new Set(staff)];  //Converts to array [... new Set(something)]
// console.log(staffUnique);

// console.log(new Set(['Waiter', 'Chef','Waiter','Manager','Chef','Waiter']).size);

// console.log(new Set('RevanthSai').size + ' in form of Set');
//////////////////////////////////////////////////////////////////
//Maps Fundamentals
// const rest = new Map();
// rest.set('name','Classico Italiano');
// rest.set(1, 'India','Denmark')
// console.log( rest.set(2, 'Lisbon Portugal'));
// rest.set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic']);
// console.log(
//   rest
//   .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
//   .set('open',11)
//   .set('close',23)
//   .set(true,'We are open :D')
//   .set(false,'We are clode :('));

// console.log(rest.get('name'));    //One of the method to get value of the key
// console.log(rest.get(true));
// console.log(rest.get(1));

// const time = 21;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));
// console.log(rest.has('categories'));
// rest.delete(2);
// rest.clear();
// const arr = [1,2];
// rest.set(arr,'Test');
// rest.set(document.querySelector('h1'),'heading');
// console.log(rest);
// console.log(rest.size);

// console.log(rest.get(arr));
/////////////////////////////////////////////////////////////////////////
//Maps Iteration

// const question = new Map([
//   ['question', 'What is the best programming language in the world?'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'JavaScript'],
//   ['correct', 3],
//   [true, 'Correct 👌'],
//   [false, 'Try again 👎'],
// ]);
// console.log(question);

//Convert object to map
// console.log(Object.entries(openingHours));
// const hoursMap = new Map(Object.entries(openingHours));

// console.log(hoursMap);

//Quiz app
// console.log(question.get('question'));

// const answer = Number(prompt('Your answer'));

// for(const [key, value] of question){
//   if(answer === key)
//   {
//     console.log(key +' '+value);
//   }
// }

// console.log(answer);
// console.log(question.get(question.get('correct')===answer));

// Convert Map to Array
// console.log([...question]);
// console.log(...question.entries()); Same as above one
// console.log(...question.keys());
// console.log(...question.values());
///////////////////////////////////////////////////////////////////////
//Coding challenge 3

const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36,'🔁 Substitution'],
  [47,'⚽ GOAL'],
  [61,'🔁 Substition'],
  [64,'🟨 Yellow card'],
  [69,'🔴 Red card'],
  [70,'🔁 Substition'],
  [72,'🔁 Substition'],
  [76,'⚽ GOAL'],
  [80,'⚽ GOAL'],
  [92,'🟨 Yellow card'],
]);

//1.
const events = [...gameEvents.values()];
const events1 = new Set(gameEvents.values())
console.log(events);
console.log(events1);
//2.
gameEvents.delete(64)
//3.
const time = [...gameEvents.keys()].pop();
console.log(time);
console.log(gameEvents);
console.log(`An event happened, on average, every ${(90/gameEvents.size).toFixed(2)} minutes`);

//4.
for(const [minute,event] of gameEvents){
  const half = minute <= 70? 'FIRST':'SECOND';
  console.log(`[${half} HALF] ${minute}:${event}`);
}
const airline = 'TAP Air Portugal';
const plane = 'A320';

// console.log(plane[0]);
// console.log(plane[1]);
// console.log(plane[2]);
// console.log('B737'[0]);



//Methods
//1. .indexOf() & .lastIndexOf()
// console.log(airline.indexOf('r'));
// console.log(airline.lastIndexOf('r'));
// console.log(airline.lastIndexOf('Portugal'));
// console.log(airline.indexOf('Portugal'));

//2. .length
// console.log(airline.length);
// console.log('B737'.length);

//3. .slice()
// console.log(airline.slice(4));
// console.log(airline.slice(4,7));
// console.log(airline.slice(0,airline.indexOf(' ')));
// console.log(airline.slice(airline.lastIndexOf(' ')));
// console.log(airline.slice(-2));
// console.log(airline.slice(1,-1));

//4. .trim()

//5. .toUpperCase() & .toLowerCase()

// const checkMiddleSeat = function(seat){
  // B and E are middle seats
//   const s = seat.slice(-1);
//   if(s === 'B' || s === 'E') console.log('You got the middle seat ');
//   else console.log('You got lucky');
// } 
// checkMiddleSeat('11B');
// checkMiddleSeat('23C');
// checkMiddleSeat('3E');

// console.log(new String('Revanth'));
// console.log(typeof new String('Revanth'));

// console.log(typeof new String('Revanth').slice(1));
/////////////////////////////////////////////////////////

// console.log(airline.toLowerCase());
// console.log(airline.toUpperCase());

//Fix capitalization in name 
// const passenger = 'REVANTH'; // REVANTH
// const passengerLower = passenger.toLowerCase();
// const passengerCorrect = passengerLower[0].toUpperCase()+passengerLower.slice(1);

// console.log(passengerCorrect);

// Comparing email 
// const email = 'revanth@gmail.com';
// const loginEmail= '   Revanth@gmail.Com \n';

// More lines ❌
// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
// console.log(trimmedEmail);

// Less lines ✅
// const normalizedEmail = loginEmail.toLowerCase().trim();
// console.log(normalizedEmail);
// console.log(email===normalizedEmail);

// replacing  ( .replace() & .replaceAll() )
// const priceIN = '28,897₹';
// const priceUS = priceIN.replace('₹','$').replace(',','.');
// console.log(priceUS);

// const announcement = 'All passengers come to boarding door 23. Boarding door 31'
// console.log(announcement.replace('door','gate'));
// console.log(announcement.replaceAll('door','gate'));
//OR
// console.log(announcement.replace(/door/g, 'gate'));

// Booleans (startsWith() & endsWith())
// const plane1 = 'Airbus A329ne0';
// console.log(plane1.includes('A329'));
// console.log(plane.includes('Boring'));
// console.log(plane1.startsWith('A329'));

// if(plane1.startsWith('Airbus') && plane1.endsWith('neo')) {
//   console.log('Part of the NEW AirBus family');
// }

// Practice exercise
// const checkBaggage = function(items){
//   const baggage = items.toLowerCase();
//   if(baggage.includes('knife') && baggage.includes('gun')){
//     console.log('You are not allowed in the plane');
//   }
//   else console.log('Welcome aboard!');
// }

// checkBaggage('I have a laptop, some food and a pocket knife');
// checkBaggage('Socks and camera');
// checkBaggage('Got some snacks and a gun for protection');

// Split and join
// console.log('a+very+nice+string'.split('+'));
// console.log('Revanth Sai'.split(' '));

// const [firstName, lastName] = 'Revanth Sai'.split(' ');

// const Name = ['Mr.', firstName,lastName.toUpperCase()].join(' ');
// console.log(Name);

// const capitalizedName = function(name){
//   const names = name.split(' ');
//   const namesUpper = []

  // for( const n of names){
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
//     namesUpper.push(n.replace(n[0],n[0].toUpperCase()));
//   }
//   console.log(namesUpper.join(' '));
// }
// capitalizedName('Jessica ann smith davis');
// capitalizedName('revanth sai')

// Padding a string
// const message = 'Go to gate 23!';
// console.log(message.padStart(25,'+').padEnd(30,'+'));
// console.log('Revanth'.padStart(25,'+').padEnd(30,'+'));

// const maskCreditCard = function(number){
//   const str = number + '';
//   const last = str.slice(-4);
//   return last.padStart(str.length,'*');
// }

// console.log(maskCreditCard('489765432109876'));
// console.log(maskCreditCard('6534234565653434432424'));

//Repeat
// const message2 = 'Bad weather... All Departures Deplayed...';
// console.log(message2.repeat(3));

// const planesInline = function(n){
//   console.log(`There are ${n} planes in line ${'✈️'.repeat(n)}`);
// }
// planesInline(5);
// planesInline(3);
// planesInline(12);

////////////////////////////////////////////////////////////

// const camelCase = function(sentence){

//   const converted_sentence= sentence.split(' ');

//   console.log(converted_sentence);
//   const Uppercaseletters = [];
//   for( const word of converted_sentence){
//     Uppercaseletters.push(word[0].toUpperCase()+word.slice(1));
//     // console.log(final_sentence);
//   }
//   console.log(Uppercaseletters);
// }
// camelCase('Hey fuck you everyone');
// 1.
// const camelCase2 = function(sentence){
//   const space_remover = sentence.split(' ');
//   const underscore_remover1 = space_remover.join(' ').split('_').join('');
//   const joining_them = underscore_remover1.split(' ');
//   const Upperletters = [];
//   for(const n of joining_them){
//     Upperletters.push(n[0].toUpperCase()+n.slice(1));
//   }  
//   console.log(Upperletters);
  
// }
// camelCase2('Revanth_Sai Samarth_Kadam Santosh_Inchal Next_what_not');

//2. Connect textarea and button to the javascript
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click',function(){

const text = document.querySelector('textarea').value;
const rows = text.split('\n');

for(const [i, row] of rows.entries()){
  const [first,second] =  row.toLowerCase().trim().split('_');
  console.log(row,first,second);
  console.log(i);  // Array index
  console.log(row); // Array value
  const output = `${first}${second.replace(
    second[0],
    second[0].toUpperCase()
)}`;
  console.log(`${output.padEnd(20)}${'✅'.repeat(i+1)}`);
}

});

document.querySelector('button').addEventListener('Enter',function(){


})
