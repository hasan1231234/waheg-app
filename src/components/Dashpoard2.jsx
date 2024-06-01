import React from 'react'
import { Link } from 'react-router-dom'
import iconNav1 from '../images/iconNav1.png'
import iconNav2 from '../images/iconNav2.png'
import iconNav3 from '../images/iconNav3.png'
import iconNav4 from '../images/iconNav4.png'
import iconNav5 from '../images/iconNav5.png'
import iconNav6 from '../images/iconNav6.png'
import iconNav7 from '../images/iconNav7.png'
export default function Dashpoard2() {
  return (
    <div className='dash'>
    <div className='d-flex flex-column gap-5  justify-content-center'>
         <Link to={-1}><img src={iconNav1} alt="" className='curser mb-5'/></Link>
         <ul className='list-dash'>
          <Link to='/home'>
          <li  className='d-flex align-items-center gap-3 curser'>
            <span >الرئيسية</span>
              <img src={iconNav2} alt="" />
              
            </li></Link>
            <Link to='/corsat'>
            < li className='d-flex align-items-center gap-3 curser'>
            <span >الكورسات</span>
            <img src={iconNav3} alt="" />
              
            </li>
            </Link>
           <Link to='/teachers'>
           <li  className='d-flex align-items-center gap-3 curser'>
                <span >المحاضرين</span>
              <img src={iconNav4} alt="" />
              
            </li>
           </Link>
          <Link to='/cart'>
          <li  className='d-flex align-items-center gap-3 curser'>
                <span >السلة</span>
              <img src={iconNav5} alt="" />
              
            </li>
          </Link>
            <Link to='/profile'>
            <li  className='d-flex align-items-center gap-3 curser'>
                <span className='fs-12'>الملف الشخصي</span>
              <img src={iconNav6} alt="" />
              
            </li>
            </Link>
            <li  className='d-flex align-items-center gap-3 curser'>
                <span >الاعدادات</span>
              <img src={iconNav7} alt="" />
              
            </li>
         </ul>
    </div>
 </div>
  )
}
