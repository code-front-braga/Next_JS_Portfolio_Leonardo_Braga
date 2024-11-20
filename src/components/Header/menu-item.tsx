import Link from 'next/link';
import { useRouter } from 'next/router';
import { ReactNode } from 'react';
import { motion } from 'motion/react';

type MenuItemProps = {
	children: ReactNode;
	href: string;
	className: string;
};

const variants = {
	open: {
		y: 0,
		opacity: 1,
		transition: {
			y: { stiffness: 1000, velocity: -100 },
		},
	},
	closed: {
		y: 50,
		opacity: 0,
		transition: {
			y: { stiffness: 1000 },
		},
	},
};

export default function MenuItem({ children, href, className }: MenuItemProps) {
	const router = useRouter();

	const style = {
		color: router.asPath === href ? '#4ade80' : '#ff4500',
	};

	return (
		<Link href={href} passHref style={style} className={className}>
			<motion.a
				variants={variants}
				whileHover={{ scale: 1.07 }}
				whileTap={{ scale: 0.95 }}
			>
				{children}
			</motion.a>
		</Link>
	);
}
