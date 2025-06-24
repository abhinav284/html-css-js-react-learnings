const firstPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(5);
  }, 1000);
});

firstPromise
  .then(result => {
    console.log("First promise resolved with:", result);
    return result * 2;  
  })
  .then(newResult => {
    console.log("After multiplication:", newResult);
  })
  .catch(error => {
    console.error("Error:", error);
  });
