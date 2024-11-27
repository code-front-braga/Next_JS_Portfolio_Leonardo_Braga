import clsx from 'clsx';
import Head from 'next/head';

const aboutMeContent = {
	question: ['Quem', 'sou', 'eu', '?'],
	text: 'Eu me chamo Leonardo e tenho 33 anos. Descobri o universo da programação em meados de 2023, graças ao	meu querido irmão. Como todo iniciante (acredito eu), comecei com o ilustre Gustavo Guanabara, criador do Curso em Vídeo. A partir daí, não parei mais. Aprofundei-me em JavaScript, ingressei no	universo Frontend (JS, HTML e CSS) e, a cada dia que passava, percebia que esse era o meu mundo, que era isso que eu queria para a minha vida. Com o tempo, fui sentindo a necessidade de aprender mais – o mercado	exige aprendizado contínuo – e passei a conhecer outras tecnologias: ReactJS, NodeJS e TypeScript, por exemplo. Hoje, meu principal objetivo é ingressar na área de software, ser um engenheiro ou, quem sabe, um arquiteto de software. Mas acredito que é importante dar pequenos passos para chegar no topo, por	isso continuo focando no frontend e aprimorando cada vez mais minhas habilidades.',
};

export default function About() {
	return (
		<>
			<Head>
				<title>Sobre mim | Leonardo Braga</title>
				<meta name="description" content="Sobre mim" />
			</Head>

			<section className="relative flex h-screen w-full">
				<article
					className={clsx(
						'm-auto flex h-fit w-[90%] flex-col items-center justify-center gap-2 p-3',
						'mobile414px:gap-8',
						'tablet960px:rounded-2xl tablet960px:bg-purple-800 tablet960px:bg-opacity-45 tablet960px:p-6',
						'desktop1024px:w-[65%] desktop1024px:flex-row desktop1024px:gap-12',
					)}
				>
					<h2
						className={clsx(
							'flex gap-1 font-bebasNeue text-3xl tracking-wider text-orangered',
							'mobile414px:text-4xl',
							'mobile600px:gap-2 mobile600px:text-5xl',
							'tablet960px:text-6xl',
							'desktop1024px:flex-col desktop1024px:text-end',
							'desktop1280px:w-[20%] desktop1280px:text-center',
							'desktop1336px:text-end desktop1336px:text-8xl',
						)}
					>
						{aboutMeContent.question.map(text => (
							<span key={text}>{text}</span>
						))}
					</h2>
					<p
						className={clsx(
							'text-justify font-ubuntuCond text-2xl leading-9 text-white',
							'mobile414px:text-3xl',
							'mobile600px:text-4xl',
							'tablet768px:leading-[2.6rem]',
							'desktop1024px:text-3xl',
							'desktop1280px:w-[80%]',
							'desktop1336px:text-4xl',
						)}
					>
						{aboutMeContent.text}
					</p>
				</article>
			</section>
		</>
	);
}
