
export function mergeObj<A, B>(argsa: A, argsb: B): A & B {
    var res = <A & B>argsa

    for (let a in argsb) {
        if (typeof argsb[a] == 'function') {
            (<B>res)[a] = (<any>argsb[a]).bind(res)
        } else {
            (<B>res)[a] = argsb[a]
        }
    }

    return res
}

export class ExtendedMap<K, V> extends Map<K, V> {
    get random(): [K, V] {
        var keys = [...this.keys()]
        var keyIndex = Math.floor(Math.random() * keys.length)
        var getKey = keys[keyIndex]

        return [getKey, this.get(getKey)]
    }
}
