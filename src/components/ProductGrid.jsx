import products from '../data/products.json';

export const ProductGrid = ({ onAddToCart }) => {
  return (
    <div className="container mx-auto p-4 py-12">
      {/* 1. Cambiamos el título a texto blanco (text-white) */}
      <h2 className="text-4xl font-extrabold text-center text-white mb-10 tracking-tight">
        Catálogo de Componentes
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          // 2. Cambiamos el fondo de la tarjeta a bg-gray-800 y le ponemos un borde sutil
          <div key={product.id} className="bg-gray-800 border border-gray-700 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col transform hover:-translate-y-2">
            
            {/* 3. Fondo oscuro también para la imagen por si tiene transparencias */}
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-56 object-cover rounded-t-2xl bg-gray-700"
            />
            <div className="p-6 flex flex-col flex-grow">
              {/* 4. Textos en colores claros para que resalten sobre el gris oscuro */}
              <span className="text-xs text-blue-400 font-bold uppercase tracking-wider mb-2">
                {product.category}
              </span>
              <h3 className="font-bold text-white text-xl mb-3 flex-grow leading-tight">
                {product.name}
              </h3>
              <p className="text-2xl font-black text-gray-200 mb-6">
                ${product.price}
              </p>
              
              <button 
                onClick={() => onAddToCart(product)}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-bold py-3 px-4 rounded-xl transition-all shadow-md hover:shadow-blue-500/20"
              >
                Agregar al Carrito
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};