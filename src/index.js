import React from "react";
import ReactDOM from "react-dom/client";
import { legacy_createStore as createStore } from "redux";
import reducer from "./reducer";

const store = createStore(reducer);

const App = () => {
  const handleAction = (action) => {
    store.dispatch({
      type: action,
    });
  };

  return (
    <div>
      <button onClick={() => handleAction("GOOD")}>good</button>
      <button onClick={() => handleAction("OK")}>ok</button>
      <button onClick={() => handleAction("BAD")}>bad</button>
      <button onClick={() => handleAction("RESET")}>reset stats</button>
      <div>good {store.getState().good}</div>
      <div>ok {store.getState().ok}</div>
      <div>bad {store.getState().bad}</div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
const renderApp = () => {
  root.render(<App />);
};

renderApp();
store.subscribe(renderApp);
