import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 w-full bg-black bg-opacity-80 py-3 z-50">
      <nav className="flex justify-center gap-8">
        <a href="#historia" className="text-white text-lg font-bold hover:text-yellow-500">
          Historia
        </a>
        <a href="#personajes" className="text-white text-lg font-bold hover:text-yellow-500">
          Personajes
        </a>
        <a href="#escenarios" className="text-white text-lg font-bold hover:text-yellow-500">
          Escenarios
        </a>
      </nav>
    </header>
  );
};

export default Header;