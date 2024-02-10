// real way of testing like this
const { favouriteBlog } = require('../utils/helper.js')


describe('testing of blogs array with diffrent number of blog',()=>{

    // this is the 'blog list' under 'testing an blogs list'
    test('total number of blog is 0 in blogs array',()=>{
        const blogs = []
        const expectOBJ = {}
        const result = favouriteBlog(blogs)
        console.log(result)
        expect(result).toEqual(expectOBJ)
    })

    test('total number of blog is 1 in blogs array',()=>{
        const blogs = [{
            _id: "5a422a851b54a676234d17f7",
            title: "React patterns",
            author: "Michael Chan",
            url: "https://reactpatterns.com/",
            likes: 7,
            __v: 0
        }]
        const expectOBJ = {
            title: 'React patterns',
            author: 'Michael Chan',
            likes: 7,
        }
        const result = favouriteBlog(blogs)
        console.log(result)
        expect(result).toEqual(expectOBJ)
    })

    test('total number of blog is 3 in blogs array',()=>{
        const blogs = [{
            _id: "5a422a851b54a676234d17f7",
            title: "React patterns",
            author: "Michael Chan",
            url: "https://reactpatterns.com/",
            likes: 7,
            __v: 0
          },
          {
            _id: "5a422aa71b54a676234d17f8",
            title: "Go To Statement Considered Harmful",
            author: "Edsger W. Dijkstra",
            url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
            likes: 5,
            __v: 0
          },
          {
            _id: "5a422b3a1b54a676234d17f9",
            title: "Canonical string reduction",
            author: "Edsger W. Dijkstra",
            url: "http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html",
            likes: 12,
            __v: 0
        }]
        const expectOBJ = {
            title: 'Canonical string reduction',
            author: 'Edsger W. Dijkstra',
            likes: 12,
        }
        const result = favouriteBlog(blogs)
        console.log(result)
        expect(result).toEqual(expectOBJ)
    })
})


// for values used toBe, toBeGreaterThen
// for obj used toEqual