const heroImageDir = "/home/hero";
const partnerDir = "/home/partners";

export const heroImages = [
  { id: "1", image: `${heroImageDir}/1.jpg` },
  { id: "2", image: `${heroImageDir}/2.jpg` }
];

export const partners = [
  {
    id: "1",
    name: "Falcon Garden Tools",
    image: `${partnerDir}/1.png`,
    comment:
      "BIGRIYO connects us directly with home and commercial lawn care specialists who need high-quality gardening tools and equipment maintenance."
  },
  {
    id: "2",
    name: "Bio Comp Nepal",
    image: `${partnerDir}/2.png`,
    comment:
      "Partnering with BIGRIYO allows us to seamlessly reach eco-conscious households and businesses seeking organic composting solutions and green waste management."
  },
  {
    id: "3",
    name: "Miracle Events",
    image: `${partnerDir}/3.png`,
    comment:
      "BIGRIYO provides us with reliable, on-demand technicians and venue setup assistance, ensuring our event setups run smoothly every single time."
  },
  {
    id: "4",
    name: "Hardware Pasal",
    image: `${partnerDir}/4.png`,
    comment:
      "As a hardware supplier, BIGRIYO helps us bridge the gap between our supply store and local repair technicians needing quick, genuine spare parts for emergency fixes."
  }
];
