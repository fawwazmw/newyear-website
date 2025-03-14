import React from 'react'
import { useNavigate } from 'react-router-dom'
import { our1, our2, our3, our4, our5, our6, our7 } from '../assets'
import Carousel from './Carousel'
import { ImageCard } from './ImageCard'
import { ArrowLeft } from './icons'

/**
 * Picture component displaying a carousel of shared memories
 * @returns {React.ReactElement}
 */
function Picture() {
  const navigate = useNavigate()

  // Collection of memories with dates and descriptions
  const pictures = [
    {
      image: our1,
      title: 'February 22, 2023',
      description: "This photo holds many things :', first we are watching film at cinema xixixi"
    },
    {
      image: our2,
      title: 'February 28, 2023',
      description: "OMO!! belum ada apa apa main pat pat pala orang aja!"
    },
    {
      image: our3,
      title: 'March 12, 2023',
      description: "Cie uda dikasi bunga aje lu bang kwkwkw"
    },
    {
      image: our4,
      title: 'June 5, 2023',
      description: "Yahh, udah lulus aja aku dari SMA, bye nadya hehehe, i kuliah dulu"
    },
    {
      image: our5,
      title: 'January 16, 2024',
      description: "Anak UB ga si 2025 dua dua nya hehehehe, ayo malang surabaya menyenangkan!"
    },
    {
      image: our6,
      title: 'February 6, 2024',
      description: "Waa seru sekali ke PWT, kota dengan berbagai macam kenangan bagi kita"
    },
    {
      image: our7,
      title: 'May 10, 2024',
      description: "Kok bisa di Bali tiba tiba!?, wkwkw ini lumayan melelahkan tetapi berkesan, soon kita kesini lagi lebi lama!"
    },
  ]

  return (
      <div className="min-h-screen bg-black/20 flex flex-col items-center justify-center">
        <div className="w-[90%] max-w-[400px]">
          {/* Page Title */}
          <h1 className="text-2xl sm:text-2xl font-bold -mb-4 drop-shadow-lg text-white text-center">
            Our Moments
          </h1>

          {/* Photo Carousel */}
          <Carousel>
            {pictures.map((item, index) => (
                <ImageCard
                    key={index}
                    imageUrl={item.image}
                    altText="Our special memory"
                    title={item.title}
                    description={item.description}
                />
            ))}
          </Carousel>

          {/* Navigation Button */}
          <div className="flex justify-center w-full mt-12">
            <button
                className="px-4 py-2 flex justify-center items-center bg-white/20 gap-2 hover:bg-white/30 backdrop-blur-sm text-white text-sm border border-white/50 rounded-lg"
                onClick={() => navigate('/recap')}
            >
              <ArrowLeft /> Previous page
            </button>
          </div>
        </div>
      </div>
  )
}

export default Picture