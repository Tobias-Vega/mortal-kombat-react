import React from 'react';

interface StageCardProps {
  name: string;
  image: string;
}

const StageCard: React.FC<StageCardProps> = ({ name, image }) => {
  return (
    <div className="relative w-full max-w-md h-80 rounded-xl overflow-hidden shadow-2xl border-2 border-yellow-500 hover:scale-105 transition-transform duration-300 image-scenario">
      <img
        src={image}
        className="w-full h-full object-cover"
      />
      <div className="absolute bottom-0 w-full bg-black bg-opacity-70 text-yellow-400 text-xl font-bold text-center py-2">
        {name}
      </div>
    </div>
  );
};

export default StageCard;
