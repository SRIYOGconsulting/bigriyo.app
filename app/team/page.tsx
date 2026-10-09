import { teamMembers } from "@/data";
import Ribbon from "@/components/ui/Ribbon";
import Image from "next/image";

const Team = () => {
  return (
    <>
      {/* Full-width Ribbon Header */}
      <Ribbon name="Our Team" showFontSize={true} />

      <div className="max-w-7xl mx-auto px-4 lg:px-0 py-6 md:py-10">
        {/* PRESIDENT SECTION */}
        <div className="rounded-lg">
          <div className="flex flex-col md:flex-row gap-10 items-center md:items-start">
            <div className="flex flex-col items-center">
              <div className="relative w-40 h-40 md:w-56 md:h-56">
                <Image
                  fill
                  alt="Pracas"
                  src="/team/head.png"
                  className="rounded-full object-cover shadow-lg"
                  sizes="(max-width: 768px) 160px, 224px"
                />
              </div>
              <h2 className="text-[1em] md:text-[1.7em] font-bold mt-4 text-center">Pracas</h2>
              <p className="text-[1em] mt-1 text-center">C.T.O</p>
            </div>

            {/* Text */}
            <div className="flex-1 leading-relaxed space-y-4">
              <h1 className="text-[1.8em]">About Pracas</h1>
              <p className="text-[1em]">
                Pracas Upreti's journey from a startup founder to a technology-driven change-maker in Biratnagar, Nepal,
                exemplifies the profound impact that individuals can have when they combine innovation with a commitment
                to social responsibility. Through his endeavors, Upreti has not only transformed his community but has
                also set a precedent for how technology can be harnessed to drive positive change and create a better
                future for all.
              </p>
              <p className="text-[1em]">
                Through his endeavors, Upreti has not only transformed his community but has also set a precedent for
                how technology can be harnessed to drive positive change and create a better future for all.
              </p>
              <p className="text-[1em]">
                Upreti's journey into the realm of technology began over a decade ago when he founded his first IT
                startup in 2007 A.D. as PRACAS Infosys in Biratnagar. Recognizing the potential of technology to bridge
                gaps and catalyze progress, he embarked on a mission to leverage digital solutions to address local
                challenges and foster economic development. His vision was not merely to create successful businesses
                but to effect meaningful change in his community.
              </p>

              {/* Social icons */}
              <div className="mt-6">
                <p className="font-normal text-base md:text-[1em]">Follow Pracas on social media:</p>

                <div className="flex gap-3 mt-2">
                  <Image
                    src="/icons/x.svg"
                    alt="X (Twitter)"
                    width={20}
                    height={20}
                    className="cursor-pointer hover:opacity-75"
                  />
                  <Image
                    src="/icons/linkedin.svg"
                    alt="LinkedIn"
                    width={20}
                    height={20}
                    className="cursor-pointer hover:opacity-75"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* TEAM GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="rounded-lg p-6 flex flex-col items-center hover:shadow-md hover:-translate-y-1 transition-all">
              <div className="relative w-36 h-36 md:w-48 md:h-48">
                <Image
                  fill
                  src={member.image}
                  alt={member.name}
                  className="rounded-full object-cover shadow-md"
                  sizes="(max-width: 768px) 112px, 144px"
                />
              </div>
              <h3 className="font-semibold mt-5 text-[1.2em]">{member.name}</h3>
              <p className="text-sm mt-2">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Team;
