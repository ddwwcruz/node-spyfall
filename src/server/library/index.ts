import { ExtendedMap } from '../helpers'
import AutoIncrement from './auto-increment'

export default class Library<T> extends ExtendedMap<number, T> {
    readonly ai = new AutoIncrement()

    add(value: T, key = this.ai.nextValue) {
        this.set(key, value)
        return key
    }

    set(key: number, value: T) {
        this.ai.setNewCurrent(key)
        super.set(key, value)
        return this
    }
}
