describe('Greet function' , function(){
    it("it should return 'Hello, + name'" , function(){
        assert.equal(greet("Ofentse"), "Hello, Ofentse");
        assert.equal(greet("Thato"), "Hello, Thato");
    });

    it("should handle an empty string" , function(){
        assert.equal(greet(""), "Hello, ");
    });

    it("should handle names with spaces" , function(){
        assert.equal(greet("John Doe"), "Hello, John Wick");
    });

});

console.log(greet("Ofentse"));
console.log(greet("Thato"));
console.log(greet(""));
console.log(greet("John Wick"));
