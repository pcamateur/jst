// function programming() {
//     var originalValue = document.getElementById('inputa').value;
//     var programmingValue = eval(originalValue) % 7;
//     var eValue = originalValue + programmingValue;
//     document.getElementById("inputa").innerHTML = eValue;
// }

var originalValue;
originalValue = document.getElementById('inputa').value;

var programmingValue;
programmingValue = originalValue % 7;

var eValue;
eValue = originalValue + programmingValue;

function programming() {
    document.getElementById('values').value = eValue;
}