import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";
import styles from "./slideronestyle.module.css";
export default class SliderOne extends Component {
  render() {
    const settings = {
      autoplay:true,
      infinite: true,
      slidesToShow: 6,
      speed: 500,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          }},
        {
          breakpoint: 1000,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          }},{
          breakpoint: 768,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          }},{
          breakpoint: 480,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
      ],
    };
    return (
      <div style={ {background: "#F7F7F7"}}>
        <Slider {...settings}>
          <div style={ {background: "#F7F7F7"}}>
            <div className={styles.card}>
              <img src="images/swift.jpg" alt="" />
            </div>
            {/* <h1 id={styles.title} >نمونه کشوری سال 1399</h1> */}
          </div>
         
          <div>
            <div className={styles.card}>
              <img src="images/python.jpg" alt="" />
            </div>
              {/* <h1 id={styles.title} >نمونه کشوری سال 1399</h1> */}
          </div>

          <div>
            <div className={styles.card}>
              <img src="images/kotlin.jpg" alt="" />
            </div>
              {/* <h1 id={styles.title} >نمونه کشوری سال 1399</h1> */}
          </div>

          <div>
            <div className={styles.card}>
              <img src="images/ruby.jpg" alt="" />
            </div>
              {/* <h1 id={styles.title} >نمونه کشوری سال 1399</h1> */}
          </div>

          
          <div>
            <div className={styles.card}>
              <img src="images/js.jpg" alt="" />
            </div>
              {/* <h1 id={styles.title} >نمونه کشوری سال 1399</h1> */}
          </div>
         
         
          <div>
            <div className={styles.card}>
              <img src="images/C.jpg" alt="" />
            </div>
              {/* <h1 id={styles.title} >نمونه کشوری سال 1399</h1> */}
          </div>
        </Slider>
      </div>
    );
  }
}
