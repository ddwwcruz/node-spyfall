import { Store } from '../server/broadcaster'

type ModeType = 'naming' | 'waiting' | 'playing'

export const mode = new Store<ModeType>('naming')
