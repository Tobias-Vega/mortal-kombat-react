import React from 'react';
import StageCard from './StageCard';

const stages = [
  { name: 'The Pit', image: '/stages/Pit1.jpeg' },
  { name: 'The Throne Room', image: '/stages/throne-room.jpeg' },
  { name: 'The Palace Gates', image: '/stages/palace-gates.jpeg' },
  { name: 'The Portal', image: '/stages/portal.jpeg' },
  { name: 'The Living Forest', image: '/stages/forest.jpeg' },
  { name: 'Khan Arena', image: '/stages/arena.jpeg' },
  { name: 'The Street', image: '/stages/street.jpeg' },
  { name: 'Smoke Portal', image: '/stages/portal-mk3.jpeg' },
  { name: 'Soul Chamber', image: '/stages/soul.jpeg' },
];

const StagesSection: React.FC = () => {
  return (
    <section id="escenarios" className="min-h-screen bg-transparent p-8">
      <h1 className="text-4xl font-bold text-yellow-400 text-center mb-12 drop-shadow-md">
        Escenarios
      </h1>
      <div className="flex flex-wrap justify-center gap-8">
        {stages.map((stage, index) => (
          <StageCard key={index} name={stage.name} image={stage.image} />
        ))}
      </div>
    </section>
  );
};

export default StagesSection;
