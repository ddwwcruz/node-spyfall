import AI from '../../server/library/auto-increment'

type Subscriber<T> = (args: T) => void

const broadcasterAI = new AI()

export default class Broadcaster<T> {
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
