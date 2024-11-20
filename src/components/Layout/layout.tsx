import { bebasNeue, odibee, rajdhani, ubuntuCond } from '@/lib/fonts/fonts';
import clsx from 'clsx';
import { ReactNode } from 'react';

type LayoutProps = {
	children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
	return (
		<main
			className={clsx(
				'w-full, min-h-screen relative',
				bebasNeue.className,
				ubuntuCond.className,
				rajdhani.className,
				odibee.className,
			)}
		>
			{children}
		</main>
	);
}
