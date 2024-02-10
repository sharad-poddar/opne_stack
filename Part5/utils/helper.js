// recieved an array of blog post and always return 1
const dummy =(blogs)=>{
    console.log(blogs)
    return 1
}

// recieved an array of blog post and always return sum of total likes in all blog post
const totalLikes = (blogs)=>{

    var sum = 0;
    // here reducer will not as much useful
    blogs.forEach(({likes}) => {
        sum+=likes    
    });

    return sum;
}

// favourite blogs
const favouriteBlog = (blogs)=>{
    
    if(blogs.length ==0){
        return {}
    }

    var maxLikes = 0
    var id
    blogs.forEach(({ likes },index)=>{
        if(likes > maxLikes){
            maxLikes = likes
            id = index
        }
    })

    return {
        title: blogs[id].title,
        author: blogs[id].author,
        likes: blogs[id].likes
    }
}


module.exports = { dummy, totalLikes, favouriteBlog }