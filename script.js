// ============================
// Part 1: Variables & Conditionals
// ============================
let userName = "L"; // variable declaration
let userScore = 85;

if (userScore >= 90) {
    console.log("Excellent!");
} else if (userScore >= 70) {
    console.log("Good job!");
} else {
    console.log("Keep practicing!");
}

// Display result in HTML
document.getElementById("part1-output").textContent = `Hello ${userName}, your score is ${userScore}.`;


// ============================
// Part 2: Custom Functions
// ============================

// Function 1: Greet user
function greet(name) {
    return `Welcome, ${name}!`;
}

// Function 2: Add two numbers
function addNumbers(a, b) {
    return a + b;
}

// Using the functions
document.getElementById("part2-output").textContent = greet(userName) + " Your total is " + addNumbers(5, 10) + ".";


// ============================
// Part 3: Loops
// ============================

// Loop 1: For loop
let numbers = [1, 2, 3, 4, 5];
let loopList = document.getElementById("loop-list");
for (let i = 0; i < numbers.length; i++) {
    let li = document.createElement("li");
    li.textContent = `Number: ${numbers[i]}`;
    loopList.appendChild(li);
}

// Loop 2: While loop
let count = 1;
while (count <= 3) {
    console.log(`Count is: ${count}`);
    count++;
}


// ============================
// Part 4: DOM Interactions
// ============================

// Interaction 1: Change title text
document.getElementById("change-text-btn").addEventListener("click", () => {
    document.getElementById("main-title").textContent = "🎉 Title Changed!";
});

// Interaction 2: Add items dynamically
document.getElementById("add-item-btn").addEventListener("click", () => {
    let ul = document.getElementById("dom-list");
    let li = document.createElement("li");
    li.textContent = `New item ${ul.children.length + 1}`;
    ul.appendChild(li);
});

// Interaction 3: Toggle color of title
document.getElementById("toggle-color-btn").addEventListener("click", () => {
    let title = document.getElementById("main-title");
    if (title.style.color === "red") {
        title.style.color = "black";
    } else {
        title.style.color = "red";
    }
});
