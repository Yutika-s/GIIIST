import React from 'react'
import { gist } from '../assets'

const Hero = () => {
  return (
    <header className = "w-full flex justify-center items-center flex-col">
    <nav className="w-full flex justify-between items-center mb-10 pt-3">
    <img src={gist} alt="gist_logo" className= "w-28 object-contain pt-3"/>
    
    <button 
    type="button" 
    onClick={()=> window.open('https://github.com/Yutika-s')}
    className = "black_btn"
    >
      GitHub
    </button>
    </nav>

    <h1 className='head_text'>
    Summarise Articles using AI with<br className='min-md:hidden'/>
    {/* span is used to give a separate container to this piece of text. */}
    {/* classname orange_gradient found in App.css */}
    <span className='orange_gradient'> GIST-IN-TIME</span> 
    </h1>
    <h2 className='desc'>
    Get a gist of the World in 10 Seconds! <br/> Your Open-Source Reading Companion for when You have no Time to Read.
    </h2>
    </header>
  )
}

export default Hero