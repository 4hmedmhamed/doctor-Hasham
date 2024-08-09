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

import { FaStar } from "react-icons/fa";

function Our_advantages() {


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
                    يوجد أستاف تمريضي  على أفضل مستوي ,للتعامل مع المرضي
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
                  وجود أفضل أطباء للأطفال لإستقبال المواليد الجدد للتعامل معاهم
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
                  الأجهزة حديثة بأحدث التقنيات و معمل التحليل به كافة التحاليل اللازمة لتوفير الجهد للمريضة لعمل التحاليل الطبية
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

            <div className='tabell mt-3 d-flex justify-content-center text-center'>
              <div className='row'>
                <div className=' col-3'>
                  <div className='tabell2 m-2'>
                  <Image
                src={surgery}
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


                    
                الجراحة تكون تجميلية ولا يوجد مكان ظاهر للعملية مع قلة حدوث تلوث فى الجروح بعد العمليات
                    </p>
                </div>
              </div>
            </div>
            <div className='tabell1 mt-3 d-flex justify-content-center text-center'>
              <div className='row'>
                <div className=' col-3'>
                  <div className='tabell2 m-2'>
                  <Image
                src={doctor}
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
                   اداره متميزه من د
                   / أسامة الشافعي 
ماجستير نساء وتوليد  بطب القصر العيني ويعمل في مستشفى الجلاء التعليمي تعد من افضل المستشفيات   

                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br></br>
        <br></br>

      
        <div className='row fs-5 '>

          <div className=' text-center mt-3 col-md-3 d-flex justify-content-center'>
            <div className='border rounder customer-write' >
             <div>
               <h5 className='mt-2'>
              Hoda Alarabe
              </h5>
             </div>

              <div className='text-center mt-2 border-top'>
                <div className='  ' style={{ color: "#ffc107" }}>
                  < FaStar />
                  < FaStar />
                  < FaStar />
                  < FaStar />
                  < FaStar />
                </div>
                <div className='text-center '>
                  <p  >ربنا يبارك لنا فى حضرتك يا دكتور احسن واشطر دكتور من نجاح إلى نجاح يا،ب</p>
                </div>
              </div>
            </div>
          </div>



          <div className='  d-flex justify-content-center  text-center mt-3 col-md-3'>
            <div className='border rounder customer-write'>
             <div>
               <h5 className='mt-2'>
              Koky Reda
              </h5>
             </div>

              <div className='text-center mt-2 border-top'>
                <div className='  ' style={{ color: "#ffc107" }}>
                  < FaStar />
                  < FaStar />
                  < FaStar />
                  < FaStar />
                  < FaStar />
                </div>
                <div className='text-center '>
                  <p  >
                    دكتور هشام فضلت متابعة طول الحمل ولحظة الولادة كان مسافر شعور وحش اوي متمنهوش لحد خالص
                    </p>
                </div>
              </div>
            </div>
          </div>
          

          <div className='  d-flex justify-content-center  text-center mt-3 col-md-3'>
            <div className='border rounder customer-write'>
             <div>
               <h5 className='mt-2'>
              Nisreen Abd Elhamid
              </h5>
             </div>

              <div className='text-center mt-2 border-top'>
                <div className='  ' style={{ color: "#ffc107" }}>
                  < FaStar />
                  < FaStar />
                  < FaStar />
                  < FaStar />
                  < FaStar />
                </div>
                <div className='text-center '>
                  <p  >
                  كنت متوتره جدا و بعيط بس دكتور هشام و الممرضات طمنوني و هدوني و حقيقي كلكم في منتهي الذوق و ولدت الساعه ٧ الصبح و شغلتوا اغنية السبوع و البيبي خارج من الغرفه و انا وراه
                    </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className='  d-flex justify-content-center  text-center mt-3 col-md-3'>
            <div className='border rounder customer-write'>
             <div>
               <h5 className='mt-2'>
              Doaa Hashem
              </h5>
             </div>

              <div className='text-center mt-2 border-top'>
                <div className='  ' style={{ color: "#ffc107" }}>
                  < FaStar />
                  < FaStar />
                  < FaStar />
                  < FaStar />
                  < FaStar />
                </div>
                <div className='text-center '>
                  <p  >
                  فضل وانضف مركز ولادة واشطر دكتور نسا ف المحله بصراحة 
                    </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className='  d-flex justify-content-center  text-center mt-3 col-md-3'>
            <div className='border rounder customer-write'>
             <div>
               <h5 className='mt-2'>
              Manal Felfela
              </h5>
             </div>

              <div className='text-center mt-2 border-top'>
                <div className='  ' style={{ color: "#ffc107" }}>
                  < FaStar />
                  < FaStar />
                  < FaStar />
                  < FaStar />
                  < FaStar />
                </div>
                <div className='text-center '>
                  <p  >
                  حضرتك نسيت اهم حاجه وهي حضرتك يادكتور اشطر وامهر دكتور في المحله غير الذوق والأخلاق ومراعاه ظروف الناس
                    </p>
                </div>
              </div>
            </div>
          </div>
          
          
          <div className='  d-flex justify-content-center  text-center mt-3 col-md-3'>
            <div className='border rounder customer-write'>
             <div>
               <h5 className='mt-2'>
              Hoda Alarabe
              </h5>
             </div>

              <div className='text-center mt-2 border-top'>
                <div className='  ' style={{ color: "#ffc107" }}>
                  < FaStar />
                  < FaStar />
                  < FaStar />
                  < FaStar />
                  < FaStar />
                </div>
                <div className='text-center '>
                  <p  >

                  احسن مركز واشطر دكتور ربنا ياركلنا فى حضرتك وشكرا لحترامك وزوقك مهما نوصفك مش هنقدر نوفى حقك يا دكتور
                    </p>
                </div>
              </div>
            </div>
          </div>


          <div className='  d-flex justify-content-center  text-center mt-3 col-md-3'>
            <div className='border rounder customer-write'>
             <div>
               <h5 className='mt-2'>
              Abo Ali AlAwadi
              </h5>
             </div>

              <div className='text-center mt-2 border-top'>
                <div className='  ' style={{ color: "#ffc107" }}>
                  < FaStar />
                  < FaStar />
                  < FaStar />
                  < FaStar />
                  < FaStar />
                </div>
                <div className='text-center '>
                  <p  >

                  ربنا يبارك ف حضرتك افضل واحسن دكتور ف المحلة وبالتوفيق وان شاء الله يكون اكبر مركز ف المحلة والغربية كلها
                    </p>
                </div>
              </div>
            </div>
          </div>
          <div className='  d-flex justify-content-center  text-center mt-3 col-md-3'>
            <div className='border rounder customer-write'>
             <div>
               <h5 className='mt-2'>
              Shymaa El Shahawy
              </h5>
             </div>

              <div className='text-center mt-2 border-top'>
                <div className='  ' style={{ color: "#ffc107" }}>
                  < FaStar />
                  < FaStar />
                  < FaStar />
                  < FaStar />
                  < FaStar />
                </div>
                <div className='text-center '>
                  <p  >

                  ربنا يبارك لحضرتك اشطر دكتور عن تجربه مرتين

                    </p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </Container>
      <br></br>
    </div>
  )
}

export default Our_advantages