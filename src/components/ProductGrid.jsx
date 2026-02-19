import products from '../data/products.json';

export const ProductGrid = () => {
  return (
    <div className="container mx-auto p-4 my-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Catálogo de Componentes</h2>
      
      {/* Sistema de grilla (Grid) de Tailwind: responsive para móviles y PC */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        
        {/* Aquí iteramos sobre nuestra "base de datos" */}
        {products.map((product) => (
          <div key={product.id} className="bg-white border rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden flex flex-col">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-48 object-cover bg-gray-100"
            />
            <div className="p-4 flex flex-col flex-grow">
              <span className="text-xs text-blue-500 font-semibold uppercase tracking-wider mb-1">
                {product.category}
              </span>
              <h3 className="font-bold text-gray-800 text-lg mb-2 flex-grow">
                {product.name}
              </h3>
              <p className="text-xl font-black text-gray-900 mb-4">
                ${product.price}
              </p>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors">
                Agregar al Carrito
              </button>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
};