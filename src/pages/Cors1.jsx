import React , {useState} from 'react'
import { Outlet, Link } from 'react-router-dom'
import iconBill from '../images/iconBill.png'
import iconCart from '../images/iconCart.png'
import text1 from '../images/كورس القدرات.png'
import backto from '../images/backto.png'
import teacher from '../images/Frame 16.png'
import name from '../images/احمد ابو العزم.png'
import grayStar from '../images/grayStart.png'
import goldStar from '../images/goldStar.png'
import desc from '../images/desc.png'
import recent1 from '../images/المتبقي من الكورس.png'
import phons from '../images/Frame 1000004547.png'
import phon from '../images/Frame 1000004525.png'
import m1 from '../images/m1.png'
import m2 from '../images/m2.png'
import k1 from '../images/k1.png'
import k2 from '../images/k2.png'
import test1 from '../images/test1.png'
import test2 from '../images/test2.png'
import test3 from '../images/test3.png'
import test4 from '../images/test4.png'
import hour from '../images/hour.png'
import imgtest from '../images/Frame 1000004629.png'
export default function Cors1() {
    const [style1 , setStyle1] = useState('overlay-cors d-none')
    const open = () => {
        setStyle1('overlay-cors d-block')
    }
    const close = () => {
        setStyle1('overlay-cors d-none')
    }
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
                        <Link to='/corsat1'><img src={backto} alt="" width='48' height='48' className='curser' /></Link>
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
                <div className='recent-cors w-100 '>
                    <img src={recent1} alt="" className='ml-auto d-block' />
                    <div class="progress " dir='rtl'>
                        <div class="progress-bar w-65 accent-color" >65%</div>
                    </div>
                    <p dir='rtl' className='accent-color-1'>65% مكتملة</p>
                    <div dir='rtl' className="d-flex align-items-center gap-3">
                        <span className='text-secondary'>من</span>
                        <div className='from w-45'>4/29/2024</div>
                        <span className='text-secondary'>الى</span>
                        <div className='from w-45'>4/29/2024</div>
                    </div>
                    <div dir='rtl' className="bar my-3">2 من الاسابيع</div>
                    <div dir='rtl' className="bar my-3">الايام</div>
                    <div dir='rtl' className="d-flex align-items-center justify-content-between">
                       <div className="bar-day-1 w-49">الاحد</div>
                       <div className="bar-day-2 w-49">الخميس</div>
                    </div>
                </div>
                <div dir='rtl' className="d-flex my-3 align-items-center justify-content-between">
                      <img src={phons} alt="" />
                      <img src={phon} alt="" />
                </div>
                <div className='w-100 div-corsat d-flex align-items-center my-3'>
                <Link to='/cors1' className='flex-1 bg-light text-center para-corsat-1 curser h-100 p-0 m-0 w-50'><p className='d-flex aligin-items-center justify-content-center  gap-3'><img src={k1} alt="" /><img src={k2} alt="" /></p></Link>
                     <Link to='/cors2' className='flex-1 bg-blue text-center para-corsat-1 curser h-100 p-0 m-0 w-50'><p className='d-flex aligin-items-center justify-content-center  gap-3'><img src={m1} alt="" /><img src={m2} alt="" /></p></Link>
                </div>
                <div className='corses-1 w-100 bg-blue mb-3 curser d-flex gap-3' onClick={() => open()}>
                    
                    <div dir='rtl' className='w-90 corses-1-1 position-relative'>
                    <div dir='rtl' className='position-absolute corse-1-1-p'>
                         مكتمل 100%
                         </div>
                    </div>
                    <img src={test1} alt="" />
                </div>
                <div className='corses-1 w-100 bg-blue mb-3 curser d-flex gap-3' onClick={() => open()}>
                    
                    <div dir='rtl' className='w-90 corses-1-1 position-relative'>
                    <div dir='rtl' className='position-absolute corse-1-1-p'>
                         مكتمل 100%
                         </div>
                    </div>
                    <img src={test2} alt="" />
                </div>
                <div className='corses-2 w-100  mb-3 curser d-flex justify-content-between'>
                    
                    <div dir='rtl' className='bg-blue text-white curser enter'>دخول</div>
                    <img src={test3} alt="" />
                </div>
                <div className='corses-2 w-100  mb-3 curser d-flex justify-content-between'>
                    
                    <div dir='rtl' className='bg-blue text-white curser enter'>دخول</div>
                    <img src={test4} alt="" />
                </div>
            </div>
            <div className={style1}>
                <div className="overlay-cors-div">
                    <div dir='rtl' className="overlay-test-1 overlay-cors-div-div1 bg-blue text-light d-flex align-items-center justify-content-between">
                         <p className='p-0 m-0'>مدة الاختبار</p>
                         <div dir='rtl' className='d-flex align-items-center gap-3'>
                                <span>المتبقي</span>
                                <span className='overlay-cors-div-span'>15:01 / 1:00:00</span>
                         </div>
                         <img src={hour} alt="" className='p-0 m-0'/>
                    </div>
                    <h3 className='text-center mt-5 mb-3 color-blue'>السؤال الاول</h3>
                    <img src={imgtest} alt="" width='100%' />
                    <div className="d-flex my-3 w-50 mx-auto align-items-center justify-content-between">
                         <span className='fw-bold color-blue fs-5'><input name='aa' type="radio" /> A</span>
                         <span className='fw-bold color-blue fs-5'><input name='aa' type="radio" /> B</span>
                         <span className='fw-bold color-blue fs-5'><input name='aa' type="radio" /> C</span>
                         <span className='fw-bold color-blue fs-5'><input name='aa' type="radio" /> D</span>
                    </div>
                    <div className='text-center curser w-50 mx-auto bg-blue radios curser text-white addig-8'>
                    التالي
                    </div>
                </div>
            </div>
        </div>
    )
}
