const form = document.querySelector( ".js-form" );
const input = form.querySelector("input");
const greeting = document.querySelector( ".js-greetings" );

const USER_LS = "currentUser";
const SHOWING_CN = "showing";

function saveName( text ){
    localStorage.setItem( USER_LS, text );
}

function handleSubmit( event ){
    event.preventDefault();
    const currentValue = input.value;

    paintGreetings( currentValue );
    saveName( currentValue );
}

function askForName(){
    form.classList.add( SHOWING_CN );
    form.addEventListener("submit", handleSubmit );
}

function paintGreetings( text ){
    form.classList.remove( SHOWING_CN );
    greeting.classList.add( SHOWING_CN );
    greeting.innerText = `Hello ${text}`;
}

function loadName(){
    const currentUser = localStorage.getItem( USER_LS );

    if( currentUser === null ){
        // he is not
        askForName();
    } else {
        // she is 
        paintGreetings( currentUser );
    }
}

function init(){
    loadName();
}

init();
