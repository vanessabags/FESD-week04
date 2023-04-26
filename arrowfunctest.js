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
