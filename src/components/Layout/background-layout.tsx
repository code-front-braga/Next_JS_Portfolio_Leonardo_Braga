export default function BackgroundLayout() {
	return (
		<>
			<div
				className="absolute inset-0 z-0 bg-repeat"
				style={{
					backgroundImage: "url('/bg-main.png')",
					backgroundSize: '109px',
				}}
			/>
			<div className="absolute inset-0 bg-[#040200] bg-opacity-[.92]" />
		</>
	);
}
