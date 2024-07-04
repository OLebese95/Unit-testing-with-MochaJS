describe('isWeekday function', function() {
    it("should return false for weekend days", function() {
        assert.equal(isWeekday('Saturday'), false);
        assert.equal(isWeekday('Sunday'), false);
    });

    it("should return true for weekdays", function() {
        assert.equal(isWeekday('Monday'), true);
        assert.equal(isWeekday('Tuesday'), true);
        assert.equal(isWeekday('Wednesday'), true);
        assert.equal(isWeekday('Thursday'), true);
        assert.equal(isWeekday('Friday'), true);
    });

    it("should handle invalid day names", function() {
        assert.equal(isWeekday('Funday'), false);
        assert.equal(isWeekday(''), false);
    });
});

console.log(isWeekday('Funday'));
console.log(isWeekday('Saturday'));
console.log(isWeekday('Sunday'));
console.log(isWeekday('Monday'));
console.log(isWeekday('Tuesday'));
console.log(isWeekday('Wednesday'));
console.log(isWeekday('Thursday'));
console.log(isWeekday('Friday'));