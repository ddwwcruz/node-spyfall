import * as React from 'react'

import {
    mergeCss
} from '../helpers'

type CSSProp = React.CSSProperties

interface P {
    id?: string
    className?: string
    style?: CSSProp
}

export default class Row extends React.Component<P, {}> {
    protected styles(styles: CSSProp = {}): CSSProp {
        return mergeCss(styles, {
            clear: 'both'
        })
    }

    render() {
        const p = this.props

        return <div
            {...p}
            style={this.styles(p.style)}
        />
    }
}
