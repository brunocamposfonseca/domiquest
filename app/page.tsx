import Image from "next/image";
import { FaSearch } from "react-icons/fa";
import { InputOtp } from "./components/InputOTP";
import AvatarHover from "./components/AvatarHover";
import PlayBtn from "./components/PlayBtn";


export default function Home() {
  return (
    <section className="relative w-full h-full bg-gradient-to-r from-[#507F28] to-[#5FC20E] p-6">
      {/* <AvatarHover /> */}
      <section className="w-full h-full flex items-center justify-center">
        <div className="flex flex-col gap-10">
          <div>
            <img src="/banner.svg"
                 alt=""
                 className="w-[600px]" 
            />
          </div>
          <div className="flex flex-row items-center gap-2">
            <div className="w-full p-2 rounded-md flex gap-2 items-center">
              <InputOtp />
            </div>
            <div className="flex gap-2">
                <PlayBtn/>
                <a className="transition-all flex items-center font-bold py-2 cursor-pointer px-5 w-[135px] text-white bg-[#507F28] rounded-md hover:bg-[#528B24]">Create room</a>
                <a className="transition-all flex items-center font-bold py-2 cursor-pointer px-5 w-[70px] text-white bg-[#507F28] rounded-md hover:bg-[#528B24]">Solo</a>
            </div> 
          </div>
 
        </div>
      </section>
    <img className="fixed -left-16 -bottom-9 w-[25vw]" src="/background.svg" alt="" />
    </section>
  );
}
