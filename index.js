
class Exercise {

   isValid = (person) => (person=== null || person=== undefined 
                          || person.firstName === null) ? false : true;

  isTom = (person)  =>
    (this.isValid(person) &&  
     person.firstName.toString().toUpperCase() === 'TOM')? true: false;

  isBob = (person)  =>
    (this.isValid(person) &&  
     person.firstName.toString().toUpperCase() === 'BOB')? true: false;
    //return true when the person name is Bob (ignore casing)
  

  getListOfBobs = (people)  => people.filter(p => this.isBob(p))
    // return a list of people whose name is Bob (ignore casing)

  cleanNames = (people)  => 
    people
      .filter(pe => this.isValid(pe))
      .map( p => {
          if(this.isBob(p))
            p.firstName = 'Robert';

          if(this.isTom(p))
            p.firstName = 'Thomas';
        
        return p;
    })
    // without returning a new list, replace the following names of the people.
    // Whoever is called Bob, rename to Robert
    // Whoever is called Tom, rename to Thomas
  

   removeBobs = (people) =>people.filter( p => this.isValid(p) && !this.isBob(p))
    // return a new list of people without any Bobs in it

  // Additional!
  // * Extra points if you transform these methods 
  //   to arrow functions.
  // * Extra points if you use the right variable 
  //   initializer keywords (One example of them 
  //   is var. There are more.)
  // * Extra points if your code is clean, re-usable 
  //   and self-documented (meaning the code speaks 
  //   for itself and no comments are required to understand it)

}

////// DO NOT MODIFY ANYTHING BELOW HERE

class Person {
  constructor(personNo, firstName, lastName) {
    this.personNo = personNo;
    this.firstName = firstName;
    this.lastName = lastName;
  }

  toString = () => {
    return `Person '${this.personNo} - ${this.firstName} - ${this.lastName}`;
  }
}

const buildPeople = () => {
  const bob = new Person(1, 'Bob', 'Bobson');
  const tom = new Person(2, 'Tom', 'Thompson');
  const bob2 = new Person(3, 'Bob', 'Thompson');
  const bob3 = new Person(4, 'Bob', 'Charleston');
  const charley = new Person(5, 'Charley', 'Charleston');
  const bob4 = new Person(6, 'bob', 'Fighter');

  return [bob, tom, bob2, bob3, null, charley, undefined, bob4];
};

const startTest = title => {
  console.log(`Exercise ${title}:`);
  console.log();
}

const endTest = () => {
  console.log('-----------------------------------');
  console.log();
  console.log();
}

const runTest = (title, closure) => {
  startTest(title);
  closure();
  endTest();
}

const testIsBob = exercise => {
  const people = buildPeople();
  people.forEach(x => {
    const result = exercise.isBob(x);
    if (x) {
      console.log(`Person ${x.toString()} is bob? - ${result}`);
    }
    else {
      console.log(`Person ${x} is bob? - ${result}`);
    }
  });
};

const printPeople = people => {

  if (people) {
    people.forEach(x => {
      if (x) {
        console.log(x.toString())
      }
      else {
        console.log(x);
      }
      
    });
  }
  else {
    console.log(people);
  }
}

const testGetBobMap = exercise => {
  const people = buildPeople();

  const result = exercise.getListOfBobs(people);
  console.log('Resulting list of bobs:');
  printPeople(result);
};

const testCleanNames = exercise => {
  const people = buildPeople();

  exercise.cleanNames(people);
  console.log('Cleared bob names:');
  printPeople(people);
};

const testRemoveBobs = exercise => {
  const people = buildPeople();

  const result = exercise.removeBobs(people);
  console.log('Removed Bobs?:');
  printPeople(result);
}

const main = () => {
  const exercise = new Exercise();

  runTest('1 - isBob', () => testIsBob(exercise));
  runTest('2 - List of Bobs', () => testGetBobMap(exercise));
  runTest('3 - Cleaning Names', () => testCleanNames(exercise));
  runTest('4 - Remove Bobs', () => testRemoveBobs(exercise));
};

console.clear();
main();