
//selecting elements
let form = document.querySelector("#form");
let userName = document.getElementById("fullname");
let email = document.getElementById("email");
let select = document.getElementById("topicSelect");
let message = document.getElementById("message");

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    formValidation()
})

function formValidation(){
    let userNameValue = userName.value;
    let emailValue = email.value;
    let selectValue = select.value;
    let messageValue = message.value;

    if(userNameValue === ''){
        errorValidation(userName, "Full Name can not be blank")
    }else{
        successValidation(userName);
    }

    function errorValidation(input, message){
        const formFlow = input.parentElement;
        const small = formFlow.querySelector("small");

        small.innerText = message;
        formFlow.className = "form-flow error";

    }
    function successValidation(input, message){
        const formFlow = input.parentElement;
        const small = formFlow.querySelector("small");

        small.innerText = message;
        formFlow.className = "form-flow success";

    }
//////////////////////////////////////////////////////////////////

    if(emailValue === ''){
        errorValidation(email, "Email can not be blank")
    }else{
        successValidation(email);
    }

    function errorValidation(input, message){
        const formFlow = input.parentElement;
        const small = formFlow.querySelector("small");

        small.innerText = message;
        formFlow.className = "form-flow error";

    }
    function successValidation(input, message){
        const formFlow = input.parentElement;
        const small = formFlow.querySelector("small");

        small.innerText = message;
        formFlow.className = "form-flow success";

    }
/////////////////////////////////////////////////////

    if(selectValue === 'Choose a Topic'){
        errorValidation(select, "Select can not be blank")
    }else{
        successValidation(select);
    }

    function errorValidation(input, message) {
        const formFlow = input.parentElement;
        const select = input; // La balise select
        const small = formFlow.querySelector("small");
    
        small.innerText = message;
        formFlow.className = "form-flow error"; // Ajout de la classe "error" pour le style CSS
    }

    function successValidation(input, message){
        const formFlow = input.parentElement;
        const small = formFlow.querySelector("small");

        small.innerText = message;
        formFlow.className = "form-flow success";

    }
//////////////////////////////////////////////////////////////////

    if(messageValue === ''){
        errorValidation(message, "Message can not be blank")
    }
    else{
        successValidation(message);
    }

    function errorValidation(input, message){
        const formFlow = input.parentElement;
        const small = formFlow.querySelector("small");

        small.innerText = message;
        formFlow.className = "form-flow error";

    }
    function successValidation(input, message){
        const formFlow = input.parentElement;
        const small = formFlow.querySelector("small");

        small.innerText = message;
        formFlow.className = "form-flow success";

    }

}
// ----------------------------------------------------------------------

function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(40.712775, -74.005973),
        zoom: 18,
    };
    
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}