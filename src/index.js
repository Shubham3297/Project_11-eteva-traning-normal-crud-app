import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
// import { BrowserRouter } from "react-router-dom"
import store from './store';
import { Provider } from 'react-redux';
import 'react-notifications/lib/notifications.css';
import { NotificationContainer, NotificationManager } from 'react-notifications';



// store.subcribe(() => console.log(store.getState()))

ReactDOM.render(
  <React.StrictMode>
    {/* <BrowserRouter> */}
    <Provider store={store}>
      <App />
      <NotificationContainer />
    </Provider>
    {/* </BrowserRouter> */}
  </React.StrictMode>,

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
