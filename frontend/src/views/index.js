import React from 'react'
import homeImage from "../assets/home/home-image.jpg"
import TextAnimation from '../components/home/textAnimation'
import Navbar from '../components/navbar/Navbar'

function Index() {
  return (
    <div className='home-main'>
      <Navbar/>
      <div className='container p-3'>
        <div className='columns mt-6'>
          <div className='column is-flex is-justify-content-center is-align-items-center'>
            <div>
              <h4 className='text-1'>Hello, my name is</h4>
              <h2 className='text-2'>Abhishek Parmar</h2>
              <h3 className='is-size-3 has-text-white has-text-weight-medium'>And I'm a <TextAnimation list = {["Web Developer ", 2000,"Java Developer ", 2000, "MERN Developer ", 2000 ]}/></h3>
              <button className="button is-danger is-hovered mt-3">
                <span className='is-size-5 is-family-secondary has-text-weight-500'>Hire Me</span>
              </button>
            </div>
          </div>
          <div className='column py-0'>
            <figure className="image is-square">
              <img src={homeImage} alt='error'/>
            </figure>
          </div>
        </div>
      </div>  
    </div>
  )
}

export default Index