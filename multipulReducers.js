const redux = require('redux');
const reduxLogger = require('redux-logger');
const createStore = redux.createStore;
const BUY_CAKE = 'BUY_CAKE';
const BUY_ICECREAM = 'BUY_ICECREAM';
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;
const logger = reduxLogger.createLogger();

function buyCake() {
    return {
        type:BUY_CAKE,
        info:'first redux action'
    }
}

function buyIceCream() {
    return {
        type:BUY_ICECREAM,
        info:'first redux action'
    }
}

const initialCakeState = {
    numOfCakes : 10
}
const initialIceCreamState = {
    numOfIceCreams : 20
}
const cakeReducer = (state = initialCakeState, action) => {
    switch(action.type) {
        case BUY_CAKE : return {
            ...state,
            numOfCakes: state.numOfCakes - 1
        }       
        default : return state
    }
} 

const iceCreamReducer = (state = initialIceCreamState, action) => {
    switch(action.type) { 
        case BUY_ICECREAM : return {
            ...state,
            numOfIceCreams: state.numOfIceCreams - 1
        }
        default : return state
    }
} 
const rootReducer = combineReducers({
    cake:cakeReducer,
    iceCream:iceCreamReducer
})
const store = createStore(rootReducer,applyMiddleware(logger));
console.log(`Initial State`, store.getState());
//unsubscribe = store.subscribe(() => console.log(`Update state`, store.getState()))
unsubscribe = store.subscribe(() => {})
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
unsubscribe();