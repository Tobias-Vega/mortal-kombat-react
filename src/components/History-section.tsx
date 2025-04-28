import React from 'react';

const HistorySection: React.FC = () => {
  return (
    <section
  id="historia"
  className="flex justify-center items-center h-screen bg-transparent p-8"
>
  <div className="w-full max-w-2xl backdrop-blur-md border bg-black text-white flex flex-col justify-center items-center p-8 rounded-xl shadow-xl animate-fade-in">
    <h1 className="text-5xl font-extrabold text-yellow-400 mb-6 text-center drop-shadow-lg">
      Historia
    </h1>
    <p className="text-xl text-white leading-relaxed text-center">
      En el torneo Mortal Kombat, los guerreros de la Tierra deben enfrentar a los campeones del reino de Outworld. Si Outworld gana, podrá conquistar la Tierra. Siete luchadores, guiados por el dios Raiden, luchan para salvar el mundo y evitar que el emperador Shao Khan sea el nuevo gobernante de la Tierra.
    </p>
  </div>
</section>

  );
};

export default HistorySection;
