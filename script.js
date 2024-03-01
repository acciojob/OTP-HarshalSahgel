const code_container = document.querySelector(".code-container");
const numberOfInput = 6;



function onfocus(e){
const currentElement = e.target;
if(currentElement.value){
    currentElement.nextElementSibling && currentElement.nextElementSibling.focus();
}
}

function onBackSpace(e){
    if (e.key === "Backspace" && e.target.previousElementSibling) {
        if(e.target){
            e.target.value = "";
        }
        const previousElement = e.target.previousElementSibling;
        previousElement.focus();
        previousElement.value = ""; // Clear the value of the previous input
    }
}


function initializeVerificationApp(){  
for(let i = 1; i <= numberOfInput; i++){
   const code = document.createElement("input");
   code.maxLength = 1;
   code.className = "code";

    code.addEventListener("input", onfocus);
    code.addEventListener("keydown", onBackSpace);
   code_container.appendChild(code);
} 

const firstInput = code_container.querySelector(".code");
    if (firstInput) {
        firstInput.focus();
    }
}

document.addEventListener("DOMContentLoaded", initializeVerificationApp);