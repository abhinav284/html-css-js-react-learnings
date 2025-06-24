//Task2.1
function processUserInput(callback) {
    const name = "Abhinav";
    callback(name);
}

processUserInput(function(name) {
    console.log("Welcome, " + name);
});
