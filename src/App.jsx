import React, { useState } from 'react';
import BirthdayCard from './components/BirthdayCard';
import UsernameModal from './components/UsernameModal';

const App = () => {
  const [username, setUsername] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(true);

  const handleUsernameSubmit = (name) => {
    setUsername(name);
    setIsModalOpen(false);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-pink-200 via-white to-yellow-100">
      {isModalOpen ? (
        <UsernameModal onSubmit={handleUsernameSubmit} />
      ) : (
        <BirthdayCard username={username} />
      )}
    </div>
  );
};

export default App;