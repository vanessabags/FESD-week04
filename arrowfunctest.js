const booleanFlag = true;

let trueOrFalse = new Promise((resolve, reject) => {
    if (booleanFlag) {
        resolve("The flag is true!");
    } else {
        reject("The flag is false!");
    }
});
// This will print out the promise that you've just declared
console.log(trueOrFalse);


trueOrFalse
    .then(function successValue(result) {
        console.log(result);
    })
    .then(function successValue2() {
        console.log("You can call multiple functions this way.");
    })
    .catch(function failureValue(reject) {
        console.log(reject);
    });

// Function from the class text

function myFunction(num1, num2, num3) {
    let value = 0;
    for  (let index = 0; index < num3; index++) {
        value = (value + num2) * num1;
    }
    return value /  (num1 * (num3 * 10));
}

console.log(myFunction(15,12,13));

// a  function that is needed to change into an arrow function

// below is the converted arrow function

let fancyAlgorithm = (num1, num2, num3) => {
    let value = 0;
    for ( let index = 0 ; index < num3 ; index ++) {
        value = (value + num2) * num1 ;
    }
    return value / (num1 * (num3 * 10));
}

console.log(fancyAlgorithm(20,10,5)); // answer is 33684.2