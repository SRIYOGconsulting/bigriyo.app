import Ribbon from "@/components/ui/Ribbon";

const Internship = () => {
  return (
    <>
      <Ribbon name="Internship" showFontSize={false} />
      <div className="max-w-7xl mx-auto px-4 lg:px-0 my-12">
        <h3 className="mb-2 text-3xl font-bold text-center">Join Our Internship Program</h3>
        <p className="text-center mb-8 text-muted-foreground">
          Looking for an internship? We provide internship opportunities on various tech stacks.
        </p>
        <iframe
          className="airtable-embed rounded-xl"
          src="https://airtable.com/embed/appcRLi3R3qIFyPIU/pagBvKYaiRmZLtsSn/form"
          width="100%"
          height="1500"></iframe>
      </div>
    </>
  );
};

export default Internship;
