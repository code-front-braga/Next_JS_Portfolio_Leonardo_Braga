import PagesLayout from '@/components/Layout/pages-layout';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<PagesLayout>
			<Component {...pageProps} />
		</PagesLayout>
	);
}
