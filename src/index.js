import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import "bootstrap/dist/css/bootstrap.min.css";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore, persistReducer } from "redux-persist";
import "./index.css";
import App from "./components/App";
import reportWebVitals from "./reportWebVitals";
import reducers from "./reducers/index";
import 'antd/dist/antd.css';
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,

  composeEnhancers(applyMiddleware(thunk))
);
const persistor = persistStore(store);
ReactDOM.render(
  <Provider store={store}>
    {/* <React.StrictMode> */}
    {/* <ToastContainer /> */}
    <PersistGate loading={null} persistor={persistor}>
      <App />
      {/* </React.StrictMode> */}
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
