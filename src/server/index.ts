import { readFile } from 'fs'
import * as express from 'express'
import * as SocketIO from 'socket.io'

const app = express()
const io = SocketIO()

app.get('/', (req, res) => {
    readFile('./index.html', 'utf-8', (err, data) => {
        if (err) {
            res.status(500).end('Error')
        } else {
            res.status(200).end(data)
        }
    })
})

app.listen(8080, () => {
    console.log('App listening on port 8080')
})
