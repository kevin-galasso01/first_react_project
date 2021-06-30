import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';

function App() {
    //variabili di stato
    const [message, setMessage] = useState('');
    const [message_array, setMessage_array] = useState([]);
    // const [dummy, setDummy] = useState([0]);
    //react component lifeclicle
    // useEffect(() => {
    //   const arr = [1,2,3,4,5];
    //   console.log(dummy)
    //   setDummy([...dummy, ...arr]);
    // },[])

    /*useEffect(() => {
      console.log(message_array);
    },[message_array])*/

    const addtodo=() =>{
      setMessage_array([...message_array, message]);
    }

    const removetodo=(i) =>{
      const temp = message_array;
      temp.splice(i, 1);
      setMessage_array([...temp]); 
    }

    return (
      <header className="App-header">
      <form>
        <input type="Text" className="testo" name="prova" onChange={e => setMessage(e.target.value)}></input>
        {/*on click per salvare quello che scrivo*/}
        <button type="button" className="bottone" onClick={addtodo}>+</button>
      </form>
      {/*funzione che ritorna html con scritta la variabile e bottone */}
      
      {message_array.map((element, i) => {
        return( 
        <div key={i} className="to_do_container">
          <h1>{element}</h1>
          <button type="button" className="bottone" onClick={()=>removetodo(i)}>-</button>
        </div>);
      })}
      </header>);
  };

export default App;
