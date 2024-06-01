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
import textCard1 from '../images/الصف.png'
import imgCard1 from '../images/saf.png'
import imgCard2 from '../images/phon2.png'
import textCard2 from '../images/الاجهزه المستخدمة.png'
import imgCard3 from '../images/cor1.png'
import textCard3 from '../images/cor2.png'
import imgCard from '../images/imgCard.png'
import textimgCard from '../images/textimgCard.png'
import text4 from '../images/kdrat.png'
import percent from '../images/percent.png'

export default function ProfileStudent() {
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
                <div className="d-flex justify-content-between flex-row-reverse my-3">
                    <div className="card-datils w-400 d-flex flex-column  gap-5">
                        <img src={imgCard1} alt="" width='88' height='88' className='ml-auto' />
                        <div className='d-flex align-items-center justify-content-between'>
                            <span className='spanCard'>الثالث ثانوي</span>
                            <img src={textCard1} alt="" width='87' height='24' />
                        </div>
                    </div>
                    <div className="card-datils w-400 d-flex flex-column  gap-5">
                        <img src={imgCard2} alt="" width='88' height='88' className='ml-auto' />
                        <div className='d-flex align-items-center justify-content-between'>
                            <span className='spanCard'>الهاتف المحمول</span>
                            <img src={textCard2} alt="" width='87' height='24' />
                        </div>
                    </div>
                    <div className="card-datils w-400 d-flex flex-column  gap-5">
                        <img src={imgCard3} alt="" width='88' height='88' className='ml-auto' />
                        <div className='d-flex align-items-center justify-content-between'>
                            <span className='spanCard spanCard-1'>2 كورس</span>
                            <img src={textCard3} alt="" width='87' height='24' />
                        </div>
                    </div>
                </div>

                <div className='d-flex align-items-center gap-3'>
                <div className="card w-100 d-flex align-items-center flex-row-reverse justify-content-between">
                  <div className="d-flex gap-3 float-right flex-row-reverse">
                        <img src={imgCard} alt="" width="184" height="184"/>
                        <div className='d-flex flex-column justify-content-between'>
                            <img src={textimgCard} alt="" />
                            <div dir='rtl' className="d-flex flex-column">
                            <img src={text4} alt="" />
                            <span className='text-secondary'>4 دروس</span>
                            <span className='text-secondary'>ساعة</span>
                            </div>
                        </div>
                  </div>

                     <img src={percent} alt="" width="184" height="184"/>
                </div>
                <div className="card w-100 d-flex align-items-center flex-row-reverse justify-content-between">
                  <div className="d-flex gap-3 float-right flex-row-reverse">
                        <img src={imgCard} alt="" width="184" height="184"/>
                        <div className='d-flex flex-column justify-content-between'>
                            <img src={textimgCard} alt="" />
                            <div dir='rtl' className="d-flex flex-column">
                            <img src={text4} alt="" />
                            <span className='text-secondary'>4 دروس</span>
                            <span className='text-secondary'>ساعة</span>
                            </div>                        </div>
                  </div>

                     <img src={percent} alt="" width="184" height="184"/>
                </div>
                </div>
    </div>
    </div>
  )
}
