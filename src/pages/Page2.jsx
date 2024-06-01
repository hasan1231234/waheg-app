import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import iconBill from '../images/iconBill.png'
import iconCart from '../images/iconCart.png'
import text1 from '../images/القدرات.png'
import backto from '../images/backto.png'
import iconSearch from '../images/iconSearch.png'
import text4 from '../images/text4.png'
import imgCard from '../images/imgCard.png'
import textimgCard from '../images/textimgCard.png'

export default function Page2() {
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
                   <Link to='/home'><img src={backto} alt="" width='48' height='48' className='curser'/></Link>
               </div>
    </div>
    <div className='d-flex justify-content-between align-items-center my-5 bg-blue w-100 search'>
    <div className='d-flex align-items-center gap-3'>
         <div class="dropdown bg-blue">
  <button class="btn btn-secondary dropdown-toggle bg-blue" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
  المحاضرين &nbsp;
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>
<div class="dropdown bg-blue">
  <button class="btn btn-secondary dropdown-toggle bg-blue" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
  الثانوية العامة &nbsp;
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>
<div class="dropdown bg-blue">
  <button class="btn btn-secondary dropdown-toggle bg-blue" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
  المواد &nbsp;
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>
<div class="dropdown bg-blue">
  <button class="btn btn-secondary dropdown-toggle bg-blue" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
  السعر &nbsp;
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>

         </div>
        <img src={iconSearch} alt="" />

    </div>
    <div className="d-flex flex-wrap justify-content-between w-100">
               <Link to='/datilse'>    <div className="card card-2">
                  <div className="d-flex gap-3 float-right flex-row-reverse">
                     <img src={imgCard} alt="" />
                     <img src={textimgCard} alt="" />
                  </div>
                  <div className="text-card">
                     <div className="d-flex flex-column text-center">
                        <img src={text4} alt="" />
                        <p className='light m-0'>4 دروس</p>
                        <p className='light m-0'>ساعة</p>
                     </div>
                  </div>
                </div></Link>
                <Link to='/datilse'>    <div className="card card-2">
                  <div className="d-flex gap-3 float-right flex-row-reverse">
                     <img src={imgCard} alt="" />
                     <img src={textimgCard} alt="" />
                  </div>
                  <div className="text-card">
                     <div className="d-flex flex-column text-center">
                        <img src={text4} alt="" />
                        <p className='light m-0'>4 دروس</p>
                        <p className='light m-0'>ساعة</p>
                     </div>
                  </div>
                </div></Link>
                <Link to='/datilse'>    <div className="card card-2">
                  <div className="d-flex gap-3 float-right flex-row-reverse">
                     <img src={imgCard} alt="" />
                     <img src={textimgCard} alt="" />
                  </div>
                  <div className="text-card">
                     <div className="d-flex flex-column text-center">
                        <img src={text4} alt="" />
                        <p className='light m-0'>4 دروس</p>
                        <p className='light m-0'>ساعة</p>
                     </div>
                  </div>
                </div></Link>
                <Link to='/datilse'>    <div className="card card-2">
                  <div className="d-flex gap-3 float-right flex-row-reverse">
                     <img src={imgCard} alt="" />
                     <img src={textimgCard} alt="" />
                  </div>
                  <div className="text-card">
                     <div className="d-flex flex-column text-center">
                        <img src={text4} alt="" />
                        <p className='light m-0'>4 دروس</p>
                        <p className='light m-0'>ساعة</p>
                     </div>
                  </div>
                </div></Link>
                <Link to='/datilse'>    <div className="card card-2">
                  <div className="d-flex gap-3 float-right flex-row-reverse">
                     <img src={imgCard} alt="" />
                     <img src={textimgCard} alt="" />
                  </div>
                  <div className="text-card">
                     <div className="d-flex flex-column text-center">
                        <img src={text4} alt="" />
                        <p className='light m-0'>4 دروس</p>
                        <p className='light m-0'>ساعة</p>
                     </div>
                  </div>
                </div></Link>
                <Link to='/datilse'>    <div className="card card-2">
                  <div className="d-flex gap-3 float-right flex-row-reverse">
                     <img src={imgCard} alt="" />
                     <img src={textimgCard} alt="" />
                  </div>
                  <div className="text-card">
                     <div className="d-flex flex-column text-center">
                        <img src={text4} alt="" />
                        <p className='light m-0'>4 دروس</p>
                        <p className='light m-0'>ساعة</p>
                     </div>
                  </div>
                </div></Link>
                <Link to='/datilse'>    <div className="card card-2">
                  <div className="d-flex gap-3 float-right flex-row-reverse">
                     <img src={imgCard} alt="" />
                     <img src={textimgCard} alt="" />
                  </div>
                  <div className="text-card">
                     <div className="d-flex flex-column text-center">
                        <img src={text4} alt="" />
                        <p className='light m-0'>4 دروس</p>
                        <p className='light m-0'>ساعة</p>
                     </div>
                  </div>
                </div></Link>
                <Link to='/datilse'>    <div className="card card-2">
                  <div className="d-flex gap-3 float-right flex-row-reverse">
                     <img src={imgCard} alt="" />
                     <img src={textimgCard} alt="" />
                  </div>
                  <div className="text-card">
                     <div className="d-flex flex-column text-center">
                        <img src={text4} alt="" />
                        <p className='light m-0'>4 دروس</p>
                        <p className='light m-0'>ساعة</p>
                     </div>
                  </div>
                </div></Link>
                
    </div>
    </div>
</div>
  )
}
