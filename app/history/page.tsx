import { events, keyFigures } from "@/data";
import Ribbon from "@/components/ui/Ribbon";
import Image from "next/image";

const History = () => {
  return (
    <div>
      {/* Header */}
      <Ribbon name="History" showFontSize={false} />

      <div className="max-w-7xl mx-auto px-4 lg:px-0 space-y-16">
        {/* Introduction Section */}
        <section className="my-4">
          <h2 className="text-3xl font-bold mt-8 mb-4">Our Beginning</h2>
          <p className="leading-relaxed">
            BIGRIYO began its journey in Kamalpokhari, Kathmandu, Nepal, with a clear vision: to simplify how people
            find reliable, skilled, and vetted repair professionals. Recognizing the fragmentation and lack of
            transparency in the home and office maintenance sector, we set out to build a trusted digital aggregator
            connecting customers with verified experts.
          </p>

          <div className="relative h-80 md:h-196 mt-6 rounded-lg overflow-hidden shadow-md">
            <Image
              fill
              src="/history/head.jpg"
              alt="BIGRIYO Beginning"
              sizes="100vw"
              className="object-cover"
              priority
            />
          </div>
        </section>

        {/* Evolution Section */}
        <section>
          <h2 className="text-3xl font-bold mt-12 mb-4">Evolution Over the Years</h2>
          <p className="leading-relaxed">
            Over time, BIGRIYO evolved from a local concept into a tech-driven service platform. By leveraging
            Artificial Intelligence (AI) and modern algorithms, we transformed the repair experience matching service
            providers with customers based on expertise, service area, availability, and job specifications while
            empowering technicians across Kathmandu and beyond.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            {keyFigures.map((figure) => (
              <div key={figure.id} className="p-6 shadow-sm rounded-xl hover:shadow-md transition">
                <Image
                  height={600}
                  width={800}
                  src={figure.image}
                  alt={figure.name}
                  className="w-40 h-40 mx-auto rounded-full object-cover mb-4"
                />

                <h3 className="text-[24px] font-semibold text-center">{figure.name}</h3>
                <p className="text-center text-sm">{figure.designation}</p>
                <p className="mt-3 text-center leading-relaxed">{figure.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Milestones */}
        <section>
          <h2 className="text-3xl font-bold mb-4">Key Milestones</h2>

          <div className="space-y-6">
            {events.map((event) => (
              <div key={event.id} className="p-6 card rounded-xl shadow-sm hover:shadow-md transition-all">
                <h3 className="text-xl font-semibold">
                  {event.year} - {event.title}
                </h3>
                <p className="mt-2">{event.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Closing Section */}
        <section className="pb-12">
          <h2 className="text-2xl font-bold mb-4">Our Journey Continues</h2>
          <p className="leading-relaxed">
            BIGRIYO remains committed to creating better economic opportunities for skilled repair professionals while
            delivering hassle free, transparent, and insured maintenance solutions to every doorstep in Nepal.
          </p>
        </section>
      </div>
    </div>
  );
};

export default History;
