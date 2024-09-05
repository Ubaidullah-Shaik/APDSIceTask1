console.log("This new lecturer is shit!")

import http from "http"
//set the port
const PORT = 3000

const server = http.createServer((req,res)=> {
    res.end("Im a crying less now that my server is working")
})

server.listen(PORT)