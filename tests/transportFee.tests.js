describe('transportFee function', function() {
    it("should return 'R20' for morning shift", function() {
        assert.strictEqual(transportFee('morning'), 'R20');
    });

    it("should return 'R10' for afternoon shift", function() {
        assert.strictEqual(transportFee('afternoon'), 'R10');
    });

    it("should return 'free' for nightshift", function() {
        assert.strictEqual(transportFee('nightshift'), 'free');
    });

    it("should return 'Invalid shift' for unknown shift", function() {
        assert.strictEqual(transportFee('evening'), 'Invalid shift');
    });

});


console.log(transportFee('morning'));
console.log(transportFee('afternoon'));
console.log(transportFee('nightshift'));