import * as React from 'react'

import Component from '../'
import {
    mergeCss
} from '../helpers'
import {
    BreakPoints,
    sizeStore
} from './helper'

type CSS = React.CSSProperties

interface P {
    id?: string
    className?: string
    xs?: number
    sm?: number
    md?: number
    lg?: number
    xsOffset?: number
    smOffset?: number
    mdOffset?: number
    lgOffset?: number
    style?: CSS
}
interface S {
    width: number
    height: number
}

export default class Col extends Component<P, S> {
    componentWillMount() {
        this.state = sizeStore.value
        this.subscribe(sizeStore, args => {
            this.setState(args)
        })
    }

    get width() {
        const p = this.props
        const s = this.state
        var defXS = p.xs || 100
        var defSM = p.sm || defXS
        var defMD = p.md || defSM
        var defLG = p.lg || defMD
        var width: number

        if (s.width >= BreakPoints.lg) {
            width = p.lg || defLG
        } else if (s.width >= BreakPoints.md) {
            width = p.md || defMD
        } else if (s.width >= BreakPoints.sm) {
            width = p.sm || defSM
        } else {
            width = p.xs || defXS
        }

        return `${width}%`
    }

    get marginLeft() {
        const p = this.props
        const s = this.state
        var defXS = p.xsOffset || 0
        var defSM = p.smOffset || defXS
        var defMD = p.mdOffset || defSM
        var defLG = p.lgOffset || defMD
        var marginLeft: number

        if (s.width >= BreakPoints.lg) {
            marginLeft = p.lgOffset || defLG
        } else if (s.width >= BreakPoints.md) {
            marginLeft = p.mdOffset || defMD
        } else if (s.width >= BreakPoints.sm) {
            marginLeft = p.smOffset || defSM
        } else {
            marginLeft = p.xsOffset || defXS
        }

        return `${marginLeft}%`
    }

    protected styles(css: CSS): CSS {
        return mergeCss(css, {
            float: 'left',
            width: this.width,
            marginLeft: this.marginLeft
        })
    }

    render() {
        const p = this.props

        return <div
            id={p.id}
            className={p.className}
            style={this.styles(p.style)}
            children={p.children}
        />
    }
}
