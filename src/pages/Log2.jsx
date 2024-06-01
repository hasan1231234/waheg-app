import React from 'react'
import back1 from '../images/back.png'
import back2 from '../images/back1.png'
import back3 from '../images/back2.png'
import back4 from '../images/back3.png'
import log from '../images/تسجيل الدخول.png'
import icon1 from '../images/icon1.svg'
import icon2 from '../images/icon2.svg'
import icon3 from '../images/icon3.png'
import {Link} from 'react-router-dom'
import btnlog from '../images/Frame 39.png'
import iconUser from '../images/iconUser.png'
import iconSec from '../images/iconSec.png'
import '../App.css'
export default function Log2() {
  return (
    <div className='open-1 pt-5'>
        <img src={back1} alt="" className="back1" />
       <img src={back2} alt="" className="back2" />
       <img src={back3} alt="" className="back3" />
       <img src={back4} alt="" className="back4" />
       <div className="log text-center">
          <img src={log} alt="" className='mb-5'/>
          <div className='position-relative'>
          <input type="email" className='w-100' placeholder='البريد الالكتروني' />
          <img src={iconUser} alt="" className='position-absolute icon-input'/>
          </div>
          <div className='position-relative'>
          <input type="password" className='w-100 mb-5' placeholder='تأكيد كلمة المرور' />
          <img src={iconSec} alt="" className='position-absolute icon-input'/>
          </div>
          <Link to='/home'><img src={btnlog} alt="" className='curser mb-3'/></Link>
          <h6 className='mb-3'>او</h6>
          <div className="d-flex mb-3 justify-content-center align-items-center gap-3">
              <img src={icon1} alt=""></img>
              <img src={icon2} alt=""></img>
              <img src={icon3} alt=""></img>
          </div>
          <p>ليس لدي حساب؟<span className='curser green'> انشاء حساب</span></p>
       </div>
    </div>
  )
}
