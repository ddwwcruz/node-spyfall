import * as SocketIO from 'socket.io'
import { ExtendedMap } from '../helpers'
import Player from './player'

type Socket = SocketIO.Socket

class PlayerMap extends ExtendedMap<string, Player> {
    addPlayer(socket: Socket) {
        this.set(socket.id, new Player(socket))
    }
}

export default new PlayerMap()
