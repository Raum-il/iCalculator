let numBtn=document.getElementsByClassName("num");
let displayElement=document.getElementById("inp");

let clearBtn=document.getElementById("clear");


let displayValue= 0;
let pendingValue=0;

function updateDisplay(clickObj) {
    let btnVal = clickObj.target.innerText;
    
    if (displayValue==0) 
        displayValue='';
    
    displayValue += btnVal;
    displayElement.value=displayValue;
    
    // console.log(displayValue);
}
for (let i = 0; i < numBtn.length; i++) {
    numBtn[i].addEventListener('click', updateDisplay);
}

clearBtn.onclick=() => {
    displayValue=0;
    pendingValue=0;
    displayElement.value=displayValue;
}