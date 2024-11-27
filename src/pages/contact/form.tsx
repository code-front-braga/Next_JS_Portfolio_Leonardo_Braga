import { ButtonMessageProps } from '@/@types/enums';
import { zodResolver } from '@hookform/resolvers/zod';
import clsx from 'clsx';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { PulseLoader } from 'react-spinners';
import { FaEnvelopeCircleCheck } from 'react-icons/fa6';
import { FaCircleExclamation } from 'react-icons/fa6';
import useSendEmail from './hook/send-email';
import { FaEnvelopeOpen } from 'react-icons/fa';
import Modal from './modal';

const inputsSchema = z.object({
	userName: z
		.string()
		.min(2, { message: 'O nome deve conter, pelo menos, dois caracteres' })
		.trim(),
	email: z.string().email({ message: 'Email inválido' }).trim(),
	message: z
		.string()
		.min(20, { message: 'Deve conter, pelo menos, 20 caracteres' }),
});

export type IInputsForm = z.infer<typeof inputsSchema>;

export default function Form() {
	const {
		handleEmail,
		isEmailSent,
		isEmailSending,
		isEmailError,
		showModal,
		setShowModal,
		setIsEmailSent,
	} = useSendEmail();

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<IInputsForm>({
		resolver: zodResolver(inputsSchema),
		mode: 'onChange',
	});

	const handleCloseModal = () => {
		reset();
		setShowModal(false);

		setTimeout(() => {
			setIsEmailSent(false);
		}, 900);
	};

	return (
		<>
			<form
				onSubmit={handleSubmit(handleEmail)}
				className={clsx(
					'm-auto mt-32 flex w-[85%] flex-col gap-8 rounded-lg bg-purple-800 bg-opacity-55 p-6',
					'mobile360px:m-auto',
					'desktop1024px:w-[40%]',
				)}
			>
				<h2
					className={clsx(
						'font-rajdhani text-3xl text-white',
						'mobile600px:text-4xl',
						'tablet960px:text-5xl',
						'desktop1024px:hidden',
					)}
				>
					Fale comigo!
				</h2>

				<div
					className={clsx(
						'relative flex w-full flex-col gap-2',
						'desktop1024px:gap-1',
					)}
				>
					<label
						className={clsx(
							'font-bebasNeue text-2xl tracking-wider text-white',
							'tablet960px:text-3xl',
							'desktop1024px:text-2xl',
							'desktop1630px:text-3xl',
						)}
					>
						Seu nome
					</label>
					<input
						{...register('userName')}
						type="text"
						className={clsx(
							'rounded-md p-4 font-rajdhani text-2xl',
							'desktop1024px:p-5',
							'desktop1630px:p-7',
						)}
					/>
					{errors.userName && (
						<span className="text-state-error absolute left-0 top-full mt-1 text-xl text-orangered">
							{errors.userName.message}
						</span>
					)}
				</div>

				<div
					className={clsx(
						'relative flex w-full flex-col gap-2',
						'desktop1024px:gap-1',
					)}
				>
					<label
						className={clsx(
							'font-bebasNeue text-2xl tracking-wider text-white',
							'tablet960px:text-3xl',
							'desktop1024px:text-2xl',
							'desktop1630px:text-3xl',
						)}
					>
						Seu email
					</label>
					<input
						{...register('email')}
						type="text"
						className={clsx(
							'rounded-md p-4 font-rajdhani text-2xl',
							'desktop1024px:p-5',
							'desktop1630px:p-7',
						)}
					/>
					{errors.email && (
						<span className="text-state-error absolute left-0 top-full mt-1 text-xl text-orangered">
							{errors.email.message}
						</span>
					)}
				</div>

				<div
					className={clsx(
						'relative flex w-full flex-col gap-2',
						'desktop1024px:gap-1',
					)}
				>
					<label
						className={clsx(
							'font-bebasNeue text-2xl tracking-wider text-white',
							'tablet960px:text-3xl',
							'desktop1024px:text-2xl',
							'desktop1630px:text-3xl',
						)}
					>
						Digite sua mensagem
					</label>
					<textarea
						{...register('message')}
						className={clsx(
							'h-44 rounded-md p-4 font-rajdhani text-2xl',
							'mobile600px:h-60',
							'desktop1024px:h-44',
							'desktop1630px:h-64',
							'desktop1630px:p-7',
						)}
						placeholder="em que posso ajudar?"
					/>
					{errors.message && (
						<span className="text-state-error absolute left-0 top-full mt-1 text-xl text-orangered">
							{errors.message.message}
						</span>
					)}
				</div>
				<button
					type="submit"
					disabled={isEmailSending}
					className={clsx(
						'relative mt-4 flex items-center justify-center rounded-md bg-white p-5 font-ubuntuCond text-2xl text-purple-800',
						'tablet960px:text-3xl',
					)}
				>
					{isEmailSending ? (
						<>
							{ButtonMessageProps.TEXT_SENDING}
							<PulseLoader
								size={6}
								color="#ff4500"
								className="absolute right-8"
							/>
						</>
					) : isEmailError ? (
						<>
							{ButtonMessageProps.TEXT_ERROR}
							<FaCircleExclamation
								size={16}
								className="absolute right-8 text-red-500"
							/>
						</>
					) : isEmailSent ? (
						<>
							{ButtonMessageProps.TEXT_SUCCESSFULL}
							<FaEnvelopeCircleCheck
								size={16}
								className="absolute right-8 text-green-500"
							/>
						</>
					) : (
						<>
							{ButtonMessageProps.TEXT_DEFAULT}
							<FaEnvelopeOpen
								size={16}
								className="absolute right-8 text-orangered"
							/>
						</>
					)}
				</button>
			</form>
			<Modal
				isEmailSent={isEmailSent}
				showModal={showModal}
				onClose={handleCloseModal}
			/>
		</>
	);
}
