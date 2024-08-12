import React from 'react'
import { Container } from 'react-bootstrap'
import Image from 'next/image'
import first from "../../public/assit/Our_advantages/11.jpg"
import { FaCheckCircle } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
function Aboute() {
  return (
    <Container>
      <div className='row mt-5 border-bottom'>
        <h2 className='text-center text-primary ' >من نحن</h2>
        <div className='col-md-6'>
          <div  className='mt-4'>
            <Image
              src={first}
              style={{
                width: '100%',
                height: '80vh',
                borderRadius: "20px",
                boxShadow: " rgba(0, 0, 0, 0.35) 5px 2px 5px 5px",
              }}
            ></Image>
          </div>
        </div>
        <div className='col-md-6 '>
          <h2 className='text-center mt-5  title-about'>
            مركز اقصر النيل
          </h2>
          <div className='d-flex'>
            <span className='icon-right'>
              < FaCheckCircle />
            </span>
            <h4 className='fs-4'>
              عيادة نساء وتوليد و نمو الجنين، وأى مشاكل في الأجنة، ومتابعة الحمل الحرج، وعلاج عمليات العقم الأولي والثانوي
            </h4>
          </div>
          <div className='d-flex'>
            <span className='icon-right'>
              < FaCheck />  
            </span>
            < p className=' text-about fs-5 text-muted'>-
              معمل تحاليل للسيدات لإجراء كافة التحاليل والفحوصات خلال فترة الحمل
              غرفة عمليات مجهزة بأحدث الأجهزة لإجراء عمليات كبرى للولادة الطبيعية والقيصرية
              المناظير الجراحية مثل عمليات استئصال الرحم بالمنظار
              مناظير العقم والأنابيب
              غرف للراحة بعد العميلة ( إقامة فندقية معقمة)
            </p>
          </div>
          <div className='d-flex'>
            <span className='icon-right'>
              < FaCheck />
            </span>
            <p className='text-about fs-5 text-muted '>{" "}
              علاج كافة مشكلات العقم وحالات تأخر الإنجاب عبر استخدام أحدث الآليات والتقنيات العلاجية المتميزة مثل الحقن المجهري، أطفال الأنابيب، زراعة الخلايا الجذعية، حفظ البويضات ,  تجميد السائل المنوي . التلقيح الصناعي
            </p>
          </div>
          <div className='d-flex'>
            <span className='icon-right'>
              < FaCheck />
            </span>
            <p className='text-about fs-5 text-muted '>-

            الدكتور يقوم على إدارة المركز وهو دكتور / أسامة الشافعي ماجستير نساء وتوليد بكلية طب القصر العيني ويعمل في مستشفى الجلاء التعليمي وتعتبر تانى مستشفي للنساء والولادة على مستوي الجمهورية من حيث إدارة العمليات
            </p>
          </div>
        </div>
        <div >
          <br></br>
          <br></br>
        </div>
      </div>
    </Container>
  )
}

export default Aboute