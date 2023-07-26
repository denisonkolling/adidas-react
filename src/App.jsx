import { useState } from 'react';
import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';
import Footer from './components/Footer';
import TopSection from './components/TopSection';

function App() {
	return (
		<>
			<Navbar />
			<TopSection />
			<ProductCard />
			<Footer />
		</>
	);
}

export default App;
