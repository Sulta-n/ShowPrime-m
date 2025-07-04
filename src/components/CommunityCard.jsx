import { Twitter } from "lucide-react";
import PROFILE from "../../public/images/Ellipse 1.png";

const CommunityCard = ({ name, date, text, borderColor }) => {
  return (
    <div
      className={`border  rounded-2xl w-[230px] h-[259px] overflow-hidden p-4 select-none bg-[#4D4B4B]`}
      style={{ borderColor }}
    >
      <div className="flex space-x-2 items-center justify-between mb-3">
        <div>
          <img src={PROFILE} alt="Profile image" />
        </div>
        <h3 className="text-textC">{name}</h3>
        <Twitter />
      </div>
      <div className="bg-white/40 w-full h-[2px] rounded-2xl"></div>
      <p className="text-[8px] text-left mt-1.5 text-textC">{text}</p>
      <p className="text-left mt-2.5 text-textC">{date}</p>
    </div>
  );
};

export default CommunityCard;
