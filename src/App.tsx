import React from 'react';
import './App.css';
//Components
import {ViewHtmlTable} from "./components/viewHtmlTable";
import {ViewDatagridTable} from "./components/viewDatagridTable";

function App() {
  return (
    <>
      <ViewHtmlTable/>
      <ViewDatagridTable/>
    </>
  )
}

export default App;
