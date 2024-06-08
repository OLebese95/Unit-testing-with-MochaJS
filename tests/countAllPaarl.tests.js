describe('countAllPaarl function' , function(){
    it("it should filter data from a string and return Paarl registration numbers", function() {
        assert.equal(2, regNumbersForPaarl.length, 'There are 2 Paarl reg numbers.');
        assert.equal('CJ 678 543', regNumbersForPaarl[0]);
        assert.equal('CJ 67890', regNumbersForPaarl[1]);
    });

    it("it should return all registration numbers when all are from Paarl", function() {
        assert.equal(3, regNumbersForPaarl.length, 'There are 3 Paarl reg numbers.');
        assert.equal('CJ 12345', regNumbersForPaarl[0]);
        assert.equal('CJ 67890', regNumbersForPaarl[1]);
        assert.equal('CJ 54321', regNumbersForPaarl[2]);
    });
});

console.log(regNumbersForPaarl);