// Write a JavaScript function findYoungestPerson(persons) that accepts as parameter an array of persons, 
// finds the youngest person and returns his full name. Write a JS program youngestPerson.js to execute 
// your function for the below examples and print the result at the console.

function findYoungestPerson(persons) {
    var youngestIndex = 0;
    var youngestAge = Number.MAX_VALUE;

    for (var i = 0; i < persons.length; i++) {
        var age = parseInt(persons[i].age);
        if (age < youngestAge) {
            youngestAge = age;
            youngestIndex = i;
        }
    }

    return persons[youngestIndex];
}

var persons = [
  { firstname: 'George', lastname: 'Kolev', age: 32 },
  { firstname: 'Bay', lastname: 'Ivan', age: 81 },
  { firstname: 'Baba', lastname: 'Ginka', age: 40 }]

var youngestPerson = findYoungestPerson(persons);
console.log('The youngest person is ' + youngestPerson.firstname + ' ' + youngestPerson.lastname);
