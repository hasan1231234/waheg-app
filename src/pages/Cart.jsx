import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import iconTrush from '../images/iconTrush.png'
import text1 from '../images/السلة.png'
import backto from '../images/backto.png'
import numCorsat from '../images/عدد الكورسات.png'
import imgCard from '../images/imgCard.png'
import textImgCard from '../images/textimgCard.png'
export default function Cart() {
    return (
        <div className='d-flex flex-row-reverse'>
            <Outlet />
            <div className="right-section">
                <div className='d-flex justify-content-between align-items-center w-100'>
                    <div className='d-flex align-items-center gap-3'>

                        <img src={iconTrush} alt="" className='curser' />
                    </div>
                    <div className="d-flex align-items-center gap-3">
                        <img src={text1} alt="" />
                        <Link to='/datilse'><img src={backto} alt="" width='48' height='48' className='curser' /></Link>
                    </div>
                </div>

                <div className="d-flex my-3 numCorsat align-items-center justify-content-between">
                    <p className='m-0 p-0'>(2)</p>
                    <img src={numCorsat} alt="" />
                </div>

                <div className="cardCart w-100 d-flex flex-column mb-3 gap-3">
                      <div className="d-flex align-items-center justify-content-between ">
                      <img src={iconTrush} alt="" className='curser'/>
                          <div className="d-flex align-items-center gap-3">
                                 <img src={textImgCard} alt="" />
                                 <img src={imgCard} alt="" />
                          </div>
                          
                      </div>
                      <div className='w-100 cardCartDiv-1 text-center'>
                      ر.س <bdi>250</bdi> 
                      </div>
                      <div className='w-100 cardCartDiv-2 text-center'>
                      ادخل الكود
                      </div>
                      <div className='w-100 cardCartDiv-3 text-center'>
                      اتمام عملية الاشتراك 
                      </div>
                </div>
                <div className="cardCart w-100 d-flex flex-column mb-3 gap-3">
                      <div className="d-flex align-items-center justify-content-between ">
                      <img src={iconTrush} alt="" className='curser'/>
                          <div className="d-flex align-items-center gap-3">
                                 <img src={textImgCard} alt="" />
                                 <img src={imgCard} alt="" />
                          </div>
                          
                      </div>
                      <div className='w-100 cardCartDiv-1 text-center'>
                      ر.س <bdi>250</bdi> 
                      </div>
                      <div className='w-100 cardCartDiv-2 text-center'>
                      ادخل الكود
                      </div>
                      <div className='w-100 cardCartDiv-3 text-center'>
                      اتمام عملية الاشتراك 
                      </div>
                </div>


            </div>
        </div>
    )
}
