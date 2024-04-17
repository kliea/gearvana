import React from 'react';
import TopBar from '../components/TopBar';
import { Card, Label, TextInput, Checkbox, Button } from 'flowbite-react';
import InputField from '../components/InputField';

export default function Signup() {
	return (
		<main className='min-h-screen flex flex-col'>
			<TopBar isDisabled={false} />
			<div className='flex-1 flex justify-center items-center '>
				<Card className='px-5 py-2 bg-[#044F41] '>
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
							className='bg-[#FFD21D] text-black font-bold tracking-wide'
							type='submit'>
							Signup
						</Button>
					</form>
				</Card>
			</div>
		</main>
	);
}
