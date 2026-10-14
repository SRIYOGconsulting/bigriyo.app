import GlossaryClient from "@/components/glossary/Glossary";
import Ribbon from "@/components/ui/Ribbon";

export const metadata = {
  title: "Glossary | BIGRIYO",
  description: "Browse our dictionary and technical terms alphabetically."
};

const Glossary = () => {
  return (
    <>
      <Ribbon name="Glossary" showFontSize={true} />
      <GlossaryClient />
    </>
  );
};

export default Glossary;
