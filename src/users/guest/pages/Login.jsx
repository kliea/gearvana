import React from 'react';
import TopBar from '../components/TopBar';
import { Card, Label, TextInput, Checkbox, Button } from 'flowbite-react';
import { useNavigate } from 'react-router-dom';
import InputField from '../components/InputField';

export default function Login() {
	const navigate = useNavigate();
	return (
		<main className='min-h-screen flex flex-col'>
			<TopBar isDisabled={true} />
			<div className='flex-1 flex justify-center items-center '>
				<Card className='px-5 py-2 bg-[#044F41] '>
					<div className='text-white text-center'>
						<h1 className='text-2xl font-bold tracking-widest'>
							Welcome Back!
						</h1>
						<h1 className='tracking-wide text-gray-200'>
							Log in to access your account.
						</h1>
					</div>
					<form className='flex flex-col gap-4 '>
						<InputField
							name='email'
							type='email'
							placeholder='Enter your email address'
						/>
						<InputField
							name='password'
							type='password'
							placeholder='Enter your password'
						/>
						<div className='flex items-center gap-2'>
							<Checkbox />
							<Label className='text-white'>Remember me</Label>
						</div>
						<Button
							className='bg-[#FFD21D] text-black font-bold tracking-wide'
							type='submit'>
							Login
						</Button>
					</form>
					<div className='py-2 flex items-center gap-2 text-white'>
						<h1 className='text-gray-200'>Not a member?</h1>
						<button
							className='text-yellow-200'
							onClick={() => {
								navigate('/signup');
							}}>
							Signup Here
						</button>
					</div>
				</Card>
			</div>
		</main>
	);
}
