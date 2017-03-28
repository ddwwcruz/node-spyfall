import * as SocketIO from 'socket.io'

type Socket = SocketIO.Socket

export default class Player {
    constructor(
        private socket: Socket,
        private readonly id = socket.id,
        private storedName = socket.id
    ) {
        this.askName()

        socket.on('give name', (name: string) => {
            this.name = name
        })
    }

    get name() {
        return this.storedName
    }

    set name(args: string) {
        this.storedName = args
    }

    private askName() {
        this.socket.emit('ask name')
    }
}
