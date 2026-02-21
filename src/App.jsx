import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero'; // 1. Importamos el nuevo banner
import { ProductGrid } from './components/ProductGrid';
import { Cart } from './components/Cart';

function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

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

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  return (
    <div className="min-h-screen bg-gray-900 font-sans relative">
      <Navbar cart={cart} onOpenCart={() => setIsCartOpen(true)} />
      
      <main>
        {/* 2. Colocamos el Hero aquí, es lo primero que verá el usuario */}
        <Hero />
        
        <ProductGrid onAddToCart={addToCart} />
      </main>

      {isCartOpen && (
        <Cart 
          cart={cart} 
          onRemoveItem={removeFromCart} 
          onClose={() => setIsCartOpen(false)} 
        />
      )}
    </div>
  );
}

export default App;