import PagesLayout from '@/components/Layout/pages-layout';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<PagesLayout>
				<Component {...pageProps} />
			</PagesLayout>
		</>
	);
}
