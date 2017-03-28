import * as SocketIO from 'socket.io'

type Socket = SocketIO.Socket

export default class Player {
    constructor(
        private socket: Socket,
        private storedName = socket.id
    ) { }

    get name() {
        return this.storedName
    }

    set name(args: string) {
        this.storedName = args
    }
}
