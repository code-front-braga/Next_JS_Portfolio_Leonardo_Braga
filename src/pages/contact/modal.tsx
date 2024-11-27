'use client';

import { ModalMessageProps } from '@/@types/enums';
import clsx from 'clsx';
import { motion } from 'motion/react';
import { FaCheckCircle, FaWhatsapp } from 'react-icons/fa';
import { IoIosClose } from 'react-icons/io';
import { FaCircleExclamation } from 'react-icons/fa6';
import Link from 'next/link';

const variants = {
	hidden: { y: '-100%', opacity: 0 },
	reveal: { y: '6rem', opacity: 1 },
};

type ModalProps = {
	isEmailSent: boolean;
	showModal: boolean;
	onClose: () => void;
};

export default function Modal({ onClose, isEmailSent, showModal }: ModalProps) {
	return (
		<div
			className={clsx(
				'fixed inset-0 flex items-start justify-center transition-all',
				{
					'-z-50 duration-1000': !showModal,
					'z-50 bg-purple-800 bg-opacity-55 backdrop-blur-sm': showModal,
				},
			)}
		>
			<motion.div
				variants={variants}
				initial="hidden"
				animate={showModal ? 'reveal' : 'hidden'}
				transition={{ duration: 0.4 }}
				className={clsx(
					'relative flex w-[90%] flex-col gap-2 rounded-3xl border-l-4 border-r-4 bg-white p-3 shadow-[0_0_2.6rem_#000]',
					'tablet768px:w-[40rem]',
					isEmailSent ? 'border-green-500' : 'border-red-500',
				)}
			>
				<h3 className="flex w-full items-center justify-between font-rajdhani text-2xl font-bold text-purple-800">
					{isEmailSent
						? ModalMessageProps.TITLE_SUCCESSFULL
						: ModalMessageProps.TITLE_ERROR}
					{isEmailSent ? (
						<FaCheckCircle size={16} className="text-green-500" />
					) : (
						<FaCircleExclamation size={16} className="text-red-500" />
					)}
				</h3>
				<h4 className="font-sans text-xl">
					{isEmailSent
						? ModalMessageProps.SUBTITLE_SUCCESSFULL
						: ModalMessageProps.SUBTITLE_ERROR}
				</h4>
				<hr />
				<div className="m-auto flex w-[85%] items-center justify-between gap-8">
					<span className="font-rajdhani text-2xl">
						Me dê um olá no whatsapp!
					</span>
					<Link
						href={`https://wa.me/${process.env.NEXT_PUBLIC_PHONE_NUMBER}?text=Olá!%20Em%20de%20que%20posso%20ajudar%20?`}
					>
						<FaWhatsapp size={28} className="text-social-zap" />
					</Link>
				</div>
				<button type="button" onClick={onClose}>
					<IoIosClose
						size={30}
						className="absolute -top-16 left-1/2 -translate-x-1/2 rounded-full bg-green-500 text-white shadow-[0_.8rem_1.8rem_#00000095]"
					/>
				</button>
			</motion.div>
		</div>
	);
}
