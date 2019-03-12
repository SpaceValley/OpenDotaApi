import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { createStore, applyMiddleware} from 'redux';
import reducer from './reducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { save, load } from "redux-localstorage-simple";


const store = createStore(
    reducer,load(), composeWithDevTools(
    applyMiddleware(thunk,save()))
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));
