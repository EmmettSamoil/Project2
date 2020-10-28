// <script type="text/javascript" src="ezFunctionLib.js"></script>

//Get by ID functions

//Get number from ID / ID must be a string
function getElNum(ID) {
    return parseInt(document.getElementById(ID).value);
}

//Get Text from ID / ID must be a string
function getElText(ID) {
    return document.getElementById(ID).innerHTML;
}

//Get Element from ID / ID must be a string
function getEl(ID) {
    return document.getElementById(ID);
}

//Add Event Click Listener / ID must be a string / func will be your new function name
function clickEventListener(ID, func) {
    return document.getElementById(ID).addEventListener("click", func);
}
