import React from 'react';

interface CharacterCardProps {
  name: string;
  description: string;
  image: string;
}

const CharacterCard: React.FC<CharacterCardProps> = ({ name, description, image }) => {
  return (
    <div className="bg-white bg-opacity-90 rounded-lg shadow-lg p-4 w-64 flex flex-col items-center text-center hover:scale-105 transition-transform">
      <img src={image} alt={name} className="w-48 h-48 object-contain mb-4" />
      <h2 className="text-xl text-gray-700 font-bold mb-2">{name}</h2>
      <p className="text-sm text-gray-700">{description}</p>
    </div>
  );
};

export default CharacterCard;
