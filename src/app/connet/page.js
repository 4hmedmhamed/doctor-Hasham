import React from 'react'
import { Accordion } from 'react-bootstrap/Accordion';
import { AccordionBody, Container } from 'react-bootstrap'
import Image from 'next/image';
import face from "../../../public/assit/socail/face.jpeg"
import you from "../../../public/assit/socail/youtube.png"
import wath from "../../../public/assit/socail/wath.jpeg"
import call from "../../../public/assit/socail/call.png"
import Link from 'next/link';


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

            <form action="mailto:someone@example.com" method="post" enctype="text/plain">
              Name:<br />
              <input type="text" name="name"  className='input-connect d-flex' /><br />
              E-mail:<br />
              <input type="text" name="mail" className='input-connect d-flex' /><br />
              date:<br />
              <input type="date" name="addres"  className='input-connect d-flex' /><br />
              adress:<br />
              <input type="text" name="adress" className='input-connect d-flex' /><br />
              Comment:<br />
              <input type="text" name="comment"  className='input-connect-text d-flex' /><br />
              <input type="submit" value="Send" className='connect-button' />
            </form>


            <form action="mailto:someone@example.com" method="post" enctype="text/plain">
Name:<br />
<input type="text" name="name" /><br />
E-mail:<br />
<input type="text" name="mail" /><br />
Comment:<br />
<input type="text" name="comment" size="50" /><br /><br />
<input type="submit" value="Send" />
<input type="reset" value="Reset" />
</form>




          </div>
          <div>
            <p className='fs-4'>كالتالي:
              مع مركز قصر النيل وداعا لآلام الولادة

              يوفر لك مركز قصر النيل لجراحات النساء والتوليد وعلاج
              العقم أفضل تجربة للولادة الطبيعية بإذن الله حيث تتسم بأنها:

              آمنة

              لمدة 20 دقيقة فقط
              <br></br>
              غير مؤلمة خاصة مع وجود أفضل طبيب تخدير على مستوى الجمهورية

              نستخدم أفضل التقنيات الطبية لتقليل الآلام بعد الولادة

            </p>
          </div>
          <div className='col-12 m-2'>

          </div>
        </div>
      </Container>
    </div>
  )
}

export default page