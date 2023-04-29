// question one: create an array called ages
console.log("Question 1: ");

let agesArray = [3, 9, 23, 64, 2, 8, 28, 93];
console.log(agesArray);

    // subtract value of the first element from the last element

console.log(agesArray[agesArray.length -1] - agesArray[0]);

    //Add a new ages and repeat

agesArray.push(32);
console.log(agesArray);

console.log(agesArray[agesArray.length - 1] - agesArray[0])

    // loop to iterate through array and calculate average age

let agesTotal = 0 // to find average, we need to find the total
for (let i = 0 ; i < agesArray.length; i ++) {
    agesTotal += agesArray[i];
} // a for loop to calculate the total of the age array
let agesAverage = agesTotal/agesArray.length;
console.log(agesAverage);


// question two ---------------------------
console.log("Question 2: ")

let namesArray = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
console.log(namesArray);

    // calculate the average numbers of letters per name

let namesLengthTotal =0 // declared a variable to be the total of the names length array
for (let i = 0 ; i < namesArray.length; i++) {
    namesLengthTotal += (namesArray[i].length); //for loop to go through the array and calculate total
}
console.log(namesLengthTotal / namesArray.length); // found the average with the total and the length of the array

    // concatenate the names together, separated by spaces

let names= []; // created an empty array as a place to put the names 
for (let i=0 ; i < namesArray.length; i++) {
    names.push(namesArray[i]); 
}
console.log(names.join(" ")); //.join function to concatenate the names together with a space in the parenthesis to separate elements

console.log("\nQuestion 3: How do you access the last element of any array? ");
console.log("Answer: name the array and in the [] that calls the certain element in the array use (.length - 1) to call the last element because arrays are counted starting with 0.");

console.log("\nQuestion 4: How do you access the first element in any array?");
console.log("Answer: after stating the array name, add on [0] after the name to call upon the first element because they start the count with 0.");

// ----------------------------------
console.log("\nQuestion 5: ");

let nameLengths = [];
for (let i=0 ; i < namesArray.length; i++) {
    nameLengths.push(namesArray[i].length); 
}
console.log(nameLengths);

// ------------------------------------
console.log("Question 6: ");
// calculate the sum of the array

let nameLengthSum = 0;
for (let i = 0 ; i < nameLengths.length ; i++) {
    nameLengthSum += nameLengths[i];
}
console.log(nameLengthSum);

//---------------------------
console.log("Question 7: ");

function wordRepeat (word, n) {
    return word.repeat(n);
}
console.log(wordRepeat("Hello", 3));

// ---------------------------
console.log("Question 8: ");
function fullName (firstName, lastName) {
    console.log(firstName + " " + lastName);
}

// ---------------------------
console.log("Question 9: ");
function isTheSumLarge (array) {
    array.reduce
}