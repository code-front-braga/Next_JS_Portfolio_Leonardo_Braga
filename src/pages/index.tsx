import clsx from 'clsx';
import Head from 'next/head';
import { motion } from 'motion/react';
import { splitText } from '@/lib/utils/split-text';
import { duplicateIcons } from '../../public/svg/icons';
import Image from 'next/image';
import styles from '../styles/slider-icons.module.css';

const imgVariants = {
	initial: {
		x: -100,
		opacity: 0,
	},
	finish: {
		x: 0,
		opacity: 1,
	},
};

const iconsVariants = {
	initial: { x: 0 },
	forward: { x: '-190%' },
};

const textVariants = {
	hidden: { opacity: 0 },
	reveal: { opacity: 1 },
};

const texts = {
	hi: 'Olá,',
	myName: 'Eu sou Leonardo Braga',
	job: 'Desenvolvedor Frontend',
};

export default function Home() {
	const splittedHi = splitText(texts.hi);
	const splittedMyName = splitText(texts.myName);
	const splittedJob = splitText(texts.job);

	return (
		<>
			<Head>
				<title>Página Inicial | Leonardo Braga</title>
				<meta name="description" content="Página Incial" />
			</Head>

			<section
				className={clsx(
					'relative flex h-screen w-full', // default (min-width: 320px)
				)}
			>
				<article
					className={clsx(
						'm-auto flex h-[75%] w-[90%] flex-col items-center justify-center gap-8', // default (min-width: 320px)
						'mobile414px:gap-16', // (min-width: 414px)
						'mobile600px:justify-evenly mobile600px:gap-0', // (min-width: 600px)
					)}
				>
					<div
						className={clsx(
							'h-[40%] w-[50%] overflow-hidden rounded-full bg-orangered outline outline-1 outline-offset-4 outline-orangered', // default (min-width: 320px)
							'mobile414px:h-[36%] mobile414px:w-[64%]', // (min-width: 414px)
							'mobile480px:h-[42%]', // (min-width: 480px)
							'mobile600px:w-[60%]', // (min-width: 600px)
							'tablet768px:w-[70%]', // (min-width: 768px)
							'desktop1024px:h-[50%]', // default (min-width: 1024px)
						)}
					>
						<motion.img
							variants={imgVariants}
							initial="initial"
							animate="finish"
							transition={{ duration: 1.2, delay: 0.8, ease: 'backOut' }}
							src="/my-photo.png"
							alt="Homem branco (Criador do site), cabelo breto e mão esquerda no queixo de aparência neutra."
							className={clsx(
								'h-full w-full object-contain drop-shadow-[-.7rem_.6rem_1.8rem_#000]', // default (min-width: 320px)
							)}
						/>
					</div>

					<div
						className={clsx(
							'flex w-[80%] flex-col border-l-2 p-6', // default (min-width: 320px)
							'tablet960px:gap-4 tablet960px:border-r-2 tablet960px:text-center', // (min-width: 960px)
						)}
					>
						<motion.h3
							initial="hidden"
							whileInView="reveal"
							transition={{ staggerChildren: 0.2 }}
							viewport={{ once: true }}
						>
							{splittedHi.map(text => (
								<motion.span
									key={text}
									variants={textVariants}
									transition={{ duration: 0.8 }}
									className={clsx(
										'text-5xl text-orangered', // default (min-width: 320px)
										'mobile480px:text-6xl', // default (min-width: 480px)
										'desktop1024px:text-5xl', // default (min-width: 1024px)
									)}
								>
									{text}
								</motion.span>
							))}
						</motion.h3>
						<motion.h2
							initial="hidden"
							whileInView="reveal"
							viewport={{ once: true }}
							transition={{ staggerChildren: 0.2, delayChildren: 1.2 }}
						>
							{splittedMyName.map((text, index) => (
								<motion.span
									key={text}
									variants={textVariants}
									transition={{ duration: 0.8 }}
									className={clsx(
										'font-bebasNeue text-6xl', // default (min-width: 320px)
										index >= 7 ? 'text-purple-600' : 'text-white',
										'mobile480px:text-7xl', // (min-width: 480px)
										'desktop1024px:text-6xl', // default (min-width: 1024px)
									)}
								>
									{text}
								</motion.span>
							))}
						</motion.h2>
						<motion.h4
							initial="hidden"
							whileInView="reveal"
							transition={{
								staggerChildren: 0.2,
								delayChildren: 2,
							}}
						>
							{splittedJob.map((text, index) => (
								<motion.span
									key={text}
									variants={textVariants}
									className={clsx(
										'font-rajdhani text-2xl tracking-wide', // default (min-width: 320px)
										index >= 14 ? 'font-bold text-orangered' : 'text-white',
										'mobile600px:text-3xl', // (min-width: 600px)
									)}
								>
									{text}
								</motion.span>
							))}
						</motion.h4>
					</div>
				</article>

				<div
					className={clsx(
						styles.slider,
						'bg-purple-800 bg-opacity-20', // default (min-width: 320px)
					)}
				>
					<motion.div
						initial="initial"
						animate="forward"
						variants={iconsVariants}
						transition={{ duration: 4, ease: 'linear', repeat: Infinity }}
						className={styles['slide-track']}
					>
						{duplicateIcons.map((icon, index) => (
							<Image
								key={index}
								src={icon}
								alt=""
								width={22}
								height={22}
								className="mobile600px:w-12"
							/>
						))}
					</motion.div>
				</div>
			</section>
		</>
	);
}
