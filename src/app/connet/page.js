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




  <form action="mailto:qasrelnil061@gmail.com" method="get" >
Name:<br/>
<input type="text" name="name" /><br />
E-mail:<br />
<input type="text" name="mail" /><br />
Comment:<br />
<input type="text" name="comment" size="50" /><br /><br />
<input type="submit" value="Send" />
{/* <input type="reset" value="Reset" /> */}
</form>
</div>
      </div>

      </Container>
    </div>
  )
}

export default page