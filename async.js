const redux = require("redux");
const createstore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;
const thunkMiddleware = require("redux-thunk").default;
const axios = require("axios");

const initialState = {
  loading: false,
  user: [],
  error: "",
};

const FETCH_USER_REQUEST = "FETCH_USER_REQUEST";
const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
const FETCH_USER_FALIURE = "FETCH_USER_FALIUR";

const fetchUsersRequest = () => {
  return {
    type: FETCH_USER_REQUEST,
  };
};

const fetchUsersSuccess = (users) => {
  return {
    type: FETCH_USER_SUCCESS,
    payload: users,
  };
};

const fetchUsersFailur = (error) => {
  return {
    type: FETCH_USER_FALIURE,
    payload: error,
  };
};

const reducer = (state = initialState, action) => {
  switch ((action.type)) {
    case FETCH_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USER_SUCCESS:
      return {
        location: false,
        users: action.payload,
        error: "",
      };
    case FETCH_USER_FALIURE:
      return {
        loading: false,
        users: [],
        error: action.payload,
      };
  }
};

const fetchUsres = () =>{
    return function(dispatch){
        dispatch(fetchUsersRequest())
        axios.get('https://jsonplaceholder.typicode.com/users') 
        .then(responce => {
            users = responce.data.map(user => user.id)
            dispatch(fetchUsersSuccess(users))
        })
        .catch(erroe =>{
            dispatch(fetchUsersFailur(error.message))
        })
    }
}

const store = createstore(reducer, applyMiddleware(thunkMiddleware));
store.subscribe(() => {console.log(store.getState())})
store.dispatch(fetchUsres)
