'use client';

import emailjs from '@emailjs/browser';
import { useState } from 'react';
import { IInputsForm } from '../form';

export default function useSendEmail() {
	const [isEmailSending, setIsEmailSending] = useState<boolean>(false);
	const [isEmailSent, setIsEmailSent] = useState<boolean>(false);
	const [showModal, setShowModal] = useState<boolean>(false);
	const [isEmailError, setIsEmailError] = useState<boolean>(false);

	const handleEmail = (data: IInputsForm) => {
		setIsEmailSending(true);
		setIsEmailSent(false);
		setShowModal(false);

		const templateParams = {
			from_name: data.userName,
			email: data.email,
			message: data.message,
		};

		emailjs
			.send(
				process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
				process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
				templateParams,
				process.env.NEXT_PUBLIC_EMAILJS_USER_ID,
			)
			.then(response => {
				console.log('Email enviado', response);
				setIsEmailSent(true);
				setShowModal(true);
			})
			.catch(err => {
				setIsEmailSent(false);
				setIsEmailError(true);
				setShowModal(true);
				throw new Error('Falha no envio do email', err);
			})
			.finally(() => {
				setIsEmailSending(false);
			});
	};

	return {
		isEmailSending,
		isEmailSent,
		setIsEmailSent,
		showModal,
		setShowModal,
		isEmailError,
		handleEmail,
	};
}
