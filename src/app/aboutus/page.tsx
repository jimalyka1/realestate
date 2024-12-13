import SubHeader from "@/components/SubHeader";
import React from "react";

const title = "About Us"
const des = "Know more about us with our long lasting services"


export const metadata = {
  title: title,
  description: des,
  keywords: `${title}, company, services`,
  openGraph: {
    title: title,
    description: des,
    images: [
      {
        url: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?q=80&w=2670&auto=format&fit=crop",
        width: 800,
        height: 600,
        alt: {title},
      },
    ],
  },
};

export default function page() {
  return (
    <>
      <SubHeader title={title} description={des} />

      <section>
        <div className="mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="bg-teal-600 p-8 md:p-12 lg:px-16 lg:py-24">
              <div className="mx-auto max-w-xl text-center">
                <h2 className="text-2xl font-bold text-white md:text-3xl">
                  Who we are!
                </h2>

                <p className="hidden text-white/90 sm:mt-4 sm:block">
                Gowec Properties is a full-service real estate organization with a strong presence in major cities, 
                excelling in property development, advisory services, facility and project management. We specialize in acquiring,
                developing, and investing in sustainable housing properties across Nigeria’s urban landscapes. With 300+ successfully developed housing units and over 800+ currently in progress, we’ve established ourselves as a prominent real estate company and leading property developer in this dynamic market. Our focus is on longevity and sustainability, with the ultimate goal of delivering exceptional value to our clients with every investment.
                </p>

               
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 md:grid-cols-1 lg:grid-cols-2">
              <img
                alt=""
                src="Gon03.jpg"
                className="h-40 w-full object-cover sm:h-56 md:h-full"
              />

              <img
                alt=""
                src="/Gon01.jpg"
                className="h-40 w-full object-cover sm:h-56 md:h-full"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
