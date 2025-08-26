// Part 1 : Variables, alert, prompt, confirm
// 1. Declare a variable name and assign your name to it. Show it using alert()
let myName = "Your Name";
alert("My name is: " + myName);

// 2. Ask the user for their age using prompt(). Store it in a variable and display it back using alert()
let age = prompt("Enter your age:");
alert("Your age is: " + age);

// 3. Use confirm() to ask "Do you like JavaScript?". Store result in variable and log it
let likesJS = confirm("Do you like JavaScript?");
console.log("User likes JavaScript: " + likesJS);

// 4. Ask user for two numbers and perform arithmetic operations
let num1 = Number(prompt("Enter first number:"));
let num2 = Number(prompt("Enter second number:"));

let sum = num1 + num2;
let difference = num1 - num2;
let product = num1 * num2;
let quotient = num1 / num2;
let modulo = num1 % num2;

alert(
  "Results:\n" +
  num1 + " + " + num2 + " = " + sum + "\n" +
  num1 + " - " + num2 + " = " + difference + "\n" +
  num1 + " * " + num2 + " = " + product + "\n" +
  num1 + " / " + num2 + " = " + quotient + "\n" +
  num1 + " % " + num2 + " = " + modulo
);

// *****************************************************************************************************************************************
// Part-2 Conditional Statements
// 1. Even or Odd
let number = Number(prompt("Enter a number:"));
if (number % 2 === 0) {
  alert("Even");
} else {
  alert("Odd");
}

// 2. Marks → Grade
let marks = Number(prompt("Enter your marks (out of 100):"));
if (marks >= 90) {
  alert("Grade A");
} else if (marks >= 75) {
  alert("Grade B");
} else if (marks >= 50) {
  alert("Grade C");
} else {
  alert("Fail");
}

// 3. Day of Week
let dayNum = Number(prompt("Enter day number (1–7):"));
switch (dayNum) {
  case 1: alert("Monday"); break;
  case 2: alert("Tuesday"); break;
  case 3: alert("Wednesday"); break;
  case 4: alert("Thursday"); break;
  case 5: alert("Friday"); break;
  case 6: alert("Saturday"); break;
  case 7: alert("Sunday"); break;
  default: alert("Invalid day number");
}

// 4. Age check using ternary
let userAge = Number(prompt("Enter your age:"));
alert(userAge >= 18 ? "You are an adult" : "You are a minor");

// 5. Password check
let password = prompt("Enter password:");
if (password === "12345") {
  alert("Login Successful");
} else {
  alert("Wrong Password");
}

// 6. Positive/Negative/Zero and Even/Odd check
let checkNum = Number(prompt("Enter a number:"));
if (checkNum > 0) {
  if (checkNum % 2 === 0) {
    alert("Positive Even number");
  } else {
    alert("Positive Odd number");
  }
} else if (checkNum < 0) {
  alert("Negative number");
} else {
  alert("Number is zero");
}

// 7. Driving eligibility
let driverAge = Number(prompt("Enter your age:"));
let license = prompt("Do you have a driving license? (yes/no)");
if (driverAge >= 18) {
  if (license.toLowerCase() === "yes") {
    alert("You can drive");
  } else {
    alert("You are eligible by age but don’t have a license");
  }
} else {
  alert("You are underage");
}

// 8. Username and Password check
let username = prompt("Enter username:");
let pass = prompt("Enter password:");
if (username === "admin") {
  if (pass === "1234") {
    alert("Welcome Admin");
  } else {
    alert("Wrong password");
  }
} else {
  alert("Invalid username");
}
// ***********************************************************************************************************************************
// Part 3: Arrays
// 1. Rearranging with splice()
let items = ["pen", "book", "eraser", "scale"];
items.splice(2, 1, "pencil");  // remove "eraser" and insert "pencil"
console.log(items);

// 2. Finding maximum
let numbers = [10, 45, 67, 23, 89, 12];
let maxNum = Math.max.apply(null, numbers);
console.log("Maximum number is:", maxNum);

// 3. String to Array & Back
let fruits = "apple,banana,orange";
let fruitArray = fruits.split(",");
console.log(fruitArray);
let fruitString = fruitArray.join(" | "); 
console.log(fruitString);

// 4. Array of 5 colors
let colors = ["red", "blue", "green", "yellow", "pink"];
console.log("3rd color is:", colors[2]);

// 5. Finding position of 30
let nums = [10, 20, 30, 40, 50];
console.log("Position of 30 is:", nums.indexOf(30));

// 6. Array of names
let names = ["Amit", "Rahul", "Sneha", "Priya"];
names.push("Rohit");
names.shift();
console.log("Final names:", names);

// 7. Concat arrays
let arr1 = [100, 200, 300];
let arr2 = [400, 500];
let newArr = arr1.concat(arr2);
console.log("Concatenated array:", newArr);

// 8. Reverse array
let subjects = ["HTML", "CSS", "JavaScript"];
subjects.reverse();
alert(subjects);

// 9. every() check if all even
let evenNumbers = [2, 4, 6, 8, 10];
let allEven = evenNumbers.every(num => num % 2 === 0);
console.log("All numbers even:", allEven);

// 10. some() check if under 18
let ages = [12, 18, 20, 25];
let hasMinor = ages.some(age => age < 18);
console.log("At least one person under 18:", hasMinor);

