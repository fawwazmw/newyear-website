import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import '../index.css'

/**
 * Carousel component using react-slick
 *
 * @param {React.ReactNode} children - Content to display in the carousel
 * @param {number} slidesToShow - Number of slides to show at once on desktop
 * @param {number} slidesToShowMobile - Number of slides to show at once on mobile
 * @param {boolean} autoplay - Whether to automatically cycle through slides
 * @param {number} autoplaySpeed - Time between slide transitions (ms)
 * @returns {React.ReactElement}
 */
const Carousel = ({
                    // eslint-disable-next-line react/prop-types
                    children,
                    // eslint-disable-next-line react/prop-types
                    slidesToShow = 1,
                    // eslint-disable-next-line react/prop-types
                    slidesToShowMobile = 1,
                    // eslint-disable-next-line react/prop-types
                    autoplay = false,
                    // eslint-disable-next-line react/prop-types
                    autoplaySpeed = 3000,
                  }) => {
  // Configuration for the slider
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow,
    slidesToScroll: 1,
    swipeToSlide: true,
    draggable: true,
    arrows: false,
    autoplay,
    autoplaySpeed,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: slidesToShowMobile,
        },
      },
    ],
  }

  return (
      <div className="w-full mx-auto mt-5">
        <Slider {...settings}>
          {React.Children.map(children, (child, index) => (
              <div key={index} className="p-4">
                {child}
              </div>
          ))}
        </Slider>
      </div>
  )
}

export default Carousel