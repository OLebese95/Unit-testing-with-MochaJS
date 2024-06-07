function allPaarl(regNumbersString) {
    var regNumbersArray = regNumbersString.split(', ');
    var regNumbersForPaarl = [];
    for (var i = 0; i < regNumbersArray.length; i++) {
        var theRegNumbers = regNumbersArray[i];
        if (theRegNumbers.startsWith('CJ')) {
            regNumbersForPaarl.push(theRegNumbers);
        }
    }
    return regNumbersForPaarl;
}
