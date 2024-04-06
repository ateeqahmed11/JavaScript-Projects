function updateElements() {
    // Assigning values to variables
    var message = "Hello, world!";
    var number = 42;

    // Updating HTML elements using document.getElementById
    document.getElementById("output").innerHTML = message + " The answer is: " + number;
}

function myFunction(){
    //Define String
    var santance = "I am learning";
    //Concate the string
    santance +=" a lot from this book!"
    //display it into a html 
    document.getElementById('Concatenate').innerHTML = santance;
}

