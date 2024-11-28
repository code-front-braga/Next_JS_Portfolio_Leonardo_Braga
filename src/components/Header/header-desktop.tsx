import { links } from '@/lib/utils/links-config';
import clsx from 'clsx';
import MenuItem from './menu-link';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithubAlt, FaLinkedin } from 'react-icons/fa';
import { useRouter } from 'next/router';
import useScrollDetection from '../../lib/useScrollDetection';

export default function HeaderDesktop() {
	const router = useRouter();
	const isProjectPage = router.pathname === '/projects';
	const isScrolled = useScrollDetection();

	return (
		<header
			className={clsx('fixed z-50 hidden w-full p-12', 'tablet960px:block', {
				'bg-[#0c0c0c] bg-opacity-90 shadow-[0_2rem_2rem_#00000098]':
					isScrolled && isProjectPage,
				'bg-transparent': !isScrolled && !isProjectPage,
			})}
		>
			<div className="flex justify-between">
				<div className="flex items-center gap-4">
					<span className="font-rajdhani text-2xl text-white">
						Desenvolvido por
					</span>
					<Image
						src="/svg/my-logo.svg"
						alt="Logo: {lb.};"
						width={30}
						height={30}
					/>
				</div>

				<nav
					className={clsx('flex items-center gap-12', 'desktop1280px:gap-16')}
				>
					{links.map(link => (
						<MenuItem
							key={link.id}
							href={link.href}
							className="relative font-ubuntuCond text-4xl before:absolute before:-bottom-3 before:h-1 before:w-0 before:rounded-lg before:bg-[#4ade80] before:transition-all before:duration-500 before:content-[''] before:hover:w-full"
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
		</header>
	);
}
