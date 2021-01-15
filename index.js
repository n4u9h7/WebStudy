/* String
const what = "Nicolas";
*/

/* Boolean
const what = true;
const what = false;
*/

/* Number
const what = 111;
*/

/* Float
const what = 55.1;
*/

/*
const mon = "Mon";
const tue = "Tue";
const wed = "Wed";
const thu = "Thu";
const fri = "Fri";
const sun = "Sun";
*/

// Array
/*
const daysOfWeek = [ "Mon", "Tue", "Wed", "Thu", "Fri", "Sun" ];

console.log( "Array out : " + daysOfWeek[2] );

// Object
const nicoInfo = { 
    name:"Nicolas", 
    age:33,
    gender:"Male",
    isHandsome:true,
    favMovies:["Along th gods", "LOTR", "Oldboy" ],
    favFood:[{
        name:"Kimchi", 
        fatty:false,
    }, 
    {
        name:"cheese burger",
        fatty:true,
    }]
};

console.log( nicoInfo );
nicoInfo.gender = "Female";
console.log( nicoInfo, console );
*/

// Function 1
// function sayHello( name, age ){
//     //console.log( "Hello", name, "you have", age, "years of age." );
//     //console.log( "Hello" + name + "you are" + age + "years old" );
//     //console.log( `Hello ${name} you are ${age} years old`);
//     return `Hello ${name} you are ${age} years old`;
// }

// const greetNicolas = sayHello( "Nicolas", 15 );

// console.log( greetNicolas );

// Function 2
// const calculator = {
//     plus: function( a, b ) {
//         return a + b;
//     },
//     minus: function( a, b ) {
//         return a - b;
//     },
//     mul: function( a, b ) {
//         return a * b;
//     },
//     div: function( a, b ) {
//         return a / b;
//     },
//     pow: function( a, b ) {
//         return a ** b;
//     },
//     rem: function( a, b ) {
//         return a % b;
//     }
// }

// //console.log( greetNicolas );
// const plus = calculator.plus( 5, 5 );
// const minus = calculator.minus( 5, 5 );
// const mul = calculator.mul( 5, 5 );
// const div = calculator.div( 5, 5 );
// const pow = calculator.pow( 2, 3 );
// const rem = calculator.rem( 10, 3 );
// console.log( plus );
// console.log( minus );
// console.log( mul );
// console.log( div );
// console.log( pow );
// console.log( rem );

// JS DOM Functions
// const title = document.getElementById("title");
// title.innerHTML = "HI! From JS";
// //console.log( title );

// const title = document.getElementById("title");
// title.innerHTML = "HI! From JS";
// title.style.color = "red";
// //console.dir(document);
// document.title = "I own you now";

// Events and event handlers
// function handleClick(){
//     title.style.color = "blue";
// }

// title.addEventListener("click", handleClick );

// if, esle, and, or
// const age = prompt("How old ar you" );

// if( age > 18 && age <= 21 ) {
//     console.log( "you can drink but you should not")
// } else if( age > 21 ){
//     console.log( "go ahed" );
// } else {
//     console.log( "too young" );
// }

//If else - Function practice
//const title = document.getElementById("title");

// color code : https://flatuicolors.com
// javascript event : HTML JavaScript DOM event "MDN"

// const title = document.querySelector("#title");
// const BASE_COLOR = "rgb(52, 73, 94)";
// const OTHER_COLOR = "#7f8c8d";

// function handleClick(){
//     const currentColor = title.style.color;
    
//     if( currentColor === BASE_COLOR ){
//         title.style.color = OTHER_COLOR;
//     } else {
//         title.style.color = BASE_COLOR;
//     }
// }

// function init(){
//     title.style.color = BASE_COLOR;
//     title.addEventListener("click", handleClick );
// }

// init();


// function handleOffline(){
//     console.log("lalalalla");
// }

// function handleOnline(){
//     console.log("Welcome back");
// }

// window.addEventListener("offline", handleOffline );
// window.addEventListener("online", handleOnline );

// Function practice
// const title = document.querySelector("#title");
// const CLICKED_CLASS = "clicked";

// function handleClick(){
//     title.classList.toggle( CLICKED_CLASS );
//     //const currentClass = title.className;
//     // const hasClass = title.classList.contains( CLICKED_CLASS );

//     // if( !hasClass ){
//     //     title.classList.add( CLICKED_CLASS );
//     // } else {
//     //     title.classList.remove( CLICKED_CLASS );
//     // }
// }

// function init(){
//     title.addEventListener("click", handleClick );
// }

// init();

//////////////////////////////////////////////////////////////////
// Making a JS Clock part One
