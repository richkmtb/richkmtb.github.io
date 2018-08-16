var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.classList.add("listItem");
	li.addEventListener("click", markListItem)
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";

	//references css style for line through
	function markListItem() {
		li.classList.toggle("done");
	}
	// creates button
	var btnDel = document.createElement("button");
	btnDel.classList.add("deleteBtn");
	btnDel.appendChild(document.createTextNode("REMOVE"));
	li.appendChild(btnDel);
	btnDel.addEventListener("click", deleteListItem);

	function deleteListItem() {
		li.classList.add("delete");
	}
}

function addListAfterClick() {
	if(inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeyPress(event) {
	if(inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeyPress);
