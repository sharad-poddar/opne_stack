const average = require('../utils/testing').average



// Describe blocks can be used for grouping tests into logical collections. 
// The test output of Jest also uses the name of the describe block:
describe('average', () => {

test('of one value is the value itself', () => {
    expect(average([1])).toBe(1)
})

test('of many is calculated right', () => {
    expect(average([1, 2, 3, 4, 5, 6])).toBe(3.5)
})

// dividng anything by zero is Nan
// Another thing to notice is that we wrote the tests in quite a compact way, 
// without assigning the output of the function being tested to a variable:
test('of empty array is zero', () => {
    expect(average([])).toBe(0)
})

// test('average',()=>{
//     expect(average([1,2,3].toBe(2)))
// })

})
