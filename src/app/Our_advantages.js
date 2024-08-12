"use client"
import Image from 'next/image'


import React from 'react'
import frist from "../../public/assit/Our_advantages/1231.jpg"
import Nursing from "../../public/assit/Our_advantages/Nursing.jpg"
import Anesthetist from "../../public/assit/Our_advantages/Anesthetist.jpg"
import children from "../../public/assit/Our_advantages/22.jpg"
import painkiller from "../../public/assit/Our_advantages/painkiller.jpg"
import clinck from "../../public/assit/Our_advantages/clinck.jpg"
import sterilization from "../../public/assit/Our_advantages/sterilization.jpg"
import surgery from "../../public/assit/Our_advantages/surgery.jpg"
import doctor from "../../public/assit/Our_advantages/doctor.jpg"
import { Container } from 'react-bootstrap'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { FaStar } from "react-icons/fa";

function Our_advantages() {
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };

  return (
    <div>
      <Container>

        <h5 className='text-center fs-2 mt-3 title-advantages'>
          مميزاتنا
        </h5>
        <div className='row border-bottom'>
          <div className='col-md-4 '>
            <div className='tabell mt-3 text-center  '>
              <div className='row'>
                <div className=' col-3'>
                  <div className=' m-2 tabell2'>
                  <Image
                src={Nursing}
                height={100}
                style={{
                  width: '100%',
                  borderRadius: "50%",
                }}
              ></Image>
                  </div>
                </div>
                <div className='col-8'>
                  <p className='fs-5 mt-2 m-2 mt-4  text-advantages'>
                    يوجد أستاف تمريضي  على أفضل مستوي
                  </p>
                </div>
              </div>
            </div>

            <div className='tabell1 mt-3 d-flex justify-content-center text-center'>
              <div className='row'>
                <div className=' col-3'>
                  <div className='tabell2 m-2'>
                  <Image
                src={children}
                height={100}
                style={{
                  width: '100%',
                  borderRadius: "50%",
                }}
              ></Image>
                  </div>
                </div>
                <div className='col-8'>
                  <p className='fs-5  m-2 mt-4  text-advantages'>
                  نخبة من أفضل أطباء الأطفال لإستقبال المواليد الجدد.
                  </p>
                </div>
              </div>
            </div>

            <div className='tabell mt-3 d-flex justify-content-center text-center'>
              <div className='row'>
                <div className=' col-3'>
                  <div className='tabell2 m-2'>
                  <Image
                src={painkiller}
                height={100}
                style={{
                  width: '100%',
                  borderRadius: "50%",
                }}
              ></Image>
                  </div>
                </div>
                <div className='col-8'>
                  <p className='fs-5 mt-2 m-2  text-advantages'>

                  عيادة تسكين الألام وولادة بدون ألم وجهاز بي سي ايه لتقليل الألام الولادة
                  </p>
                </div>
              </div>
            </div>
       
          </div>
          <div className='col-md-4'>
            <div className='mt-5'>
              <Image
                src={frist}
                width={400}
                height={400}
                style={{
                  width: '100%',
                  borderRadius: "50%",
                }}
              ></Image>
            </div>

          </div>
          <div className='col-md-4 '>
            <div className='tabell mt-3 text-center  '>
              <div className='row'>
                <div className=' col-3'>
                  <div className='tabell2 m-2'>
                  <Image
                src={Anesthetist}
                height={100}
                style={{
                  width: '100%',
                  borderRadius: "50%",
                }}
              ></Image>
                  </div>
                </div>
                <div className='col-8'>
                  <p className='fs-5 mt-2 m-2  text-advantages'>

                  .وجود طبيب تخدير من أفضل الأطباء علي مستوي الجمهورية

                  </p>
                </div>
              </div>
            </div>

            <div className='tabell1 mt-3 d-flex justify-content-center text-center'>
              <div className='row'>
                <div className=' col-3'>
                  <div className='tabell2 m-2'>
                  <Image
                src={sterilization}
                height={100}
                style={{
                  width: '100%',
                  borderRadius: "50%",
                }}
              ></Image>
                  </div>
                </div>
                <div className='col-8'>
                  <p className='fs-5 mt-2 m-2  text-advantages'>
                  التعقيم قبل العمليات وأثناء العمليات وبعدها، ومستوي النظافة عالي
                </p>
                </div>
              </div>
            </div>

            <div className='tabell1 mt-3 d-flex justify-content-center text-center'>
              <div className='row'>
                <div className=' col-3'>
                  <div className='tabell2 m-2'>
                  <Image
                src={clinck}
                height={100}
                style={{
                  width: '100%',
                  borderRadius: "50%",
                }}
              ></Image>
                  </div>
                </div>
                <div className='col-8'>
                  <p className='fs-5 mt-2 m-2  text-advantages'>
                  معمل تحليل  شامل يوفر كافة التحاليل اللازمة للمريضة خلال فترة الحمل.
                  </p>
                </div>
              </div>
            </div>

      
          </div>
        </div>
        <br></br>
        <br></br>

      
        {/* <div className='row fs-5 '> */}



        {/* </div> */}
      </Container>
      <br></br>
    </div>
  )
}

export default Our_advantages