import Image from "next/image";

export default function Vmgo() {
  return (
    <div className="min-h-screen">
      {/* Intro section */}
      <section className="max-w-7xl mx-auto py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 place-content-center place-items-center">
          <div className="flex flex-col justify-center items-center gap-3">
            <Image height={24} width={24} src="/vmgo/vision.png" alt="Vision Icon" className="w-24 h-24" />
            <p className="font-semibold">Vision</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-3">
            <Image height={24} width={24} src="/vmgo/mission.png" alt="Mission Icon" className="w-24 h-24" />
            <p className="font-semibold">Mission</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-3">
            <Image height={24} width={24} src="/vmgo/goal.png" alt="Goal Icon" className="w-24 h-24" />
            <p className="font-semibold">Goals</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-3">
            <Image height={24} width={24} src="/vmgo/objective.png" alt="Objective Icon" className="w-24 h-24" />
            <p className="font-semibold">Objectives</p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section id="vision" className="flex justify-between gap-24 mb-12 py-8 max-w-7xl mx-auto">
        <div className="hidden md:flex items-center justify-center mb-6">
          <Image height={600} width={800} src="/vmgo/vision.png" alt="Vision" className="w-auto h-40 text-muted" />
        </div>
        <div className="p-8 space-y-4 max-w-5xl rounded-xl">
          <h2 className="text-3xl font-bold text">Vision</h2>
          <p className="text-md leading-relaxed mb-4">
            Our vision at BIGRIYO is to become Nepal’s premier, technology-driven repair service aggregator—setting the
            national standard for safety, quality, and convenience.
          </p>
          <p className="text-md leading-relaxed">
            We envision a future where booking expert, verified maintenance for any home or business in Kathmandu and
            beyond takes just a few clicks, while creating dignified, continuous growth opportunities for skilled
            technicians.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="flex justify-between gap-24 mb-12 max-w-7xl mx-auto">
        <div className="p-8 bg-secondary text-secondary-foreground space-y-4 max-w-5xl rounded-xl">
          <h2 className="text-3xl font-bold">Mission</h2>
          <p className="text-md leading-relaxed">
            At BIGRIYO, our mission is to eliminate the hassle of repair and maintenance work by intelligently bridging
            the gap between customers and skilled professionals. Headquartered in Kamalpokhari, Kathmandu, we leverage
            AI and modern platform tech to deliver prompt, transparent, insured, and reliable service solutions every
            single time.
          </p>
        </div>
        <div className="hidden md:flex items-center justify-center mb-6">
          <Image height={600} width={800} src="/vmgo/mission.png" alt="Mission" className="w-auto h-40" />
        </div>
      </section>

      {/* Goals Section */}
      <section id="goals" className="flex justify-between gap-24 py-8 max-w-7xl mx-auto">
        <div className="hidden md:flex items-center justify-center mb-6">
          <Image height={600} width={800} src="/vmgo/goal.png" alt="Goals" className="w-60 h-40" />
        </div>
        <div className="p-8 space-y-4 card rounded-xl">
          <h2 className="text-3xl font-bold text">Our Goals</h2>
          {[
            "Deploy AI-driven matching to pair customers with the right expert based on expertise, location, and job requirements.",
            "Maintain complete trust and peace of mind by offering insured, thoroughly vetted, and background-checked technicians.",
            "Provide transparent, fair pricing and hassle-free scheduling across residential, commercial, and specialized repair sectors.",
            "Empower local service professionals by providing them with genuine business leads and sustainable earning opportunities."
          ].map((goal, index) => (
            <div key={index} className="flex items-center gap-3 pl-4">
              <ul className="list-disc">
                <li>{goal}</li>
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Objectives Section */}
      <section id="objectives" className="flex justify-between gap-24 mb-12 py-8 max-w-7xl mx-auto">
        <div className="p-8 space-y-4 text-secondary-foreground bg-secondary max-w-5xl rounded-xl">
          <h2 className="text-3xl font-bold">Objectives</h2>
          {[
            "Expand platform reach from Kamalpokhari across the broader Kathmandu Valley and into secondary major urban centers.",
            "Maintain continuous quality assurance by enforcing strict technician vetting, onboarding standards, and customer reviews.",
            "Optimize AI matching algorithms to reduce response times and match service requests with nearby available experts faster.",
            "Deliver a seamless, modern digital experience that simplifies hiring home and office repair technicians."
          ].map((objective, index) => (
            <div key={index} className="flex items-center gap-3 pl-4">
              <ul className="list-disc">
                <li>{objective}</li>
              </ul>
            </div>
          ))}
        </div>
        <div className="hidden md:flex items-center justify-center mb-6">
          <Image
            height={600}
            width={800}
            src="/vmgo/objective.png"
            alt="Objectives"
            className="w-auto h-44 text-teal-700"
          />
        </div>
      </section>
    </div>
  );
}
