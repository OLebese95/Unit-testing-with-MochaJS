describe('countRegNumber' , function(){
    it("it should return the number of registration numbers in the string", function() {
        assert.equal(countRegNumber('CA 182736, CY 523519, CJ 812328'), 3);
        assert.equal(countRegNumber('CA 182736'), 1);
    });

    it("it should return 0 when the input string is empty", function() {
        assert.equal(countRegNumber(''), 0);
    });

    it("it should return the correct number of registration numbers when there are multiple commas", function() {
        assert.equal(countRegNumber('CA 182736,, CY 523519, , CJ 812328'), 4);
    });
});

console.log(regCount1);
console.log(regCount2);