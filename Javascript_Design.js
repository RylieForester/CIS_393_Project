//The below code for the form validation was created using the material in Chapter 8.7 Form Validation of the course zyBook.
window.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {
   let button = document.getElementById("validateButton");
   button.addEventListener("click", validateUserID);

   let userInputID = document.getElementById("wishlistUserID");
}

//Function checks whether the input user ID is a valid number. 
function validateUserID(event){
    let userInputID = document.getElementById("wishlistUserID");
    let button = document.getElementById("okButton");

    if(isNaN(userInputID.value) || (userInputID.value === "") || (userInputID.value % 1 !== 0) || (userInputID.value <= 0)){
        userInputID.style.backgroundColor = "rgba(255, 0, 0, 0.498)";
        button.style.opacity = "0%";
    }
    else if(!(isNaN(userInputID.value)) || (userInputID.value !== "") || (userInputID.value % 1 === 0) || (userInputID.value > 0)) {
        userInputID.style.backgroundColor = "LightGreen";
        button.style.opacity = "100%";
    }
}