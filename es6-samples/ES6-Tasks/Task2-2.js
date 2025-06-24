function loadData(callback){
    console.log("Hello")
    setTimeout(() => {
        callback("Abhinav");}, 2000);
}

loadData(function(message) {
    console.log(message);  
});