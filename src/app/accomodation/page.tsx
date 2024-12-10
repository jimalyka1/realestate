import SearchResult from "@/components/SearchResult";
import SubHeader from "@/components/SubHeader";
import React from "react";

const title = "Accomodation"
const des = "Find all availiable Accomodations ranging from low to high at affordable prices"


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
      <SearchResult propertyType={"accomodation"} />
  
    </>
  );
}
