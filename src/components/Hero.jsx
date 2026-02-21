export const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20 shadow-inner">
      <div className="container mx-auto px-4 text-center flex flex-col items-center">
        {/* Título principal llamativo */}
        <h2 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
          Construye tu PC de <span className="text-blue-500">Nueva Generación</span>
        </h2>
        
        {/* Subtítulo descriptivo */}
        <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl">
          Encuentra el mejor hardware para tu setup. Desde la potencia de la plataforma AM5 hasta las tarjetas gráficas más avanzadas para gaming y desarrollo.
        </p>
        
        {/* Botón de llamada a la acción (Call to Action) */}
        <button 
          onClick={() => window.scrollTo({ top: 500, behavior: 'smooth' })}
          className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105 shadow-lg text-lg"
        >
          Explorar Componentes
        </button>
      </div>
    </div>
  );
};