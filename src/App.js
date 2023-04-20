import './App.css';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";
import Homepage from './Page/Homepage';
// import HomepageConstruction from './Page/HomepageConstruction';
import React from 'react';

function App() {
  return (
    <div className="App">
      <Homepage/>
    {/* <Router>  
    <div>  
      <h1>React Router Example</h1>  
      <Routes >
    <Route path="/" component={<Homepage/>} />  
      <Route path="/zeeshan-construction" component={<HomepageConstruction/>} />  
      </Routes>  
    </div>  
  </Router>   */}
    </div>
  );
}

export default App;
