//? defines a search bar component in a Next.js application. It includes a button with a magnifying glass icon for searching, allows users to enter a car manufacturer and model, and triggers a search when the form is submitted. The entered values are used to set the manufacturer and model states

//! CLIENT SIDE RENDERING
"use client";
//! NEXTJS IMPORT
import Image from "next/image";
//! REACT IMPORT
import React, { useState } from "react";
//! COMPONENT
import { SearchManufacturer } from ".";
//! TYPESCRIPT
import { SearchBarProps } from "@/types";

//? this component displays a button with a magnifying glass icon
const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
  <button type="submit" className={`-ml-3 z-10 ${otherClasses}`}>
    <Image
      src={"/magnifying-glass.svg"}
      alt={"magnifying glass"}
      width={40}
      height={40}
      className="object-contain"
    />
  </button>
);

//? this code includes form inputs for searching a car manufacturer and model, with associated state management and a search handling function.
const SearchBar = ({ setManufacturer, setModel }: SearchBarProps) => {

  //? states for car model and make
  const [searchManufacturer, setSearchManufacturer] = useState("");
  const [searchModel, setSearchModel] = useState("");

  //? defines what happens when a car is searched for
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchManufacturer.trim() === "" && searchModel.trim() === "") {
      return alert("Please provide some input");
    }
    setModel(searchModel);
    setManufacturer(searchManufacturer);
  };

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
          selected={searchManufacturer}
          setSelected={setSearchManufacturer}
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <div className="searchbar__item">
        <Image
          src="/model-icon.png"
          width={25}
          height={25}
          className="absolute w-[20px] h-[20px] ml-4"
          alt="car model"
        />
        <input
          type="text"
          name="model"
          value={searchModel}
          onChange={(e) => setSearchModel(e.target.value)}
          placeholder="Tiguan..."
          className="searchbar__input"
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <SearchButton otherClasses="max-sm:hidden" />
    </form>
  );
};

export default SearchBar;
