let numBtn=document.getElementsByClassName("num");
let displayElement=document.getElementById("inp");

let operator=document.getElementsByClassName("op");
let equalBtn=document.getElementById("eq");


let clearBtn=document.getElementById("clear");
let inverseBtn=document.getElementById("inverse");


let displayValue= 0;
let pendingValue=0;
let opp='';

function updateDisplay(clickObj) {
    refreshOpeStyle();
    let btnVal = clickObj.target.innerText;
    
    if (displayValue==0) 
        displayValue='';  
    
    displayValue += btnVal;
    displayElement.value=displayValue;
    
}
for (let i = 0; i < numBtn.length; i++) {
    numBtn[i].addEventListener('click', updateDisplay);
}

function opeCatch(clickObj) {
    refreshOpeStyle();
    if (opp=='') {
        opp=clickObj.target.innerText;
        if (pendingValue===0) {
            pendingValue += +displayValue;
            displayValue=0;
        }
    }
    else{
        switch (opp) {
            case '+':
                pendingValue += +displayElement.value;
                break;
                case '-':
                pendingValue = +pendingValue - (+displayElement.value);
                break;
            case 'X':
                pendingValue = +pendingValue * +displayElement.value;
                break; 
            case '÷':
                pendingValue= +pendingValue / +displayElement.value;
                break;
            default:
                break;
        }
    }
    opp=clickObj.target.innerText;
    displayValue=pendingValue;
    displayElement.value = displayValue;
    displayValue=0;
    
    
    // clickObj.target.style.backgroundColor="white";
    // clickObj.target.style.color="#FDA107";
    clickObj.target.className = 'op op-col2';

    console.log("displayValue: " + displayValue);
}
let ans;
equalBtn.onclick=()=>{
    refreshOpeStyle();
    switch (opp) {
        case '+':
            ans= +pendingValue + +displayElement.value;
            break;
        case '-':
            ans = +pendingValue + (+displayElement.value * -1);
            break;
        case 'X':
            ans= +pendingValue * +displayElement.value;
            break;
        case '÷':
            ans= (+pendingValue)/(+displayElement.value);
            break;
        default:
            break;
    }
        // console.log("displayElement "+displayValue);
        console.log(ans);
        displayElement.value=ans;
}

for (let i = 0; i < operator.length; i++) {
    operator[i].addEventListener('click', opeCatch);
}


function refreshOpeStyle() {
    // console.log('in refreshOpeStyle');
    for (let i = 0; i < operator.length; i++) {
        operator[i].setAttribute('class', 'op op-col1')
    }
}

inverseBtn.onclick=()=>{
    displayElement.value= +displayElement.value * (-1);
}


clearBtn.onclick=() => {
    displayValue=0;
    pendingValue=0;
    displayElement.value=displayValue;
    opp='';
}