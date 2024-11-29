export default function BackgroundLayout() {
	return (
		<>
			<div
				className="absolute inset-0 z-0 bg-repeat"
				style={{
					backgroundImage: "url('/bg-main.png')",
					backgroundSize: '120px',
				}}
			/>
			<div className="absolute inset-0 bg-[#000] bg-opacity-85" />
		</>
	);
}
