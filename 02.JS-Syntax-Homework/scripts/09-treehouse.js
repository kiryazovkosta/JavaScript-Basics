// Write a JavaScript function treeHouseCompare(value) that accepts the following parameters: integers a and b. 
// The function compares the area of the house and the area of the tree (Figure 1) and returns the name of the 
// figure with bigger area (house or tree) and the value of the area. Write JS program treehouse.js that compares 
// a few houses and trees. The result should be printed on the console. Run the program through Node.js. 

function treeHouseCompare(value) {
    var arguments = value.split(" ");
    var a = Number(arguments[0]);
    var b = Number(arguments[1]);

    var houseArea = a * a + (a * ((a - a / 3) / 2));
    var treeArea = b * (b / 3) + Math.PI * ((b + (b / 3)) / 2) * ((b + (b / 3)) / 2);

    if (houseArea > treeArea) {
        return "house/" + houseArea.toFixed(2);
    } else {
        return "tree/" + houseArea.toFixed(2);
    }
}

console.log(treeHouseCompare("3 2"));
console.log(treeHouseCompare("3 3"));
console.log(treeHouseCompare("4 5"));