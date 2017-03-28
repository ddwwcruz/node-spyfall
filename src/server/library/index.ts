import AutoIncrement from './auto-increment'

export default class Library<T> extends Map<number, T> {
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

    *search(iterator: (v: T, k: number) => boolean): IterableIterator<[number, T]> {
        for (let [key, value] of this) {
            if (iterator(value, key)) {
                yield [key, value]
            }
        }
    }

    *map<U>(iterator: (v: T, i: number) => U) {
        for (let [key, value] of this) {
            yield iterator(value, key)
        }
    }
}
