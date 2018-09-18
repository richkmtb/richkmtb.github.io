const oneBtn = document.getElementById("calc-one");
const twoBtn = document.getElementById("calc-two");
const threeBtn = document.getElementById("calc-three");
const fourBtn = document.getElementById("calc-four");
const fiveBtn = document.getElementById("calc-five");
const sixBtn = document.getElementById("calc-six");
const sevenBtn = document.getElementById("calc-seven");
const eightBtn = document.getElementById("calc-eight");
const nineBtn = document.getElementById("calc-nine");
const zeroBtn = document.getElementById("calc-zero");

const decimalBtn = document.getElementById("calc-decimal");
const clearBtn = document.getElementById("calc-clear");
const backspaceBtn = document.getElementById("calc-backspace");
const displayValElement = document.getElementById("calc-display-val");

var displayVal = "0";
var pendingVal;
var evalStringArray = [];

const calcNumBtns = document.getElementsByClassName("calc-btn-num");
const calcOperatorBtns = document.getElementsByClassName("calc-btn-operator");

const updateDisplayVal = (clickObj) => {
	const btnText = clickObj.target.innerText;

	if(displayVal === "0") 
		displayVal = "";

	displayVal += btnText;
	displayValElement.innerText = displayVal;
}

const performOperation = (clickObj) => {
	let operator = clickObj.target.innerText;

	switch (operator) {
		case '+':
			pendingVal = displayVal;
			displayVal = "0";
			displayValElement.innerText = displayVal;
			evalStringArray.push(pendingVal);
			evalStringArray.push("+");
			break;

		case '-':
			pendingVal = displayVal;
			displayVal = "0";
			displayValElement.innerText = displayVal;
			evalStringArray.push(pendingVal);
			evalStringArray.push("-");
			break;

		case 'x':
			pendingVal = displayVal;
			displayVal = "0";
			displayValElement.innerText = displayVal;
			evalStringArray.push(pendingVal);
			evalStringArray.push("*");
			break;

		case '÷':
			pendingVal = displayVal;
			displayVal = "0";
			displayValElement.innerText = displayVal;
			evalStringArray.push(pendingVal);
			evalStringArray.push("/");
			break;

		case '=':
			evalStringArray.push(displayVal);
			let evaluation = eval(evalStringArray.join(' '));
			displayVal = evaluation + ' ';
			displayValElement.innerText = displayVal;
			evalStringArray = [];
			break;

		default:
			break;
	}
}

for(let i = 0;i < calcNumBtns.length; i++) {
	calcNumBtns[i].addEventListener("click", updateDisplayVal, false);
}


for(let i = 0;i < calcOperatorBtns.length; i++) {
	calcOperatorBtns[i].addEventListener("click", performOperation, false);
}



const backSpaceFunc = () => {
	let lengthOfDisplayVal = displayVal.length;
	displayVal = displayVal.slice(0, lengthOfDisplayVal - 1);
	if(displayVal === '')
		displayVal = "0";
	displayValElement.innerText = displayVal;

}
const clearBtnFunc = () => {
	displayVal = "0";
	pendingVal = undefined;
	evalStringArray = [];
	displayValElement.innerHTML = displayVal;
}
const decimalBtnFunc = () => {
	if(!displayVal.includes('.'))
		displayVal += '.';
	displayValElement.innerText = displayVal;
}

clearBtn.addEventListener("click", clearBtnFunc);
backspaceBtn.addEventListener("click", backSpaceFunc);
decimalBtn.addEventListener("click", decimalBtnFunc);
