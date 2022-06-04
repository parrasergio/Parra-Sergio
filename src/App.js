//import React, { useState } from 
//import Counter from './components/Counter/Counter'
import './App.css';
import NavBar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContaine';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greating='Lo que Necesites'/>
      <header className="App-header">
        <p>
          Electronica Yuki
        </p>
      
      </header>
      {/*<Counter initial={0} />*/}
    </div>
  );
}

export default App;
