"use client";
import React from "react";
import { Card, CardHeader, CardContent, CardFooter } from "../ui/card";
import InvoiceTable from "./InvoiceTable";
import Logo from "@/public/assets/logo.png";
import Image from "next/image";
import { Separator } from "../ui/separator";

const InvoiceCard = () => {
  return (
    <Card className="mt-5 border-color--4C4D4F border-opacity-20">
      <CardHeader className="">
        <Image
          src={Logo}
          alt="logo"
          width={100}
          height={100}
          className="w-24 max-lg:w-[180px] max-sm:w-24"
        />
      </CardHeader>
      <CardContent className=" max-sm:p-3">
        <div className=" flex items-center justify-start gap-2 ">
          <h3 className="uppercase text-color--4C4D4F text-[10px] ">Summery</h3>
          <div className="  border-color--4C4D4F w-full opacity-20 border-b-[0.25px]"></div>
        </div>
        <div className=" flex  gap-20 mt-5 text-[12px] max-lg:text-[23px] max-sm:text-[12px]">
          <h3>Dr. Vihang</h3>
          <h3>Jane Doe</h3>
        </div>
        <InvoiceTable />
        <div className=" flex  items-end text-[10px] max-lg:text-[20px] max-sm:text-[10px] flex-col  mt-5 gap-1.5">
          <div className=" flex gap-8 max-lg:gap-24 max-sm:gap-8 pr-3">
            <h3>Subtotal</h3>
            <h3>$2820.00</h3>
          </div>
          <div className=" flex gap-10 text-color--4C4D4F opacity-50 max-lg:gap-28 max-sm:gap-10 pr-3">
            <h3>tax</h3>
            <h3>$00.00</h3>
          </div>
          <div className=" flex gap-10 text-color--4C4D4F opacity-50 max-lg:gap-28 max-sm:gap-10 pr-3">
            <h3>Discount</h3>
            <h3>$00.00</h3>
          </div>
          <Separator className="w-full" />
          <div className=" flex gap-10 mt-2 max-lg:gap-28 max-sm:gap-10  pr-3   ">
            <h3>total</h3>
            <h3>$2820.00</h3>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <div className="bg-color--F8F8F8 w-full px-3 py-2 text-[10px] max-lg:text-[20px] max-sm:text-[10px]">
          <h4>Notes/Terms</h4>
          <p className=" text-black opacity-50">
            Lorem ipsum dolor sit amet. Sit eaque assumenda qui.
          </p>
        </div>
      </CardFooter>
    </Card>
  );
};

export default InvoiceCard;
