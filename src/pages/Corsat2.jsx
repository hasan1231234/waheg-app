import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import iconBill from '../images/iconBill.png'
import iconCart from '../images/iconCart.png'
import text1 from '../images/الكورسات.png'
import backto from '../images/backto.png'
import imgCard from '../images/imgCard.png'
import textimgCard from '../images/textimgCard.png'
import text4 from '../images/التحصيلي.png'
import text5 from '../images/1.png'
import percent from '../images/percent.png'
export default function Corsat2() {
    return (
        <div className='d-flex flex-row-reverse'>
            <Outlet />
            <div className='right-section'>
                <div className='d-flex justify-content-between align-items-center w-100'>
                    <div className='d-flex align-items-center gap-3'>
                        <img src={iconBill} alt="" />
                        <Link to='/cart'><img src={iconCart} alt="" /></Link>
                    </div>
                    <div className="d-flex align-items-center gap-3">
                        <img src={text1} alt="" />
                        <Link to='/page2'><img src={backto} alt="" width='48' height='48' className='curser' /></Link>
                    </div>
                </div>
                <div className='w-100 div-corsat d-flex align-items-center my-3'>
                <Link to='/corsat1' className='flex-1 text-center para-corsat-1 curser h-100 p-0 m-0 w-50'><p className=''>الكورسات المكتمله</p></Link>
                     <Link to='/corsat2' className='flex-1 text-center para-corsat-1 curser h-100 p-0 m-0 w-50'><p className=''>الكورسات</p></Link>
                </div>
                <div className='d-flex align-items-center gap-3'>
                <div className="card w-100 d-flex align-items-center flex-row-reverse justify-content-between">
                  <div className="d-flex gap-3 float-right flex-row-reverse">
                        <img src={imgCard} alt="" width="184" height="184"/>
                        <div className='d-flex flex-column justify-content-between'>
                            <img src={textimgCard} alt="" />
                            <img src={text4} alt="" />
                        </div>
                  </div>

                     <img src={percent} alt="" width="184" height="184"/>
                </div>
                <div className="card w-100 d-flex align-items-center flex-row-reverse justify-content-between">
                  <div className="d-flex gap-3 float-right flex-row-reverse">
                        <img src={imgCard} alt="" width="184" height="184"/>
                        <div className='d-flex flex-column justify-content-between'>
                            <img src={textimgCard} alt="" />
                            <img src={text5} alt="" />
                        </div>
                  </div>

                     <img src={percent} alt="" width="184" height="184"/>
                </div>
                </div>
            </div>
        </div>
    )
}
