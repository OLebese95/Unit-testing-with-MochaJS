describe('regCheck function', function() {
    it("it should return true if the registration number ends with the specified province code and false if it does not", function() {
        assert.equal(regCheck('DC 55 YU GP', 'GP'), true);
        assert.equal(regCheck('DC 55 YU GP', 'EC'), false);
        
        assert.equal(regCheck('5566 L', 'L'), true);
        assert.equal(regCheck('5566 L', 'M'), false);
        
        assert.equal(regCheck('ERT 123 EC', 'EC'), true);
        assert.equal(regCheck('ERT 123 EC', 'GP'), false);
        
        assert.equal(regCheck('FGT 123 MP', 'MP'), true);
        assert.equal(regCheck('FGT 123 MM', 'MP'), false);
    });

    it("it should return true when the registration number is exactly the same as the province code", function() {
        assert.equal(regCheck('GP', 'GP'), true);
        assert.equal(regCheck('EC', 'EC'), true);
    });

    it("it should return false when the province code is an empty string", function() {
        assert.equal(regCheck('DC 55 YU GP', ''), false);
        assert.equal(regCheck('5566 L', ''), false);
    });

    it("it should return false when the registration number is an empty string", function() {
        assert.equal(regCheck('', 'GP'), false);
        assert.equal(regCheck('', 'EC'), false);
    });
});

console.log(isGP);
console.log(isMP);
console.log(isBellville);
console.log(isDurban);