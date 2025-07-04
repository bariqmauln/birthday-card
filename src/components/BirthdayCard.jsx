import React, { useEffect } from 'react';
import { PartyPopper } from 'lucide-react';
import confetti from 'canvas-confetti';
import profileImg from '../assets/profile.png';

const BirthdayCard = ({ username }) => {
  useEffect(() => {
    confetti({
      particleCount: 200,
      spread: 100,
      origin: { y: 0.6 },
    });
  }, []);

  return (
    <div className="bg-white p-10 rounded-3xl shadow-2xl max-w-md text-center animate-fade-in relative">
      <PartyPopper className="mx-auto mb-4 text-pink-500" size={48} />
      <h1 className="text-3xl font-bold text-gray-800">Happy Birthday🎉</h1>
      <p className="mt-2 text-xl text-gray-600">{username}!</p>
      <div className="w-28 h-28 mx-auto mt-4 rounded-full overflow-hidden border-4 border-pink-300">
        <img src={profileImg} alt="Profile" className="w-full h-full object-cover" />
      </div>
      <p className="mt-4 text-gray-500">Semoga makin kuning dan selalu jadi monyet kesayangan yah 💛🌻🐝🌼🍯🧸</p>
    </div>
  );
};

export default BirthdayCard;