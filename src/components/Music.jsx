import React, { useState, useRef } from "react";
import { ArrowLeft } from "./icons";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

// Importing the assets and audio files directly
import { bruno, greenday, sunsetz, hivi, mcr, honey, bitterlove, sempurna, hivimp3, mcrmp3, casmp3, brunomp3, bitterlovemp3, honeymp3, greendaymp3, sempurnamp3 } from "../assets";

function Music() {
  const navigate = useNavigate();
  const [currentSong, setCurrentSong] = useState(null); // Track the current song being played
  const audioRef = useRef(null); // Reference to the audio element
  const containerRef = useRef(null);

  // The actual song paths now refer to imported audio files
  const songPaths = {
    hivi: hivimp3,
    mcr: mcrmp3,
    bruno: brunomp3,
    greenday: greendaymp3,
    bitterlove: bitterlovemp3,
    sempurna: sempurnamp3,
    honey: honeymp3,
    sunsetz: casmp3,
  };

  // Customize and add your own songs
  const songs = [
    {
      title: "Siapkah Kau 'Tuk Jatuh Cinta Lagi",
      artist: "Hivi!",
      albumCover: hivi,
      songKey: "hivi",
      left: "5%",
      top: "5%",
    },
    {
      title: "Helena",
      artist: "My Chemical Romance",
      albumCover: mcr,
      songKey: "mcr",
      left: "40%",
      top: "15%",
    },
    {
      title: "Die With A Smile",
      artist: "Lady Gaga, Bruno Mars",
      albumCover: bruno,
      songKey: "bruno",
      left: '15%',
      top: '40%',
    },
    {
      title: "Last Night on Earth",
      artist: "Green Day",
      albumCover: greenday,
      songKey: "greenday",
      left: '30%',
      top: '75%',
    },
    {
      title: "Bitterlove",
      artist: "Ardhito Pramono",
      albumCover: bitterlove,
      songKey: "bitterlove",
      left: '5%',
      top: '65%',
    },
    {
      title: "Sempurna",
      artist: "Andra & The Backbone",
      albumCover: sempurna,
      songKey: "sempurna",
      left: '25%',
      top: '90%',
    },
    {
      title: "Honey",
      artist: "Boy Pablo",
      albumCover: honey,
      songKey: "honey",
      left: '35%',
      top: '50%',
    },
    {
      title: "Sunsetz",
      artist: "Cigarettes After Sex",
      albumCover: sunsetz,
      songKey: "sunsetz",
      left: "10%",
      top: "25%",
    },
  ];

  // Function to handle song click
  const handleSongClick = (songKey) => {
    if (currentSong !== songKey) {
      // If a different song is clicked, update the current song and play it
      setCurrentSong(songKey);
      if (audioRef.current) {
        audioRef.current.pause(); // Pause any current song
        audioRef.current.load(); // Reload to apply the new song
        audioRef.current.play(); // Start the new song
      }
    }
  };

  return (
      <div className="min-h-screen bg-black/20 flex flex-col items-center justify-center">
        <div className="w-[90%] max-w-[400px]">
          <h1 className="text-2xl sm:text-2xl font-bold -mb-4 mt-4 drop-shadow-lg text-white text-center">
            Songs that remind me of you
          </h1>
          {/* New text paragraph below the title */}
          <p className="text-white text-center text-sm mt-4">(Click to play a song)</p>

          <div ref={containerRef} className="relative w-full h-[40rem] rounded-lg overflow-hidden mt-8 mb-12">
            {songs.map((song, index) => (
                <motion.div
                    key={index}
                    className="absolute"
                    style={{
                      left: song.left,
                      top: song.top,
                    }}
                    drag
                    dragConstraints={containerRef}
                    onClick={() => handleSongClick(song.songKey)} // Click event to play the song
                >
                  <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 flex items-center gap-4 w-56 h-[4rem]">
                    <div className="w-12 h-12 flex-shrink-0">
                      <img
                          src={song.albumCover}
                          alt="Album cover"
                          className="w-full h-full rounded-md object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h2 className="text-white font-medium text-sm truncate">{song.title}</h2>
                      <p className="text-white/70 text-xs truncate">{song.artist}</p>
                    </div>
                  </div>
                </motion.div>
            ))}
          </div>

          {/* Audio element to play the current song without controls */}
          {currentSong && (
              <audio ref={audioRef} src={songPaths[currentSong]} autoPlay />
          )}

          {/* Navigation Button */}
          <div className="flex justify-center w-full mt-4 mb-4">
            <button
                className="px-4 py-2 flex justify-center items-center bg-white/20 gap-2 hover:bg-white/30 backdrop-blur-sm text-white text-sm border border-white/50 rounded-lg"
                onClick={() => navigate("/recap")}
            >
              <ArrowLeft /> Previous page
            </button>
          </div>
        </div>
      </div>
  );
}

export default Music;