const promiseOne = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Async task is complete");
    resolve();
  }, 100);
});

promiseOne
  .then(() => {
    console.log("Promise consumed");
  })
  .catch()
  .finally();
