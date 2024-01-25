import React from 'react'

const Title = ({title, overview}) => {
  return (
    <div className=" w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className=" text-2xl md:text-4xl font-bold">{title}</h1>
      <p className="py-1 md:py-4 text-lg w-1/4">{overview}</p>
      <div>
        <button className="bg-white text-black py-1 md:py-4 px-3 md:px-12 text-lg rounded-lg hover:bg-opacity-80">Play</button>
        <button className="hidden md:inline-block bg-gray-500 mx-2 text-white p-4 px-12 text-lg opacity-45 rounded-lg">More Info</button>
      </div>
    </div>
  )
}

export default Title;