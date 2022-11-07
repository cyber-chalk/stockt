const http = require("node:http");
const fs = require("fs");
port = 3000;

const server = http.createServer((req, res) => {
	res.writeHead(200);
	fs.readFile("./index.html", "utf8", function (err, data) {
		if (err) {
			res.writeHead(404);
		} else res.write(data);
		res.end();
	});
});

server.listen(port, function (err) {
	if (err) console.log("something went wrong", err);
	else console.log("server is listning on", port);
});
