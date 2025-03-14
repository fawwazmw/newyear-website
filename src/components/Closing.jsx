import React from 'react'
import { ArrowLeft } from './icons'
import { useNavigate } from 'react-router-dom'
import { fireworks, christmas } from '../assets'

/**
 * Closing component with celebration theme
 * @returns {React.ReactElement}
 */
function Closing() {
    const navigate = useNavigate()

    // Background style for fireworks
    const fireworksBackgroundStyle = {
        backgroundImage: `url(${fireworks})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    }

    return (
        <div className="min-h-screen w-full bg-black/20 flex flex-col items-center justify-center">
            <div className="relative h-screen w-full overflow-hidden flex flex-col items-center justify-center">
                {/* Fireworks background */}
                <div
                    className="absolute inset-0 z-100 opacity-50"
                    style={fireworksBackgroundStyle}
                ></div>

                {/* Christmas tree */}
                <div className="z-10 mb-8">
                    <img
                        src={christmas}
                        alt="Animated Christmas Tree"
                        className="w-64 h-64 object-contain"
                    />
                </div>

                {/* Content container */}
                <div className="w-[90%] max-w-[400px]">
                    {/* Greeting text */}
                    <p className="z-10 text-white text-center text-xl font-semibold px-4 drop-shadow-lg">
                        Happy New Year &amp; Merry Christmas For you!! Hopefully u can be a kind people for another people around you, i love u!
                    </p>

                    {/* Navigation button */}
                    <div className="flex justify-center w-full mt-12 z-10">
                        <button
                            className="px-4 py-2 flex justify-center items-center bg-white/20 gap-2 hover:bg-white/30 backdrop-blur-sm text-white text-sm border border-white/50 rounded-lg"
                            onClick={() => navigate('/letter')}
                        >
                            <ArrowLeft /> Previous page
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Closing