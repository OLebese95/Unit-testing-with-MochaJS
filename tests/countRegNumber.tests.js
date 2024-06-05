describe('countRegNumber' , function(){
    it("it should return the number of registration numbers in the string" , function(){
        assert.equal(countRegNumber('CA 182736, CY 523519, CJ 812328'), 3);
        assert.equal(countRegNumber('CA 182736'), 1);
    });

});


console.log(regCount1);
console.log(regCount2);
