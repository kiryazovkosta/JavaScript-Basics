// Write a JavaScript function soothsayer(value) that accepts the following parameters (source arrays):
// array of numbers, array of programming languages, array of cities, array of cars. Each array must consist of five elements. 
// The function must return an array result[] that consists of one random item from each source array. 
// Write a JS program that prints on the console the following output: “You will work result[0] years on result[1]. 
// You will live in result[2] and drive result[3].”.  Run the program through Node.js. 

function soothsayer(value) {
    var numberIndex = generateRandomIndex(value[0].length);
    var languageIndex = generateRandomIndex(value[1].length);
    var cityIndex = generateRandomIndex(value[2].length);
    var carIndex = generateRandomIndex(value[3].length);

    var result = [value[0][numberIndex], value[1][languageIndex], value[2][cityIndex], value[3][carIndex]];
    return result;
}

function generateRandomIndex(max) {
    return Math.floor((Math.random() * max));
}

var result = soothsayer([[3, 5, 2, 7, 9], ['Java', 'Python', 'C#', 'JavaScript', 'Ruby'], ['Silicon Valley', 'London', 'Las Vegas', 'Paris', 'Sofia'], ['Toyota', 'Audi', 'Lada', 'Skoda', 'Opel']]);
console.log("You will work " + result[0] + " years on " + result[1] + ".\n" +
            "You will live in " + result[2] + " and drive " + result[3] + ".");