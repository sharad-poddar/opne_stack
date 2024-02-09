const reverse = require('../utils/testing.js').reverse;

test('reverse of a', () => {
    const result = reverse('a')
    expect(result).toBe('a')
})
  
test('reverse of react', () => {
    const result = reverse('react')
    expect(result).toBe('tcaer')
})
  
test('reverse of releveler', () => {
    const result = reverse('releveler')
    expect(result).toBe('releveler')
})

test('reverse of releveler', () => {
    const result = reverse('hi i am sharad')
    console.log(result);
    expect(result).toBe('darahs ma i ih')
})


// The ESLint configuration we added to the project in the previous part complains 
// about the test and expect commands in our test file since the configuration does 
// not allow globals. Let's get rid of the complaints by adding "jest": true to the 
// env property in the .eslintrc.js file.

