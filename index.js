const redux = require("redux");
// import redux from 'redux'
const createStore = redux.createStore;
const combineReducre = redux.combineReducers;
const reduxLogger = require("redux-logger");
const logger = reduxLogger.createLogger();
const appltMiddleware = redux.applyMiddleware;
const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";

//shop keeper of cake
function buycake() {
  return {
    type: BUY_CAKE,
    // info: "First redux action",
  };
}

function buyIceCream() {
  return {
    type: BUY_ICECREAM,
  };
}

// (previousState, action) => newState.

// const initialState = {
//   numOfcake: 10,
//   numOfIceCreams: 20,
// };

const initialCakeState = {
  numOfCakes: 10,
};

const initialIceCreamState = {
  numOfIceCreams: 20,
};

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case BUY_CAKE:
//       return {
//         ...state,
//         numOfcake: state.numOfcake - 1,
//       };

//     case BUY_ICECREAM:
//       return {
//         ...state,
//         numOfIceCreams: state.numOfIceCreams - 1,
//       };

//     default:
//       return state;
//   }
// };

const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfcake: state.numOfCakes - 1,
      };

    default:
      return state;
  }
};

const iceCreamreducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams - 1,
      };

    default:
      return state;
  }
};

const rootReducer = combineReducre({
  cake: cakeReducer,
  iceCream: iceCreamreducer,
});
const store = createStore(rootReducer, appltMiddleware(logger));
console.log("Initial state", store.getState());
const unsubscribe = store.subscribe(() =>{});
// store.dispatch(buycake());
// store.dispatch(buycake());
store.dispatch(buycake());
store.dispatch(buyIceCream());
// store.dispatch(buyIceCream());
unsubscribe();
