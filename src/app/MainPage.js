import React from 'react'
import Image from 'next/image'
import first from "../../public/assit/banner-.png"
import banner from "../../public/assit/banner.webp"


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

    <div className='col-md-6'>
    <p className='d-none d-lg-block'>.</p>
    <p className='d-none d-lg-block'>.</p>
    <Image 
       src={first}
    //    width={"100%"}
    style={{
        width: '100%',
        height: '50vh',
      }}
       />
    </div>
    <div className='col-md-6 '>
   <div className='text-center'>
   <p className='d-none d-lg-block'>.</p>
   <p className='d-none d-lg-block'>.</p>
   <p className='d-none d-lg-block'>.</p>
   <h1 className=' title-banner' >مركز قصر النيل </h1>
   <h3 className='title-banner-third'>دكتور </h3>
   <h2 className='title-bnner-seconed'>هشام الشافعي</h2>
   <h2 className='title-bnner-seconed'>تخصص امرض نساء</h2>
   <h3 className='title-banner-third'>والتوليد وعلاج العقم </h3>
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