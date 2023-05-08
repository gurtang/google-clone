export const dynamic = "force-dynamic";

import React from "react";
import Link from "next/link";
import WebSearchResults from "@/components/WebSearchResults";

async function WebSearchPage({ searchParams }) {
  const startIndex = searchParams.start || "1";
  const address = `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}&start=${startIndex}`;
  const response = await fetch(address);

  if (!response.ok) {
    throw new Error("Something went wrong");
  }
  const data = await response.json();
  const results = data.items;

  if (!results) {
    return (
      <div className={"flex flex-col justify-center items-center pt-10 "}>
        <h1 className={"text-3xl mb-4"}>No results found</h1>
        <p className={"text-lg"}>
          Try searching for something else or go back to the homepage.
        </p>
        <Link className={"text-blue-500"} href={"/"}>
          Home
        </Link>
      </div>
    );
  }
  return <>{results && <WebSearchResults results={data} />}</>;
}

export default WebSearchPage;
