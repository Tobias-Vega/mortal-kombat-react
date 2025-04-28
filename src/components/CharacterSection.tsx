import React from 'react';
import CharacterCard from './CharacterCard';

const characters = [
  {
    name: 'Liu Kang',
    image: '/characters/liukang.jpeg',
    description: 'Monje shaolin y campeón del Mortal Kombat, lucha por defender la Tierra del emperador Shao Kahn.'
  },
  {
    name: 'Sub-Zero',
    image: '/characters/sub-zero.jpeg',
    description: 'Un guerrero del clan Lin Kuei que ha roto sus lazos con ellos para detener su corrupción.'
  },
  {
    name: 'Scorpion',
    image: '/characters/scorpion.jpeg',
    description: 'Espíritu vengativo que regresa del infierno para castigar a quienes destruyeron su clan.'
  },
  {
    name: 'Sonya Blade',
    image: '/characters/sonya.jpeg',
    description: 'Agente de las fuerzas especiales que busca detener a Kano y combatir a las fuerzas del mal.'
  },
  {
    name: 'Jax',
    image: '/characters/jax.jpeg',
    description: 'Comandante militar con brazos cibernéticos, busca justicia y proteger la Tierra.'
  },
  {
    name: 'Noob Saibot',
    image: '/characters/noob-saibot.png',
    description: 'El antiguo Sub-Zero, ahora un espectro que busca venganza y caos en el mundo mortal.'
  },
  {
    name: 'Sindel',
    image: '/characters/sindel.jpeg',
    description: 'Reina resucitada de Edenia, ahora sirviente de Shao Kahn con un grito mortal.'
  },
  {
    name: 'Shao Kahn',
    image: '/characters/shao-khan.jpeg',
    description: 'El tiránico emperador de Outworld que busca conquistar la Tierra por completo.'
  },
  {
    name: 'Kitana',
    image: '/characters/kitana.jpeg',
    description: 'Princesa de Edenia y guerrera experta, lucha por la libertad de su reino.'
  },
  {
    name: 'Raiden',
    image: '/characters/raiden.jpeg',
    description: 'Dios del trueno y protector de la Tierra, lucha contra las fuerzas del mal.'
  },
  {
    name: 'Shang Tsung',
    image: '/characters/shang-tsung.jpeg',
    description: 'Hechicero que puede robar las almas y habilidades de otros combatientes.'
  },
  {
    name: 'Johny Cage',
    image: '/characters/cage.jpeg',
    description: 'Actor de Hollywood y experto en artes marciales, busca demostrar su valía en el Mortal Kombat.'
  }
];

const CharactersSection: React.FC = () => {
  return (
    <section id="personajes" className="min-h-screen bg-transparent p-8">
      <h1 className="text-4xl font-bold text-yellow-400 text-center mb-8">Personajes</h1>
      <div className="flex flex-wrap justify-center gap-6">
        {characters.map((char) => (
          <CharacterCard
            key={char.name}
            name={char.name}
            image={char.image}
            description={char.description}
          />
        ))}
      </div>
    </section>
  );
};

export default CharactersSection;
