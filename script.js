const currentDisplay=document.querySelector(".current-operand");
const previousDisplay=document.querySelector(".previous-operand");
const numberBtns=document.querySelectorAll(".number");
const operationBtns=document.querySelectorAll(".operation");
const equalsBtn=document.querySelector(".equals");
const clearBtn=document.querySelector(".clear");
const themeBtn=document.querySelector(".themeBtn");
const backspaceBtn=document.querySelector(".backspace");

let currentOperand='0';  // number currently being typed
let previousoperand='';  // previous number before operator
let operation=null;
let waitingForNewOperand=false;  // are we starting a new number?

//update Display
function updateDisplay()
{
    currentDisplay.textContent=currentOperand;
    previousDisplay.textContent=previousoperand +(operation || '');
}

//Appending Numbers
function appendNumber(number)
{
    if(waitingForNewOperand)
    {
        currentOperand-number;
        waitingForNewOperand=false;
    }
    
}
