import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./assets/style/index.css";
import { Provider } from "react-redux";
import store, { persisedStore } from "./store/store";
import { PersistGate } from "redux-persist/integration/react";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persisedStore}>
        <App />
      </PersistGate>
    </Provider>
  </StrictMode>
);
