const http = require("http");

const data = {
  message: "hello",
};

const server = http.createServer((request, response) => {
  if (request.url === "/hello" && request.method === "GET") {
    response.writeHead(200, { "Content-Type": "application/json" });
    response.end(JSON.stringify(data));
  } else {
    response.writeHead(404, { "Content-Type": "application/text" });
    response.end("Not found");
  }
});

server.listen(3000, () => {
  console.log("Listening on port 3000");
});
