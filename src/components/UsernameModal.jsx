import React, { useState } from 'react';

const UsernameModal = ({ onSubmit }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      onSubmit(input);
    }
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
      <h2 className="text-xl font-bold mb-4">Siapa yang ulang tahun?</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="border p-2 rounded w-full mb-4"
          placeholder="Masukkan nama"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit" className="bg-pink-500 hover:bg-pink-600 text-white py-2 px-4 rounded">
          Lihat Ucapan
        </button>
      </form>
    </div>
  );
};

export default UsernameModal;