import React from 'react'
import back1 from '../images/back.png'
import back2 from '../images/back1.png'
import back3 from '../images/back2.png'
import back4 from '../images/back3.png'
import stud from '../images/student.png'
import teacher from '../images/teacher.png'
import { Link } from 'react-router-dom'
import '../App.css'
export default function Login() {
  return (
    <div className='open'>
       <img src={back1} alt="" className="back1" />
       <img src={back2} alt="" className="back2" />
       <img src={back3} alt="" className="back3" />
       <img src={back4} alt="" className="back4" />
       <div className="btns-login">
        <Link to='/log1'><img src={stud} alt="" className='mb-3'/></Link>
          <img src={teacher} alt="" />
       </div>
    </div>
  )
}
