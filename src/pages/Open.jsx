import React, { useEffect } from 'react'
import '../App.css'
import back1 from '../images/Vector.png'
import back2 from '../images/Vector (1).png'
import back3 from '../images/Vector (2).png'
import back4 from '../images/Vector (3).png'
import logo from '../images/وهج 1.png'
export default function Open() {
   setTimeout(()=>{
       window.location = '/login'
   },2000)
  return (
    <div className='open'>
        <img src={back1} alt="" className="back1" />
        <img src={back2} alt="" className="back2" />
        <img src={back3} alt="" className="back3" />
        <img src={back4} alt="" className="back4" />
        <img src={logo} alt="" className="logo" />
    </div>
  )
}
