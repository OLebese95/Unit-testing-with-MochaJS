describe('yearsAgo function', function() {
    it("should return the correct number of years ago for a given year", function() {
        const currentYear = new Date().getFullYear();
        assert.equal(yearsAgo(1976), currentYear - 1976);
        assert.equal(yearsAgo(2000), currentYear - 2000);
    });

    it("should handle the current year correctly", function() {
        const currentYear = new Date().getFullYear();
        assert.equal(yearsAgo(currentYear), 0);
    });

    it("should handle future years", function() {
        const currentYear = new Date().getFullYear();
        assert.equal(yearsAgo(currentYear + 10), -10);
    });

    it("should handle negative years", function() {
        const currentYear = new Date().getFullYear();
        assert.equal(yearsAgo(currentYear - 10), 10);
    });
})

console.log(yearsAgo(1976));
console.log(yearsAgo(2000));
console.log(yearsAgo(2022));
console.log(yearsAgo(2023));
console.log(yearsAgo(2024));
console.log(yearsAgo(2025));
console.log(yearsAgo(2026));
console.log(yearsAgo(2027));
console.log(yearsAgo(2028));
console.log(yearsAgo(2029));
console.log(yearsAgo(2030));