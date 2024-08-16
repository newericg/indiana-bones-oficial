"use client";
import Image from "next/image";
import { ContainerScroll } from "../ui/ContainerScrollAnimate";

export function ContainerScrollComponent() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white pb-10">
            Self-service  <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
              Booking System
              </span>
            </h1>
          </>
        }
      >
        <Image
          src={`/booking.png`}
          alt="hero"
          height={720}
          width={1700}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
