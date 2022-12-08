export {};

/**
 * Loop over the array and for each alive writer print out the following:
 * "Hi, my name is {firstName} {lastName}. I am {age} years old, and work as a {occupation}."
 */

interface I_Writer {
  firstName: string;
  lastName: string;
  occupation: string;
  age: number;
  alive: boolean;
};

//const writers = [
const writers: I_Writer[] = [
  {
    firstName: "Virginia",
    lastName: "Woolf",
    occupation: "writer",
    age: 59,
    alive: false
  },
  {
    firstName: "Zadie",
    lastName: "Smith",
    occupation: "writer",
    age: 41,
    alive: true
  },
  {
    firstName: "Jane",
    lastName: "Austen",
    occupation: "writer",
    age: 41,
    alive: false
  },
  {
    firstName: "bell",
    lastName: "hooks",
    occupation: "writer",
    age: 64,
    alive: true
  }
];

for (let i = 0; i < writers.length; i++) {
  if (writers[i].alive) {
    console.log(`Hi, my name is ${writers[i].firstName} ${writers[i].lastName}. I am ${writers[i].age} years old, and work as a ${writers[i].occupation}.`)
  }
}