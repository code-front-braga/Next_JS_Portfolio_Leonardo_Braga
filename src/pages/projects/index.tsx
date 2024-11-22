import clsx from 'clsx';
import Head from 'next/head';
import ProjectCard from './project-card';
import { projects } from '@/lib/utils/projects-data';

export default function Projects() {
	return (
		<>
			<Head>
				<title>Projetos | Leonardo Braga</title>
				<meta name="description" content="Meus projetos" />
			</Head>

			<section className={clsx('relative w-full')}>
				<div
					className={clsx(
						'relative flex flex-col gap-8 p-6 pt-32', // default (min-width: 320px)
						'desktop1024px:pt-40', // (min-width: 1024px)
					)}
				>
					<h2
						className={clsx(
							'text-center font-bebasNeue text-3xl text-orangered', // default (min-width: 320px)
							'mobile414px:text-4xl', // (min-width: 414px)
							'mobile600px:text-5xl', // (min-width: 600px)
							'desktop1336px:text-6xl', // (min-width: 1336px)
						)}
					>
						Meus projetos
					</h2>
					<div
						className={clsx(
							'grid gap-8', // default (min-width: 320px)
							'desktop1024px:grid desktop1024px:grid-cols-2', // (min-width: 1024px)
							'desktop1280px:m-auto desktop1280px:w-[95%] desktop1280px:grid-cols-3', // (min-width: 1280px)
						)}
					>
						{projects.map(project => (
							<ProjectCard
								key={project.id}
								id={project.id}
								title={project.title}
								src={project.src}
								icons={project.icons}
								linkDeploy={project.linkDeploy}
								linkRepo={project.linkRepo}
							/>
						))}
					</div>
				</div>
			</section>
		</>
	);
}
