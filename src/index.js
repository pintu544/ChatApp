import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import chatReducer from "./store/chatSlice";
import App from "./App";
import ReactDOM from "react-dom/client";
const store = configureStore({
  reducer: { chat: chatReducer },
});

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
