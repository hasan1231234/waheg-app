import React from 'react'
import text1 from '../images/الملف الشخصي.png'
import { Link, Outlet } from 'react-router-dom'
import iconBill from '../images/iconBill.png'
import iconCart from '../images/iconCart.png'
import backto from '../images/backto.png'
import baker from '../images/baker.png'
import update from '../images/update.png'
import m1 from '../images/الطالب.png'
import m2 from '../images/teacher-svgrepo-com (1).png'
import k1 from '../images/الدرجات.png'
import k2 from '../images/skill-level-intermediate-svgrepo-com 1.png'

export default function Profile() {
  return (
    <div className='d-flex flex-row-reverse'>
    <Outlet/>
    <div className='right-section'>
    <div className='d-flex justify-content-between align-items-center w-100'>
               <div className='d-flex align-items-center gap-3'>
                <img src={iconBill} alt="" />
                <img src={iconCart} alt="" />
               </div>
               <div className="d-flex align-items-center gap-3">
                   <img src={text1} alt="" />
                   <Link to={-1}><img src={backto} alt="" width='48' height='48' className='curser'/></Link>
               </div>
    </div>
    <div className="d-flex gap-3 align-items-center my-3" dir='rtl'>
        <img src={baker} alt="" />
        <div className='d-flex flex-column h-50 justify-content-center  gap-3'>
             <h3>بكر</h3>
             <p className='text-secondary'>bakrtaha505@gmail.com</p>
             <img src={update} className='curser' alt="" />
        </div>
    </div>
    <div className='w-100 div-corsat d-flex align-items-center my-3'>
                <Link to='/profile-degree' className='flex-1 bg-light text-center para-corsat-1 curser h-100 p-0 m-0 w-50'><p className='d-flex aligin-items-center justify-content-center  gap-3'><img src={k1} alt="" /><img src={k2} alt="" /></p></Link>
                     <Link to='/profile-student' className='flex-1 bg-blue text-center para-corsat-1 curser h-100 p-0 m-0 w-50'><p className='d-flex aligin-items-center justify-content-center  gap-3'><img src={m1} alt="" /><img src={m2} alt="" /></p></Link>
                </div>
    </div>
    </div>
  )
}
