import React from "react";
import "./App.css";
import user from "./fakeData/user";

function App() {
  const users = user;
  console.log(users);
  return (
    <div className='App'>
      <header className='App-header'></header>
    </div>
  );
}

export default App;
