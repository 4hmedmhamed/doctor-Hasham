"use client"
import React from 'react'
import { Container } from 'react-bootstrap'
import Image from 'next/image'
import Logo from "../../public/assit/logo.jpg"
import Link from 'next/link'
import { FaListUl } from "react-icons/fa";

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';


function OffCanvasExample({ name, ...props }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>

            <p onClick={handleShow} className="mt-3 text-light">
                {
                    < FaListUl />
                }
            </p>

            <Offcanvas show={show} onHide={handleClose} {...props} style={{ backgroundColor: "hsl(278, 86%, 25%) ", width: "80%" }} className="side-bar">
                <Offcanvas.Header closeButton>
                    <div className='w-100'>

                        <Image
                            src={Logo}
                            width={200}
                            height={70}
                        />
                    </div>
                </Offcanvas.Header>
                <Offcanvas.Body >
                    <div class="p-2 flex-fill bd-highlight  mt-3  text-center" style={{ backgroundColor: "hsl(278, 86%, 25%) " }}>
                        <div className='m-3 border-bottom'>
                            <Link href={'/'} className='nav-item fs-5 mt-5'>الرئيسية</Link>
                        </div>
                        <div className='m-3 border-bottom'>
                            <Link href={'/about'} className='nav-item fs-5 m-5 '>من نحن </Link>
                        </div>
                        <div className='m-3 border-bottom'>
                            <Link href={'/Oursrvies'} className='nav-item fs-5 m-5 '>خدماتنا </Link>
                        </div>
                        <div className='m-3 border-bottom'>
                            <Link href={'/Our_advantages'} className='nav-item fs-5 m-5 '>مميزاتنا</Link>
                        </div>
                        <div className='m-3 border-bottom'>
                            <Link href={'/'} className='nav-item fs-5 m-5 '>اخبار</Link>
                        </div>
                        <div className='m-3 border-bottom'>
                            <Link href={'/connet'} className='nav-item fs-5 m-5 '>تواصل معانا</Link>
                        </div>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}
function Navbar() {
    return (
        <>
            <div className='Nav-bar fixed-top   d-none d-lg-block'>
                <Container>
                    <div className=''>
                        <div class="d-flex bd-highlight">
                            <div className="p-2 flex-fill bd-highlight">
                                <Image
                                    src={Logo}
                                    width={300}
                                    height={80}
                                />
                            </div>
                            <div className='  d-none d-lg-block'>

                                <div class="p-2 flex-fill bd-highlight d-flex mt-3">
                                    <div >
                                        <Link href={'/'} className='nav-item fs-5 mx-2'>الرئيسية</Link>
                                    </div>
                                    <div >
                                        <Link href={'/about'} className='nav-item fs-5 mx-2'>من نحن </Link>
                                    </div>
                                    <div >
                                        <Link href={'/Oursrvies'} className='nav-item fs-5 mx-2'>خدماتنا </Link>
                                    </div>
                                    <div >
                                        <Link href={'/Our_advantages'} className='nav-item fs-5 mx-2'>مميزاتنا</Link>
                                    </div>
                                    <div >
                                        <Link href={'/'} className='nav-item fs-5 mx-2'>اخبار</Link>
                                    </div>
                                    <div >
                                        <Link href={'/connet'} className='nav-item fs-5 mx-2'>تواصل معانا</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="p-2 flex-fill bd-highlight d-block d-lg- mt-4">

                            </div>

                        </div>
                    </div>
                </Container>
            </div>
            <div className='  d-block d-lg-none Nav-bar'>
                <div class="d-flex bd-highlight">
                    <div class="p-2 flex-fill bd-highlight">
                        <Image
                            src={Logo}
                            width={220}
                            height={70}
                        />
                    </div>
                    <div class="p-2 flex-fill bd-highlight   d-block d-lg-none">
                        {['end'].map((placement, idx) => (
                            <OffCanvasExample key={idx} placement={placement} name={placement} />
                        ))}
                    </div>
                </div>

                <div className="">

                </div>
            </div>
        </>
    )
}

export default Navbar