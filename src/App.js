import React from 'react';
import './App.css';
import Users from "./components/Users";

// Redux
import { Provider } from "react-redux";
import store from "./Store";

function App() {
  return (
    <Provider store={store}>
      <Users />
    </Provider>
  );
}

export default App;
