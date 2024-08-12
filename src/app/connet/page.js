import React from 'react'
import {Accordion    }from 'react-bootstrap/Accordion';
import { AccordionBody, Container  }from 'react-bootstrap'

function page() {
  return (
    <div>

<div className='d-none d-sm-none d-lg-block'>

      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
</div>

      <div>

      </div>
      <Container>
      <div className='row'>
      <h2>
      مركز قصر النيل للنساء والتوليد
      </h2>
  <div className='border rounded'>


<form action="mailto:someone@example.com" method="get" >
<div className='row'>

<div className='col-md-6'>

<label>الاسم</label>
<input type="text" className='form-control' name="الاسم"  placeholder='الاسم'/><br/>
</div>
<div className='col-md-6'>
<label>ادخل الايميل</label>
<input type="email" className='form-control' name="الايميل" placeholder='ادخل الايميل' /><br/>
</div>
<div className='col-md-6'>
<label>التاريخ</label>
<input type="date" className='form-control' name="التاريخ" /><br/>
</div>
<div className='col-md-6'>
<label>العنوان</label>
<input type="text" className='form-control' name="العنوان" placeholder='العنوان ' /><br/>
</div>
<div className='col-md-12 '>
<span>للاستفسار </span>
<textarea  className='form-control h-100 ' name="comment" placeholder=''   >

</textarea>

</div>
</div>
<br />
<input type="submit" className='btn btn-primary' value="ارسال" />
</form>
</div>
      </div>

      </Container>
    </div>
  )
}

export default page