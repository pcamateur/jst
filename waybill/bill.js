function programming() {
    var originalValue = document.getElementById('inputa').value;
    var programmingValue = eval(originalValue) % 7;
    var eValue = originalValue + programmingValue;
    document.getElementById("inputa").innerHTML = eValue;
}
