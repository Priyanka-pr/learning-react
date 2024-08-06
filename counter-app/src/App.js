import './App.css';
import { useState } from 'react';
import Home from './components/Home';
import Card from './components/Card';

function App() {
  let [counter, setCounter] = useState(0);
  // let addValue = ()=> { setCounter(counter+1)}
  // let decrementValue = ()=>{ setCounter(counter-1)}
  
  return (
    <>
    <h1 className="text-3xl font-bold p-3 bg-red-700 text-white">
      Hello world!
    </h1>
    <h2>Counter value: {counter}</h2>
    <br/>
    <button className='p-2 bg-yellow-500 rounded '
    onClick={ ()=> { setCounter(counter+1)}}
    >Increment value</button>
    &nbsp;&nbsp;&nbsp;&nbsp;
    <button className='p-2 bg-yellow-500 rounded 'onClick={ ()=>{ setCounter(counter-1)}}>Decrement value</button>

<div className="bg-white py-24 sm:py-32">
  <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
    {/* <div className="max-w-2xl"> */}
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet our leadership</h2>
    {/* </div> */}
    <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"> 
      <li>
        <Card leaderName="Priyanka Rana"/>
      </li>
    </ul>
  </div>
</div>

    </>
  );
}




export default App;
