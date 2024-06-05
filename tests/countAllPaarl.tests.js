describe('countAllPaarl function' , function(){
    it("it should filter data from a string and return Paarl registration numbers" , function(){
        assert.equal(2, regNumbersForPaarl.length, 'There are 2 Paarl reg numbers.');
        assert.equal('CJ 678 543', regNumbersForPaarl[0]);
        assert.equal('CJ 67890', regNumbersForPaarl[1]);
    });

});


console.log(regNumbersForPaarl);