// real way of testing like this
const { totalLikes } = require('../utils/helper.js')


describe('testing of blogs array with diffrent number of blog',()=>{

    // this is the 'blog list' under 'testing an blogs list'
    test('total number of blog is 0 in blogs array',()=>{
        const blogs = []
        const result = totalLikes(blogs)
        expect(result).toBe(0)
    })

    test('total number of blog is 1 in blogs array',()=>{
        const blogs = [{'likes': 12}]
        const result = totalLikes(blogs)
        expect(result).toBe(12)
    })

    // .only helps to run this only in this describe function
    test.only('total number of blog is 3 in blogs array',()=>{
        const blogs = [{'likes': 2},{'likes': 5},{'likes': 5}]
        const result = totalLikes(blogs)
        // toBeGreaterThan
        expect(result).toBeGreaterThan(10)
    })
})


// another way of run single test by
// npm test -- -t 'total number of blog is 1 in blogs array', it will only run single 
// descibe of specific test