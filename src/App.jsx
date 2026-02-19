import { Navbar } from './components/Navbar';
import { ProductGrid } from './components/ProductGrid';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Navbar />
      <main>
        <ProductGrid />
      </main>
    </div>
  );
}

export default App;