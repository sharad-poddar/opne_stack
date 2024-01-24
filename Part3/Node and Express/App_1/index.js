//1. getting built in web-server
const http = require('http');

//2. creating the server and sending request thorug even-handler
//3. request to be of content which is text and plain
//4. res.end means the data we will get or data send by server
//5. 200 is the server status of sending data
// const app = http.createServer((req, res)=>{
//     res.writeHead(200, {'content-type': 'text/plain'})
//     res.end('hello world')
// })



// taking notes data
let notes = [
    {
      id: 1,
      content: "HTML is easy",
      important: true
    },
    {
      id: 2,
      content: "Browser can execute only JavaScript",
      important: false
    },
    {
      id: 3,
      content: "GET and POST are the most important methods of HTTP protocol",
      important: true
    }
]


// always the data is send in JSON-string format
const app = http.createServer((req, res)=>{
    res.writeHead(200, {'content-type': 'application/json'});
    res.end(JSON.stringify(notes));
})



//6. server is running on this port
const PORT = 3000
app.listen(PORT);
console.log(`server is running at ${PORT}`);

