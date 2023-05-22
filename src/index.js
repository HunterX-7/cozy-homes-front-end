import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import store from './redux/configureStore';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <div className="container-fluid d-lg-none">
          <div className="row p-0">
            <App />
          </div>
        </div>
        <div className="container-fluid d-none d-lg-block">
          <div className="row p-0">
            <App />
          </div>
        </div>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
);
