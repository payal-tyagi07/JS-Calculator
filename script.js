const currentDisplay=document.querySelector(".current-operand");
const previousDisplay=document.querySelector(".previous-operand");
const numberBtns=document.querySelectorAll(".number");
const operationBtns=document.querySelectorAll(".operator");
const equalsBtn=document.querySelector(".equals");
const clearBtn=document.querySelector(".clear");
const themeBtn=document.querySelector("#themeBtn");
const backspaceBtn=document.querySelector(".backspace");
const signBtn = document.querySelector('.sign');

let currentOperand='0';  // number currently being typed
let previousOperand='';  // previous number before operator
let operation=null;
let waitingForNewOperand=false;  // are we starting a new number?

//update Display
function updateDisplay()
{
    currentDisplay.textContent=currentOperand;
    previousDisplay.textContent=previousOperand +(operation || '');
}

//Appending Numbers
function appendNumber(number)
{
    if(waitingForNewOperand)
    {
        currentOperand=number;
        waitingForNewOperand=false;
    }
    else
    {
        if(number === '.' && currentOperand.includes('.'))
            return;
        if(currentOperand === '0' && number !=='.')
        {
            currentOperand=number;
        }
        else
        {
            currentOperand+=number;
        }
    }
    updateDisplay();
}

//Choosing an operator 
function chooseOperation(op){
    if(currentOperand=== '')
        return;
    if(previousOperand !== '')
    {
        calculate();
    }
    operation=op;
    previousOperand=currentOperand;
    currentOperand='';
    updateDisplay();
}

function calculate() {
    // If no operation waiting, do nothing
    if (operation === null || previousOperand === '') return;

    // If no second number typed, use the first number again
    let current = currentOperand;
    if (current === '') current = previousOperand;

    const prev = parseFloat(previousOperand);
    const curr = parseFloat(current);
    if (isNaN(prev) || isNaN(curr)) return;

    let result;
    switch (operation) {
        case '+': result = prev + curr; break;
        case '-': result = prev - curr; break;
        case '*': result = prev * curr; break;
        case '/':
            if (curr === 0) {
                alert("Cannot divide by zero");
                return;
            }
            result = prev / curr;
            break;
        default: return;
    }

    currentOperand = result.toString();
    operation = null;
    previousOperand = '';
    waitingForNewOperand = true;
    updateDisplay();
}

//clear and backspace
function clear()
{
    currentOperand='0';
    previousOperand='';
    operation=null;
    waitingForNewOperand=false;
    updateDisplay();
}

function toggleSign() {
            let num = parseFloat(currentOperand);
            if (isNaN(num)) return;
            currentOperand = (num * -1).toString();
            updateDisplay();
        }

function backspace()
{
    if(waitingForNewOperand)
        return;
    if(currentOperand.length === 1 || (currentOperand.length === 2 && currentOperand.startsWith('-')))
    {
        currentOperand='0';
    }
    else
    {
        currentOperand=currentOperand.slice(0,-1);
    }
    updateDisplay();
}

//Event Listeners
numberBtns.forEach(btn => {
    btn.addEventListener('click',() => {
        appendNumber(btn.textContent);
    });
})
operationBtns.forEach(btn => {
    btn.addEventListener('click',() => {
        chooseOperation(btn.textContent);
    });
})
equalsBtn.addEventListener('click',() => {
    calculate();
});
clearBtn.addEventListener('click',() => {
    clear();
});
backspaceBtn.addEventListener('click',() => {
    backspace();
});


//keyboard support
document.addEventListener('keydown', (e) => {
    if(e.key >= '0' && e.key <= '9')
    {
        appendNumber(e.key);
    }
    else if(e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/')
    {
        chooseOperation(e.key);
    }
    else if(e.key === '=' || e.key === 'Enter')
    {
        calculate();
    }
    else if(e.key === 'Escape')
    {
        clear();
    }
    else if(e.key === 'Backspace')
    {
        backspace();
    }
});

//dark/light theme toggle
function toggleTheme() {
    if (document.body.classList.contains('light')) {
        document.body.classList.remove('light');
        document.body.classList.add('dark');
        themeBtn.textContent = '☀️ Light';
    } else {
        document.body.classList.remove('dark');
        document.body.classList.add('light');
        themeBtn.textContent = '🌙 Dark';
    }
}
themeBtn.addEventListener('click', toggleTheme);

document.body.classList.add('dark');
themeBtn.textContent = '☀️ Light';
