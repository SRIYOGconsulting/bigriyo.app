import { serviceList } from "@/data";
import Ribbon from "@/components/ui/Ribbon";
import ServiceItem from "@/components/repair/ServiceItem";

export default function Products() {
  return (
    <>
      {/* Header */}
      <Ribbon name="Our Products" showFontSize={false} />
      <div className="px-5 py-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
          {serviceList[0].services.map((service) => (
            <ServiceItem key={service.slug} service={service} />
          ))}
        </div>
      </div>
    </>
  );
}
