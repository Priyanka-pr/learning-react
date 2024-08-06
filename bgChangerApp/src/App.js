import { useEffect, useState } from "react";
import './App.css';
import Canvas from './app-components/canvas';


function App() {

  const [canvasColor, setCanvasColor]= useState('#000');
  const bgcolorArray=['#fd0303', '#fdc303', '#20fd03', '#03ecfd', '#0331fd', '#cb03fd'];

  return (
<div className='relative flex justify-center' style={{height:'95vh'}}>
<Canvas clickedColor={canvasColor}/>
<div class="inline-flex absolute bg-white  px-2 py-3 rounded bottom-0">
    {
      bgcolorArray.map((btncolor)=>{
        return(
          <>
           <div className=""><button className="rounded border-none px-5 py-2 mx-2" style={{backgroundColor: btncolor}} onClick={()=>{setCanvasColor(btncolor)}}>Click</button></div>
          </>
        )
      })
    }
</div>

</div>
  );
}

export default App;
