import React from 'react'
import { Container } from 'react-bootstrap'
import Image from 'next/image'
import Logo from "../../public/assit/logo.png"
import Link from 'next/link'
export const Footer = () => {
    return (
        <div style={{ backgroundColor: " #380751" }}  >
  
            <Container>

                <div style={{ backgroundColor: " #380751" }} >
                    <div className='row'>
                        <div className='col-md-6'>
                            <Image
                                src={Logo}
                                width={300}
                                height={150}
                                style={{
                                    width: '100%',
                                    borderRadius: "50%",
                                }}></Image>
                                <h2  className='text-light'>مركز قصر النيل للنساء والتوليد</h2>
                            <h3 className='text-light'>
                                عيادة نساء وتوليد و نمو الجنين، وأى مشاكل في الأجنة، ومتابعة الحمل الحرج، وعلاج عمليات العقم الأولي والثانوي
                            </h3>
                            <h3 className='text-light'>
                            . يقوم على إدارة المركز وهو دكتور / أسامة الشافعي 
ماجستير نساء وتوليد بكلية طب القصر العيني ويعمل في مستشفى الجلاء التعليمي وتعتبر تانى مستشفي للنساء والولادة على مستوي الجمهورية من حيث إدارة العمليات 
                            </h3>
                        </div>
                        <div className='col-md-2 text-center'>
                            <div className='m-3 border-bottom'>
                                <Link href={'/'} className='nav-item fs-3 mt-5'>الرئيسية</Link>
                            </div>
                            <div className='m-3 border-bottom'>
                            <Link href={'/about'} className='nav-item fs-3 m-5 '>من_نحن </Link>
                        </div>
                        <div className='m-3 border-bottom'>
                            <Link href={'/Oursrvies'} className='nav-item fs-3 m-5 '>خدماتنا </Link>
                        </div>
                        <div className='m-3 border-bottom'>
                            <Link href={'/'} className='nav-item fs-3 m-5 '>مميزاتنا</Link>
                        </div>
                        <div className='m-3 border-bottom'>
                            <Link href={'/'} className='nav-item fs-3 m-5 '>اخبار</Link>
                        </div>
                        <div className='m-3 border-bottom'>
                            <Link href={'/connet'} className='nav-item fs-3 my-5 '>تواصل_معانا</Link>
                        </div>
                        </div>
                        <div className='col-md-4'>
                        <div className='mt-3'>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3421.7232975658176!2d31.167332559839995!3d30.950291675191647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f7bb5be6b749dd%3A0xca61211e438e63e2!2z2YXYsdmD2LIg2YLYtdixINin2YTZhtmK2YQg2YTZhNmG2LPYp9ihINmI2KfZhNiq2YjZhNmK2K8!5e0!3m2!1sar!2seg!4v1722531984751!5m2!1sar!2seg" 
                            width="100%" height="300px" 
                             allowfullscreen="" 
                            loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                           
                             

                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}
