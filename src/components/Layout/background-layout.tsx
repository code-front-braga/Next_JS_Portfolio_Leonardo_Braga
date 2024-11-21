export default function BackgroundLayout() {
  return (
    <>
      <div
        className="absolute inset-0 z-0 bg-[url('/bg-main.png')] bg-repeat"
        style={{ backgroundSize: "109px" }}
      ></div>
      <div className="absolute inset-0 bg-[#040200] bg-opacity-[.92]"></div>
    </>
  );
}
