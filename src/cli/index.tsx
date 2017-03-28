import * as React from 'react'
import { render } from 'react-dom'
import {
    AppBar
} from 'material-ui'
import {
    MuiThemeProvider,
    getMuiTheme,
    lightBaseTheme
} from 'material-ui/styles'
import * as reactTapPlugin from 'react-tap-event-plugin'

import './socket'

reactTapPlugin()

class App extends React.Component<{}, {}>{
    render() {
        return <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
            <div>
                <AppBar
                    title='Node Spyfall'
                    titleStyle={{
                        cursor: 'pointer'
                    }}
                />
                <div style={{
                    position: 'absolute',
                    top: 65,
                    bottom: 0,
                    width: '100%',
                    overflowY: 'auto'
                }}>
                </div>
            </div>
        </MuiThemeProvider>
    }
}

render(<App />, document.getElementById('app'))
