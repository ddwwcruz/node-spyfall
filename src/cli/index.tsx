import * as React from 'react'
import { render } from 'react-dom'
import {
    MuiThemeProvider,
    getMuiTheme,
    lightBaseTheme
} from 'material-ui/styles'
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
