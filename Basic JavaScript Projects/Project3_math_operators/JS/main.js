function addition() { //Defining and naming the addition function 
    var add = 1 + 2;
    document.getElementById("Add").innerHTML = "1 + 2 = " + add; //Print the result in HTML
}

function subtraction() { //Defining and naming the subtraction function 
    var sub = 9 - 7;
    document.getElementById("Sub").innerHTML = "9 - 7 = " + sub; //Print the result in HTML
}

function multiplication() {
    //Defining and naming the multiplication function 
    var mult = 12 * 5;
    document.getElementById("Mlt").innerHTML = "12 * 5 = " + mult; //Print the result in HTML
}

function division() {
    //Defining and naming the division function 
    var divide = 39 / 3;
    document.getElementById("Div").innerHTML = "39 / 3 = " + divide; //Print the result in HTML
}

function random() { //Defining and naming the random function
    document.getElementById("Ran").innerHTML = Math.random() * 10; //Print the result in HTML
}

function modulus_operator() { //Defining and naming the modulus operator function 
    var modulus = 38 % 4;
    document.getElementById("Mod").innerHTML = "when you divide 38 by 4 you have a remainder of: " + modulus; //Print the result in HTML  
}

function Increment() { //Defining and naming the increment function
    var value = document.getElementById("IncrementText").innerHTML; //Saves the text of the HTML element to a variable 
    value++; //Add one to the value
    document.getElementById("IncrementText").innerHTML = value; //Print the result in HTML
}
function Decrement(){ //Define a function and naming it
    var value = document.getElementById("DecrementText").innerHTML; //Saves the text of the HTML element to variable
    value--;
    document.getElementById("DecrementText").innerHTML = value; //Print the result in HTML
}