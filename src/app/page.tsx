"use client";
import { useContext, useEffect, useState } from "react";
import HomeHero from "@/components/HomeHero";
import { SearchContext } from "@/context/SearchContect";
import SearchResult from "@/components/SearchResult";

export default function Home() {
  const searchContext = useContext(SearchContext);

  // Ensure searchContext is available
  if (!searchContext) {
    throw new Error("Home must be used within a SearchProvider.");
  }

  const { setSearchQuery } = searchContext;

  useEffect(() => {
    setSearchQuery(""); // Reset search query on component mount
  }, [setSearchQuery]);

  return (
    <>
      <HomeHero />
      <SearchResult />
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Trusted by eCommerce Businesses
          </h2>

          <p className="mt-4 text-gray-500 sm:text-xl">
            We have been the best agency providing high value and price friendly
          </p>
        </div>

        <dl className="mt-6 grid grid-cols-1 gap-4 sm:mt-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col rounded-lg bg-blue-50 px-4 py-8 text-center">
            <dt className="order-last text-lg font-medium text-gray-500">
              Total Sales
            </dt>

            <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
            ₦4.8m
            </dd>
          </div>

          <div className="flex flex-col rounded-lg bg-blue-50 px-4 py-8 text-center">
            <dt className="order-last text-lg font-medium text-gray-500">
              Official Addons
            </dt>

            <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
              24
            </dd>
          </div>

          <div className="flex flex-col rounded-lg bg-blue-50 px-4 py-8 text-center">
            <dt className="order-last text-lg font-medium text-gray-500">
              Total Addons
            </dt>

            <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
              86
            </dd>
          </div>

          <div className="flex flex-col rounded-lg bg-blue-50 px-4 py-8 text-center">
            <dt className="order-last text-lg font-medium text-gray-500">
              Downloads
            </dt>

            <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
              86k
            </dd>
          </div>
        </dl>
      </div>

    </>
  );
}
