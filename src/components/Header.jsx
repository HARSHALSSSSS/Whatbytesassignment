import Image from "next/image";
import profileImage from "@/components/assets/profile-image.jpeg";
import LogoImage from "@/components/assets/whatBytesLogo.png";

const Header = () => {
  return (
    <header className="bg-white border-b-2 max-w-screen p-4 flex justify-between items-center">
      <div className="text-xl font-bold flex items-center group ">
        {" "}
        <Image
          src={LogoImage}
          height={15}
          width={45}
          className="group-hover:scale-95 group-hover:rotate-12 transition-all duration-200"
        />{" "}
        <h1 className="text-2xl flex group-hover:tracking-widest transition-all duration-200">
          <span className="group-hover:text-gray-600">What</span>{" "}
          <span className="group-hover:text-gray-500">Bytes</span>
        </h1>
      </div>

      <div></div>
      <div className="flex items-center border-2 border-gray-200 hover:bg-black hover:text-white rounded-lg p-1 transition-all duration-200">
        {/* Couldn't find the same image of Rahil Sir, so used the one I got from Linkedin to keep it as accurate as possible */}
        <Image
          src={profileImage}
          height={25}
          width={25}
          className="rounded-full "
        />
        <span className="ml-2 font-bold ">Harshal Sonawane </span>
      </div>
    </header>
  );
};

export default Header;
