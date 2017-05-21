import React from 'react'
import {render} from 'react-dom'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import ContactUs from './components/contactUs'
import reducers from './reducers'
import thunk from 'redux-thunk'
import {createLogger} from 'redux-logger'
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {cyan500} from 'material-ui/styles/colors'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import createSagaMiddleware from 'redux-saga'
import sagas from './sagas'
import {submit} from './actions'

const middleware = [thunk]
if (process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger())
}
const sagaMiddleware = createSagaMiddleware()
middleware.push(sagaMiddleware)
const store = createStore(reducers, applyMiddleware(...middleware))
sagaMiddleware.run(sagas)

const muiTheme = getMuiTheme({
    palette: {
        textColor: cyan500,
    }
})

const Index = () => (
    <Provider store={store}>
        <MuiThemeProvider muiTheme={muiTheme}>
            <ContactUs/>
        </MuiThemeProvider>
    </Provider>
)

export default Index
