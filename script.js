const resultEl = document.getElementById("result")
const lengthEl = document.getElementById("len")
const lowercaseEl = document.getElementById("lowercase")
const uppercaseEl = document.getElementById("uppercase")
const numbersEl = document.getElementById("numbers")
const symbolsEl = document.getElementById("symbols")
const submitEl = document.getElementById("submit")
const clipboardEl = document.getElementById("clipboard")

const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
}

lengthEl.value = 10;
lowercaseEl.checked = 1;
uppercaseEl.checked = 1;
numbersEl.checked = 1;
symbolsEl.checked = 1;

// const funcName = ["lower", "upper", "number", "symbol"];

submitEl.addEventListener("click", generatePassword);

function generatePassword(){
    let nums;
    let text = '';
    let pwdlen = lengthEl.value;
    var x;

    const funcName = [];
    if(lowercaseEl.checked){
        funcName.push("lower");
    }
    if(uppercaseEl.checked){
        funcName.push("upper");
    }
    if(numbersEl.checked){
        funcName.push("number");
    }
    if(symbolsEl.checked){
        funcName.push("symbol");
    }

    let count = lowercaseEl.checked + uppercaseEl.checked + numbersEl.checked + symbolsEl.checked;
    switch(count){
        case 1 : nums = [0]; break;
        case 2 : nums = [0,1]; break;
        case 3 : nums = [0,1,2]; break;
        case 4 : nums = [0,1,2,3]; break;
        default : nums = [];
    }

    if(count > pwdlen){
        var p = document.getElementById("demo");
        p.innerHTML = "baka!!";
        p.addEventListener("mouseover", baka);

        function baka(){
            if(count > pwdlen){
                alert("length of password < number of distinct required elements \nhow???");
                p.innerHTML = "";
            }
       }
    }

    // console.log(nums);
    // console.log(funcName);
    // console.log(lengthEl.value)

    for (x = 0; x < count; x++) {
        let index = Math.floor(Math.random() * (nums.length));
        let num = nums[(index)];
        // console.log(num);
        // console.log(funcName[num]);
        nums.splice(index, 1);
        // console.log(nums);

        text += randomFunc[funcName[num]].call();
        // console.log(text);
    }

    for(x; x < pwdlen; x++){
        let index = Math.floor(Math.random() * funcName.length);
        text += randomFunc[funcName[index]].call();
    }
    console.log(text);  

    resultEl.value = text;
    return;
}


clipboardEl.addEventListener("click", copy);
function copy(){
    document.execCommand("copy");
}


function getRandomLower(){
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper(){
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber(){
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol(){
    let symbols = '!@#$%^&*(){}[]\\|<>,./?';
    let index = Math.floor(Math.random() * symbols.length);
    return symbols[index];
}