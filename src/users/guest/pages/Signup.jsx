import React from 'react';
import TopBar from '../components/TopBar';
import { Card, Label, TextInput, Checkbox, Button } from 'flowbite-react';

export default function Signup() {
	return (
		<main className='min-h-screen flex flex-col'>
			<TopBar />
			<div className='flex-1 flex justify-center items-center '>
				<Card className='px-5 py-2 bg-[#044F41] '>
					<div className='text-white text-center'>
						<h1 className='text-2xl font-bold tracking-widest'>
							Welcome Back!
						</h1>
						<h1 className='tracking-wide'>Log in to access your account.</h1>
					</div>
					<form className='flex flex-col gap-4 '>
						<div>
							<Label className='text-white'>Email</Label>
							<TextInput
								type='email'
								placeholder='Enter your email address'
								required
							/>
						</div>
						<div>
							<Label className='text-white'>Password</Label>
							<TextInput
								type='password'
								placeholder='Enter your password'
								required
							/>
						</div>
						<div className='flex items-center gap-2'>
							<Checkbox />
							<Label className='text-white'>Remember me</Label>
						</div>
						<Button
							className='bg-[#FFD21D] text-black font-bold tracking-wide'
							type='submit'>
							Submit
						</Button>
					</form>
				</Card>
			</div>
		</main>
	);
}
