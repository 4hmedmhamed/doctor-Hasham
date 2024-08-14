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



  <form action="mailto:qasrelnil061@gmail.com" method="post" enctype="text/plain">
Name:<br />
<input type="text" name="name" className='form-control' /><br />
Name:<br />
<input type="text" name="address" className='form-control' /><br />
E-mail:<br />
<input type="text" name="mail" className='form-control' /><br />
E-mail:<br />
<input type="date" name="date" className='form-control' /><br />
Comment:<br />
<input type="text" name="comment" className='form-control'  size="100" /><br /><br />
<input type="submit" value="Send" className='btn btn-primary' />
{/* <input type="reset" value="Reset" /> */}
</form>
</div>
      </div>

      </Container>
    </div>
  )
}

export default page