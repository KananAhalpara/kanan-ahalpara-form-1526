// Shortcut for printing in JavaScript console
/*
function p(param) {
    console.clear();
    console.log(param);
}
*/

// getting references;
const main = document.querySelector(".main");
const form = document.querySelector("form");
const fullname = document.getElementById("full-name");
const email = document.getElementById("email");
const message = document.getElementById("message");
const pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/; // email reg-exp


const collectedData = {
    fullName: null,
    email: null,
    message: null
};

const errors = {};



function validateForm(ev) {

    // Prevent submitting form 
    // (default behaviour when the submit button is clicked)
    // Needs to be stated as the first statement inside event-handler.
    ev.preventDefault();

    // validate full name
    if (fullname.value !== "") {
        collectedData.fullName = fullname.value;
        delete errors.fn;
    } else {
        errors.fn = "Fullname is missing";
    }

    // validate email
    if (email.value !== "") {
        if (pattern.test(email.value)) {
            // add that value to collectedData.email
            collectedData.email = email.value;
            delete errors.em;
        } else {
            errors.em = "Email is invalid";
        }
    } else {
        errors.em = "Email is missing";
    }

    // validate message
    if (message.value !== "") {
        collectedData.message = message.value;
        delete errors.msg;
    } else {
        errors.msg = "Message is missing";
    }


    // provide feedback or error-report
    if (Object.keys(errors).length === 0) {
        console.log(collectedData);
    } else {
        console.log(errors)
    }

}

form.addEventListener("submit", validateForm);
