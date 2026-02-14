import React, { useEffect, useState } from 'react';
import { PartyPopper } from 'lucide-react';
import confetti from 'canvas-confetti';
import profileImg from '../assets/profile.png';

const messages = [
  "Semoga harimu senin terus",
  "Selamat ulang tahun! Semoga tahun ini membawa banyak keberuntungan dan kebahagiaan! 🎂",
  "Hari ini adalah awal dari petualangan baru. Nikmati setiap momennya! 🎉",
  "Semoga semua impianmu tercapai di tahun yang baru ini. Happy birthday! ✨",
  "Terus bersinar dan sebarkan kebaikan seperti yang selalu kamu lakukan! 🌟",
  "Selamat Ulang Tahun PIKOK, SEMOGA JADI MBAK YANG SUPER LIAR"
];

const getRandomMessage = () => {
  const index = Math.floor(Math.random() * messages.length);
  return messages[index];
};

const BirthdayCard = ({ username }) => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    setMessage(getRandomMessage());
    confetti({
      particleCount: 200,
      spread: 100,
      origin: { y: 0.6 },
    });
  }, []);

  return (
    <div className="relative text-center animate-fade-in">
      {/* Candle */}
      <div className="absolute top-[-30px] left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-2 h-6 bg-yellow-400 rounded-t-full mx-auto animate-bounce"></div>
        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-1 mx-auto"></div>
      </div>

      {/* 3-Layer Cake with Content Inside */}
      <div className="mx-auto w-[300px] text-center">
        <div className="rounded-t-[1rem] bg-pink-300 px-6 py-4">
          <PartyPopper className="mx-auto mb-2 text-white" size={28} />
          <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-md mx-auto">
            <img src={profileImg} alt="Foto Profil" className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="bg-white px-6 py-4 border-t-4 border-yellow-200">
          <h1 className="text-2xl font-bold text-gray-800">Selamat Ulang Tahun 🎉</h1>
          <p className="text-lg text-gray-600 mt-1">{username}!</p>
        </div>
        <div className="bg-yellow-200 rounded-b-[1rem] px-6 py-4 border-t-4 border-pink-300">
          <p className="text-sm text-gray-700">{message}</p>
        </div>
      </div>
    </div>
  );
};

export default BirthdayCard;