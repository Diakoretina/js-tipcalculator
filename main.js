let inputBill = document.querySelector(".input__bill");
let inputPeople = document.querySelector(".input__people");
let customInput = document.queryCommandIndeterm(".custom__input");
let tipMountOut = document.querySelector(".tip-mount-out");
let totalOut = document.querySelector(".total-out");
let buttonReset = document.getElementById(".reset-button");
let boxTip = document.querySelectorAll(".preset")



boxTip.forEach((element)=>{
    element.addEventListener("click", ()=>{
        calculatorBill(inputBill.value, inputPeople.value, totalOut)
        calculatorTip(inputBill.value, element, inputPeople.value, tipMountOut)
    })
})

function calculatorBill(bill, people, total){
    let resultBill = parseFloat(bill) / parseFloat(people);
    total.innerHMTL = resultBill.toFixed(2);
}

let tips = [5,10,15,25,50];

function calculatorTip(bill, boxTip, people, tipOut){
    for(i=0; i<tips.length; i++){
        if(boxTip.classList.contains(`${tips[i]}`)){
            let resultMount = (parseFloat(bill) / parseFloat(people)) * `${tips[i]}` /100;
            tipOut.innerHMTL = resultMount;
        }
    }
}