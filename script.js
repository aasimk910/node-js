// console.log("nice");

// const http = require('http');
// const fs = require('fs')

// const server = http.createServer((request, response) => {
//     console.log(request.url)
//     console.log(request.method)
//     switch(request.method){
//         case'about':
//     fs.readFile('./index.html', (error,
//         data)=>{
//             response.end(data)
//         });
//         break
// //     )
// //     response.end('my first node server');
//     }
// });


// server.listen(8080, () => {
//     console.log("Server is running on port 8080");
// });

const http = require("http");
const fs = require("fs");

const server = http.createServer((request, response) => {
  console.log(request.url);
  console.log(request.method);
  switch (request.url) {
    case "/":
      fs.readFile("./index.html", (error, data) => {
        response.end(data);
      });
      break;

    case "/about":
      fs.readFile("./about.html", (error, data) => {
        response.end(data);
      });
      break;
    default: response.end('404 paage not found')
    break;
  }
});

server.listen(4000, "localhost", () => {
  console.log("node server has started");
});