import React from 'react'
import {nadya1} from '../assets'
import {nadya2} from '../assets'
import {nadya3} from '../assets'
import {nadya4} from '../assets'
import {nadya5} from '../assets'
import {nadya6} from '../assets'
import {nadya7} from '../assets'
import {nadya9} from '../assets'
import {nadya10} from '../assets'
import {nadya12} from '../assets'
import {nadya13} from '../assets'
import Carousel from './Carousel'
import { ImageCard } from './ImageCard'
import {ArrowLeft } from './icons'
import { useNavigate } from 'react-router-dom'

function Message() {
  const navigate = useNavigate();

  // customize your own picture, title and subtext. You can also add more picture.
  const pictures = [
    { Image: nadya2, title: 'February 25, 2023', description: "Your first take a picture for me, so happy that time really like it and tantrum lmao"},
    { Image: nadya3, title: 'February 28, 2023', description: "You are such a beautiful things that i can have"},
    { Image: nadya1, title: 'March 10, 2023', description: "Setiap orang punya masa lalu nya masing2, terima kasih tetap mempercayaiku lagi :)"},
    { Image: nadya4, title: 'March 15, 2023', description: "U cantik juga ye kalau berjilbab wkwkw, cocok si hehe, you are always beautiful in your own way"},
    { Image: nadya5, title: 'March 21, 2023', description: "Oh no my hoodie got stolen, i think my heart too mwhehehe"},
    { Image: nadya6, title: 'March 29, 2023', description: "Yaampun ni anak emang cantik kali dah, hati hati nanti ada yang suka"},
    { Image: nadya7, title: 'May 18, 2023', description: "Cie lagi baru barunya nie jadian, ihiw ditembak siapa si"},
    { Image: nadya9, title: 'August 16, 2023', description: "I juga gitaris hamdal lo mwhehehe"},
    { Image: nadya10, title: 'October 30, 2023', description: "Still ma fav photo!!!"},
    { Image: nadya12, title: 'May 9, 2024', description: "Cie anniv 1 tahun di bali nie hehe"},
    { Image: nadya13, title: 'December 28, 2024', description: "Kita melalui banyak hal sebelumnya, but this is last photo of 2024"},

  ]
  return (
    <div className="min-h-screen bg-black/20 flex flex-col items-center justify-center">

      <div className="w-[90%] max-w-[400px]">
        <h1 className="text-2xl sm:text-2xl font-bold -mb-4 drop-shadow-lg text-white text-center">
            My Impressions To You
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

export default Message