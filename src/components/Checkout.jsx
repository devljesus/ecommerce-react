import { useState } from 'react';

// Recibimos el carrito para saber cuánto cobrar, y dos funciones para navegar
export const Checkout = ({ cart, onBackToCart, onConfirmOrder }) => {
  
  // 1. ESTADO DEL FORMULARIO: 
  // En lugar de crear 3 estados diferentes, usamos un objeto para agrupar los datos
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: ''
  });

  const total = cart.reduce((suma, item) => suma + (item.price * item.quantity), 0);

  // 2. FUNCIÓN DE ACTUALIZACIÓN:
  // Esta función es oro puro. Lee qué input estás escribiendo (name, email o address)
  // y actualiza solo ese pedacito del estado.
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // 3. FUNCIÓN DE ENVÍO:
  const handleSubmit = (e) => {
    e.preventDefault(); // ¡VITAL! Evita que el navegador recargue la página al enviar
    
    // Aquí, en el mundo real, enviaríamos 'formData' y 'cart' a tu Backend/Base de datos
    alert(`¡Pago exitoso! Gracias por tu compra, ${formData.name}.`);
    
    // Ejecutamos la función para limpiar el carrito y volver al inicio
    onConfirmOrder(); 
  };

  return (
    <div className="container mx-auto p-4 py-12 max-w-2xl text-white">
      {/* Botón para arrepentirse y volver */}
      <button 
        onClick={onBackToCart}
        className="text-blue-400 hover:text-blue-300 mb-6 font-semibold flex items-center transition-colors"
      >
        ← Volver al catálogo
      </button>

      <div className="bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-700">
        <h2 className="text-3xl font-extrabold mb-6">Finalizar Compra</h2>
        
        {/* Resumen rápido de la compra */}
        <div className="mb-8 p-4 bg-gray-900 rounded-xl border border-gray-700">
          <h3 className="text-xl font-bold mb-2">Resumen de tu pedido</h3>
          <p className="text-gray-400 mb-2">{cart.length} artículos en total.</p>
          <p className="text-2xl font-black text-blue-400">Total a pagar: ${total.toFixed(2)}</p>
        </div>

        {/* 4. EL FORMULARIO: Al darle submit, ejecuta handleSubmit */}
        <form onSubmit={handleSubmit} className="space-y-6">
          
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Nombre Completo</label>
            <input 
              type="text" 
              name="name" // Este 'name' debe coincidir exactamente con el estado inicial
              required // Validamos que no nos envíen el campo vacío
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-gray-900 border border-gray-600 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              placeholder="Ej. Jesús Roberto"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Correo Electrónico</label>
            <input 
              type="email" 
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-gray-900 border border-gray-600 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              placeholder="tu@correo.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Dirección de Envío</label>
            <input 
              type="text" 
              name="address"
              required
              value={formData.address}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-gray-900 border border-gray-600 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              placeholder="Tu calle, ciudad, etc."
            />
          </div>

          <button 
            type="submit"
            className="w-full bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white font-bold py-4 px-4 rounded-xl transition-all shadow-lg hover:shadow-green-500/30 text-lg mt-4"
          >
            Confirmar Pedido y Pagar
          </button>
        </form>
      </div>
    </div>
  );
};