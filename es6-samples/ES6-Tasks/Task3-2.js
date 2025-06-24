function checkNumber(input) {
  return new Promise((resolve, reject) => {
    if (typeof input === 'number') {
      resolve("Input is a number: " + input);
    } else {
      reject("Error: Input is not a number");
    }
  });
}

checkNumber(10)
  .then(console.log)     
  .catch(console.error);

checkNumber("abc")
  .then(console.log)
  .catch(console.error);
