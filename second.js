const http=require("http");
const server=http.createServer((req,resp)=>
{
    resp.writeHead(200,{"content-type":"text/html"});
    resp.write("<h1>Wow welcom shiv ji node server </h1>");
    resp.write("<h2>Jai ho shankar nath ki jai ho</h2>");
    resp.write("<button>Shiv</button>");
    resp.end("ok by by");
}
);
server.listen(9898);