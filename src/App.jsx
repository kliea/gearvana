import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './guest/pages/Landing';
import Login from './guest/pages/Login';
import Signup from './guest/pages/Signup';

export default function App() {
	return (
		<BrowserRouter>
			<main className='min-h-screen bg-[#3B5D50]'>
				<Routes>
					<Route path='/' element={<Landing />} />
					<Route path='/login' element={<Login />} />
					<Route path='/signup' element={<Signup />} />
				</Routes>
			</main>
		</BrowserRouter>
	);
}
