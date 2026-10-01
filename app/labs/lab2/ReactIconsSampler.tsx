import "@/app/labs/lab2/tailwind/utilities.css";
import { FaCalendar, FaEnvelopeOpenText, FaRegClock } from "react-icons/fa";
import { AiOutlineDashboard } from "react-icons/ai";
import { FaBookBible } from "react-icons/fa6";
import { VscAccount } from "react-icons/vsc";
import { HiAcademicCap } from "react-icons/hi2";
import { IoSettingsOutline } from "react-icons/io5";
import { MdHome } from "react-icons/md";
import { BiBell } from "react-icons/bi";

export default function ReactIconsSampler() {
  return (
    <div id="wd-react-icons-sampler" className="mb-4 font-sans">
      <h2 className="text-lg font-semibold">React Icons Sampler</h2>
      <div className="flex gap-3 text-3xl">
        <VscAccount />
        <AiOutlineDashboard />
        <FaBookBible />
        <FaCalendar />
        <FaEnvelopeOpenText />
        <FaRegClock />
        <HiAcademicCap className="text-4xl text-blue-600" />
        <IoSettingsOutline className="text-4xl text-blue-600" />
        <MdHome className="text-5xl text-green-600" />
        <BiBell className="text-red-600" />
      </div>
    </div>
  );
}