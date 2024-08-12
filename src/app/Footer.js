import React from 'react'
import { Container } from 'react-bootstrap'
import Image from 'next/image'
import Logo from "../../public/assit/logo.png"
import Link from 'next/link'
export const Footer = () => {
    return (
        <div style={{ backgroundColor: " #380751" }}  >
  
            <Container>

                <div style={{ backgroundColor: " #380751"  }} >
                    <div className='row'>
                        <div className='col-md-4'>
                            <Image
                                src={Logo}
                                width={300}
                                height={150}
                                style={{
                                    width: '100%',
                                    borderRadius: "50%",
                                }}></Image>
                                <h5  className='text-light fs-5'> تواصل نعانا </h5>
                                <h5  className='text-light '> هاتف </h5>
                                <div className='d-flex'> 
                                <p><a href="tel:01066726667  " className='text-light  border-bottom m-2'>01066726667</a></p>
                                <p><a href="tel:0402081860  " className='text-light  border-bottom m-2'>0402081860</a></p>
                                </div>
                                <h5  className='text-light '> Email </h5>
                                <div className='d-flex'> 
                                <p><a href="mailto:qasrelnil061@gmail.com"  className='text-light  border-bottom m-2'> qasrelnil061@gmail.com</a></p>
                                </div>
                        </div>
                    
                        <div className='col-md-4'>
                            <h3  className='text-light fs-5 text-center mt-2'>موقعنا</h3>
                        <div className='mt-3'>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3421.7232975658176!2d31.167332559839995!3d30.950291675191647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f7bb5be6b749dd%3A0xca61211e438e63e2!2z2YXYsdmD2LIg2YLYtdixINin2YTZhtmK2YQg2YTZhNmG2LPYp9ihINmI2KfZhNiq2YjZhNmK2K8!5e0!3m2!1sar!2seg!4v1722531984751!5m2!1sar!2seg" 
                            width="100%" height="250px" 
                             allowfullscreen="" 
                            loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                           
                             

                        </div>
                        <div className='col-md-4 text'>
                        <h5  className='text-light fs-5 mt-5 '>احدث المقالات </h5>
                        <h5  className='text-light mt-3 '> 
                        الولادة الطبيعية، والمعروفة أيضًا بالولادة المهبلية، لها فوائد مختلفة لكل امرأة حامل. 
                             </h5>
                        <h5  className='text-light mt-2 '> 
                        يشمل بعضها حصول الطفل على بكتيريا مفيدة، ومشاكل تنفس أقل، في وقت مبكر الرضاعة الطبيعية،
                             </h5>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}
