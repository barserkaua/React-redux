import React from "react";
import ReactDom from 'react-dom';
import './index.css';
import {createStore} from "redux";
import reducer from "./reducer";
import {Provider} from "react-redux";
import App from "./components/app";


const result = createStore(reducer);

// витягуємо об'єкт який ми хочемо відрендерити
ReactDom.render(
    <Provider store={result}>
        <App/>
    </Provider>, document.getElementById('root'));