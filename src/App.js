import React from 'react';
//import Counter from '../src/components/Counter/Counter.js'
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
      {/*<Counter initial={0} stock={10} title='contador' />*/}
    </div>
  );
}

export default App;
