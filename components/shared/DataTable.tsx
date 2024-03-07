"use client";
import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { payments } from "@/lib/data";
import { cn, formatDate } from "@/lib/utils";
import { Badge } from "../ui/badge";

const DataTable = () => {
  const [selected, setSelected] = useState(5);
  return (
    <div className="px-7 py-6 max-tablet:px-2 ">
      <div className="border rounded-xl overflow-hidden max-lg:border-none">
        <Table className=" text-[6px] mobile:text-[10px]">
          <TableHeader className=" text-color--4C4D4F opacity-80  font-light max-lg:bg-white text-[6px] mobile:text-[10px]">
            <TableRow className="border-none ">
              <TableHead className="h-7 mobile:h-[50px] text-left p-[9px] mobile:p-4">
                Patient
              </TableHead>
              <TableHead className="h-7 mobile:h-[50px] p-[9px] mobile:p-4">
                Time
              </TableHead>
              <TableHead className="h-7 mobile:h-[50px] p-[9px] mobile:p-4">
                Date
              </TableHead>
              <TableHead className="h-7 mobile:h-[50px] p-[9px] mobile:p-4">
                Total
              </TableHead>
              <TableHead className="h-7 mobile:h-[50px] text-right p-[9px] mobile:p-4">
                Status
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="bg-color--F8F8F8 max-lg:bg-transparent">
            {payments.map((payment, index) => (
              <TableRow
                className={cn(
                  "cursor-pointer",
                  selected === index && "bg-white"
                )}
                key={index}
                onClick={() => setSelected(index)}
              >
                <TableCell className=" p-[9px] mobile:p-4">
                  {payment.Patient}
                </TableCell>
                <TableCell className="p-[9px] mobile:p-4">
                  {payment.Time}
                </TableCell>
                <TableCell className=" p-[9px] mobile:p-4">
                  {formatDate(payment.date)}
                </TableCell>
                <TableCell className=" p-[9px] mobile:p-4">
                  ${payment.Total}
                </TableCell>
                <TableCell className="  p-[9px] mobile:p-4 text-right">
                  <Badge
                    className={cn(
                      "font-extralight rounded-[10px]",
                      payment.Status === "In Progress"
                        ? "bg-color--F1B34A"
                        : "bg-color--36C490",
                      payment.Status === "Canceled" &&
                        "bg-color--FFF9F1 text-color--4C4D4F",
                      "text-[6px] mobile:text-[10px] px-2 mobile:px-4"
                    )}
                  >
                    {payment.Status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter className="max-lg:bg-transparent">
            <TableRow className="hover:bg-inherit ">
              <TableCell colSpan={5} align="center">
                <span className="underline text-sm cursor-pointer">
                  View More
                </span>
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </div>
  );
};

export default DataTable;
