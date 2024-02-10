const { dummy } = require('../utils/helper.js')

describe('testing an blogs list',()=>{

    // this is the 'blog list' under 'testing an blogs list'
    test('blogs list',()=>{
        const blogs = []
        const result = dummy(blogs)
        expect(result).toBe(1)
    })
})