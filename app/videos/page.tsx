import { featured, videos } from "@/data";
import Ribbon from "@/components/ui/Ribbon";

const Videos = () => {
  return (
    <>
      <Ribbon name="Videos" showFontSize={false} />
      <section className="max-w-7xl mx-auto px-4 lg:px-0 transition-colors duration-200">
        {/* Featured Video Hero Banner */}
        <div className="my-8 text-center">
          <h1 className="mb-8 inline-block text-center text-[32px] font-semibold md:text-[34px]">
            Featured Repair & Maintenance Guide
          </h1>
          <div className="mx-auto max-w-[1180px]">
            <div className="relative h-[300px] w-full overflow-hidden rounded-xl shadow-xl sm:h-[400px] md:h-[600px]">
              <iframe
                className="h-full w-full rounded-xl border-0"
                src={`https://www.youtube.com/embed/${featured.youtubeId}`}
                title={featured.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>

        {/* Videos Grid Section */}
        <div className="py-12">
          <h2 className="mb-8 text-center text-[28px] font-semibold">Repair Services Library</h2>

          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
            {videos.map((video) => (
              <div
                key={video.id}
                className="flex flex-col overflow-hidden rounded-lg bg-card p-3 shadow-md transition-shadow hover:shadow-lg">
                <div className="relative h-[200px] w-full overflow-hidden rounded-lg">
                  <iframe
                    className="h-full w-full rounded-lg border-0"
                    src={`https://www.youtube.com/embed/${video.youtubeId}`}
                    title={video.title}
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
                <div className="mt-3 flex flex-1 flex-col justify-between">
                  <p className="w-full text-start font-semibold text-card-foreground">{video.title}</p>
                  <span className="mt-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    {video.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Videos;
