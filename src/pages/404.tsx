import Image from 'next/image';
import Link from 'next/link';

export default function Error() {
	return (
		<section className="relative flex h-screen w-full">
			<div className="m-auto flex h-full flex-col justify-center gap-4">
				<div className="flex items-center gap-4">
					<h2 className="text-3xl text-white">Ops! Página não encontrada.</h2>
					<Link
						href="/"
						className="text-3xl text-orangered underline underline-offset-8"
					>
						Clique aqui para voltar para o menu principal
					</Link>
				</div>

				<div className="">
					<Image
						src="/404-bg.png"
						alt="Uma ilustração 404 Error. Na imagem possui um celular escrito 404 Error na tela e ao lado uma mulher segurando um celular"
						width={500}
						height={500}
					/>
				</div>
			</div>
		</section>
	);
}
