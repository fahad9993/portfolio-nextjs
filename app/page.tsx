"use client";

// https://www.youtube.com/playlist?list=PLQKg8mIgoxKpvIWyxMM-Nn6s_iww0KX53
// Using the above playlist for creating this portfolio
import { services } from "@/data";
import ServiceCard from "@/components/ServiceCard";
import { motion } from "framer-motion";
import { fadeInUp, routeAnimation, stagger } from "@/animations";
import Head from "next/head";

export default function About() {
  return (
    <motion.div
      className="flex flex-col px-6 pt-1 flex-grow"
      variants={routeAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Head>
        <title>Md. Fahad Rahman | About | Portfolio</title>
      </Head>
      <h5 className="my-3 font-medium">
        Md. Fahad Rahman is a Mechanical Engineer, who graduated from Bangladesh
        University of Engineering and Technology.
        <br />
        Fahad worked as an Administrative Assistant at World Health Organization
        and was responsible for the management of the Emergency Health Program
        in Cox&apos;s Bazar.
      </h5>
      <div
        className="p-4 mt-5 bg-gray-400 dark:bg-dark-100 flex-grow"
        style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}
      >
        <h6 className="my-3 text-xl font-bold tracking-wide">What I offer</h6>
        <motion.div
          className="grid gap-6 lg:grid-cols-2"
          variants={stagger}
          initial="initial"
          animate="animate"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              className="bg-gray-200 dark:bg-dark-200 rounded-lg lg:col-span-1"
              variants={fadeInUp}
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
