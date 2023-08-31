// https://www.youtube.com/playlist?list=PLQKg8mIgoxKpvIWyxMM-Nn6s_iww0KX53
// Using the above playlist for creating this portfolio
import { services } from "@/data";
import ServiceCard from "@/components/ServiceCard";

export default function Home() {
  return (
    <div className="p-4">
      <h5>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged.
      </h5>
      <div>
        <h6>What I offer</h6>
        <div>
          {services.map((service) => (
            <ServiceCard service={service} />
          ))}
        </div>
      </div>
    </div>
  );
}
