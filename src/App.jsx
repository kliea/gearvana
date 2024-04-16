import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './users/guest/pages/Landing';
import Login from './users/guest/pages/Login';
import Signup from './users/guest/pages/Signup';

export default function App() {
	return (
		<BrowserRouter>
			<main className='min-h-screen bg-white'>
				<Routes>
					<Route path='/' element={<Landing />} />
					<Route path='/login' element={<Login />} />
					<Route path='/signup' element={<Signup />} />
				</Routes>
			</main>
		</BrowserRouter>
	);
}
