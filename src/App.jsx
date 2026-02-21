import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { ProductGrid } from './components/ProductGrid';
import { Cart } from './components/Cart'; // 1. Importamos nuestro nuevo componente

function App() {
  const [cart, setCart] = useState([]);
  
  // 2. NUEVO ESTADO: Controla si el panel del carrito se ve (true) o no se ve (false)
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Función para agregar (la que hicimos antes)
  const addToCart = (product) => {
    const existingProduct = cart.find(item => item.id === product.id);
    if (existingProduct) {
      setCart(cart.map(item => 
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  // 3. NUEVA FUNCIÓN: Eliminar del carrito
  // .filter() devuelve todos los productos que NO tengan el ID que queremos borrar
  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans relative">
      {/* 4. Le pasamos al Navbar la orden de ABRIR el carrito */}
      <Navbar cart={cart} onOpenCart={() => setIsCartOpen(true)} />
      
      <main>
        <ProductGrid onAddToCart={addToCart} />
      </main>

      {/* 5. RENDERIZADO CONDICIONAL: 
          Esto significa: "Si isCartOpen es true, entonces (&&) dibuja el componente <Cart />" */}
      {isCartOpen && (
        <Cart 
          cart={cart} 
          onRemoveItem={removeFromCart} 
          onClose={() => setIsCartOpen(false)} // Función para CERRAR
        />
      )}
    </div>
  );
}

export default App;