let age: number; // notice: if u set Number that means the object called Number
age = 12;
let userName: string;
userName = "Max";
let isInstructor: boolean;
isInstructor = true;
let hobbies: string[]; // means an array of strings
// let hobbies: number[];   // means an array of numbers
// let hobbies: boolean[];   // means an array of booleans
hobbies = ["emil", "john"];

// let person: {
//   name: string;
//   age: number;
// };

type Person = {
  name: string;
  age: number;
};
let person: Person;

person = {
  name: "Emil",
  age: 33,
};

// if we set person: {
//   name: string;
//   age: number;
// }[] it means array of object and the object is defined as shown

let people: Person[];
// typescript knows that course is a string and we cant change its type to anumber or something else
// let course = "react js course";
// to make course accept other types we do this

let course: string | number = "react js course";

// -------------- functions and types -----------------//
function insertAtBeggin(array: any[], value: any) {
  const newArray = [value, ...array];
  return newArray;
}
const demoArray = [1, 2, 3];
const updatedArray = insertAtBeggin(demoArray, -1);
// note: if we tried to do this -> updatedArray[0].split('') it will not throw an error in here
// the error will be in the browser
// because array inside the function is type of any
// how to solve ?
function insertAtBeggin1<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}
const updatedArray1 = insertAtBeggin1(demoArray, -1);  // now typescript knows that the types are numbers
const stringArray = insertAtBeggin1(["a", "s", "c"], "d");   // here types are strings
// updatedArray1[0].split(""); // now vs code throws an error
