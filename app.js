// function checkCharType(char) {
//     // Check if the input is a single character
//     // ANSWER 1
    if (char.length !== 1) {
      return "Please enter a single character.";
    }
  
    // Get the ASCII value of the character
    let asciiValue = char.charCodeAt(0);
  
    // Check if the character is a number (0-9)
    if (asciiValue >= 48 && asciiValue <= 57) {
      return `'${char}' is a number.`;
    }
  
    // Check if the character is an uppercase letter (A-Z)
    else if (asciiValue >= 65 && asciiValue <= 90) {
      return `'${char}' is an uppercase letter.`;
    }
  
    // Check if the character is a lowercase letter (a-z)
    else if (asciiValue >= 97 && asciiValue <= 122) {
      return `'${char}' is a lowercase letter.`;
    }
  
    // If not a number or letter
    else {
      return `'${char}' is neither a number nor a letter.`;
    }
  
  
  // Example usage:
  var input = prompt("Enter a character: ");
  alert(checkCharType(input));
// // ANSWER 2  
function compareIntegers() {
    // Accept two integers from the user
    let num1 = parseInt(prompt("Enter the first integer: "));
    let num2 = parseInt(prompt("Enter the second integer: "));
  
    // Check if the numbers are equal
    if (num1 === num2) {
      alert(`Both integers are equal: ${num1}`);
    }
    // Check if the first number is larger
    else if (num1 > num2) {
      alert(`The larger number is: ${num1}`);
    }
    // If the second number is larger
    else {
      alert(`The larger number is: ${num2}`);
    }
  }
  
//   // Call the function to compare the integers
//   compareIntegers();
//   ANSWER 3
function checkNumber() {
    // Accept a number from the user
    let num = parseFloat(prompt("Enter a number:"));
  
    // Check if the number is positive, negative, or zero
    if (num > 0) {
      alert(`${num} is a positive number.`);
    } else if (num < 0) {
      alert(`${num} is a negative number.`);
    } else if (num === 0) {
      alert(`The number is zero.`);
    } else {
      alert("Invalid input. Please enter a valid number.");
    }
  }
  
  // Call the function to check the number
  checkNumber();
//   ANSWER4
function isVowel(char) {
    // Check if the input is a single character
    if (char.length !== 1) {
      return "Please enter a single character.";
    }
  
    // Convert the character to lowercase for easy comparison
    let lowerChar = char.toLowerCase();
  
    // Check if the character is a vowel
    if (lowerChar === 'a' || lowerChar === 'e' || lowerChar === 'i' || lowerChar === 'o' || lowerChar === 'u') {
      return true;
    } else {
      return false;
    }
  }
  
  // Example usage:
  var input = prompt("Enter a single character: ");
  alert(isVowel(input));
//   ANSWER 5
function validatePassword() {
    // a. Store correct password in a JS variable
    let correctPassword = "mySecret123";
  
    // b. Ask user to enter his/her password
    let userPassword = prompt("Enter your password:");
  
    // c.i. Check if the user has entered a password
    if (userPassword === null || userPassword === "") {
      alert("Please enter your password.");
    } 
    // c.ii. Check if both passwords are the same
    else if (userPassword === correctPassword) {
      alert("Correct! The password you entered matches the original password.");
    } 
    // If passwords don't match
    else {
      alert("Incorrect password.");
    }
  }
  
  // Call the function to validate the password
  validatePassword();
// answer 6
var greeting;
var hour = 13;

if (hour < 18) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}

console.log(greeting);
// answer 7
// 

// Chapter 10 - 14
// answer 1
var city = "Karachi";

if (city === "Karachi") {  
  console.log("The City OF Lights");
}

// answer 2
if (x === y) {
    let z = prompt("What is the value of z?");
    let anotherVariable = z;
    // You can add further logic here
}

// // answer 3
var  ZipCode = +prompt("what is your zip code")
if(ZipCode ==="10010"){
  alert("karaci");
}else{alert("please write correct city");}

// answer4
if (x === 1) {
    x = 5; // Assign a new value to x
}
 
//  chaptercomparisoion operator
// answer 1
if (x !== y) 
  //condition is true
// answer 2
if (x >= y)
  // codition is true
// answer 3
if (x !== 10) {
  x = 20; // Assign a new value to x

}
// answe4
if (x !== 5) {
  alert("Congratulations!");
}
// answer 5
var firstName = prompt("Please enter your first name:");

if (firstName !== "sameer") {
    alert("No match");
}
// chapter 13 testing sets of condition

if (a === b && c === d){alert("condition is true")} 
// answer 2
if (a === b || c !== d) {alert("condition is true")}
// answer3 
var Name = prompt("please enter your name");
var age = prompt("your age");
if ((Name === "Hamza" || Name === "Arsalan") && age < 60) {alert("please welcome");}
else{alert("you are not eligble")}

// answer4
var num1 = 10;  // First variable
var num2 = 20;  // Second variable

if (num1 < num2 || num1 > num2) {
    alert("The numbers are not equal!");
}

answer5
let firstName = "sameer";   // Assign your first name
let lastName = "khan";     // Assign your last name

let enteredFirstName = prompt("Please enter your first name:");
let enteredLastName = prompt("Please enter your last name:");

if (enteredFirstName === firstName && enteredLastName === lastName) {
    alert("Your names match!");
}
else{alert("your is'nt match")}

// CHAPTER 14 (IF STATMENT NESTED)
//  ANSWER 1
let password = prompt("Please enter your password:");

if (password !== "") {  // Check if the password is not empty
    if (password.length <= 5) {  // Check if the password is not greater than 5 characters
        alert("Password must be greater than 5");
    } else {
        alert("OK");
    }
} else {
    alert("Password cannot be empty");
}

// ANSWER 2 answer3
var a = prompt("write a varaiable ")
var c = prompt("write a name")
if (a === 1) { 
  if (c === "Max") {
      alert("OK");
  }
  else{alert("not ok");}
}
else{alert("ok");}
// answer 4
let num1 = 10; // Assign the same number value to both variables
let num2 = 10;

if (num1 === num2) {  // First condition: Check if num1 equals num2
    if (num1 <= num2) {  // Nested condition: Check if num1 is less than or equal to num2
        alert("Both conditions are true!");
    }
}








  




