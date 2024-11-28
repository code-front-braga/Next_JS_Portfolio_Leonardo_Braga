import { ButtonMessageProps } from '@/@types/enums';
import clsx from 'clsx';
import { FaEnvelopeOpen } from 'react-icons/fa';
import { FaCircleExclamation, FaEnvelopeCircleCheck } from 'react-icons/fa6';
import { PulseLoader } from 'react-spinners';

type SubmitButtonProps = {
	isEmailSending: boolean;
	isEmailError: boolean;
	isEmailSent: boolean;
};

export default function SubmitButton({
	isEmailSending,
	isEmailError,
	isEmailSent,
}: SubmitButtonProps) {
	return (
		<button
			type="submit"
			disabled={isEmailSending}
			className={clsx(
				'relative mt-4 flex items-center justify-center rounded-md p-5 font-ubuntuCond text-2xl',
				'tablet960px:text-3xl',
				{
					'bg-white': !isEmailSending && !isEmailError && !isEmailSent,
					'bg-orange-500': isEmailSending,
					'bg-red-500': isEmailError,
					'bg-green-500': isEmailSent,
				},
			)}
		>
			{isEmailSending ? (
				<>
					<span className="text-purple-800">
						{ButtonMessageProps.TEXT_SENDING}
					</span>
					<PulseLoader size={6} color="#6b21a8" className="absolute right-8" />
				</>
			) : isEmailError ? (
				<>
					<span className="text-white">{ButtonMessageProps.TEXT_ERROR}</span>
					<FaCircleExclamation
						size={16}
						className="absolute right-8 text-white"
					/>
				</>
			) : isEmailSent ? (
				<>
					<span className="text-black">
						{ButtonMessageProps.TEXT_SUCCESSFULL}
					</span>
					<FaEnvelopeCircleCheck
						size={16}
						className="absolute right-8 text-white"
					/>
				</>
			) : (
				<>
					<span className="text-purple-800">
						{ButtonMessageProps.TEXT_DEFAULT}
					</span>
					<FaEnvelopeOpen
						size={16}
						className="absolute right-8 text-orangered"
					/>
				</>
			)}
		</button>
	);
}
