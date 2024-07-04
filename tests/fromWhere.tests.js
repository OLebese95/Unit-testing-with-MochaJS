describe('fromWhere function', function() {
    it("should return 'Bellville' for registration number starting with 'CY'", function() {
        assert.strictEqual(fromWhere('CY 567489'), 'Bellville');
    });

    it("should return 'Paarl' for registration number starting with 'CJ'", function() {
        assert.strictEqual(fromWhere('CJ 343502'), 'Paarl');
    });

    it("should return 'Cape Town' for registration number starting with 'CA'", function() {
        assert.strictEqual(fromWhere('CA 987504'), 'Cape Town');
    });

    it("should return 'Some other place!' for registration number starting with any other prefix", function() {
        assert.strictEqual(fromWhere('ZN 568593'), 'Some other place!');
    });
});

console.log(fromWhere('CY 567489')); 
console.log(fromWhere('CJ 343502'));
console.log(fromWhere('CA 987504'));
console.log(fromWhere('ZN 568593'));