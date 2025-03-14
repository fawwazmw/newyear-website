# Bf/Gf Gift Web App

A personalized digital anniversary gift web application that takes users through an interactive journey of memories, music, and messages.

## Overview

This web application serves as a digital anniversary gift, celebrating the relationship between two people. It features an interactive experience with password protection, a timeline of memories, personalized messages, a music player, an animated letter, and more.

## Features

- **Password Protection**: Secure entry with an anniversary date passcode
- **Google-style Question Interface**: A creative way to navigate to relationship duration
- **Duration Timer**: Shows exactly how long the relationship has been ongoing
- **Memory Showcase**:
    - Photo carousel of special moments
    - Personal messages and impressions
    - Interactive music player with songs that have special meaning
- **Special Birthday Message**: Encrypted message that can be unlocked with a secret key
- **Animated Letter**: Interactive envelope that opens to reveal a heartfelt message
- **Closing Celebration**: Fireworks and festive visuals

## Technical Details

The application is built with:
- React for the frontend
- React Router for navigation
- GSAP for animations
- Framer Motion for interactive elements
- Tailwind CSS for styling
- CryptoJS for message encryption/decryption

## Installation and Setup

1. Clone this repository
```bash
git clone https://github.com/fawwazmw/newyear-website.git
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm start
```

4. Build for production
```bash
npm run build
```

## Usage Flow

1. **Start**: User enters the correct passcode (anniversary date)
2. **Question**: User searches for "How long have we been together?"
3. **Timer**: Shows the relationship duration
4. **Recap**: Hub page with navigation to various memory sections
5. **Memories**: Access to photos, messages, music, and birthday content
6. **Letter**: Interactive envelope with a special message
7. **Closing**: Celebration page with festive visuals

## Customization

This application is designed to be easily customizable. Here's how you can personalize it:

### Passcode
Edit the `CORRECT_PASSCODE` constant in `Passcode.js` to set your own date.

### Pictures
Update the `pictures` array in `Picture.js` and `Message.js` with your own images, dates, and descriptions.

### Music
Modify the `songs` array in `Music.js` to include songs that are special to your relationship.

### Birthday Message
Change the `correctMessage` and encryption key in `Birthday.js` to personalize the encrypted message.

### Letter Content
Update the letter content in `Letter.js` to write your own heartfelt message.

## Credits

Created with love as a special anniversary gift.

---

Feel free to fork this project and create your own personalized version for your special someone!