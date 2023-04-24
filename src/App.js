import './App.css';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";
import Homepage from './Page/Homepage';
import HomepageConstruction from './Page/HomepageConstruction';
import React, { useState } from 'react';

function App() {
  const [zeeshanGroup, setZeeshanGroup] = useState('group')
  return (
    <div className="App">
      {/* <Homepage setZeeshanGroup={setZeeshanGroup}/> */}
      {zeeshanGroup === 'construction'? <HomepageConstruction setZeeshanGroup={setZeeshanGroup}/> : zeeshanGroup === 'group' ? <Homepage setZeeshanGroup={setZeeshanGroup}/> : null}
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
