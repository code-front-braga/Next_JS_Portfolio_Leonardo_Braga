import { bebasNeue, odibee, rajdhani, ubuntuCond } from '@/lib/fonts/fonts';
import clsx from 'clsx';
import BackgroundLayout from './background-layout';
import { useRouter } from 'next/router';
import Header from '../Header';

type LayoutProps = {
	children: React.ReactNode;
};

export default function PagesLayout({ children }: LayoutProps) {
	const router = useRouter();

	const isErrorPage = router.pathname === '/404';

	return (
		<>
			<main
				className={clsx(
					'relative min-h-screen w-full',
					bebasNeue.className,
					ubuntuCond.className,
					rajdhani.className,
					odibee.className,
				)}
			>
				{!isErrorPage && <Header />}
				<BackgroundLayout />
				{children}
			</main>
		</>
	);
}
