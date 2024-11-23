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
			<main
				className={clsx(
					'relative min-h-screen w-full',
					bebasNeue.className,
					ubuntuCond.className,
					rajdhani.className,
					odibee.className,
				)}
			>
				<BackgroundLayout />
				{children}
			</main>
		</>
	);
}
