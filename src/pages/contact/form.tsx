export default function Form() {
	return (
		<>
			<form className="mb-auto ml-auto mr-auto mt-32 flex w-[85%] flex-col gap-8 rounded-lg bg-purple-800 bg-opacity-55 p-6">
				<h2 className="font-rajdhani text-3xl text-white">Fale comigo!</h2>

				<div className="flex w-full flex-col gap-2">
					<label
						htmlFor=""
						className="font-bebasNeue text-2xl tracking-wider text-white"
					>
						Seu nome
					</label>
					<input
						type="text"
						className="rounded-md p-6 font-rajdhani text-2xl"
					/>
				</div>

				<div className="flex w-full flex-col gap-2">
					<label
						htmlFor=""
						className="font-bebasNeue text-2xl tracking-wider text-white"
					>
						Seu email
					</label>
					<input
						type="text"
						className="rounded-md p-6 font-rajdhani text-2xl"
					/>
				</div>

				<div className="flex w-full flex-col gap-2">
					<label
						htmlFor=""
						className="font-bebasNeue text-2xl tracking-wider text-white"
					>
						Digite sua mensagem
					</label>
					<textarea
						name=""
						id=""
						className="h-44 rounded-md p-6 font-rajdhani text-2xl"
						placeholder="em que posso ajudar?"
					/>
				</div>
				<button
					type="submit"
					className="rounded-md bg-orangered p-5 font-ubuntuCond text-2xl text-white"
				>
					Enviar Mensagem
				</button>
			</form>
		</>
	);
}
