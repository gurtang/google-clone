import React from "react";
import Link from "next/link";
import PaginationButtons from "@/components/PaginationButtons";

function ImageSearchResults({ results }) {
  return (
    <div className={"sm:pb-24 pb-40 mt-4"}>
      <div
        className={
          "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-3 space-x-4"
        }
      >
        {results.items.map((result) => (
          <div key={result.link} className={"mb-8"}>
            <div className={"group"}>
              <Link
                className={
                  "h-60 group-hover:shadow-xl transition-shadow w-full object-contain"
                }
                href={result.image.contextLink}
              >
                <img src={result.link} alt={result.title} />
              </Link>
              <Link
                className={"group-hover:underline text-xl"}
                href={result.image.contextLink}
              >
                <h2>{result.title}</h2>
              </Link>
              <Link
                className={"group-hover:underline text-gray-600"}
                href={result.image.contextLink}
              >
                <p>{result.displayLink}</p>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className={"ml-16"}>
        <PaginationButtons />
      </div>
    </div>
  );
}

export default ImageSearchResults;
