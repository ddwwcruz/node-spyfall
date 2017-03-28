export default class AutoIncrement {
    constructor(
        protected value = 0
    ) { }

    get currentValue() {
        return this.value
    }

    get nextValue() {
        return ++this.value
    }

    setNewCurrent(args: number) {
        if (args > this.value) {
            this.value = args
        }
    }
}
