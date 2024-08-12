import React from 'react'
import { Container } from 'react-bootstrap'
import Image from 'next/image'
import first from "../../public/assit/2.jpg"
import sec from "../../public/assit/11.jpg"
import { FaCheckCircle } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
function Aboute() {
  return (
    <Container>
      <div className='row mt-5 border-bottom'>
        <h2 className='text-center text-primary ' >من نحن</h2>
        <div>


        </div>
        <div className='row'>

          <div className='col-md-12 d-block d-lg-none'>

            <div className='mt-4 ' style={{ position: "relative" }} >
              <Image
                src={first}
                style={{
                  width: '65%',
                  height: '80vh',
                  borderRadius: "20px",
                  boxShadow: " rgba(0, 0, 0, 0.35) 5px 2px 5px 5px",
                  position: "absolute",
                  // marginRight:"50%"
                  // zIndex:"1000"
                }}
              ></Image>
              <Image
                src={sec}
                style={{
                  position: "absolute",
                  marginTop: "20vh",
                  marginRight: "40%",
                  width: '60%',
                  height: '50vh',
                  borderRadius: "20px",
                  boxShadow: " rgba(0, 0, 0, 0.35) 5px 2px 5px 5px",
                }}
              ></Image>
            </div>
            <div className=' d-block d-lg-none' style={{height:"80vh"}}></div>
          </div>

          <div className='col-md-6'>

            <div className='row'>

              <div className='col-md-12'>

                <div className='mt-4 d-none d-lg-block' style={{ position: "relative" }} >
                  <Image
                    src={first}
                    style={{
                      width: '65%',
                      height: '80vh',
                      borderRadius: "20px",
                      boxShadow: " rgba(0, 0, 0, 0.35) 5px 2px 5px 5px",
                      position: "absolute",
                      // marginRight:"50%"
                      // zIndex:"1000"
                    }}
                  ></Image>
                  <Image
                    src={sec}
                    style={{
                      position: "absolute",
                      marginTop: "20vh",
                      marginRight: "40%",
                      width: '60%',
                      height: '50vh',
                      borderRadius: "20px",
                      boxShadow: " rgba(0, 0, 0, 0.35) 5px 2px 5px 5px",
                    }}
                  ></Image>
                </div>
              </div>
              <div className=''></div>
            </div>
          </div>
         

          <div className='col-lg-6 col-md-12 '>
            <h2 className='text-center mt-5  title-about'>
              مركز اقصر النيل
            </h2>
            <div className='d-flex'>
              <span className='icon-right'>
                < FaCheckCircle />
              </span>
              <h4 className='fs-4 m-1'>
                مركز قصر النيل التخصصي لجراحات النساء والتوليد وعلاج العقم ، تم افتتاحه عام 2014، ونقوم بتقديم الخدمات التالية:
              </h4>
            </div>
            <div className='d-flex'>
              <span className='icon-right'>
                < FaCheck />
              </span>
              < p className=' text-about fs-5 text-muted m-2'>
                لدينا عيادة نساء وتوليد مُجهزة بأحدث أجهزة الأشعة التلفزيونية والسونار وذلك  لمتابعة نمو الجنين، وفحص أى مشكلات في الأجنة، ومتابعة الحمل الحرج.
              </p>
            </div>
            <div className='d-flex'>
              <span className='icon-right'>
                < FaCheck />
              </span>
              <p className='text-about fs-5 text-muted m-2 '>
                وجود غرفة عمليات مجهزة بأحدث الأجهزة لإجراء عمليات الولادة الطبيعية والقيصرية.
              </p>
            </div>

            <div className='d-flex'>
              <span className='icon-right'>
                < FaCheck />
              </span>
              <p className='text-about fs-5 text-muted m-2'>
                وجود معمل تحليل متوفر فيه كافة التحاليل الطبية اللازمة ليكي خلال فترة الحمل.
              </p>
            </div>
            <div className='d-flex'>
              <span className='icon-right'>
                < FaCheck />
              </span>
              <p className='text-about fs-5 text-muted m-2'>
                .أستاف تمريضي مُدرب على أعلى مستوى وتحت إشراف د/ هشام الشافعي(إستشاري أمراض النساء والتوليد)
              </p>
            </div>
            <div className='d-flex'>
              <span className='icon-right'>
                < FaCheck />
              </span>
              <p className='text-about fs-5 text-muted m-2'>
                .إستخدام أحدث الأجهزة الطبية وأفضل التقنيات بغرف الأفاقة والسونار والمناظير.
              </p>
            </div>

            <div className='d-flex'>
              <span className='icon-right'>
                < FaCheck />
              </span>
              <p className='text-about fs-5 text-muted m-2 '>
                استخدام أفضل التقنيات الطبية لتقليل الآلام بعد الولادة
              </p>
            </div>

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