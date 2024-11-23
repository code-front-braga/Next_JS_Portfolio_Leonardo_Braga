import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

export type ProjectCardProps = {
	id: string;
	title: string;
	src: string;
	icons: string[];
	linkDeploy: string;
	linkRepo: string;
};

export default function ProjectCard({ ...props }: ProjectCardProps) {
	return (
		<div
			className={clsx(
				'flex flex-col gap-3 rounded-lg bg-purple-800 bg-opacity-20 p-6', // default (min-width: 320px)
			)}
		>
			<h2
				className={clsx(
					'text-center font-rajdhani text-2xl text-[#8bffa3]', // default (min-width: 320px)
					'mobile600px:text-3xl', // (min-width: 600px)
				)}
			>
				{props.title}
			</h2>
			<Image
				src={props.src}
				alt=""
				width={500}
				height={500}
				className="w-full border-2 border-solid border-white"
			/>
			<div className="flex justify-center gap-3 rounded-md border p-2">
				{props.icons.map((icon, index) => (
					<Image
						key={index}
						src={icon}
						alt=""
						width={20}
						height={20}
						className={clsx('mobile600px:w-12', 'desktop1280px:w-9')}
					/>
				))}
			</div>
			<nav
				className={clsx(
					'flex flex-col items-center gap-2 rounded-md border p-2 font-rajdhani text-2xl text-white underline underline-offset-4', // default (min-width: 320px)
					'mobile600px:text-3xl', // (min-width: 600px)
				)}
			>
				<Link href={props.linkDeploy}>Deploy do projeto</Link>
				<Link href={props.linkRepo}>Repositório do projeto</Link>
			</nav>
		</div>
	);
}
