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

<form action="mailto:someone@example.com" method="post" enctype="text/plain">
<div className='row'>

<div className='col-md-6'>

<input type="text" className='form-control' name="name"  placeholder='الاسم'/><br/>
</div>
<div className='col-md-6'>

<input type="text" className='form-control' name="mail" placeholder='ادخل الايميل' /><br/>
</div>
<textarea  className='form-control h-100' name="comment" placeholder='ادخل الايميل'   >

</textarea>
</div>
<br />
<input type="submit" className='btn btn-primary' value="ارسال" />
</form>
      </div>

      </Container>
    </div>
  )
}

export default page