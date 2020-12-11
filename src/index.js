import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import App from './App';
import MyInfo from './Components/MyInfo';

ReactDOM.render(<MyInfo/>, document.getElementById('root'));
ReactDOM.render(<App/> , document.querySelector('#root'));