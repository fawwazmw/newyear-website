import React, { useEffect, useRef } from 'react'
import { gsap, CSSRulePlugin } from 'gsap/all'
import '../index.css'
import { ArrowLeft, ArrowRight } from "./icons"
import { useNavigate } from 'react-router-dom'

// Register GSAP plugin
gsap.registerPlugin(CSSRulePlugin)

/**
 * Letter component with animated envelope effect
 * @returns {React.ReactElement}
 */
function Letter() {
    // Refs and hooks
    const envelopeRef = useRef(null)
    const letterRef = useRef(null)
    const navigate = useNavigate()

    // Animation setup
    useEffect(() => {
        // Get the envelope flap element
        const flap = CSSRulePlugin.getRule(".envelope:before")

        // Create animation timelines
        const t1 = gsap.timeline({ paused: true })
        t1.to(flap, {
            duration: 0.5,
            cssRule: { rotateX: 180 },
        })
            .set(flap, { cssRule: { zIndex: 10 } })
            .to(letterRef.current, {
                scale: 0.8,
                translateY: -200,
                duration: 0.9,
                ease: "back.inOut(1.5)",
            })
            .set(letterRef.current, { zIndex: 40 })
            .to(letterRef.current, {
                duration: 0.7,
                ease: "back.out(0.4)",
                translateY: -5,
                translateZ: 250,
            })

        const t2 = gsap.timeline({ paused: true })

        // Event handlers
        const openCard = () => {
            t1.play()
            t2.play()
        }

        const closeCard = (e) => {
            e.stopPropagation()
            t1.reverse()
            t2.reverse()
        }

        // Get DOM elements
        const envelopeElement = envelopeRef.current
        const closeButton = letterRef.current.querySelector(".close")

        // Add event listeners
        envelopeElement.addEventListener("click", openCard)
        closeButton.addEventListener("click", closeCard)

        // Cleanup event listeners on unmount
        return () => {
            envelopeElement.removeEventListener("click", openCard)
            closeButton.removeEventListener("click", closeCard)
        }
    }, [])

    // Letter content
    const letterContent = (
        <>
            <p>
                Selamat Natal dan Tahun Baru 2025! Semoga kedamaian dan kebahagiaan selalu
                menyertai langkahmu di tahun yang baru. Saat merenung tentang perjalanan kita
                sejak 1 Mei 2023, aku merasa beruntung bisa berbagi waktu dan pengalaman denganmu.
                Setiap momen, baik besar maupun kecil, semakin mempererat ikatan kita, memberi
                warna baru dalam hidupku yang tak pernah kubayangkan sebelumnya.
            </p>
            <div className="my-3"></div>
            <p>
                Memasuki tahun yang baru, aku berharap kita terus tumbuh bersama, belajar dari
                setiap tantangan, dan merayakan setiap kebahagiaan yang datang. Terima kasih telah
                menjadi bagian yang tak tergantikan dalam hidupku. Semoga tahun 2025 membawa lebih
                banyak kenangan indah yang akan kita kenang bersama, happy 20 month anniv!, i love u from fwz.
            </p>
        </>
    )

    return (
        <div className="min-h-screen bg-black/20 flex flex-col items-center justify-center">
            <div className="w-[90%] max-w-[400px]">
                {/* Letter container */}
                <div className="flex-grow flex items-center justify-center h-[400px]">
                    <div className="letter-container">
                        <div className="content">
                            <div className="envelope" ref={envelopeRef}></div>
                            <div className="letter" ref={letterRef}>
                                <div className="body">
                                    <span className="close">x</span>
                                    <div className="message">
                                        {letterContent}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Navigation buttons */}
                <div className="flex justify-between w-full p-6 mb-10">
                    <button
                        className="px-4 py-2 flex justify-center items-center bg-white/20 gap-2 hover:bg-white/30 backdrop-blur-sm text-white text-sm sm:text-base border border-white/50 rounded-lg"
                        onClick={() => navigate('/recap')}
                    >
                        <ArrowLeft /> Previous page
                    </button>
                    <button
                        className="px-4 py-2 flex justify-center items-center bg-white/20 gap-2 hover:bg-white/30 backdrop-blur-sm text-white text-sm sm:text-base border border-white/50 rounded-lg"
                        onClick={() => navigate('/closing')}
                    >
                        Next page <ArrowRight />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Letter