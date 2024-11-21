import { links } from '@/lib/utils/links-config';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithubAlt, FaLinkedin } from 'react-icons/fa';
import MenuItem from './menu-item';
import { useState } from 'react';
import BurgerButton from './burger-button';

export default function HeaderMobile() {
	const [showMenu, setShowMenu] = useState<boolean>(false);

	const handleToggleMenu = () => setShowMenu(!showMenu);
	const handleCloseMenu = () => setShowMenu(false);

	return (
		<header
			className={clsx(
				'-h-[100%] fixed z-50 flex h-0 w-full bg-[#0c0c0c] bg-opacity-75 backdrop-blur-sm',
				showMenu && 'h-screen', // open menu
				'transition-all duration-300', // animação
				'tablet960px:hidden', // hide menu (min-width: 991px)
			)}
		>
			<div
				className={clsx(
					'm-auto flex h-[70%] w-[70%] flex-col items-center justify-between',
					showMenu ? 'flex' : 'hidden',
				)}
			>
				<div className={clsx('flex items-center gap-4')}>
					<span
						className={clsx('font-rajdhani text-2xl tracking-wider text-white')}
					>
						Desenvolvido por
					</span>
					<Image
						src="/svg/my-logo.svg"
						alt="Logo: {lb.};"
						width={28}
						height={28}
						className={clsx()}
					/>
				</div>

				<nav
					className={clsx(
						'gap flex flex-col items-center gap-10 text-orangered',
					)}
				>
					{links.map(link => (
						<MenuItem
							href={link.href}
							onClick={handleCloseMenu}
							key={link.id}
							className={clsx(
								'font-ubuntuCond text-4xl font-normal', // default (min-width: 320px)
								'mobile414px:text-5xl', // (min-width: 414px)
							)}
						>
							{link.name}
						</MenuItem>
					))}
				</nav>

				<div className={clsx('flex items-center gap-6 text-white')}>
					<Link href="https://github.com/code-front-braga" target="_blank">
						<FaGithubAlt size={26} />
					</Link>
					<Link
						href="https://www.linkedin.com/in/leonardo-braga-8b7856216"
						target="_blank"
					>
						<FaLinkedin size={26} />
					</Link>
				</div>
			</div>
			<BurgerButton checked={showMenu} onClick={handleToggleMenu} />
		</header>
	);
}
