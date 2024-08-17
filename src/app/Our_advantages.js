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

import Time from "../../public/assit/Our_advantages/pexels-rdne-6129111.jpg"
import Time_2 from "../../public/assit/Our_advantages/artical.jpg"
import Time_4 from "../../public/assit/Our_advantages/artical2.jpg"
import Time_3 from "../../public/assit/Our_advantages/artical3.jpg"
import { Container } from 'react-bootstrap'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { FaStar } from "react-icons/fa";
import Link from 'next/link'

function Our_advantages() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 6000,
    cssEase: "linear"
  };

  return (
    <div>
      <Container>

        <h5 className='text-center fs-2 mt-3 title-advantages'>
          مميزاتنا
        </h5>
        <div className='row border-bottom py-2'>
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
                  <p className='fs-5  m-4 mt-4  text-advantages'>
                    نخبة من أفضل أطباء .
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
                  <p className='fs-5 m-4  text-advantages'>
                    عيادة تسكين الألم والولادة بدون ألم
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
                  <p className='fs-5  m-4 mt-4  text-advantages'>
                    وجود أفضل أطباء تخدير
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
                  <p className='fs-5  m-4  text-advantages'>
                    التعقيم قبل العمليات وبعدها
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
                  <p className='fs-5 m-4  text-advantages'>
                    معمل تحاليل شامل في المركز بأقل الأسعار

                  </p>
                </div>
              </div>
            </div>


          </div>
        </div>
        <br></br>
        <br></br>


        <div className="slider-container" style={{ background: "gray" }}>
          <Slider {...settings}>
            <div className='text-center m-2'>
              <p className='border-bottom p-2  m-2 fs-5'>
                محمد شريف
              </p>
              <p>
                احسن دكتور هشام الشافعي شطار جدا ومبتحسيش بي اي حاجه
              </p>
            </div>
            <div className='text-center m-2'>
              <p className='border-bottom p-2  m-2 fs-5'>
                محمد شريف
              </p>
              <p>
                احسن دكتور هشام الشافعي شطار جدا ومبتحسيش بي اي حاجه
              </p>
            </div>
            <div className='text-center m-2'>
              <p className='border-bottom p-2  m-2 fs-5'>
                محمد شريف
              </p>
              <p>
                احسن دكتور هشام الشافعي شطار جدا ومبتحسيش بي اي حاجه
              </p>
            </div>
            <div className='text-center m-2'>
              <p className='border-bottom p-2  m-2 fs-5'>
                محمد شريف
              </p>
              <p>
                احسن دكتور هشام الشافعي شطار جدا ومبتحسيش بي اي حاجه
              </p>
            </div>
            <div className='text-center m-2'>
              <p className='border-bottom p-2  m-2 fs-5'>
                محمد شريف
              </p>
              <p>
                احسن دكتور هشام الشافعي شطار جدا ومبتحسيش بي اي حاجه
              </p>
            </div>
            <div className='text-center m-2'>
              <p className='border-bottom p-2  m-2 fs-5'>
                محمد شريف
              </p>
              <p>
                احسن دكتور هشام الشافعي شطار جدا ومبتحسيش بي اي حاجه
              </p>
            </div>
            <div className='text-center m-2'>
              <p className='border-bottom p-2  m-2 fs-5'>
                محمد شريف
              </p>
              <p>
                احسن دكتور هشام الشافعي شطار جدا ومبتحسيش بي اي حاجه
              </p>
            </div>
            <div className='text-center m-2'>
              <p className='border-bottom p-2  m-2 fs-5'>
                محمد شريف
              </p>
              <p>
                احسن دكتور هشام الشافعي شطار جدا ومبتحسيش بي اي حاجه
              </p>
            </div>


          </Slider>
        </div>
<br></br>
<br></br>
<br></br>
<br></br>

<div>
  <p className='text-center text-primary fs-3'>

اخبار
  </p>
</div>

        <div className="slider-container text-center" >
          <Slider {...settings}>
            <div className='m-4'>

            <Image
                src={Time_4}
                width={200}
                height={200}
                style={{
                  width: '95%',
                  borderRadius: "10px",
                  margin:"10px"
                }}
              ></Image>
              <Link href={'/'}>
              <p   className='text-primary'> ... 6 اكلات تزود حجم الجنين</p>
              </Link>
            </div>
            <div className='m-4'>

            <Image
                src={Time_2}
                width={200}
                height={200}
                style={{
                  width: '95%',
                  borderRadius: "10px",
                  margin:"10px"
                }}
              ></Image>
              <Link href={'/'}>
              <p   className='text-primary'> ... 6 اكلات تزود حجم الجنين</p>
              </Link>
            </div>
            <div className='m-4'>

            <Image
                src={Time_3}
                width={200}
                height={200}
                style={{
                  width: '95%',
                  borderRadius: "10px",
                  margin:"10px"
                }}
              ></Image>
              <Link href={'/'}>
              <p   className='text-primary'> ... 6 اكلات تزود حجم الجنين</p>
              </Link>
            </div>
          

          </Slider>
        </div>
      </Container>
      <br></br>
    </div>
  )
}

export default Our_advantages