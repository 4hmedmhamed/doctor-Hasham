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
<input type="text" name="name" /><br />
E-mail:<br />
<input type="text" name="mail" /><br />
Comment:<br />
<input type="text" name="comment" size="50" /><br /><br />
<input type="submit" value="Send" />
<input type="reset" value="Reset" />
</form> /

<p>post</p>
          <form action="mailto:someone@example.com " method="get"  enctype="multipart/form-data">
Name:<br />
<input type="text" name="name" /><br />
E-mail:<br />
<input type="text" name="mail" /><br />
Comment:<br />
<input type="text" name="comment" size="50" /><br /><br />
<input type="submit" value="Send" />
<input type="reset" value="Reset" />
</form> /
<p>get</p>
          <form action="mailto:someone@example.com " method="get"  enctype="multipart/form-data">
Name:<br />
<input type="text" name="name" /><br />
E-mail:<br />
<input type="text" name="mail" /><br />
Comment:<br />
<input type="text" name="comment" size="50" /><br /><br />
<input type="submit" value="Send" />
<input type="reset" value="Reset" />
</form> /

          
         
            
          </div>
        <div className='col-12 m-2'>

        </div>
          <div className='col-md-3  col-6'>
            <Link href={'https://www.facebook.com/share/USdGviMw2jHAcJ1i/?mibextid=qi2Omg'}>
            </Link>
           <Image src={face} 
           width={150}
           height={150}
           style={{borderRadius:"20px"}}>

           </Image>
          </div>
          <div className='col-md-3 col-6'>
            <Link href={'https://youtu.be/m-BqR-lU8RY?si=C_EAJAEb3rBNVPfz'}>
            </Link>
           <Image src={you} 
           width={150}
           height={150}
           style={{borderRadius:"20px"}}>

           </Image>
          </div>
          <div className='col-md-3 col-6'>
       
            <Link href={'tel:01066726667'}>
            </Link>
           <Image src={call} 
           width={150}
           height={150}
           style={{borderRadius:"20px"}}>

           </Image>
          </div>
          <div className='col-md-3 col-6'>
            <Link href={'https://api.whatsapp.com/send?phone=01066726667'}>
            </Link>
           <Image src={wath} 
           width={150}
           height={150}
           style={{borderRadius:"20px"}}
           >
             
           </Image>
          </div>
          <div className='col-12 m-2'>

        </div>
        </div>
      </Container>
    </div>
  )
}

export default page