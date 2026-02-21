// 1. Ahora también recibimos onOpenCart
export const Navbar = ({ cart, onOpenCart }) => {
  
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="bg-gray-900 text-white p-4 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-wider">TechStore</h1>
        
        {/* 2. Le agregamos el evento onClick a todo el contenedor del ícono */}
        <div className="relative cursor-pointer" onClick={onOpenCart}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
          </svg>
          
          <span className="absolute -top-2 -right-2 bg-blue-500 text-xs font-bold px-2 py-0.5 rounded-full">
            {totalItems}
          </span>
        </div>
      </div>
    </nav>
  );
};