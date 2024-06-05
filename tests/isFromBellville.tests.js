describe('isFromBellville function' , function(){
    it("it should return true is the vehicle registration is from Bellville (CY) and false if it is not" , function(){
        assert.equal(isFromBellville('CY 123'), true);
        assert.equal(isFromBellville('CJ 123'), false);
    });

});

console.log(isFromBellville('CY 123'));
console.log(isFromBellville('CJ 123'));