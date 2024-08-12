import React from 'react'
import Image from 'next/image'
import first from "../../public/assit/banner-.png"
import banner from "../../public/assit/banner.webp"

import Oursrvies from './Oursrvies'

function MainPage() {
   return (
      <>
         <div>

            <p className='d-none d-lg-block'>.</p>
            <p className='d-none d-lg-block'>.</p>

            <div className='row back' >


               <div className='col-md-12'>
                  <div class="position-relative">

                     <div class="position-absolute  back" >
                        <div
                           className='row'>
                           <div className='col-md-4 '>
                              <div className='text-center'>
                                 <p className='d-none d-lg-block'>
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                 </p>

                                 <h1 className=' title-banner ' >مركز قصر النيل </h1>
                                 <h3 className='title-banner-third'>
                                    لجراحات النساء والتوليد والعقم </h3>
                                 <h2 className='title-bnner-seconed'> الدكتور هشام الشافعي</h2>
                                 <h2 className='title-bnner-seconed d-none d-lg-block'>إستشاري  امرض نساء</h2>
                                 <h3 className='title-banner-third d-none d-lg-block'>والتوليد وعلاج العقم </h3>
                              </div>

                           </div>
                           <div className='col-md-1'>
                              <div className=' d-block d-lg-none'>
                                 <br></br>
                                 <br></br>
                                 <br></br>
                                 <br></br>
                                 <br></br>
                                 <br></br>
                                 <br></br>
                                 <br></br>
                                 <br></br>
                                 <br></br>
                              </div>
                           </div>
                           <div className='col-md-6 '>
                              <div className='text-center'>
                                 <p className='d-none d-lg-block'>
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                 </p>

                                 <h1 className=' title-banner' >ولاده في  20 دقيقه</h1>
                                 <h3 className='title-banner-third'>
                                    بدون الم </h3>
                                 <h2 className='title-bnner-seconed d-none d-lg-block'> الدكتور هشام الشافعي</h2>

                              </div>

                           </div>


                        </div>
                     </div>

                  </div>
                  <Image
                     src={banner}
                     //    width={"100%"}
                     style={{
                        width: '100%',
                        height: '96vh',
                     }}
                  />


               </div>

            </div>
         </div>
      </>
   )
}

export default MainPage