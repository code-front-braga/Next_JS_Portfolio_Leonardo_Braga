import clsx from 'clsx';
import Head from 'next/head';
import ProjectCard from '../../components/Card/project-card';
import { projects } from '@/lib/utils/projects-data';

export default function Projects() {
	return (
		<>
			<Head>
				<title>Projetos | Leonardo Braga</title>
				<meta name="description" content="Meus projetos" />
			</Head>

			<section className="relative w-full">
				<div
					className={clsx(
						'relative flex flex-col gap-8 p-6 pt-32',
						'desktop1024px:pt-40',
					)}
				>
					<h2
						className={clsx(
							'text-center font-bebasNeue text-3xl text-orangered',
							'mobile414px:text-4xl',
							'mobile600px:text-5xl',
							'desktop1336px:text-6xl',
						)}
					>
						Meus projetos
					</h2>
					<div
						className={clsx(
							'grid gap-8',
							'desktop1024px:grid desktop1024px:grid-cols-2',
							'desktop1280px:m-auto desktop1280px:w-[95%] desktop1280px:grid-cols-3',
						)}
					>
						{projects.map(project => (
							<ProjectCard
                key={project.id}
                icons={project.icons}
                id={project.id}
                linkDeploy={project.linkDeploy}
                linkRepo={project.linkRepo}
                title={project.title}
                src={project.src}
							/>
						))}
					</div>
				</div>
			</section>
		</>
	);
}
