import React from 'react'
import { useNavigate } from 'react-router-dom'
import {
  nadya1, nadya2, nadya3, nadya4, nadya5,
  nadya6, nadya7, nadya9, nadya10, nadya12, nadya13
} from '../assets'
import Carousel from './Carousel'
import { ImageCard } from './ImageCard'
import { ArrowLeft } from './icons'

/**
 * Message component displaying a carousel of memories with photos and descriptions
 * @returns {React.ReactElement}
 */
function Message() {
  const navigate = useNavigate()

  // Gallery data: photos with dates and descriptions
  const pictures = [
    {
      image: nadya2,
      title: 'February 25, 2023',
      description: "Your first take a picture for me, so happy that time really like it and tantrum lmao"
    },
    {
      image: nadya3,
      title: 'February 28, 2023',
      description: "You are such a beautiful things that i can have"
    },
    {
      image: nadya1,
      title: 'March 10, 2023',
      description: "Setiap orang punya masa lalu nya masing2, terima kasih tetap mempercayaiku lagi :)"
    },
    {
      image: nadya4,
      title: 'March 15, 2023',
      description: "U cantik juga ye kalau berjilbab wkwkw, cocok si hehe, you are always beautiful in your own way"
    },
    {
      image: nadya5,
      title: 'March 21, 2023',
      description: "Oh no my hoodie got stolen, i think my heart too mwhehehe"
    },
    {
      image: nadya6,
      title: 'March 29, 2023',
      description: "Yaampun ni anak emang cantik kali dah, hati hati nanti ada yang suka"
    },
    {
      image: nadya7,
      title: 'May 18, 2023',
      description: "Cie lagi baru barunya nie jadian, ihiw ditembak siapa si"
    },
    {
      image: nadya9,
      title: 'August 16, 2023',
      description: "I juga gitaris hamdal lo mwhehehe"
    },
    {
      image: nadya10,
      title: 'October 30, 2023',
      description: "Still ma fav photo!!!"
    },
    {
      image: nadya12,
      title: 'May 9, 2024',
      description: "Cie anniv 1 tahun di bali nie hehe"
    },
    {
      image: nadya13,
      title: 'December 28, 2024',
      description: "Kita melalui banyak hal sebelumnya, but this is last photo of 2024"
    },
  ]

  return (
      <div className="min-h-screen bg-black/20 flex flex-col items-center justify-center">
        <div className="w-[90%] max-w-[400px]">
          {/* Page Title */}
          <h1 className="text-2xl sm:text-2xl font-bold -mb-4 drop-shadow-lg text-white text-center">
            My Impressions To You
          </h1>

          {/* Photo Carousel */}
          <Carousel>
            {pictures.map((item, index) => (
                <ImageCard
                    key={index}
                    imageUrl={item.image}
                    altText="Precious memory"
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

export default Message