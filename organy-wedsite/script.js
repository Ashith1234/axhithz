    
    alert ( "welcome to organ" );  

let age = 16;
let birthyear = 2007;

// Display the current year in the footer
document.getElementById("footer").innerText = `${new Date().getFullYear()}`;

// Output age and birth year to the console
console.log("My age is " + age + " and I was born in " + birthyear);

// Output age and birth year to the browser screen
document.getElementById("output").innerText = "My age is " + age + " and I was born in " + birthyear;

// Decision making with if-else statement
if (age > 18) {
    console.log('You are an adult');
    document.getElementById("output").innerText += "\nYou are an adult";
} else {
    console.log('You are a child');
    document.getElementById("output").innerText += "\nYou are a child";
}

// Logical operators for complex condition evaluation
let isStudent = true;
let hasID = false;

if (age > 18 && isStudent) {
    console.log('You are an adult student you can organize your schedule');
    document.getElementById("output").innerText += "\nYou are an adult student";
} else if (age > 18 || hasID) {
    console.log('You are an adult or have an ID');
    document.getElementById("output").innerText += "\nYou are an adult or have an ID";
} else {
    console.log('You are a minor without an ID');
    document.getElementById("output").innerText += "\nYou are a minor without an ID";
}

    // if ( age > 18 && age < 30 ) { console.log(" you are in twenties or late teens")}  

    // ( age > 18 || age < 30 ) { console.log(" you are under 18 or over 30")} 

    //   let isminor = age < 18;
    //   console.log (" you are not a minor" + isminor) 


