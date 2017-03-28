import * as React from 'react'
import { render } from 'react-dom'
import {
    MuiThemeProvider,
    getMuiTheme,
    lightBaseTheme
} from 'material-ui/styles'
import * as io from 'socket.io-client'
import * as reactTapPlugin from 'react-tap-event-plugin'

reactTapPlugin()

class App extends React.Component<{}, {}>{
    render() {
        return <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
            <div>
                <h1>Node Spyfall</h1>
            </div>
        </MuiThemeProvider>
    }
}

render(<App />, document.getElementById('app'))

const socket = io()
socket.on('connect', () => {
    console.log('We connected')
})
