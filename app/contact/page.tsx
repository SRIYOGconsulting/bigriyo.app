import { services, team } from "@/data";
import ContactForm from "@/components/contact/ContactForm";
import Ribbon from "@/components/ui/Ribbon";
import Image from "next/image";
import Link from "next/link";

const Contact = () => {
  return (
    <>
      <Ribbon name="Contact" showFontSize={false} />
      <div className="max-w-7xl mx-auto px-4 lg:px-0 my-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="border border-border rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-3">Welcome to SRIYOG Consulting</h2>
              <p className=" text-sm mb-4">
                Welcome to SRIYOG Consulting! We're located at Rem.Work, Kamalpokhari, Kathmandu, Nepal
              </p>
              <div className="rounded-lg overflow-hidden border border-border h-64 mb-3">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.193460784485!2d85.32073757615186!3d27.711312476180435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ef740a066ed089%3A0xaf7934e44a7b1e17!2sSRIYOG!5e0!3m2!1sen!2snp!4v1741059444503!5m2!1sen!2snp"
                  width="100%"
                  height="100%"></iframe>
              </div>
              <Link
                href="https://www.google.com/maps/place/SRIYOG/@27.711185,85.323272,16z/data=!4m6!3m5!1s0x39ef740a066ed089:0xaf7934e44a7b1e17!8m2!3d27.7111849!4d85.3232716!16s%2Fg%2F11hbshgzmz?entry=tts&g_ep=EgoyMDI1MTIwMS4wIPu8ASoASAFQAw%3D%3D&skid=3876b84a-a371-4532-b369-fb8d01b4e9fc"
                target="_blank"
                rel="noopener noreferrer"
                className=" hover:text-secondary font-medium text-sm">
                Directions →
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {services.map((service, index) => (
                <div key={index} className="flex items-center gap-4 rounded-lg p-6 border border-border">
                  <div className="bg-secondary rounded-lg p-4 shrink-0">
                    <Image width={36} height={36} src={service.icon} alt={service.title} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">{service.title}</h3>
                    <p className="text-sm">{service.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <ContactForm />
        </div>

        <div className="text-center mt-12">
          <h2 className="text-3xl mb-2">Quick Contact</h2>
          <p className="mb-12">Quick contact the relevant people.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12 max-w-6xl mx-auto">
            {team.map((member, index) => (
              <div key={index} className="rounded-lg text-center">
                <Image
                  width={144}
                  height={144}
                  src={member.image}
                  alt={member.name}
                  className="w-48 md:w-56 h-48 md:h-56 mx-auto rounded-full object-cover"
                />
                <h3 className="text-2xl mt-2">{member.name}</h3>
                <p className=" text-base mb-6">{member.designation}</p>
                <Link
                  href={`mailto:${member.email}`}
                  className="px-5 cursor-pointer py-2 border border-secondary rounded hover:bg-secondary hover:text-secondary-foreground transition-colors font-semibold">
                  Email
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
