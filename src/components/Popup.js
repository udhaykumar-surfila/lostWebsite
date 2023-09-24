import { useState, useEffect, useRef } from "react";
import SpinAndWin from "./Spin";
// import SpinAndWin from "react-spin-game";
// import "react-spin-game/dist/index.css";
import wheelimg from "../img/wheel.png";

const Popup = () => {
  const freeSpinGifts = [
    ["10% off on t-shirt", "#BA81FF", "LOSTTEE10"],
    ["Try Again", "#4F67AD ", "Try Again"],
    ["Free Lost Love book", "#E54846 ", "LOSTLOVE"],
    ["Better Luck Next Time", "#FFCF3C ", "Try Again"],
    ["1 free beer", "#B2FF9F ", "LOSTBEER"],
    ["So Close", "#FF5E80 ", "Try Again"],
    ["20% off on Yoga", "#6FF0EA ", "LOSTYOGA20"],
  ];

  const ref = useRef(null);

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [prize, setPrize] = useState(null);

  useEffect(() => {
    console.log(ref);
  }, []);

  const handleTogglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const handleCheckWinner = (winner) => {
    setPrize(winner);
    console.log("eheheh, winner is", winner);
  };
  return (
    <>
      <div
        className="wheel-button fixed top-[40%] right-0 w-10 h-auto text-white bg-[#0a56a8] z-[100] cursor-pointer flex flex-col justify-center gap-1 items-center rounded shadow-md  "
        onClick={handleTogglePopup}
      >
        <img src={wheelimg} alt="wheel" className="rounded m-1" />
        <p className="text-[#F3CD35] vertical z-[110] p-2 font-medium">
          Feel lucky?
        </p>
      </div>
      {isPopupOpen && (
        <>
          <div className="wheel-div fixed right-0 top-0 z-[100] m-auto py-20 bg-white w-full sm:w-1/3 h-full flex flex-col items-center justify-center rounded-md">
            <button
              className="absolute top-5 right-8 text-[#F3CD35]"
              onClick={handleTogglePopup}
            >
              X
            </button>
            <p className="text-3xl font-playfair font-semibold py-4 text-[#F3CD35]">
              Spin to win!
            </p>
            <SpinAndWin
              data={freeSpinGifts}
              handleCheckWinner={handleCheckWinner}
            />
            <p className="text-[#F3CD35] my-4 font-medium text-center">
              {prize === "Try Again" ? (
                <span>Sorry, {prize}</span>
              ) : (
                <span>Congratulations!<br></br>Use coupon code {prize} to claim.</span>
              )}
            </p>
          </div>
        </>
      )}
    </>
  );
};

export default Popup;
