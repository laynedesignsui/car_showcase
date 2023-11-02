//? code for a dynamic car catalog with search, filters, and pagination, utilizing Next.js and various components for an interactive user experience

//* CLIENT SIDE RENDERING
"use client";
//* NEXTJS IMPORTS
import Image from "next/image";
//* CONSTANTS
import { fuels, yearsOfProduction } from "@/constants";
//* COMPONENTS
import { CarCard, ShowMore, SearchBar, CustomFilter, Hero } from "@/components";
import { fetchCars } from "@/utils";
//* STATE/RENDERING HOOKS
import { useState, useEffect } from "react";

export default function Home() {

  //! car states
  const [allCars, setAllCars] = useState([]);
  const [loading, setLoading] = useState(false);

  //! search states
  const [manufacturer, setManufacturer] = useState("");
  const [model, setModel] = useState("");

  //! filter states
  const [fuel, setFuel] = useState("");
  const [year, setYear] = useState(2022);

  //! pagination styles
  const [limit, setLimit] = useState(10);

  //! an asynchronous function that fetches car data
  const getCars = async () => {
    setLoading(true);
    try {
      const result = await fetchCars({
        manufacturer: manufacturer || "",
        year: year || 2022,
        fuel: fuel || "",
        limit: limit || 10,
        model: model || "",
      });
      setAllCars(result);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  //! effect hook that triggers the 'getCars' whenever fuel, year, limit, manufacturer, or model change
  useEffect(() => {
    getCars();
  }, [fuel, year, limit, manufacturer, model]);

  //! a component rendering a dynamic car catalog interface, including a hero section, filters, car cards, pagination, and loading indicators based on available car data
  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore out cars you might like</p>
        </div>
        <div className="home__filters">
          <SearchBar setManufacturer={setManufacturer} setModel={setModel} />
          <div className="home__filter-container">
            <CustomFilter title="fuel" options={fuels} setFilter={setFuel} />
            <CustomFilter
              title="year"
              options={yearsOfProduction}
              setFilter={setYear}
            />
          </div>
        </div>
        {allCars.length > 0 ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars?.map((car) => (
                <CarCard car={car} />
              ))}
            </div>
            {loading && (
              <div className="mt-16 w-full flex-center">
                <Image
                  src="/logo.svg"
                  alt="loader"
                  width={50}
                  height={50}
                  className="object-contain"
                />
              </div>
            )}
            <ShowMore
              pageNumber={limit / 10}
              isNext={limit > allCars.length}
              setLimit={setLimit}
            />
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">Oops, no results</h2>
          </div>
        )}
      </div>
    </main>
  );
}
