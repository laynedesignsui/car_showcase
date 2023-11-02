//? a component for displaying car details in a modal. It utilizes the Headless UI library for transitions and includes information about the car's make, model, and various attributes. The component features a close button, multiple images of the car, and a responsive layout

//! CLIENT SIDE RENDERING
"use client";
//! TYPESCRIPT
import { CarDetailsProps } from "@/types";
//! NEXTJS IMPORTS
import Image from "next/image";
//! REACT IMPORTS
import { Fragment } from "react";
//! HEADLESSUI IMPORTS
import { Dialog, Transition } from "@headlessui/react";
//! HELPER FUNCTION
import { generateCarImageUrl } from "@/utils";

const CarDetails = ({ isOpen, closeModal, car }: CarDetailsProps) => (
  <>
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto transform rounded-2xl bg-white p-6 text-left shadow-xl transition-all flex flex-col gap-5">
                <button
                  type="button"
                  onClick={closeModal}
                  className="absolute top-2 right-2 z-10 f-fit p-2 bg-primary-blue-100 rounded-full"
                >
                  <Image
                    src="/close.svg"
                    alt="close"
                    width={20}
                    height={20}
                    className="object-contain"
                  />
                </button>
                <div className="flex-1 flex flex-col gap-3">
                  <div className="relative w-full bg-pattern h-40 bg-cover bg-center rounded-lg">
                    <Image
                      src={generateCarImageUrl(car, "angle")}
                      alt="Car Model"
                      fill
                      priority
                      className="object-contain translate-y-3"
                    />
                  </div>
                  <div className="flex gap-3">
                    <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg">
                      <Image
                        src={generateCarImageUrl(car, "29")}
                        alt="Car Model"
                        fill
                        priority
                        className="object-contain translate-y-2"
                      />
                    </div>
                    <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg">
                      <Image
                        src={generateCarImageUrl(car, "33")}
                        alt="Car Model"
                        fill
                        priority
                        className="object-contain translate-y-5"
                      />
                    </div>
                    <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg">
                      <Image
                        src={generateCarImageUrl(car, "13")}
                        alt="Car Model"
                        fill
                        priority
                        className="object-contain translate-y-2"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex-1 flex flex-col gap-2">
                  <h2 className="font-semibold text-xl capitalize">
                    {car.make} {car.model}
                  </h2>
                  <div className="mt-3 flex flex-wrap gap-4">
                    {Object.entries(car).map(([key, value]) => (
                      <div
                        className="flex justify-between gap-5 w-full text-right"
                        key={key}
                      >
                        <h4 className="text-gray capitalize">
                          {key.split("_").join(" ")}
                        </h4>
                        <p className="text-black-100 font-semibold">{value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  </>
);

export default CarDetails;
