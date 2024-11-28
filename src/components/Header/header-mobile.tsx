import { links } from '@/lib/utils/links-config';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithubAlt, FaLinkedin } from 'react-icons/fa';
import MenuItem from './menu-link';
import { useState } from 'react';
import BurgerButton from './burger-button';
import { useRouter } from 'next/router';
import useScrollDetection from '../../lib/hooks/useScrollDetection';

export default function HeaderMobile() {
	const [showMenu, setShowMenu] = useState<boolean>(false);
	const router = useRouter();
	const isProjectPage = router.pathname === '/projects';
	const isScrolled = useScrollDetection();

	const handleToggleMenu = () => setShowMenu(!showMenu);
	const handleCloseMenuByLink = () => setShowMenu(false);

	return (
		<header
			className={clsx(
				'fixed z-50 flex h-28 w-full transition-all duration-300',
				'tablet960px:hidden',
				{
					'h-[100%] bg-[#0c0c0c] bg-opacity-90 backdrop-blur-sm': showMenu,
					'bg-[#0c0c0c] bg-opacity-90 shadow-[0_2rem_2rem_#00000098]':
						isScrolled && isProjectPage,
					'bg-transparent': !isScrolled && !showMenu && !isProjectPage,
				},
			)}
		>
			<div
				className={clsx(
					'm-auto flex h-[70%] w-[70%] flex-col items-center justify-between',
					{
						flex: showMenu,
						hidden: !showMenu,
					},
				)}
			>
				<div className="flex items-center gap-4">
					<span className="font-rajdhani text-2xl tracking-wider text-white">
						Desenvolvido por
					</span>
					<Image
						src="/svg/my-logo.svg"
						alt="Logo: {lb.};"
						width={28}
						height={28}
					/>
				</div>

				<nav
					className={clsx(
						'flex flex-col items-center gap-10 text-orangered',
						'mobile480px:gap-14',
						'mobile600px:gap-20',
					)}
				>
					{links.map(link => (
						<MenuItem
							href={link.href}
							onClick={handleCloseMenuByLink}
							key={link.id}
							className={clsx(
								'font-ubuntuCond text-4xl font-normal',
								'mobile414px:text-5xl',
							)}
						>
							{link.name}
						</MenuItem>
					))}
				</nav>

				<div className="flex items-center gap-6 text-white">
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
