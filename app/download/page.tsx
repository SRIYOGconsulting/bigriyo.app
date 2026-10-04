import { downloadsData } from "@/data";
import DownloadBtn from "@/components/download/DownloadBtn";
import Ribbon from "@/components/ui/Ribbon";

const Download = () => {
  return (
    <>
      <Ribbon name="Download" showFontSize={false} />
      <div className="overflow-x-auto max-w-7xl mx-auto px-4 lg:px-0 my-8 rounded-xl">
        <table className="border-collapse text-sm md:text-base rounded-xl w-full">
          <thead className="hidden bg-secondary text-primary-foreground md:table-header-group">
            <tr className="font-bold text-xl">
              <th className="whitespace-nowrap px-4 py-3 text-left">Title</th>
              <th className="whitespace-nowrap px-4 py-3 text-left">Size</th>
              <th className="whitespace-nowrap px-4 py-3 text-left">Type</th>
              <th className="whitespace-nowrap px-4 py-3 text-left">Last Updated</th>
              <th className="whitespace-nowrap px-4 py-3 text-left">Download</th>
            </tr>
          </thead>
          <tbody>
            {downloadsData.map((item, index) => (
              <tr
                key={item.id}
                className={`mb-4 block p-4 shadow-sm md:table-row md:p-0 ${
                  index % 2 === 0 ? "bg-muted rounded-xl" : "bg-secondary/80 rounded-md text-secondary-foreground"
                }`}>
                <td className="mt-2 block font-bold px-4 py-3 md:table-cell md:mt-0">{item.title}</td>
                <td className="mt-2 block px-4 py-2 md:table-cell md:mt-0">
                  <span className="mr-4 font-semibold md:hidden">File Size:</span>
                  {item.size}
                </td>
                <td className="mt-2 block px-4 py-2 md:table-cell md:mt-0">
                  <span className="mr-4 font-semibold md:hidden">File Type:</span>
                  {item.type}
                </td>
                <td className="mt-2 block px-4 py-2 md:table-cell md:align-middle md:mt-0">
                  <span className="mr-4 font-semibold md:hidden">Published Date:</span>
                  {item.publishedDate}
                </td>
                <td className="mt-2 block px-4 py-2 md:table-cell md:align-middle md:mt-0">
                  <DownloadBtn item={item} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Download;
