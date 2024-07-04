describe('totalPhoneBill function', function() {
    it("should calculate the total bill for calls and SMSs", function() {
        assert.strictEqual(totalPhoneBill('call, sms, call, sms, sms'), 'R7.45');
    });

    it("should calculate the total bill for calls and SMSs", function() {
        assert.strictEqual(totalPhoneBill('call, sms'), 'R3.40');
    });

    it("should calculate the total bill for only SMSs", function() {
        assert.strictEqual(totalPhoneBill('sms, sms'), 'R1.30');
    });

});

console.log(totalPhoneBill('call, sms, call, sms, sms'));
console.log(totalPhoneBill('call, sms'));
console.log(totalPhoneBill('sms, sms'));

