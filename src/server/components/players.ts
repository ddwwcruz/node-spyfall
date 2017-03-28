import * as SocketIO from 'socket.io'
import { ExtendedMap } from '../helpers'
import Player from './player'

type Socket = SocketIO.Socket

class PlayerMap extends ExtendedMap<string, Player> {
    addPlayer(socket: Socket) {
        this.set(socket.id, new Player(socket))
    }

    setName(id: string, name: string) {
        var searches = this.search(e => (
            e.id != id
        ))

        for (let [id, player] of searches) {
            player.setTeammateName(id, name)
        }
    }
}

export default new PlayerMap()
