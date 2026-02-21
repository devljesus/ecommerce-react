import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProductGrid } from './components/ProductGrid';
import { Cart } from './components/Cart';
import { Checkout } from './components/Checkout'; // 1. Importamos la nueva pantalla

function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  
  // 2. NUEVO ESTADO: Controla si vemos la tienda o la pantalla de pago
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

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

  // 3. NUEVA FUNCIÓN: Ir a pagar
  const goToCheckout = () => {
    setIsCartOpen(false); // Cerramos el panel lateral del carrito
    setIsCheckoutOpen(true); // Abrimos la pantalla completa de pago
  };

  // 4. NUEVA FUNCIÓN: Terminar la compra con éxito
  const handleOrderSuccess = () => {
    setCart([]); // Vaciamos el carrito (lista en blanco)
    setIsCheckoutOpen(false); // Volvemos a la tienda principal
  };

  return (
    <div className="min-h-screen bg-gray-900 font-sans relative">
      <Navbar cart={cart} onOpenCart={() => setIsCartOpen(true)} />
      
      <main>
        {/* 5. EL SEMÁFORO (Renderizado Condicional): 
            ¿isCheckoutOpen es true? -> Muestra <Checkout />
            ¿isCheckoutOpen es false? ( : ) -> Muestra <Hero /> y <ProductGrid /> */}
        {isCheckoutOpen ? (
          <Checkout 
            cart={cart} 
            onBackToCart={() => setIsCheckoutOpen(false)} // Función para el botón "Volver"
            onConfirmOrder={handleOrderSuccess} // Función al llenar el formulario
          />
        ) : (
          <>
            <Hero />
            <ProductGrid onAddToCart={addToCart} />
          </>
        )}
      </main>

      {/* 6. Le pasamos la función de ir a pagar al Carrito */}
      {isCartOpen && (
        <Cart 
          cart={cart} 
          onRemoveItem={removeFromCart} 
          onClose={() => setIsCartOpen(false)} 
          onProceedToPay={goToCheckout} // ¡Nueva prop enviada!
        />
      )}
    </div>
  );
}

export default App;