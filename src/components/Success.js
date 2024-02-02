import React from 'react'
import { Link } from 'react-router-dom'

function Success() {
  return (
    <div className='flex justify-center items-center py-12'>
<div className='md:max-w-md   bg-white shadow-lg rounded-xl overflow-hidden '>
  <div className=" text-center py-6 px-2">
              <h2 className="text-3xl text-green-800 font-bold ">
                {" "}
                Hello User 
              </h2>
              <p className="text-lg text-zinc-800 py-4">
                {" "}
               Your form successfully submitted
              </p>

              <Link to="/">
              <button
               
                className="bg-gray-900 text-white py-2 px-4 rounded hover:bg-gray-800 focus:outline-none focus:shadow-outline"
              >
              Back To Form Page
              </button>
              </Link>
              
            </div> 
    </div>
    </div>
    
         
  )
}

export default Success