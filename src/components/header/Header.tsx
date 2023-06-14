import logo from "../../assets/logo.png";
import MuteButton from "../buttons/MuteButton.tsx";

const Header = () => {
  return (
    <>
      <div className="border-b-white border-b-4">
        <div className="py-4 flex items-center justify-between  ">
          {/* LOGO */}
          <div className="flex items-center gap-x-1 md:gap-x-2">
            <img src={logo} alt="logo" className="h-10"></img>
            <p className="text-4xl md:text-6xl header-text">CUBES PROJECT</p>
          </div>
          {/* SETTINGS */}
          <div className="flex gap-8">
            <MuteButton />
            <button className="text-lg md:text-6xl header-text">
              settings
            </button>
          </div>
        </div>
        <hr></hr>
      </div>
    </>
  );
};

export default Header;
