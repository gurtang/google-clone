import React from "react";

async function WebSearchPage({ searchParams }) {
  const address = `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}`;
  const response = await fetch(address);
  const data = await response.json();
  const results = data.items;

  return <>{results && results.map((result) => <h1>{result.title}</h1>)}</>;
}

export default WebSearchPage;
