import React,{useState} from 'react'

const App = () => {
  const [hex,setHex]=useState("#ffffff");
  const randomizedHex=()=>{
    const randomColor="#"+Math.floor(Math.random()*16777215).toString(16);
    setHex(randomColor);
  };
  return (
    <div className='absolute bg-"${hex}" h-full w-full' >
      <div className='pt-[250px] pl-[600px] relative'>
      <div className=' h-[250px] w-[400px] bg-gray-200'><div><h1 className='pt-16 text-6xl font-bold pl-24'>{hex}</h1></div>
      <div className='pt-10 text-2xl font-bold pl-12 border-spacing-2 '><button className='p-4 hover:bg-slate-900 hover:text-white' onClick={randomizedHex}>Randomize</button>
      <button className='p-6 hover:bg-slate-900 hover:text-white' onClick={()=>navigator.clipboard.writeText(hex)}>Copy Color </button></div>
      </div></div>
    </div>
  )
}

export default App