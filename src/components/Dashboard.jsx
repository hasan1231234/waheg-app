import React from 'react'
import iconNav1 from '../images/iconNav1.png'
import iconNav2 from '../images/iconNav2.png'
import iconNav3 from '../images/iconNav3.png'
import iconNav4 from '../images/iconNav4.png'
import iconNav5 from '../images/iconNav5.png'
import iconNav6 from '../images/iconNav6.png'
import iconNav7 from '../images/iconNav7.png'
import { Link } from 'react-router-dom'
export default function Dashboard() {
  return (
    <div className='dash'>
       <div className='d-flex flex-column gap-5 align-items-center justify-content-center'>
            <Link to='dash2'><img src={iconNav1} alt="" className='curser mb-5'/></Link>
            <img src={iconNav2} alt="" className='curser'/>
            <img src={iconNav3} alt="" className='curser'/>
            <img src={iconNav4} alt="" className='curser'/>
            <img src={iconNav5} alt="" className='curser'/>
            <img src={iconNav6} alt="" className='curser'/>
            <img src={iconNav7} alt="" className='curser'/>
       </div>
    </div>
  )
}
