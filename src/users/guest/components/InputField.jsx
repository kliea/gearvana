import React from 'react';
import { Label, TextInput } from 'flowbite-react';

export default function InputField({ name, type, placeholder }) {
	return (
		<div>
			<Label className='text-white capitalize'>{name}</Label>
			<TextInput type={type} placeholder={placeholder} required />
		</div>
	);
}
