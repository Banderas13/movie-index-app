import React from 'react'

const Spinner = () => {
  return (
<div className="flex w-12 h-12 justify-center items-center relative">
    <div className="w-[110%] h-[110%] shadow-lg shadow-pink-500 bg-transparent rounded-full absolute animate-spin_right"></div>                
    <div className="w-[108%] h-[108%] shadow-lg shadow-violet-500 bg-transparent rounded-full absolute animate-spin_left"></div>
    <div className="w-[106%] h-[106%] shadow-lg shadow-cyan-500 bg-transparent rounded-full absolute animate-spin"></div>
</div>
  )
}

export default Spinner