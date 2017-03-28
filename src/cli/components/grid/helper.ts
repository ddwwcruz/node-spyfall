import * as $ from 'jquery'

import {
    Store
} from '../../../server/broadcaster'

export namespace BreakPoints {
    export const lg = 1200
    export const md = 992
    export const sm = 768
    export const xs = 576
}

interface WindowSize {
    height: number
    width: number
}

export const sizeStore = new Store<WindowSize>({
    height: 0,
    width: 0
})

$(() => {
    const w = $(window)
    w.resize(() => {
        const width = w.width()
        const height = w.height()
        sizeStore.value = { width, height }
    })
    w.resize()
})
