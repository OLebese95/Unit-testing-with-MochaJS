var regNumbers = 'CL 900, CJ 678 543, CA 34567, CJ 67890, CN 7864';
var regNumbersForPaarl = allPaarl(regNumbers);


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
