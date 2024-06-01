import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import iconBill from '../images/iconBill.png'
import iconCart from '../images/iconCart.png'
import text1 from '../images/الكورسات.png'
import backto from '../images/backto.png'
export default function Corsat() {
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
            </div>
        </div>
    )
}
