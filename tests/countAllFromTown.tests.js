describe('countAllFromTown function', function() {
    it("should return the correct count of registration numbers from Stellies (CL)", function() {
        assert.equal(countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341', 'CL'), 3);
    });

    it("should return the correct count of registration numbers from Kuilsriver (CF)", function() {
        assert.equal(countAllFromTown('CJ 124,CY 567,CL 345, CF 456, CL 341', 'CF'), 1);
    });

    it("should return 0 when there are no matching registration numbers", function() {
        assert.equal(countAllFromTown('CJ 124,CY 567,CL 345, CF 456, CL 341', 'CA'), 0);
    });
});




console.log(countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL'));
console.log(countAllFromTown('CJ 124,CY 567,CL 345, CF 456, CL 341','CF'));