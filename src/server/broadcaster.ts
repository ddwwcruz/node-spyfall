import AI from './library/auto-increment'

type Subscriber<T> = (args: T) => void

const broadcasterAI = new AI()

export class Broadcaster<T> {
    readonly id = broadcasterAI.nextValue
    protected ai = new AI()
    protected subscribers = new Map<number, Subscriber<T>>()

    subscribe(subscriber: Subscriber<T>) {
        var id = this.ai.nextValue
        this.subscribers.set(id, subscriber)
        return id
    }

    unsubscribe(id: number) {
        return this.subscribers.delete(id)
    }

    protected broadcast(args: T) {
        for (let [id, func] of this.subscribers) {
            func(args)
        }
    }
}

export class Store<T> extends Broadcaster<T> {
    constructor(
        protected storedValue: T = null
    ) {
        super()
    }

    get value(): T {
        return this.storedValue
    }

    set value(args: T) {
        this.storedValue = args
        this.broadcast(args)
    }
}

export class Action<T> extends Broadcaster<T> {
    trigger(args: T = null) {
        this.broadcast(args)
    }
}
