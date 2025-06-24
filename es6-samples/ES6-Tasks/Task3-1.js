const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Success");
  }, 1000);
});

myPromise.then(result => {
  console.log(result);
});
