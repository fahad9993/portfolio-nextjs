// https://www.youtube.com/playlist?list=PLQKg8mIgoxKpvIWyxMM-Nn6s_iww0KX53
// Using the above playlist for creating this portfolio
import { services } from "@/data";
import ServiceCard from "@/components/ServiceCard";

export default function Home() {
  return (
    <div className="flex flex-col px-6 pt-1 flex-grow">
      <h5 className="my-3 font-medium">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged.
      </h5>
      <div
        className="p-4 mt-5 bg-gray-400 dark:bg-dark-100 flex-grow"
        style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}
      >
        <h6 className="my-3 text-xl font-bold tracking-wide">What I offer</h6>
        <div className="grid gap-6 lg:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-gray-200 dark:bg-dark-200 rounded-lg lg:col-span-1"
            >
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
