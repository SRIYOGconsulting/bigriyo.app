import type { QuickContact } from "@/types";

interface QuickContactMenuProps {
  data: QuickContact;
  menu: boolean;
  onClose: () => void;
}

export const QuickContactMenu: React.FC<QuickContactMenuProps> = ({ data, menu, onClose }) => (
  <div
    className={`absolute top-0 sm:top-14 w-[250px] transition-transform duration-300 ${
      menu ? "-translate-x-[270px]" : "translate-x-80"
    }`}>
    <button
      onClick={onClose}
      className="absolute top-2 right-4 bg-[#888888] rounded-full p-1 z-10"
      aria-label="Close menu">
      <img src="/icons/cross.svg" className="w-5 h-5" alt="Close" />
    </button>

    <div className="flex flex-col justify-center items-center sidekick py-4 rounded-xl w-[250px] bg-white shadow-lg">
      <div className="flex items-center gap-3 justify-start">
        <img src="/icons/info.svg" alt="info" className="w-[25px] h-[25px]" />
        <p className="text-[#888888] font-semibold">Quick Contact</p>
      </div>

      <div className="my-3 bg-[#888888] w-[225px] h-[1.5px]"></div>

      <div
        onClick={() => window.open(data.hotline.url, "_blank")}
        className="flex items-center gap-3 cursor-pointer group">
        <img
          src={data.hotline.icon}
          alt="hotline"
          className="w-[30px] h-[30px] group-hover:scale-[1.1] transition-all duration-200"
        />
        <p className="text-[#888888] py-2 font-semibold">{data.hotline.label}</p>
      </div>
      <p
        onClick={() => window.open(data.hotline.url, "_blank")}
        className="font-semibold text-[#888888] text-center cursor-pointer">
        {data.hotline.value}
      </p>

      <div
        onClick={() => window.open(data.email.url, "_blank")}
        className="cursor-pointer flex items-center w-fit justify-center gap-3 p-1 my-2 rounded-md border-[1.5px] border-[#B3ADAD]">
        <img src={data.email.icon} alt="email" className="h-5 w-5" />
        <p className="text-xs text-[#888888] pt-1">{data.email.value}</p>
      </div>

      <div className="flex items-center justify-center gap-4 py-2">
        <div
          onClick={() => window.open(data.socials[0].url, "_blank")}
          className="flex flex-col justify-center items-center cursor-pointer group">
          <img
            src={data.socials[0].icon}
            alt={data.socials[0].name}
            className="w-7 h-7 group-hover:scale-[1.1] transition-all duration-200"
          />
          <p className="text-[10px] font-semibold text-[#888888]">{data.socials[0].name}</p>
        </div>

        <div
          onClick={() => window.open(data.socials[1].url, "_blank")}
          className="flex items-center w-fit justify-center gap-3 p-1 my-2 rounded-md border-[1.5px] border-[#B3ADAD] cursor-pointer">
          <img src={data.socials[1].icon} alt={data.socials[1].name} className="w-4 h-4" />
          <p className="text-xs text-[#888888]">{data.socials[1].value}</p>
        </div>
      </div>
    </div>
  </div>
);
