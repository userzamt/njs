/*
	author: ilya
*/

const args = require("minimist")(process.argv.slice(2))

const http = require("http")
const hostname = "127.0.0.1"
const port = 10207
let   strRes = "Hello, world!! I`am server NodeJS\n"
const server = http.createServer((req, res) => {
	res.statusCode = 200
	res.setHeader("Content-Type", "text/plain")
	res.end(strRes)
})

server.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}`)
})
