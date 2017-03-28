
export function mergeObj<A, B>(argsa: A, argsb: B): A & B {
    var res = <A & B>{}

    for (let a in argsa) {
        if (typeof argsa[a] == 'function') {
            (<A>res)[a] = (<any>argsa[a]).bind(res)
        } else {
            (<A>res)[a] = argsa[a]
        }
    }

    for (let a in argsb) {
        if (typeof argsb[a] == 'function') {
            (<B>res)[a] = (<any>argsb[a]).bind(res)
        } else {
            (<B>res)[a] = argsb[a]
        }
    }

    return res
}
