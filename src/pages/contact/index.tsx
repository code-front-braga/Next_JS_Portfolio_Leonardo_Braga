import Head from 'next/head';
import Form from '../../components/Form/form';

export default function Contact() {
	return (
		<>
			<Head>
				<title>Contato | Leonardo Braga</title>
			</Head>
			<section className="relative flex h-screen w-full">
				<Form />
			</section>
		</>
	);
}
