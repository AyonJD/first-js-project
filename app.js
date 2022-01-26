// Input function   -------------->
function grade() {
    let userInput = document.getElementById("input").value;

// Conditions   ------------->
    if ((userInput >= 90) && (userInput <= 100)) {
        document.getElementById("demo").innerHTML = "You got A+";
    } else if ((userInput >= 80) && (userInput < 90)) {
        document.getElementById("demo").innerHTML = "You got A";
    } else if ((userInput >= 70) && (userInput < 80)) {
        document.getElementById("demo").innerHTML = "You got B";
    } else if ((userInput >= 60) && (userInput < 70)) {
        document.getElementById("demo").innerHTML = "You got C";
    } else if ((userInput >= 50) && (userInput < 60)) {
        document.getElementById("demo").innerHTML = "You got D";
    } else if ((userInput < 50) && (userInput >= 0)) {
        document.getElementById("demo").innerHTML = "Sorry you are failed";
    } else {
        document.getElementById("demo").innerHTML = "Please enter a valid mark"
    }
}


