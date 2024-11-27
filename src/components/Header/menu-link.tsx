import { useRouter } from 'next/router';
import Link from 'next/link';
import { ReactNode } from 'react';
import clsx from 'clsx';

type MenuItemProps = {
	children: ReactNode;
	href: string;
	className: string;
	onClick?: () => void;
};

export default function MenuLink({
	children,
	href,
	className,
	onClick,
}: MenuItemProps) {
	const router = useRouter();
	const style = {
		color: router.asPath === href ? '#4ade80' : '#ff4500',
	};

	return (
		<Link
			href={href}
			onClick={onClick}
			className={clsx(className, 'ease transition-colors duration-700')}
			style={style}
		>
			{children}
		</Link>
	);
}
