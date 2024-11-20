import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html lang="pt-br">
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<body className="antialiased">
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
