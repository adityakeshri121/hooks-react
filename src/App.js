import React, { useState, useMemo, useEffect } from 'react';
import './App.css';
import RefHook from './RefHook';

function App() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);
  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number])

  const themeStyles = useMemo(() => {
    return {
      backgroundColor: dark ? 'black' : 'white',
      color: dark ? 'white' : 'black',
    }
  }, [dark])

  function slowFunction(num) {
    console.log('calling a slow function');
    for (let i = 0; i < 1000000000; i++) { }
    return num * 2;
  }

  useEffect(() => {
    console.log('aa');
  }, [themeStyles])

  return (
    <div className="App">
      <div>hooks page</div>
      <div>
        <input type="number" value={number} onChange={e => setNumber(parseInt(e.target.value))} />
        <button onClick={() => setDark(prev => !prev)}>Toggle Theme</button>
        <div style={themeStyles}>{doubleNumber}</div>
      </div>
      <RefHook />
    </div>
  );
}

export default App;

//why not to use useMemo, everywhere --> bcz it gives us some performance
// overheads and some memory overheads --> useMemo func is called everytime
// and we are saving the value of number in some memory
// so if we use it everywhere, its going to give additional memory and perforamnce
// issue in the app

// useMemo only when we need performance benfits, when func we are calling is 
// incredibly slow 

// 2nd use case.. ---> referential equality
// we have --> when we have objects in js, they are stored in reference
//
