export default function TopBanner() {
  return (
    <div className="grid grid-cols-3 items-center justify-center">
      <img src="/hamburgerButton.svg" alt="Home" className="w-7 h-7" />
      <h1
        className="font-bold text-3xl text-center"
        style={{ fontFamily: "Inika" }}
      >
        aniSOS
      </h1>
      <div className="place-self-end relative bottom-1">
        <img src="/notification.svg" alt="Home" className="w-7 h-7" />
      </div>
    </div>
  );
}
