import React from 'react'
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

export default function Footer() {
  return (
    <footer className='bg-dark text-white mt-3 text-center'>
      <p className='display-6'>You can reach me on:</p>
      <div>
        <a href={'https://www.linkedin.com/in/dhruvi-joshi-467160177/'} target='_blank' rel="noreferrer">
          <AiFillLinkedin size={50} className='me-5' color='white' />
        </a>
        <a href={'https://github.com/Dhruvi45'} target='_blank' rel="noreferrer"  >
          <AiFillGithub size={50} className='ms-5' color='white'/>
        </a>
      </div>
    </footer>
  )
}
