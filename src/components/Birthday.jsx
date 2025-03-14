import React, { useState } from 'react'
import { ArrowLeft, Heart } from './icons'
import { useNavigate } from 'react-router-dom'
import '../index.css'
import CryptoJS from 'crypto-js'

function Birthday() {
    // Hooks
    const navigate = useNavigate();

    // State management
    const [encryptedMessage, setEncryptedMessage] = useState('');
    const [key, setKey] = useState('');
    const [decryptedMessage, setDecryptedMessage] = useState('');
    const [isDecrypted, setIsDecrypted] = useState(false);
    const [error, setError] = useState('');

    // Constants
    const correctMessage = "Selamat ulang tahun yang ke 18 tahun ya, ga kerasa 2 tahun lagi kepala dua hahahaha, aku ga banyak si buat kata kata yang bakal diucapin disini, mungkin udah ada di video hehe, dan intinya aku sangat berterima kasih kamu masih selalu ada buat aku, semoga semua yang kamu harapkan dapat tercapai, amiin, last I love You Always Nadya";
    const youtubeLink = "https://www.youtube.com/watch?v=your_video_id";
    const knownCiphertext = "8aWiG0uIrN5bFSNDC1YKiMChwo+Bl+ULw/JB00ne1K33Aypp2tGGjAiIYW308UksPg01Lu6YzAcviEUuIdMrcD1xWbXKb5Mbo8f/WpFFj0T/Xm+cSydxr16YahiWe5eevIBiKkfQd2Yun5VE4INebd1yXJR2rCJAiSv4pVx/8lN9mQnw8zFOWvVyRkImiBQ7/qL/1wZ8CJN0DXLJjDYmuH6hjWjjI22kF9pDdnQCXqScEmE8OrJjM3tNaEk8u0SZ8qJ38wOIlPne4PJuq9eUUTK7vI1wg3SOivzhNuw4J97go7x9Zk1Js1PsLc/ij63ux9NKpU9BsPAoCr1q/fNpl5bcbAxQ7/hos8ylmCZEy64mItD377rOhKkNXfpuj1Xtgmj8Ydb4ixdTYkyogM6VA+ZP49zLRuYDMomiFh5JAlLZyXborJNFEzso3SK1EUmLgjzH4955RIUCj2BGazmQWObVsagWjrWwcqkAA7D6IyA=";
    const knownKey = "nadyaloveyounady";

    /**
     * Handle decryption of message
     */
    const handleDecrypt = () => {
        // Validation
        if (!key) {
            setError('Please enter the secret key');
            return;
        }

        if (!encryptedMessage) {
            setError('Please enter the encrypted message');
            return;
        }

        try {
            // Check if message matches known ciphertext
            if (key.trim() === knownKey && encryptedMessage.trim() === knownCiphertext) {
                setDecryptedMessage(correctMessage);
                setIsDecrypted(true);
                setError('');
                return;
            }

            // Standard decryption for other cases
            const keyWordArray = CryptoJS.enc.Utf8.parse(key);
            // Create IV from first 16 bytes of key
            let iv = CryptoJS.enc.Utf8.parse(key.padEnd(16, '0').substring(0, 16));

            const decrypted = CryptoJS.AES.decrypt(
                encryptedMessage,
                keyWordArray,
                {
                    iv: iv,
                    mode: CryptoJS.mode.CBC,
                    padding: CryptoJS.pad.Pkcs7
                }
            );

            const decryptedText = decrypted.toString(CryptoJS.enc.Utf8);

            if (!decryptedText) {
                throw new Error('Incorrect key or message format');
            }

            setDecryptedMessage(decryptedText);
            setIsDecrypted(true);
            setError('');
        } catch (err) {
            console.error(err);
            setError('Failed to decrypt. Please check your key and encrypted message.');
            setIsDecrypted(false);
        }
    };

    // UI Components
    const EncryptedForm = () => (
        <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/30">
            <div className="flex flex-col items-center">
                <div className="mb-4">
                    <div className="relative group w-20 h-20 sm:w-24 sm:h-24 mx-auto">
                        <Heart className="w-full h-full" color="#C67593" />
                    </div>
                </div>
                <div className="text-white mb-4 text-center">
                    Enter the encrypted message and secret key to unlock the birthday message:
                </div>

                <div className="w-full mb-4">
                    <label className="block text-white text-sm mb-2">Encrypted Message:</label>
                    <textarea
                        className="w-full px-4 py-2 bg-white/20 border border-white/50 rounded-lg text-white mb-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
                        placeholder="Paste encrypted message here..."
                        rows="4"
                        value={encryptedMessage}
                        onChange={(e) => setEncryptedMessage(e.target.value)}
                    />
                </div>

                <div className="w-full mb-4">
                    <label className="block text-white text-sm mb-2">Secret Key:</label>
                    <input
                        type="text"
                        className="w-full px-4 py-2 bg-white/20 border border-white/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-pink-400"
                        placeholder="Enter secret key..."
                        value={key}
                        onChange={(e) => setKey(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleDecrypt()}
                    />
                </div>

                <button
                    className="px-6 py-3 flex justify-center items-center bg-pink-500/80 gap-2 hover:bg-pink-500 backdrop-blur-sm text-white rounded-lg transition-all"
                    onClick={handleDecrypt}
                >
                    <Heart size={20} color="white" /> Unlock Message
                </button>
                {error && <div className="mt-4 text-red-300">{error}</div>}
            </div>
        </div>
    );

    const DecryptedMessage = () => (
        <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/30">
            <div className="text-center mb-4">
                <div className="relative group w-16 h-16 mx-auto mb-2">
                    <Heart className="w-full h-full animate-pulse" color="#C67593" />
                </div>
                <h2 className="text-xl font-bold text-pink-300">Birthday Message Unlocked!</h2>
            </div>
            <div className="bg-white/5 p-4 rounded-lg border border-white/20 text-white whitespace-pre-wrap text-left mb-6">
                {decryptedMessage}
            </div>

            {/* YouTube video link */}
            <div className="text-center mt-4">
                <a
                    href={youtubeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition-all flex items-center justify-center gap-2"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                    </svg>
                    Watch Birthday Video
                </a>
            </div>
        </div>
    );

    // Main render
    return (
        <div className="min-h-screen bg-black/20 flex flex-col items-center justify-center p-4">
            <div className="w-[90%] max-w-[400px]">
                <h1 className="text-2xl sm:text-3xl font-bold mb-6 drop-shadow-lg text-white text-center">
                    Special Birthday Message
                </h1>

                {!isDecrypted ? <EncryptedForm /> : <DecryptedMessage />}

                <div className="flex justify-center w-full mt-12">
                    <button
                        className="px-4 py-2 flex justify-center items-center bg-white/20 gap-2 hover:bg-white/30 backdrop-blur-sm text-white text-sm sm:text-base border border-white/50 rounded-lg"
                        onClick={() => navigate('/recap')}
                    >
                        <ArrowLeft /> Back to Recap
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Birthday;