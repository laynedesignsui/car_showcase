//? a component for a customizable button. It allows you to specify the button's title, styles, click event, type, and an optional right icon

//! CLIENT SIDE RENDERING
"use client";
//! TYPESCRIPT
import { CustomButtonProps } from "@/types";
//! NEXTJS IMPORTS
import Image from "next/image";

const CustomButton = ({
  title,
  containerStyles,
  textStyles,
  handleClick,
  btnType,
  rightIcon,
}: CustomButtonProps) => (
  <button
    disabled={false}
    type={btnType || "button"}
    className={`custom-btn ${containerStyles}`}
    onClick={handleClick}
  >
    <span className={`flex-1 ${textStyles}`}>{title}</span>
    {rightIcon && (
      <div className="relative w-6 h-6">
        <Image
          src={rightIcon}
          alt="right icon"
          fill
          className="object-contain"
        />
      </div>
    )}
  </button>
);

export default CustomButton;
