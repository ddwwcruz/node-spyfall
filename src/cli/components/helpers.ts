import {
    CSSProperties
} from 'react'

export function mergeCss(...cssList: CSSProperties[]): CSSProperties {
    var ret: CSSProperties = {}

    for (let css of cssList) {
        for (let name in css) {
            ret[name] = css[name]
        }
    }

    return ret
}
