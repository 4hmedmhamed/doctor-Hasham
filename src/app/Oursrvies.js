import React from 'react'
import { Container } from 'react-bootstrap'
import { GiTeleport } from "react-icons/gi";
import { FaBaby } from "react-icons/fa";
import { LuBaby } from "react-icons/lu";
import { MdPregnantWoman } from "react-icons/md";
import { MdOutlineSatelliteAlt } from "react-icons/md";
import { FaSatelliteDish } from "react-icons/fa";
import { SlChemistry } from "react-icons/sl";
import { FaMicroscope } from "react-icons/fa";
import { FaRegHospital } from "react-icons/fa6"
import { MdOutlineFamilyRestroom } from "react-icons/md";
function Oursrvies() {
    return (
            <Container>
                <div className='row text-center Oursrvies mt-5  '>
                    <div className='col-md-12 mt-2'>
                        <h2  className='title-serves'> لماذا مركز قصر النيل </h2>
                        <h3 className='text-primary fs-2 text-primary   text-primary '>خدمات مركز قصر النيل للنساء والتوليد </h3>
                    </div>
                    
                    

                    <div className='col-md-4 d-flex justify-content-center border '>
                        <div className=''>

                        <div className='icon-serves text-center  my-3 '>

                            <  FaSatelliteDish />

                        </div>
                        <div className='fs-2 text-primary    text-primary '>
                        عيادة نساء وتوليد مجهزة بأحدث أشعة تلفزيونية والسونار
                        </div>
                        </div>

                    </div>
                    <div className='col-md-4 d-flex justify-content-center  border '>
                        <div className=''>

                        <div className='icon-serves text-center   my-3 '>

                            <FaBaby></FaBaby>

                        </div>
                        <div className='fs-2 text-primary ' text-primary >
                       متابعة نمو الجنين، والمعرفه المبكره لمشاكل  في الأجنة و علاجها
                        </div>
                        </div>

                    </div>
                    <div className='col-md-4 d-flex justify-content-center border '>
                        <div className=''>

                        <div className='icon-serves text-center  my-3 '>

                            <  MdPregnantWoman />

                        </div>
                        <div className='fs-2 text-primary ' text-primary >
                        ومتابعة الحمل الحرج، وعلاج عمليات العقم الأولي والثانوي
                        </div>
                        </div>

                    </div>
                    <div className='col-md-4 d-flex justify-content-center border '>
                        <div className=''>

                        <div className='icon-serves text-center  my-3 '>

                            <SlChemistry />

                        </div>
                        <div className='fs-2 text-primary ' text-primary >
                        معمل تحاليل للسيدات لإجراء كافة التحاليل والفحوصات خلال فترة الحمل
                        </div>
                        </div>

                    </div>
                    <div className='col-md-4 d-flex justify-content-center border '>
                        <div className=''>

                        <div className='icon-serves text-center  my-3 '>

                            <FaRegHospital />

                        </div>
                        <div className='fs-2 text-primary ' text-primary >
                        غرفة عمليات مجهزة بأحدث الأجهزة لإجراء عمليات كبرى للولادة الطبيعية والقيصرية 
                        </div>
                        </div>

                    </div>
                    <div className='col-md-4 d-flex justify-content-center border '>
                        <div className=''>

                        <div className='icon-serves text-center  my-3 '>

                            <MdOutlineFamilyRestroom />

                        </div>
                        <div className='fs-2 text-primary ' text-primary >
                 
 المناظير الجراحية مثل عمليات استئصال الرحم بالمنظار 
و
مناظير العقم والأنابيب 

                        </div>
                        </div>

                    </div>
               

                </div>
            </Container>
    )
}

export default Oursrvies