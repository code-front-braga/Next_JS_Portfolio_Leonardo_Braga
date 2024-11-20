import { bebasNeue, odibee, rajdhani, ubuntuCond } from '@/lib/fonts/fonts';
import clsx from 'clsx';
import { ReactNode } from 'react';
import Header from '../Header';
import BackgroundLayout from './background-layout';

type LayoutProps = {
	children: ReactNode;
};

export default function PagesLayout({ children }: LayoutProps) {
	return (
		<>
			<Header />
			<BackgroundLayout />
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
		</>
	);
}
