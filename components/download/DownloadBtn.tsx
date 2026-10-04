"use client";

import type { DownloadItem } from "@/types";
import useStatus from "@/context/Status";

interface DownloadBtnProps {
  item: DownloadItem;
}

const DownloadBtn: React.FC<DownloadBtnProps> = ({ item }) => {
  const { showStatus } = useStatus();

  const handleDownload = (downloadUrl?: string) => {
    if (downloadUrl) window.open(downloadUrl, "_blank");
    else showStatus("info", "Coming Soon!");
  };

  return (
    <button
      type="button"
      onClick={() => handleDownload(item.downloadUrl)}
      className="cursor-pointer rounded border border-seconadary-foreground/20 hover:bg-primary hover:text-primary-foreground px-3 py-1 text-xs transition-all duration-200">
      Download
    </button>
  );
};

export default DownloadBtn;
