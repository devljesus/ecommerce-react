export const Cart = ({ cart, onRemoveItem, onClose, onProceedToPay }) => {
  
  const total = cart.reduce((suma, item) => suma + (item.price * item.quantity), 0);

  return (
    <div className="fixed top-0 right-0 w-80 h-full bg-white shadow-2xl z-50 p-4 flex flex-col border-l border-gray-200">
      
      {/* 1. Encabezado del Carrito (Aquí usamos onClose) */}
      <div className="flex justify-between items-center border-b pb-4 mb-4">
        <h2 className="text-xl font-bold text-gray-800">Tu Carrito</h2>
        <button onClick={onClose} className="text-gray-500 hover:text-red-500 font-bold text-xl">
          ✕
        </button>
      </div>
      
      {/* 2. Lista de Productos (Aquí usamos onRemoveItem) */}
      <div className="flex-grow overflow-y-auto">
        {cart.length === 0 ? (
          <p className="text-gray-500 text-center mt-10">Tu carrito está vacío 🛒</p>
        ) : (
          cart.map(item => (
            <div key={item.id} className="flex justify-between items-center mb-4 border-b pb-2">
              <div>
                <p className="font-semibold text-sm text-gray-800">{item.name}</p>
                <p className="text-gray-500 text-xs">Cant: {item.quantity} x ${item.price}</p>
              </div>
              <button 
                onClick={() => onRemoveItem(item.id)}
                className="text-red-500 text-xs font-semibold hover:underline"
              >
                Quitar
              </button>
            </div>
          ))
        )}
      </div>

      {/* 3. Total a Pagar y Botón de Checkout (Aquí usamos onProceedToPay) */}
      <div className="border-t pt-4 mt-4">
        <p className="text-lg font-bold flex justify-between text-gray-800">
          <span>Total:</span> 
          <span>${total.toFixed(2)}</span>
        </p>
        <button 
          onClick={onProceedToPay}
          className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded mt-4 transition-colors disabled:bg-gray-400"
          disabled={cart.length === 0} 
        >
          Proceder al Pago
        </button>
      </div>

    </div>
  );
};