import React from 'react'
import back1 from '../images/back.png'
import back2 from '../images/back1.png'
import back3 from '../images/back2.png'
import back4 from '../images/back3.png'
import log from '../images/التسجيل.png'
import btnlog from '../images/Frame 39.png'
import icon1 from '../images/icon1.svg'
import icon2 from '../images/icon2.svg'
import icon3 from '../images/icon3.png'
import {Link} from 'react-router-dom'
import '../App.css'
export default function Log1() {
  return (
    <div className='open open-1 pt-5'>
        <img src={back1} alt="" className="back1" />
       <img src={back2} alt="" className="back2" />
       <img src={back3} alt="" className="back3" />
       <img src={back4} alt="" className="back4" />
       <div className="log text-center">
          <img src={log} alt="" className='mb-5'/>
          <input type="text" className='w-100' placeholder='ادخل الاسم'/>
          <input type="text" className='w-100' placeholder='ادخل البريد الالكتروني'/>
          <input type="text" className='w-100' placeholder='ادخل رقم الهاتف'/>
          <input type="text" className='w-100' placeholder='ادخل تاريخ الميلاد'/>
          <select class="form-select input" aria-label="Default select example">
  <option selected>ذكر</option>
  <option value="1">انثى</option>
</select>
          <input type="password" className='w-100' placeholder='ادخل كلمة المرور'/>
          <input type="password" className='w-100 mb-5' placeholder='تأكيد كلمة المرور'/>
          <Link to='/log2'><img src={btnlog} alt="" className='curser mb-3'/></Link>
          <h6 className='mb-3'>او</h6>
          <div className="d-flex mb-3 justify-content-center align-items-center gap-3">
              <img src={icon1} alt=""></img>
              <img src={icon2} alt=""></img>
              <img src={icon3} alt=""></img>
          </div>
          <p>لدي حساب بالفعل؟<span className='curser green'> تسجيل الدخول</span></p>
       </div>
    </div>
  )
}
