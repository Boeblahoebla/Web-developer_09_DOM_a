// the goal is to come up with at least 4
// different ways to select the first paragraph

// 1
var paragraphToFetch = document.querySelector("p");
console.log("1: Using document.queryselector(\"p\")");
console.log(paragraphToFetch);

// 2
var paragraphToFetch = document.getElementsByTagName("p")[0];
console.log("2: using document.getElementsByTagName(\"p\")[0]");
console.log(paragraphToFetch);

// 3
var paragraphToFetch = document.getElementsByClassName("special")[0];
console.log("3: using document.getElementByClassName(\"special\")[0]");
console.log(paragraphToFetch);

// 4
var paragraphToFetch = document.getElementById("first");
console.log("4: using document.getElementById(\"first\")");
console.log(paragraphToFetch);

// 5
var paragraphToFetch = document.querySelector("#first");
console.log("5: using document.querySelector(\"#first\")");
console.log(paragraphToFetch);

// 6
var paragraphToFetch = document.querySelectorAll("p")[0];
console.log("6: using document.querySelectorAll(\"p\")[0]");
console.log(paragraphToFetch);