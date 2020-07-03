import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
// Steps
// install redux
// import create store
// connect app with Redux with store provider - REACT_REDUX
// create store and configure reducer
// create actions 

// Crete logger / middleware
// connect store to component - REACT-REDUX
// dispatch actions and get the props and state configured
// for API call import thunk
// create actions with Thunk and api call
// store the data on api call

import { createStore, applyMiddleware } from 'redux';
import rootReducer from './Store/Reducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';


// const logger = state => {
//     return next =>{
//       return  action => {
//         console.log("ACTION" + action.type);
//         const result = next(action);
//       }
//     }
//   }

const store = createStore(rootReducer, applyMiddleware(thunk));


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
)