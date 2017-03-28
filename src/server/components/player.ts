import * as SocketIO from 'socket.io'

type Socket = SocketIO.Socket

export default class Player {
    private storedName: string = null
    constructor(
        private socket: Socket
    ) { }

    get name() {
        return this.storedName
    }

    set name(args: string) {
        this.storedName = args
    }
}
