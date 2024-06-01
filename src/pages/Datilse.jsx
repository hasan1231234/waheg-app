import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import iconBill from '../images/iconBill.png'
import iconCart from '../images/iconCart.png'
import text1 from '../images/التفاصيل.png'
import backto from '../images/backto.png'
import teacher from '../images/Frame 16.png'
import name from '../images/احمد ابو العزم.png'
import grayStar from '../images/grayStart.png'
import goldStar from '../images/goldStar.png'
import desc from '../images/desc.png'
import textCard1 from '../images/الاختبارات.png'
import imgCard1 from '../images/test-svgrepo-com (2).png'
import imgCard2 from '../images/Frame 1000004485.png'
import textCard2 from '../images/المستوى.png'
import imgCard3 from '../images/g.png'
import textCard3 from '../images/شهرين.png'
import imgCard4 from '../images/Frame 1000004765.png'
import textCard4 from '../images/الاجهزه المتاحة.png'
import imgCard5 from '../images/book-2-svgrepo-com.png'
import textCard5 from '../images/المحاضرات.png'
import iconTime from '../images/Group 5.png'
import iconLec from '../images/Glyph_ undefined.png'
import addToCart from '../images/Frame 1000004538.png'
export default function Datilse() {
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
                <div className='d-flex flex-row-reverse align-items-center gap-3 w-100 mt-5'>
                    <img src={teacher} alt="" />
                    <div className="d-flex flex-column gap-3 ">
                        <img src={name} alt="" width='181' className='ml-auto' />
                        <div className='d-flex flex-row-reverse align-items-center'>
                            <img src={goldStar} alt="" />
                            <img src={goldStar} alt="" />
                            <img src={goldStar} alt="" />
                            <img src={goldStar} alt="" />
                            <img src={grayStar} alt="" />
                            <span>(4.5)</span>
                        </div>
                        <img src={desc} alt="" />
                    </div>
                </div>

                <div className="d-flex justify-content-between flex-row-reverse my-3">
                    <div className="card-datils d-flex flex-column  gap-5">
                        <img src={imgCard1} alt="" width='88' height='88' className='ml-auto' />
                        <div className='d-flex align-items-center justify-content-between'>
                            <span className='spanCard'>4 اخبارات</span>
                            <img src={textCard1} alt="" width='87' height='24' />
                        </div>
                    </div>
                    <div className="card-datils d-flex flex-column  gap-5">
                        <img src={imgCard2} alt="" width='88' height='88' className='ml-auto' />
                        <div className='d-flex align-items-center justify-content-between'>
                            <span className='spanCard'>مبتدأين</span>
                            <img src={textCard2} alt="" width='87' height='24' />
                        </div>
                    </div>
                    <div className="card-datils d-flex flex-column  gap-5">
                        <img src={imgCard3} alt="" width='88' height='88' className='ml-auto' />
                        <div className='d-flex align-items-center justify-content-between'>
                            <span className='spanCard spanCard-1'>يومين في الاسبوع</span>
                            <img src={textCard3} alt="" width='87' height='24' />
                        </div>
                    </div>
                    <div className="card-datils card-datils-1 d-flex flex-column  gap-5">
                        <img src={imgCard4} alt="" width='319' height='88' className='ml-auto' />
                        <div className='d-flex align-items-center justify-content-between'>
                            <span className='spanCard spanCard-1'>الهاتف المحمول/ كومبيوتر</span>
                            <img src={textCard4} alt="" width='87' height='24' />
                        </div>
                    </div>
                </div>
                <div className="card-datils card-datils-2 w-100 d-flex flex-column  gap-3">
                    <div className="d-flex w-100 justify-content-between align-items-center">
                        <span className='spanCard'>8 محاضرات</span>
                        <div className="d-flex align-items-center gap-3">
                            <img src={textCard5} alt="" />
                            <img src={imgCard5} alt="" />
                        </div>
                    </div>
                    <ul  className='p-0'>
                        <li className='d-flex aligin-items-center mb-3 justify-content-between'> <span className='d-flex flex-row-reverse align-items-center gap-3'><img src={iconTime} alt="" /> <span> 5 ساعة</span></span><span className='d-flex align-items-center flex-row-reverse gap-3'><img src={iconLec} alt="" /><span>الرياضيات</span></span></li>
                        <li className='d-flex aligin-items-center mb-3 justify-content-between'> <span className='d-flex flex-row-reverse align-items-center gap-3'><img src={iconTime} alt="" /> <span> 5 ساعة</span></span><span className='d-flex align-items-center flex-row-reverse gap-3'><img src={iconLec} alt="" /><span>الرياضيات</span></span></li>

                        <li className='d-flex aligin-items-center mb-3 justify-content-between'> <span className='d-flex flex-row-reverse align-items-center gap-3'><img src={iconTime} alt="" /> <span> 5 ساعة</span></span><span className='d-flex align-items-center flex-row-reverse gap-3'><img src={iconLec} alt="" /><span>الرياضيات</span></span></li>

                        <li className='d-flex aligin-items-center mb-3 justify-content-between'> <span className='d-flex flex-row-reverse align-items-center gap-3'><img src={iconTime} alt="" /> <span> 5 ساعة</span></span><span className='d-flex align-items-center flex-row-reverse gap-3'><img src={iconLec} alt="" /><span>الرياضيات</span></span></li>

                        <li className='d-flex aligin-items-center mb-3 justify-content-between'> <span className='d-flex flex-row-reverse align-items-center gap-3'><img src={iconTime} alt="" /> <span> 5 ساعة</span></span><span className='d-flex align-items-center flex-row-reverse gap-3'><img src={iconLec} alt="" /><span>الرياضيات</span></span></li>

                        <li className='d-flex aligin-items-center mb-3 justify-content-between'> <span className='d-flex flex-row-reverse align-items-center gap-3'><img src={iconTime} alt="" /> <span> 5 ساعة</span></span><span className='d-flex align-items-center flex-row-reverse gap-3'><img src={iconLec} alt="" /><span>الرياضيات</span></span></li>

                    </ul>
                    <div className="addToCart d-flex curser mb-5 align-items-center justify-content-between ">
                        <p className='p-0 m-0'>ر.س 250</p>
                     <img src={addToCart} alt="" />
                    </div>
                    
                </div>

            </div>

        </div>
    )
}
