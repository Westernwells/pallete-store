import React from 'react'
import Img1 from '../../images/pro1.jpg'
import './styles.css'
export default function Oc(){
    return(
        <section className="sec-oc">
        <div className="container-fluid ">
        <div className="row">
        <div className="col-sm-12">
        <p className="oc-header">Our Customers</p>
        </div>
        </div>
        <div className="row">
        <div className="col-sm-4 col-lg-2 col-md-4">
        <img src={Img1} alt="" className="cus-img"/>
        </div>
        <div className="col-sm-4 col-lg-2 col-md-4">
        <img src={Img1} alt="" className="cus-img"/>
        </div>
        <div className="col-sm-4 col-lg-2 col-md-4">
        <img src={Img1} alt="" className="cus-img"/>
        </div>
        <div className="col-sm-4 col-lg-2 col-md-4">
        <img src={Img1} alt="" className="cus-img"/>
        </div>
        <div className="col-sm-4 col-lg-2 col-md-4">
        <img src={Img1} alt="" className="cus-img"/>
        </div>
        <div className="col-sm-4 col-lg-2 col-md-4">
        <img src={Img1} alt="" className="cus-img"/>
        </div>
        </div>
        </div>
        </section>
        )
} 
