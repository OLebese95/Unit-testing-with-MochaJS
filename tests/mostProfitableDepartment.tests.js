describe('mostProfitableDepartment function', function() {
    it("should return 'outdoor' as the most profitable department for dataset 1", function() {
        assert.strictEqual(mostProfitableDepartment(salesData), 'outdoor');
    });

    it("should return 'electronics' as the most profitable department for dataset 2", function() {
        assert.strictEqual(mostProfitableDepartment(salesData2), 'electronics');
    });

    it("should return 'Thursday' as the most profitable day for dataset 1", function() {
        assert.strictEqual(mostProfitableDay(salesData), 'Thursday');
    });

    it("should return 'Wednesday' as the most profitable day for dataset 2", function() {
        assert.strictEqual(mostProfitableDay(salesData2), 'Wednesday');
    });
});

console.log(mostProfitableDepartment(salesData));
console.log(mostProfitableDepartment(salesData2));

console.log(mostProfitableDay(salesData));
console.log(mostProfitableDay(salesData2));