import React, { useState, useRef } from 'react'
import { Search, Mic, Camera, ArrowLeft, X, Clock } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { Google } from './icons'

/**
 * Question component that simulates a Google search interface
 * @returns {React.ReactElement}
 */
function Question() {
    // State and refs
    const [searchQuery, setSearchQuery] = useState('')
    const [isInputFocused, setIsInputFocused] = useState(false)
    const inputRef = useRef(null)
    const navigate = useNavigate()

    // Trending searches data
    const trends = [
        'Why is my gf so cute?',
        'Why does Fawwaz love her more?',
        `Fawwaz's birthdate (coz her gf forgets)`
    ]

    /**
     * Handles search form submission and navigation
     * @param {React.FormEvent} e - Form event
     */
    const handleSearch = (e) => {
        e.preventDefault()
        // Navigate to timer regardless of the search query
        navigate("/timer")
    }

    /**
     * Handles clicking on a trending search
     * @param {string} trend - The trend text
     */
    const handleTrendClick = (trend) => {
        setSearchQuery(trend)
        navigate("/timer")
    }

    /**
     * Renders the initial search screen with trending searches
     * @returns {React.ReactElement}
     */
    const renderSearchHome = () => (
        <div className="flex flex-col items-center px-4 pt-16">
            {/* Google Logo */}
            <div className="mb-8">
                <Google />
            </div>

            {/* Search Input */}
            <div
                className="w-full max-w-[600px] flex items-center gap-3 px-4 py-3 rounded-full bg-[#303134] border border-[#5f6368] focus-within:border-[#8ab4f8]"
                onClick={() => {
                    setIsInputFocused(true)
                    setTimeout(() => inputRef.current?.focus(), 0)
                }}
            >
                <Search className="w-5 h-5 text-[#9aa0a6]" />
                <input
                    ref={inputRef}
                    type="text"
                    className="flex-1 bg-transparent outline-none"
                    placeholder="Search Google or type a URL"
                />
                <Mic className="w-5 h-5 text-[#8ab4f8]" />
                <Camera className="w-5 h-5 text-[#8ab4f8]" />
            </div>

            {/* Trending Searches */}
            <div className="mt-8 w-full max-w-[600px]">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-2xl">Trending searches</h2>
                    <button className="p-2">
                        <Search className="w-6 h-6" />
                    </button>
                </div>
                <div className="space-y-4">
                    {trends.map((trend) => (
                        <div
                            key={trend}
                            className="flex items-center gap-3 py-2 cursor-pointer hover:bg-[#303134] px-2 rounded-lg"
                            onClick={() => handleTrendClick(trend)}
                        >
                            <Search className="w-5 h-5 text-[#9aa0a6]" />
                            <span>{trend}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )

    /**
     * Renders the search input view with keyboard
     * @returns {React.ReactElement}
     */
    const renderSearchInput = () => (
        <div className="flex flex-col min-h-screen w-full max-w-[480px] mx-auto">
            <form onSubmit={handleSearch} className="border-b border-[#5f6368]">
                <div className="flex items-center gap-3 px-4 py-3">
                    <button type="button" onClick={() => setIsInputFocused(false)}>
                        <ArrowLeft className="w-5 h-5 text-[#8ab4f8]" />
                    </button>
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="flex-1 bg-transparent outline-none"
                        autoFocus
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                e.preventDefault()
                                navigate("/timer")
                            }
                        }}
                    />
                    <Mic className="w-5 h-5 text-[#8ab4f8]" />
                    <Camera className="w-5 h-5 text-[#8ab4f8]" />
                </div>
            </form>
            <div className="mt-10 px-5 text-white/50">
                <p>Pro tip: try searching &#34;How long have we been together?&#34; ;)</p>
            </div>
        </div>
    )

    return (
        <div className="min-h-screen bg-[#202124] text-white">
            {!isInputFocused ? renderSearchHome() : renderSearchInput()}
        </div>
    )
}

export default Question