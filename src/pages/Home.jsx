import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import iconBill from '../images/iconBill.png'
import iconCart from '../images/iconCart.png'
import text1 from '../images/مرحبا بك في منصة وهج التعليمية.png'
import text2 from '../images/اختر الكورس المناسب واستمتع برحله تعليمية مميزه.png'
import btnHome1 from '../images/btnHome1.png'
import btnHome2 from '../images/btnHome2.png'
import cart from '../images/cart.png'
import text3 from '../images/الكورسات المسجلة.png'
import imgCard from '../images/imgCard.png'
import textimgCard from '../images/textimgCard.png'
import text4 from '../images/التحصيلي.png'
import percent from '../images/percent.png'
export default function Home() {
  return (
    <div className='d-flex flex-row-reverse'>
        <Outlet/>
        <div className='right-section'>
            <div className='d-flex justify-content-between w-100'>
               <div className='d-flex align-items-center gap-3'>
                <img src={iconBill} alt="" />
                <img src={iconCart} alt="" />
               </div>
               <img src={text1} alt="" />
            </div>
            <img src={text2} alt="" className='text2'/><br /><br />
            <div className='float-right d-flex align-items-center gap-3'>
               <img src={btnHome2} alt="" />
               <img src={btnHome1} alt="" />
            </div>
            <div className='d-flex my-5 justify-content-between'>
               <Link to='/page2'><img src={cart} alt="" width='385'/></Link>
               <Link to='/page2'><img src={cart} alt="" width='385'/></Link>
               <Link to='/page2'><img src={cart} alt="" width='385'/></Link>
            </div>
            <img src={text3} alt="" className='float-right mb-3'/><br /><br />
            <div className="d-flex justify-content-between">
                <div className="card ">
                  <div className="d-flex gap-3 float-right flex-row-reverse">
                     <img src={imgCard} alt="" />
                     <img src={textimgCard} alt="" />
                  </div>
                  <div className="d-flex justify-content-between align-items-center mb-3 mt-5 w-100 flex-row-reverse">
                     <div className="d-flex flex-column text-right">
                        <img src={text4} alt="" />
                        <p className='light m-0'>4 دروس</p>
                        <p className='light m-0'>ساعة</p>
                     </div>
                     <img src={percent} alt="" width="108" height="108"/>
                  </div>
                </div>
                <div className="card ">
                  <div className="d-flex gap-3 float-right flex-row-reverse">
                     <img src={imgCard} alt="" />
                     <img src={textimgCard} alt="" />
                  </div>
                  <div className="d-flex justify-content-between align-items-center mb-3 mt-5 w-100 flex-row-reverse">
                     <div className="d-flex flex-column text-right">
                        <img src={text4} alt="" />
                        <p className='light m-0'>4 دروس</p>
                        <p className='light m-0'>ساعة</p>
                     </div>
                     <img src={percent} alt="" width="108" height="108"/>
                  </div>
                </div>
                <div className="card ">
                  <div className="d-flex gap-3 float-right flex-row-reverse">
                     <img src={imgCard} alt="" />
                     <img src={textimgCard} alt="" />
                  </div>
                  <div className="d-flex justify-content-between align-items-center mb-3 mt-5 w-100 flex-row-reverse">
                     <div className="d-flex flex-column text-right">
                        <img src={text4} alt="" />
                        <p className='light m-0'>4 دروس</p>
                        <p className='light m-0'>ساعة</p>
                     </div>
                     <img src={percent} alt="" width="108" height="108"/>
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}
