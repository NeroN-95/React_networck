import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import DialogItem from "./components/Dialogs/DialogItem/DialogItem";
import Message from "./components/Dialogs/Meassage/Message";

let posts = [
    {id: 1, message: 'hi how are you?', likesCount: 11},
    {id: 2, message: 'hi its my post', likesCount: 12},
    {id: 3, message: 'blabla', likesCount: 10}
]

let dialogs = [
    {id : 1, name: 'Roma'},
    {id : 2, name: 'Vlad'},
    {id : 3, name: 'Kirill'},
    {id : 4, name: 'Viktor'},
    {id : 5, name: 'Alexandra'},
    {id : 6, name: 'Oleh'}
]
let message = [
    {id : 1, message: 'hi'},
    {id : 2, message: 'how are you?'},
    {id : 3, message: 'what are you think about your dream ?'},
    {id : 4, message: 'ok'},
    {id : 5, message: 'stay with...'}
]

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} message={message} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();



