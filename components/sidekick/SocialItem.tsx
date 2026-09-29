import { SocialLink } from "@/types";

interface SocialItemProps {
  item: SocialLink;
  isLast: boolean;
}

export const SocialItem: React.FC<SocialItemProps> = ({ item, isLast }) => (
  <>
    <div
      onClick={(e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
        window.open(item.url, "_blank");
      }}
      className="flex flex-col items-center justify-center gap-1 cursor-pointer">
      <img
        src={item.icon}
        alt={item.name}
        height={26}
        width={26}
        className="hover:scale-[1.15] transition-all duration-200"
      />
      <p className="text-[9px] font-bold text-[#888888]">{item.name}</p>
    </div>
    {!isLast && <img src="/icons/line.svg" className="h-1 w-[52px]" alt="divider" />}
  </>
);
