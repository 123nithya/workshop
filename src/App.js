import React from 'react';
import './App.css';
import ProForm from './Front';
import View from './Front2';
import Front3 from './Front3';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">

      <Router>
        <Routes>
          <Route path={"/post"} element={<ProForm />}></Route>
          <Route path={"/get"} element={<View />}></Route>
          <Route path={"/put"} element={<Front3 />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
