import React from 'react'
import Image from 'next/image'
import first from "../../public/assit/banner-.png"
import banner from "../../public/assit/banner/frist.jpg"
import doctor from "../../public/assit/banner/doctor.png"

import Oursrvies from './Oursrvies'

function MainPage() {
   return (
      <>
         <div className="main_div">
            <div className='imgbanner'>
               <Image
                  src={banner}
                  //    width={"100%"}
                  style={{
                     width: '100%',
                     height: '100vh',
                     // filter:' blur(100%)',
                  }}
               />
            </div>

            <div className="frist_banner  d-none d-lg-block">
            </div>
            <div className="sec-banner d-block d-sm-block d-lg-none">
            </div>
            <div className='title-banner-main'>
               <div className='row'>

                  <div className='col-md-8 '>
                     <div className='text-center '>
                        <p className='d-none d-lg-block'>
                           <br></br>
                           <br></br>
                           <br></br>
                           <br></br>
                           <br></br>
                           <br></br>
                        </p>

                        <h1 className=' title-banner ' >مركز قصر النيل </h1>
                        <h3 className='title-banner-third'>
                           لجراحات النساء والتوليد وعلاج العقم </h3>
                        <h2 className='title-bnner-seconed'> الدكتور هشام الشافعي</h2>
                        <h2 className='title-banner-third '>إستشاري  امرض نساء</h2>
                        <h3 className='title-banner-third '>والتوليد وعلاج العقم </h3>
                     </div>

                  </div>
                  <div className='col-md-4  '>
                  <p className='d-none d-lg-block'>
                           <br></br>
                           <br></br>
                           <br></br>
                        </p>
           
                     <div className=''>

                     <Image src={doctor}
                         style={{width:"100%" , height:"40%"}}

                     ></Image>
                     </div>
                  </div>

               </div>
            </div>
         </div>
      </>
   )
}

export default MainPage