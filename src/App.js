import React from 'react';
import './App.css';
import Navbar from './elements/Navbar';
import Footer from './elements/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Events from './pages/events';

function App() {
return (
	<Router>
	<Navbar />
	<Routes>
		<Route path='/' exact element={<Home />} />
		<Route path='/about' element={<About />} />
		<Route path='/events' element={<Events />} />
	</Routes>
  {/* <Footer /> */}
	</Router>
);
}

export default App;
