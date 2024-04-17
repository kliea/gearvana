import React from 'react';
import TopBar from '../components/TopBar';
import { Card, Button, Label, Textarea } from 'flowbite-react';
import InputField from '../components/InputField';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
	const navigate = useNavigate();
	return (
		<main className='min-h-screen flex flex-col'>
			<TopBar isDisabled={false} />
			<div className='flex-1 flex justify-center items-center '>
				<Card className='px-5 py-2 bg-[#044F41] w-1/3'>
					<div className='text-white text-center'>
						<h1 className='text-2xl font-bold tracking-widest'>
							Join us Today!
						</h1>
						<h1 className='tracking-wide'>Sign up now to become a member.</h1>
					</div>
					<form className='flex flex-col gap-5 '>
						<div>
							<InputField
								name='name'
								type='string'
								placeholder='Enter your full name'
							/>
							<div>
								<Label className='text-white'>Address</Label>
								<Textarea />
							</div>
							<InputField
								name='Birth Date'
								type='date'
								placeholder='Enter your date of birth'
							/>
							<InputField
								name='email'
								type='email'
								placeholder='Enter your email address'
							/>
							<div className='flex items-end gap-2'>
								<InputField
									name='password'
									type='password'
									placeholder='Choose a password'
								/>
								<InputField
									name=''
									type='password'
									placeholder='Re-enter password'
								/>
							</div>
						</div>

						<Button
							className='bg-[#FFD21D] enabled:hover:bg-yellow-100 text-black font-bold tracking-wide'
							type='submit'>
							Signup
						</Button>
					</form>
					<div className='py-2 flex items-center gap-2 text-white'>
						<h1 className='text-gray-200'>Already a member?</h1>
						<button
							className='text-yellow-200 '
							onClick={() => {
								navigate('/login');
							}}>
							Login Here
						</button>
					</div>
				</Card>
			</div>
		</main>
	);
}
