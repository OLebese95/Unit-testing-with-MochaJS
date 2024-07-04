describe('findItemsOver20 function', function() {
    it("should return items with quantity over 20", function() {
        assert.deepEqual(findItemsOver20(itemList), results);
    });

    it("should return an empty array when no items have quantity over 20", function() {
        assert.deepEqual(findItemsOver20(itemList2), results2);
    });

    it("should return items with quantity over 20 including duplicates", function() {
        assert.deepEqual(findItemsOver20(itemList3), results3);
    });
});

console.log('findItemsOver20 tests passed!');