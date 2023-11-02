//? this component defines a client-side rendered NavBar component for a website. It includes a navigation bar with a logo linked to the home page and a "Sign In" button with custom styling ( SIGN-IN BUTTON DOES NOT WORK)

//! CLIENT SIDE RENDERING
"use client";
//! NEXTJS IMPORT
import Link from "next/link";
import Image from "next/image";
//! COMPONENTS
import { CustomButton } from ".";

const NavBar = () => (
  <header className="w-full absolute z-10">
    <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
      <Link href="/" className="flex justify-center items-center">
        <Image
          src="/logo.png"
          alt="Car Hub Logo"
          width={80}
          height={9}
          className="object-contain"
        />
      </Link>
      <CustomButton
        title="Sign In"
        btnType="button"
        containerStyles="text-primary-blue rounded-full bg-white min-w-[130px]"
        handleClick={() => {}}
      />
    </nav>
  </header>
);

export default NavBar;
