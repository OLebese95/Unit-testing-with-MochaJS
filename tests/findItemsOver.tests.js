describe('findItemsOver function', function() {
    it("should return items with quantity over 20", function() {
        assert.deepEqual(findItemsOver(itemList, 20), results);
    });

    it("should return an empty array when no items have quantity over 20", function() {
        assert.deepEqual(findItemsOver(itemList2, 20), results2);
    });

    it("should return items with quantity over 20 including duplicates", function() {
        assert.deepEqual(findItemsOver(itemList3, 20), results3);
    });
});

console.log('findItemsOver tests passed!');