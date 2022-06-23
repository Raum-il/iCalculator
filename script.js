let numBtn=document.getElementsByClassName("num");
let displayElement=document.getElementById("inp");

let operator=document.getElementsByClassName("op");
let equalBtn=document.getElementById("eq");


let clearBtn=document.getElementById("clear");


let displayValue= 0;
let pendingValue=0;

function updateDisplay(clickObj) {
    let btnVal = clickObj.target.innerText;
    
    if (displayValue==0) 
        displayValue='';
    
    displayValue += btnVal;
    displayElement.value=displayValue;
    
}
for (let i = 0; i < numBtn.length; i++) {
    numBtn[i].addEventListener('click', updateDisplay);
}
let opp;

function opeCatch(clickObj) {
    opp=clickObj.target.innerText;

    console.log("displayValue: " + displayValue);
    // console.log("displayElement "+displayElement.value);
    // pendingValue += +displayValue;
    // displayValue=0;
    // console.log("pendingValue: "+pendingValue);
    if (pendingValue===0) {
        pendingValue += +displayValue;
        console.log('pending: ' + pendingValue);
    }
    else{
        switch (opp) {
            case '+':
                pendingValue += +displayValue;
                break;
            case '-':
                pendingValue = +pendingValue - (+displayValue);
                break;
            case 'X':
                pendingValue = +pendingValue * +displayValue;
                break; 
            case '÷':
                pendingValue= +pendingValue / +displayValue;
                break;
            default:
                break;
        }
                
    }

    displayElement.value=pendingValue
    displayValue=0;
    // opp=''
            
    // console.log("displayValue: "+displayValue);
    // console.log("displayElement "+displayElement.value);
    // console.log(pendingValue);
}
let ans;
equalBtn.onclick=()=>{
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





clearBtn.onclick=() => {
    displayValue=0;
    pendingValue=0;
    displayElement.value=displayValue;
    opp='';
}