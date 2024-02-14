export default function Footer() {
  return (
    <footer className="bg-blue-600 p-5 border-t-2 border-t-blue-800 border-t-shadow-xl  ">
      <div className="flex flex-wrap justify-center items-center gap-5 sm:gap-10 md:gap-20">
        <div className="flex flex-col justify-center items-center">
          <span className="font-bold text-yellow-400 text-xl">Products</span>
          <a className="link-hover link">Shorts</a>
          <a className="link-hover link">Shirts</a>
        </div>
        <div className="flex flex-col justify-center items-center">
          <span className="font-bold text-yellow-400 text-xl">Tickets</span>
          <a className="link-hover link">One Game</a>
          <a className="link-hover link">All Games</a>
        </div>
        <div className="flex flex-col justify-center items-center">
          <span className="font-bold text-yellow-400 text-xl">Team</span>
          <a className="link-hover link">History</a>
          <a className="link-hover link">Players</a>
        </div>
        <div className="flex flex-col justify-center items-center">
          <span className="font-bold text-yellow-400 text-xl">Contact</span>
          <a className="link-hover link">444-555</a>
          <a className="link-hover link">denver.com</a>
        </div>
      </div>
      <p className="text-center mt-5">
        &copy; 2024 Denver Nuggets. All Rights Reserved.
      </p>
    </footer>
  );
}
