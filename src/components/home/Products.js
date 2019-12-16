import React from 'react'
import Img1 from '../../images/pro1.jpg'
import Slider from "react-slick";
export default class Products extends React.Component {
    render() {
        var settings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 4,
            initialSlide: 0,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  infinite: true,
                  dots: true
                }
              },
              {
                breakpoint: 800,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  initialSlide: 2
                }
              },
              {
                breakpoint: 580,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
            ]
          };
    return (
        <div className="pro-section">
        <div className="container-fluid">
        <div className="row">
        <div className="col-sm-12 mx-auto">
        <p className="productx-header">Our Products</p>
     </div></div>
        <Slider {...settings} >
        <div className=" col-sm-12 col-md-6 col-lg-3">
        <Product />
        </div>
        <div className=" col-sm-12 col-md-6 col-lg-3">
        <Product />
        </div>
        <div className=" col-sm-12 col-md-6 col-lg-3">
        <Product />
        </div>
        <div className=" col-sm-12 col-md-6 col-lg-3">
        <Product />
        </div>
        <div className=" col-sm-12 col-md-6 col-lg-3">
        <Product />
        </div>
        </Slider>
        </div>
        </div>
    )
}
}

const Product = () =>{
    return(
       
        <div className="pro-card">
        <img src={Img1} className="pro-image" />
        <p className="pro-title">
        Box Pallete
        </p>
        </div>
    )
}