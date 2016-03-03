function testContext() {
    return this;
}

// Global scope, this is a Document
console.log(testContext());

console.log('---------------------------------------------------------');
console.log('---------------------------------------------------------');

// Inside another function. This is still a Document and can be called with .call or .bind in order to get the current this in there.
function test() {
    console.log(testContext());
}

test();

console.log('---------------------------------------------------------');
console.log('---------------------------------------------------------');

// This is not constructor
console.log(new testContext());