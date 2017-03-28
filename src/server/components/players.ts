import * as SocketIO from 'socket.io'
import { ExtendedMap } from '../helpers'
import Player from './player'

type Socket = SocketIO.Socket

class PlayerMap extends ExtendedMap<string, Player> {
}

export default new PlayerMap()
