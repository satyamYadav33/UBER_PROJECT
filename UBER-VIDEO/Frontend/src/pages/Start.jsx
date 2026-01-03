import React from 'react'

const Start = () => {
  return (
    <div class='bg-[#dc6464] h-screen w-screen  flex flex-col justify-between '>
      <div className="logo mx-15 my-15 text-5xl font-bold select-none">Uber</div>
      <div className="start p-10 flex flex-col items-center gap-8 bg-white">
        <h1 className='text-5xl font-bold'>Get started with Uber</h1>
        <a href="/Login" className='bg-black px-50 py-6 text-white text-5xl rounded-2xl font-bold'>Continue</a>
      </div>
    </div>
  )
}

export default Start;
