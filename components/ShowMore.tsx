"use client";

//? this code calculates a new limit for displaying more items when a "Show More" button is clicked and updates the limit accordingly

//! NEXTJS IMPORTS
import { useRouter } from "next/navigation";
//! CONSTANT IMPORT
import { ShowMoreProps } from "@/types";
//! COMPONENT IMPORT
import { CustomButton } from ".";
//! HELPER FUNCTION IMPORT
import { updateSearchParams } from "@/utils";

const ShowMore = ({ pageNumber, isNext, setLimit }: ShowMoreProps) => {

  const handleNavigation = () => {
    // Calculate the new limit for showing more items
    const newLimit = (pageNumber + 1) * 10;
    // Update the limit with the new value
    setLimit(newLimit);
  };

  return (
    <div className="w-full flex-center gap-5 mt-10">
      {!isNext && (
        <CustomButton
          title="Show More"
          btnType="button"
          containerStyles="bg-primary-blue rounded-full text-white"
          handleClick={handleNavigation}
        />
      )}
    </div>
  );
};

export default ShowMore;
