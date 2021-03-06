import {createStore,combineReducers,applyMiddleware,compose} from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { ingredientReducer} from '../reducers/ingredientsReducer';
import {ordersReducer} from '../reducers/ordersReducer'
import {authReducer} from '../reducers/authReducer'


const rootReducer=combineReducers({

    ingredient:ingredientReducer,
    orders:ordersReducer,
    auth:authReducer
})


const composeEnhancers =process.env.NODE_ENV==="development" ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ :null || compose
export const store=createStore(rootReducer,composeEnhancers(applyMiddleware(logger,thunk)))


