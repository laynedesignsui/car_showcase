import { CarProps, FilterProps } from "@/types";

//? function to fetch car data from an API
export async function fetchCars(filters: FilterProps) {

  const { manufacturer, year, model, limit, fuel } = filters;

  // Define headers with API key and host for Rapid API
  const headers = {
    "X-RapidAPI-Key": "3eff83de3dmsh851208f34b8d2efp1e1744jsncce8300b1d30",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  // Fetch the API response and parse it
  const response = await fetch(
    `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`,
    {
      headers: headers,
    }
  );

  // Parse the API response
  const result = await response.json();

  // Return the parsed result
  return result;

}

//? function to calculate car rental rate
export const calculateCarRent = (city_mpg: number, year: number) => {

  // define factors for rental rate calculation
  const basePricePerDay = 50;
  const mileageFactor = 0.1;
  const ageFactor = 0.05;

  // calculate rental rate based on mileage and age
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  // calculate total rental rate
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  // return the rounded rental rate
  return rentalRatePerDay.toFixed(0);

};

//? function to generate a car image URL
export const generateCarImageUrl = (car: CarProps, angle?: string) => {

  const url = new URL("https://cdn.imagin.studio/getimage");

  const { make, year, model } = car;

  // append parameters for generating the image URL
  url.searchParams.append("customer", "hrjavascript-mastery");
  url.searchParams.append("make", make);
  url.searchParams.append("modelFamily", model.split(" ")[0]);
  url.searchParams.append("zoomType", "fullscreen");
  url.searchParams.append("modelYear", `${year}`);
  url.searchParams.append("angle", `${angle}`);

  // return the generated image URL
  return `${url}`;

};

//? function to update search parameters in the URL
export const updateSearchParams = (type: string, value: string) => {

  const searchParams = new URLSearchParams(window.location.search);

  searchParams.set(type, value);

  const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

  // return the updated URL
  return newPathname;
  
};
