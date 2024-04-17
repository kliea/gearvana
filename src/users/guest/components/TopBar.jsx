import React from 'react';
import { Navbar, Button, TextInput } from 'flowbite-react';
import { Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function TopBar({ isDisabled }) {
	const navigate = useNavigate();
	return (
		<>
			<Navbar className='bg-[#DFE101] py-5 px-20 text-black flex h-full'>
				<button>LOGO</button>
				<TextInput
					className='w-1/3'
					type='email'
					icon={Search}
					placeholder='Search for products and brands'
					required
				/>
				<div className='flex gap-3 list-none font-semibold'>
					<button>Home</button>
					<button>About</button>
					<button>Services</button>
					<button>Pricing</button>
					<button>Contact</button>
				</div>
				<Button
					onClick={() => {
						navigate('/login');
					}}
					gradientMonochrome='success'
					className='tracking-widest'
					pill
					disabled={isDisabled}>
					LOGIN
				</Button>
			</Navbar>
		</>
	);
}
