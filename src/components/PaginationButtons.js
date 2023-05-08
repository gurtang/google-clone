"use client";
import React from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import Link from "next/link";

function PaginationButtons() {
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get("searchTerm");
  const startIndex = +searchParams.get("start") || 11;
  return (
    <div
      className={
        "text-blue-700 flex px-10 pb-4 justify-between sm:justify-start sm:space-x-44 sm:px-0"
      }
    >
      {startIndex >= 10 && (
        <Link
          href={`${pathName}?searchTerm=${searchTerm}&start=${startIndex - 10}`}
        >
          <div
            className={
              "flex flex-col cursor-pointer items-center hover:underline"
            }
          >
            <BsChevronLeft className={"h-5"} />
            <span>Previous</span>
          </div>
        </Link>
      )}

      {startIndex <= 90 && (
        <Link
          href={`${pathName}?searchTerm=${searchTerm}&start=${startIndex + 10}`}
        >
          <div
            className={
              "flex flex-col cursor-pointer items-center hover:underline"
            }
          >
            <BsChevronRight className={"h-5"} />
            <span>Next</span>
          </div>
        </Link>
      )}
    </div>
  );
}

export default PaginationButtons;
