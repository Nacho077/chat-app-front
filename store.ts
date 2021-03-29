import { createStore, applyMiddleware } from 'redux'
import Reducers from './redux/reducers/reducers'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

const Store = createStore(
    Reducers,
    composeWithDevTools(applyMiddleware(thunk))
)

export type storeType = ReturnType<typeof Reducers>

export default Store