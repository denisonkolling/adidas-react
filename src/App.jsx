import Product from './pages/product';
import ProductCard from './components/ProductCard';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Man from './pages/man';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Woman from './pages/woman';
import Kids from './pages/kids';
import News from './pages/news';
import World from './pages/world';

function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/man" element={<Man />} />
				<Route path="/woman" element={<Woman />} />
				<Route path="/kids" element={<Kids />} />
				<Route path="/news" element={<News />} />
				<Route path="/world" element={<World />} />
				
			</Routes>
			<Footer />
		</>
	);
}

export default App;
