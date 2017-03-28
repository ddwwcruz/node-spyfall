
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
