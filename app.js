let amount = document.querySelector("#billamt");
let people = document.querySelector("#peopleamt");
let tipOption = document.querySelector("#serviceQual");
let sp1 = document.getElementById('span1');
let sp2 = document.getElementById('span2');
let sp3 = document.getElementById('span3');
let tipAmount = 0;
let flag = 1;
let btn = document.getElementById("calculate");
btn.addEventListener('click', (e) => {
    console.log(tipOption.value);
    e.preventDefault();
    if (amount.value == "" || tipOption.value == 0) {
        console.log(tipAmount.value);
        alert("Please Enter Bill Amount");
    } else {
        if (people.value == 1 || people.value == "") {

            tipAmount = amount.value * tipOption.value;
            tipAmount = tipAmount / 1;
            tipAmount = tipAmount.toFixed(2);
            console.log(tipAmount);
            sp1.innerText = "TIP AMOUNT"
            sp2.innerText = `$${tipAmount}`;
            sp1.style.display = "block";
            sp2.style.display = "block";
        } else {
            tipAmount = amount.value * tipOption.value;
            tipAmount = tipAmount / people.value;
            tipAmount = tipAmount.toFixed(2);
            sp1.innerText = "TIP AMOUNT"
            sp2.innerText = `$${tipAmount}`;
            sp3.innerText = "each";
            sp1.style.display = "block";
            sp2.style.display = "block";
            sp3.style.display = "block";
        }
    }

});