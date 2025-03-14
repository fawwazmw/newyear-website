import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import {
  Closing,
  Letter,
  Passcode,
  Question,
  Recap,
  Timer,
  Message,
  Music,
  Picture,
  Birthday
} from './components'
import './index.css'

/**
 * Main App component with routing configuration
 * @returns {React.ReactElement}
 */
function App() {
  return (
      <Router>
        <Routes>
          {/* Authentication flow */}
          <Route path="/" element={<Passcode />} />
          <Route path="/question" element={<Question />} />
          <Route path="/timer" element={<Timer />} />

          {/* Main content */}
          <Route path="/recap" element={<Recap />} />
          <Route path="/recap/message" element={<Message />} />
          <Route path="/recap/music" element={<Music />} />
          <Route path="/recap/birthday" element={<Birthday />} />
          <Route path="/recap/pictures" element={<Picture />} />

          {/* Closing pages */}
          <Route path="/letter" element={<Letter />} />
          <Route path="/closing" element={<Closing />} />
        </Routes>
      </Router>
  )
}

export default App