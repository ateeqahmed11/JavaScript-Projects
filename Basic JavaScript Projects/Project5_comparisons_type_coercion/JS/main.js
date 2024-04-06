//variable with a Boolean data type 
var x = true;
//printing the data type of the variable x 
document.write(typeof x);
document.write("<br>");
//an expression combining a string and a number 
document.write("10" + 10);
document.write("<br>");
//utilizing the == operator
document.write(5 == 5);
document.write("<br>");
//utilizing the === operator
x = 1;
y = 1;
document.write(x === y);
document.write("<br>");
//utilizing the > and && operators
document.write(10 > 5 && 11 > 6);
document.write("<br>");
//utilizing the < and operators 
document.write(105 || 11 < 6);
document.write("<br>");
//Utilizing the ! operator
function not_Function() {
    document.getElementById("Not").innerHTML = !(1 > 2);
}