import React from 'react'
import Img1 from '../../images/pro1.jpg'
export default function Provide(){
    return(
        <div className="container">
        <div className="row">
        <div className="col-sm-12">
        <p className="p-header">We Provide Crates And Boxes For</p>
        </div>
        </div>
        <div className="row">
        <div className="col-sm-12 col-md-4 col-lg-4">
            <div className=" card scard">
            <p className="sc-title">Moving Company</p>
            <img src={Img1} alt="" className="scimg"/>
            <p className="sc-text">Retailers can enjoy the high
            quality and competitive price of our 
            plastic products,and we had build a good relationship
            with retails across the world</p>
            </div>
        </div>
        <div className="col-sm-12 col-md-4 col-lg-4">
        <div className=" card scard">
        <p className="sc-title">Moving Company</p>
        <img src={Img1} alt="" className="scimg"/>
        <p className="sc-text">Retailers can enjoy the high
        quality and competitive price of our 
        plastic products,and we had build a good relationship
        with retails across the world</p>
        </div>
    </div>
    <div className="col-sm-12 col-md-4 col-lg-4">
    <div className="card scard">
    <p className="sc-title">Moving Company</p>
    <img src={Img1} alt="" className="scimg"/>
    <p className="sc-text">Retailers can enjoy the high
    quality and competitive price of our 
    plastic products,and we had build a good relationship
    with retails across the world</p>
    </div>
</div>
            {/*Another One */}
            {/* 
                <div className="col-sm-12 col-md-4 col-lg-4">
                <div className="card">
                <p className="pt">Moving Company</p>
                <img src={Img1} alt="" className="pi"/>
                <p className="pd">Retailers can enjoy the high
                quality and competitive price of our 
                plastic products,and we had build a good relationship
                with retails across the world</p>
                </div>
                </div>
            */}
           
        
            </div></div>
    )
}

