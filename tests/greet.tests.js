describe('Greet function' , function(){
    it("it should return 'Hello, + name'" , function(){
        assert.equal(greet("Ofentse"), "Hello, Ofentse");
        assert.equal(greet("Thato"), "Hello, Thato");
    });

});

console.log(greet("Ofentse"));
console.log(greet("Thato"));