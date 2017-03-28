import { readFile, readFileSync } from 'fs'
import { createServer } from 'http'
import * as socketIO from 'socket.io'

const INDEX_HTML = readFileSync('./index.html', 'utf-8')
const app = createServer((req, res) => {
    if (req.url == '/') {
        res.end(INDEX_HTML)
    } else if (req.url == '/js/index.js') {
        readFile('./build/cli/index.js', 'utf-8', (err, data) => {
            res.end(data)
        })
    } else if (req.url == '/js/index.js.map') {
        readFile('./build/cli/index.js.map', 'utf-8', (err, data) => {
            res.end(data)
        })
    } else {
        res.writeHead(404)
        res.end()
    }
})
const io = socketIO(app)

app.listen(8080, () => {
    console.log('App is listening')
})
