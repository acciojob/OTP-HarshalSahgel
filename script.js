//your JS code here. If required.
function onfocus(e){
const currentElement = e.target;
if(currentElement.value){
    currentElement.nextElementSibling && currentElement.nextElementSibling.focus();
}
}

const code_container = document.querySelector(".code-container");
const numberOfInput = 6;
// let lastIndexElement = null;

for(let i = 1; i <= numberOfInput; i++){
   const code = document.createElement("input");
   code.maxLength = 1;
   code.className = "code";

    code.addEventListener("input", onfocus)
   code_container.appendChild(code);
}

document.addEventListener("keyup", (e) => {
    if (e.key === "Backspace") {
        if (e.target.value) {
            e.target.value = "";
			
        } else if (e.target.previousElementSibling) {
            e.preventDefault(); // Prevent the default backspace behavior
            e.target.previousElementSibling.focus();
            e.target.previousElementSibling.value = "";
        }
    }
});