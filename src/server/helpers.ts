
export function mergeObj<A, B, C, D, E>(
    argsa: A,
    argsb: B = null,
    argsc: C = null,
    argsd: D = null,
    argse: E = null
): A & B & C & D & E {
    var res = <A & B & C & D & E>{}

    for (let a in argsa) {
        (<A>res)[a] = argsa[a]
    }

    if (argsb) {
        for (let a in argsb) {
            (<B>res)[a] = argsb[a]
        }
    }

    if (argsc) {
        for (let a in argsc) {
            (<C>res)[a] = argsc[a]
        }
    }

    if (argsd) {
        for (let a in argsd) {
            (<D>res)[a] = argsd[a]
        }
    }

    if (argse) {
        for (let a in argse) {
            (<E>res)[a] = argse[a]
        }
    }

    return res
}
