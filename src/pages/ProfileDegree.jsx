import React, { useState } from 'react'
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
import imgCard3 from '../images/cor1.png'
import textCard3 from '../images/cor2.png'
import imgCard from '../images/imgCard.png'
import textimgCard from '../images/textimgCard.png'
import text4 from '../images/kdrat.png'
import percent from '../images/percent.png'
import test1 from '../images/Frame 1000004549.png'
import bottom from '../images/bottom.png'
import answer from '../images/الاجابات.png'
import truee from '../images/Frame 1000004646.png'
import falsee from '../images/ERROR.png'
import test2 from '../images/test-2.png'
import test3 from '../images/test-3.png'
import test4 from '../images/test-4.png'
export default function ProfileDegree() {
  const [style1 , setStyle1] = useState('none')
  const open = () => {
    if(style1 === 'none'){
      setStyle1('block')
    }else{
      setStyle1('none')
    }
  }

  const [style2 , setStyle2] = useState('none')
  const open2 = () => {
    if(style2 === 'none'){
      setStyle2('block')
    }else{
      setStyle2('none')
    }
  }


  const [style3 , setStyle3] = useState('none')
  const open3 = () => {
    if(style3 === 'none'){
      setStyle3('block')
    }else{
      setStyle3('none')
    }
  }


  const [style4 , setStyle4] = useState('none')
  const open4 = () => {
    if(style4 === 'none'){
      setStyle4('block')
    }else{
      setStyle4('none')
    }
  }
  return (
    <div className='d-flex flex-row-reverse'>
      <Outlet />
      <div className='right-section'>
        <div className='d-flex justify-content-between align-items-center w-100'>
          <div className='d-flex align-items-center gap-3'>
            <img src={iconBill} alt="" />
            <img src={iconCart} alt="" />
          </div>
          <div className="d-flex align-items-center gap-3">
            <img src={text1} alt="" />
            <Link to={-1}><img src={backto} alt="" width='48' height='48' className='curser' /></Link>
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
        <div className='d-flex align-items-center gap-3'>
          <div className="card-datils box-degree d-flex flex-column  gap-5">
            <img src={imgCard3} alt="" width='88' height='88' className='ml-auto' />
            <div className='d-flex align-items-center justify-content-between'>
              <span className='spanCard spanCard-1'>يومين في الاسبوع</span>
              <img src={textCard3} alt="" width='87' height='24' />
            </div>
          </div>
          <div className="card w-100 d-flex box-degree align-items-center flex-row-reverse justify-content-between">
            <div className="d-flex gap-3 float-right flex-row-reverse">
              <img src={imgCard} alt="" width="184" height="184" />
              <div className='d-flex flex-column justify-content-between'>
                <img src={textimgCard} alt="" />
                <div dir='rtl' className="d-flex flex-column">
                  <img src={text4} alt="" />
                  <span className='text-secondary'>4 دروس</span>
                  <span className='text-secondary'>ساعة</span>
                </div>
              </div>
            </div>

            <img src={percent} alt="" width="184" height="184" />
          </div>

        </div>
        <div dir='rtl' className='test-div my-3'>
          <img src={test1} alt="" />
          <div class="progress mt-3 " dir='rtl'>
            <div class="progress-bar w-65 accent-color" >65%</div>
          </div>
          <div className="d-flex align-items-center justify-content-between">
              <span className='text-success'>65% مكتملة</span>
              <span className='text-success'>35% متبقية</span>
          </div> 
          <div className="d-flex align-items-center mt-3 justify-content-between">
            <img src={answer} alt="" />
              <img src={bottom} alt="" className='curser' onClick={() => open()}/>
          </div>
          <ul className={style1}>
            <li className='d-flex align-items-center justify-content-between w-100 li-test position-relative'>
              <span className='fw-bold'>السؤال 1</span>
              <span className='answer'>B</span>
               <img src={truee} alt="" />
            </li>
            <li className='d-flex align-items-center justify-content-between w-100 li-test position-relative'>
              <span className='fw-bold'>السؤال 2</span>
              <span className='answer'>B</span>
               <img src={truee} alt="" />
            </li>
            <li className='d-flex align-items-center justify-content-between w-100 li-test position-relative'>
              <span className='fw-bold'>السؤال 3</span>
              <span className='answer'>A</span>
               <img src={falsee} alt="" />
            </li>
            <li className='d-flex align-items-center justify-content-between w-100 li-test position-relative'>
              <span className='fw-bold'>السؤال 4</span>
              <span className='answer'>B</span>
               <img src={truee} alt="" />
            </li>
            <li className='d-flex align-items-center justify-content-between w-100 li-test position-relative'>
              <span className='fw-bold'>السؤال 5</span>
              <span className='answer'>B</span>
               <img src={truee} alt="" />
            </li>
            <li className='d-flex align-items-center justify-content-between w-100 li-test position-relative'>
              <span className='fw-bold'>السؤال 6</span>
              <span className='answer'>B</span>
               <img src={truee} alt="" />
            </li>
            <li className='d-flex align-items-center justify-content-between w-100 li-test position-relative'>
              <span className='fw-bold'>السؤال 7</span>
              <span className='answer'>C</span>
               <img src={falsee} alt="" />
            </li>
            <li className='d-flex align-items-center justify-content-between w-100 li-test position-relative'>
              <span className='fw-bold'>السؤال 8</span>
              <span className='answer'>D</span>
               <img src={truee} alt="" />
            </li>
            <li className='d-flex align-items-center justify-content-between w-100 li-test position-relative'>
              <span className='fw-bold'>السؤال 9</span>
              <span className='answer'>B</span>
               <img src={truee} alt="" />
            </li>
            <li className='d-flex align-items-center justify-content-between w-100 li-test position-relative'>
              <span className='fw-bold'>السؤال 10</span>
              <span className='answer'>B</span>
               <img src={falsee} alt="" />
            </li>
            <li className='d-flex align-items-center justify-content-between w-100 li-test position-relative'>
              <span className='fw-bold'>السؤال 11</span>
              <span className='answer'>A</span>
               <img src={truee} alt="" />
            </li>
            <li className='d-flex align-items-center justify-content-between w-100 li-test position-relative'>
              <span className='fw-bold'>السؤال 12</span>
              <span className='answer'>E</span>
               <img src={truee} alt="" />
            </li>
          </ul>
        </div>
        <div dir='rtl' className='test-div my-3'>
          <img src={test2} alt="" />
          <div class="progress mt-3 " dir='rtl'>
            <div class="progress-bar w-65 accent-color" >65%</div>
          </div>
          <div className="d-flex align-items-center justify-content-between">
              <span className='text-success'>65% مكتملة</span>
              <span className='text-success'>35% متبقية</span>
          </div> 
          <div className="d-flex align-items-center mt-3 justify-content-between">
            <img src={answer} alt="" />
              <img src={bottom} alt="" className='curser' onClick={() => open2()}/>
          </div>
          <ul className={style2}>
            <li className='d-flex align-items-center justify-content-between w-100 li-test position-relative'>
              <span className='fw-bold'>السؤال 1</span>
              <span className='answer'>B</span>
               <img src={truee} alt="" />
            </li>
            <li className='d-flex align-items-center justify-content-between w-100 li-test position-relative'>
              <span className='fw-bold'>السؤال 2</span>
              <span className='answer'>B</span>
               <img src={truee} alt="" />
            </li>
            <li className='d-flex align-items-center justify-content-between w-100 li-test position-relative'>
              <span className='fw-bold'>السؤال 3</span>
              <span className='answer'>A</span>
               <img src={falsee} alt="" />
            </li>
            <li className='d-flex align-items-center justify-content-between w-100 li-test position-relative'>
              <span className='fw-bold'>السؤال 4</span>
              <span className='answer'>B</span>
               <img src={truee} alt="" />
            </li>
            <li className='d-flex align-items-center justify-content-between w-100 li-test position-relative'>
              <span className='fw-bold'>السؤال 5</span>
              <span className='answer'>B</span>
               <img src={truee} alt="" />
            </li>
            <li className='d-flex align-items-center justify-content-between w-100 li-test position-relative'>
              <span className='fw-bold'>السؤال 6</span>
              <span className='answer'>B</span>
               <img src={truee} alt="" />
            </li>
            <li className='d-flex align-items-center justify-content-between w-100 li-test position-relative'>
              <span className='fw-bold'>السؤال 7</span>
              <span className='answer'>C</span>
               <img src={falsee} alt="" />
            </li>
            <li className='d-flex align-items-center justify-content-between w-100 li-test position-relative'>
              <span className='fw-bold'>السؤال 8</span>
              <span className='answer'>D</span>
               <img src={truee} alt="" />
            </li>
            <li className='d-flex align-items-center justify-content-between w-100 li-test position-relative'>
              <span className='fw-bold'>السؤال 9</span>
              <span className='answer'>B</span>
               <img src={truee} alt="" />
            </li>
            <li className='d-flex align-items-center justify-content-between w-100 li-test position-relative'>
              <span className='fw-bold'>السؤال 10</span>
              <span className='answer'>B</span>
               <img src={falsee} alt="" />
            </li>
            <li className='d-flex align-items-center justify-content-between w-100 li-test position-relative'>
              <span className='fw-bold'>السؤال 11</span>
              <span className='answer'>A</span>
               <img src={truee} alt="" />
            </li>
            <li className='d-flex align-items-center justify-content-between w-100 li-test position-relative'>
              <span className='fw-bold'>السؤال 12</span>
              <span className='answer'>E</span>
               <img src={truee} alt="" />
            </li>
          </ul>
        </div>
        <div dir='rtl' className='test-div my-3'>
          <img src={test3} alt="" />
          <div class="progress mt-3 " dir='rtl'>
            <div class="progress-bar w-65 accent-color" >65%</div>
          </div>
          <div className="d-flex align-items-center justify-content-between">
              <span className='text-success'>65% مكتملة</span>
              <span className='text-success'>35% متبقية</span>
          </div> 
          <div className="d-flex align-items-center mt-3 justify-content-between">
            <img src={answer} alt="" />
              <img src={bottom} alt="" className='curser' onClick={() => open3()}/>
          </div>
          <ul className={style3}>
            <li className='d-flex align-items-center justify-content-between w-100 li-test position-relative'>
              <span className='fw-bold'>السؤال 1</span>
              <span className='answer'>B</span>
               <img src={truee} alt="" />
            </li>
            <li className='d-flex align-items-center justify-content-between w-100 li-test position-relative'>
              <span className='fw-bold'>السؤال 2</span>
              <span className='answer'>B</span>
               <img src={truee} alt="" />
            </li>
            <li className='d-flex align-items-center justify-content-between w-100 li-test position-relative'>
              <span className='fw-bold'>السؤال 3</span>
              <span className='answer'>A</span>
               <img src={falsee} alt="" />
            </li>
            <li className='d-flex align-items-center justify-content-between w-100 li-test position-relative'>
              <span className='fw-bold'>السؤال 4</span>
              <span className='answer'>B</span>
               <img src={truee} alt="" />
            </li>
            <li className='d-flex align-items-center justify-content-between w-100 li-test position-relative'>
              <span className='fw-bold'>السؤال 5</span>
              <span className='answer'>B</span>
               <img src={truee} alt="" />
            </li>
            <li className='d-flex align-items-center justify-content-between w-100 li-test position-relative'>
              <span className='fw-bold'>السؤال 6</span>
              <span className='answer'>B</span>
               <img src={truee} alt="" />
            </li>
            <li className='d-flex align-items-center justify-content-between w-100 li-test position-relative'>
              <span className='fw-bold'>السؤال 7</span>
              <span className='answer'>C</span>
               <img src={falsee} alt="" />
            </li>
            <li className='d-flex align-items-center justify-content-between w-100 li-test position-relative'>
              <span className='fw-bold'>السؤال 8</span>
              <span className='answer'>D</span>
               <img src={truee} alt="" />
            </li>
            <li className='d-flex align-items-center justify-content-between w-100 li-test position-relative'>
              <span className='fw-bold'>السؤال 9</span>
              <span className='answer'>B</span>
               <img src={truee} alt="" />
            </li>
            <li className='d-flex align-items-center justify-content-between w-100 li-test position-relative'>
              <span className='fw-bold'>السؤال 10</span>
              <span className='answer'>B</span>
               <img src={falsee} alt="" />
            </li>
            <li className='d-flex align-items-center justify-content-between w-100 li-test position-relative'>
              <span className='fw-bold'>السؤال 11</span>
              <span className='answer'>A</span>
               <img src={truee} alt="" />
            </li>
            <li className='d-flex align-items-center justify-content-between w-100 li-test position-relative'>
              <span className='fw-bold'>السؤال 12</span>
              <span className='answer'>E</span>
               <img src={truee} alt="" />
            </li>
          </ul>
        </div>
        <div dir='rtl' className='test-div my-3'>
          <img src={test4} alt="" />
          <div class="progress mt-3 " dir='rtl'>
            <div class="progress-bar w-65 accent-color" >65%</div>
          </div>
          <div className="d-flex align-items-center justify-content-between">
              <span className='text-success'>65% مكتملة</span>
              <span className='text-success'>35% متبقية</span>
          </div> 
          <div className="d-flex align-items-center mt-3 justify-content-between">
            <img src={answer} alt="" />
              <img src={bottom} alt="" className='curser' onClick={() => open4()}/>
          </div>
          <ul className={style4}>
            <li className='d-flex align-items-center justify-content-between w-100 li-test position-relative'>
              <span className='fw-bold'>السؤال 1</span>
              <span className='answer'>B</span>
               <img src={truee} alt="" />
            </li>
            <li className='d-flex align-items-center justify-content-between w-100 li-test position-relative'>
              <span className='fw-bold'>السؤال 2</span>
              <span className='answer'>B</span>
               <img src={truee} alt="" />
            </li>
            <li className='d-flex align-items-center justify-content-between w-100 li-test position-relative'>
              <span className='fw-bold'>السؤال 3</span>
              <span className='answer'>A</span>
               <img src={falsee} alt="" />
            </li>
            <li className='d-flex align-items-center justify-content-between w-100 li-test position-relative'>
              <span className='fw-bold'>السؤال 4</span>
              <span className='answer'>B</span>
               <img src={truee} alt="" />
            </li>
            <li className='d-flex align-items-center justify-content-between w-100 li-test position-relative'>
              <span className='fw-bold'>السؤال 5</span>
              <span className='answer'>B</span>
               <img src={truee} alt="" />
            </li>
            <li className='d-flex align-items-center justify-content-between w-100 li-test position-relative'>
              <span className='fw-bold'>السؤال 6</span>
              <span className='answer'>B</span>
               <img src={truee} alt="" />
            </li>
            <li className='d-flex align-items-center justify-content-between w-100 li-test position-relative'>
              <span className='fw-bold'>السؤال 7</span>
              <span className='answer'>C</span>
               <img src={falsee} alt="" />
            </li>
            <li className='d-flex align-items-center justify-content-between w-100 li-test position-relative'>
              <span className='fw-bold'>السؤال 8</span>
              <span className='answer'>D</span>
               <img src={truee} alt="" />
            </li>
            <li className='d-flex align-items-center justify-content-between w-100 li-test position-relative'>
              <span className='fw-bold'>السؤال 9</span>
              <span className='answer'>B</span>
               <img src={truee} alt="" />
            </li>
            <li className='d-flex align-items-center justify-content-between w-100 li-test position-relative'>
              <span className='fw-bold'>السؤال 10</span>
              <span className='answer'>B</span>
               <img src={falsee} alt="" />
            </li>
            <li className='d-flex align-items-center justify-content-between w-100 li-test position-relative'>
              <span className='fw-bold'>السؤال 11</span>
              <span className='answer'>A</span>
               <img src={truee} alt="" />
            </li>
            <li className='d-flex align-items-center justify-content-between w-100 li-test position-relative'>
              <span className='fw-bold'>السؤال 12</span>
              <span className='answer'>E</span>
               <img src={truee} alt="" />
            </li>
          </ul>
        </div>

      </div>
    </div>
  )
}
