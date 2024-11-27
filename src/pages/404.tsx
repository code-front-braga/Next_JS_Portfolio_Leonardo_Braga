import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

export default function Error() {
	return (
		<section className="relative flex h-screen w-full bg-purple-900">
			<div className="m-auto flex h-full flex-col justify-center gap-8 p-8">
				<div className="flex flex-col gap-2">
					<h2 className={clsx('text-3xl text-white', 'mobile600px:text-4xl')}>
						Ops! Página não encontrada.
					</h2>
					<Link
						href="/"
						className={clsx('text-3xl text-green-500', 'mobile600px:text-4xl')}
					>
						Clique aqui para voltar para o menu principal
					</Link>
				</div>

				<Image
					src="/404-bg.png"
					alt="Uma ilustração 404 Error. Na imagem possui um celular escrito 404 Error na tela e ao lado uma mulher segurando um celular"
					width={500}
					height={500}
					className="drop-shadow-[-2rem_0_3rem_#00000085]"
				/>
			</div>
		</section>
	);
}
