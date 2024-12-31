import React from 'react'
import { our1 } from '../assets'
import { our2 } from '../assets'
import { our3 } from '../assets'
import { our4 } from '../assets'
import { our5 } from '../assets'
import { our6 } from '../assets'
import { our7 } from '../assets'
import Carousel from './Carousel'
import { ImageCard } from './ImageCard'
import {ArrowLeft } from './icons'
import { useNavigate } from 'react-router-dom'

function Picture() {
  const navigate = useNavigate();

  const pictures = [
    { Image: our1, title: 'February 22, 2023', description: "This photo holds many things :', first we are watching film at cinema xixixi"},
    { Image: our2, title: 'February 28, 2023', description: "OMO!! belum ada apa apa main pat pat pala orang aja!"},
    { Image: our3, title: 'March 12, 2023', description: "Cie uda dikasi bunga aje lu bang kwkwkw"},
    { Image: our4, title: 'June 5, 2023', description: "Yahh, udah lulus aja aku dari SMA, bye nadya hehehe, i kuliah dulu"},
    { Image: our5, title: 'January 16, 2024', description: "Anak UB ga si 2025 dua dua nya hehehehe, ayo malang surabaya menyenangkan!"},
    { Image: our6, title: 'February 6, 2024', description: "Waa seru sekali ke PWT, kota dengan berbagai macam kenangan bagi kita"},
    { Image: our7, title: 'May 10, 2024', description: "Kok bisa di Bali tiba tiba!?, wkwkw ini lumayan melelahkan tetapi berkesan, soon kita kesini lagi lebi lama!"},

  ]
  return (
  
    <div className="min-h-screen bg-black/20 flex flex-col items-center justify-center">

      <div className="w-[90%] max-w-[400px]">
        <h1 className="text-2xl sm:text-2xl font-bold -mb-4 drop-shadow-lg text-white text-center">
            Our Moments
          </h1>
        <Carousel>
          {pictures.map(({Image,title,description,index}) => (
            <ImageCard
              key={index}
              imageUrl={Image}
              altText="Placeholder image"
              title={title}
              description={description}
            />
          ))}
        </Carousel>

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