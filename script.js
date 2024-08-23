'use strict';

//Default Parameters
const flight = 'LH234';
const sam = {
  name: 'Sam Christopher',
  passport: 2451685756955,
};

const CheckIn = function (flightNum, Passenger) {
  flightNum = 'LH555';
  Passenger.name = 'Mr.' + Passenger.name;

  if (Passenger.passport === 2451685756955) {
    alert('Check In');
  } else {
    alert('Wrong Passport');
  }
};

CheckIn(flight, sam);
console.log(flight);
console.log(sam);

// Functions Accepting Callback Functions
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

//Higher-order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by:${fn.name}`);
};
transformer('Javascript is best', upperFirstWord);

//Javascript uses callback all the time
const high5 = function () {
  console.log('👋');
};
document.body.addEventListener('click', high5);

//Functions Returning functions
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};
const greeterHey = greet('Hey');
greeterHey('Sam');
greeterHey('Christopher');

greet('hello')('sam')

//We can write this function using Arrow function  
const greetArr = greeting=> name =>console.log(`${greeting} ${name}`)
greetArr('Hello')('Sam Christopher');