"use client";
import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillMicFill } from "react-icons/bs";
import { useRouter } from "next/navigation";
import Image from "next/image";
function HomeSearch() {
  const [input, setInput] = useState("");
  const router = useRouter();
  const [randomSearchLoading, setRandomSearchLoading] = useState(false);

  function HandleSubmit(e) {
    e.preventDefault();
    if (!input.trim()) return;
    router.push(`/search/web?searchTerm=${input}`);
  }
  async function RandomSearch() {
    setRandomSearchLoading(true);
    const address = "https://random-word-api.herokuapp.com/word";
    const res = await fetch(address);
    const data = await res.json();
    const response = data[0];
    if (!response) return;
    router.push(`/search/web?searchTerm=${data}`);
    setRandomSearchLoading(false);
  }

  return (
    <>
      <form
        onSubmit={HandleSubmit}
        className={
          "flex w-full mt-5 mx-auto max-w-[90%] border border-gray-200 px-5 py-3 rounded-full hover:shadow-md focus-within:shadow-md transition-shadow sm:max-w-xl lg:max-w-2xl"
        }
      >
        <AiOutlineSearch className={"text-xl text-gray-500 mr-3"} />
        <input
          type={"text"}
          className={"flex-grow focus:outline-none"}
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
        <BsFillMicFill className={"text-xl"} />
      </form>
      <div
        className={
          "flex flex-col space-y-2 sm:space-y-0 sm:space-x-4 justify-center sm:flex-row mt-8"
        }
      >
        <button className={"btn"} onClick={HandleSubmit}>
          Google Search
        </button>
        <button
          disabled={randomSearchLoading}
          className={"btn flex items-center justify-center disabled:opacity-80"}
          onClick={RandomSearch}
        >
          {randomSearchLoading ? (
            <Image
              className={"h-6 text-center"}
              src={"spinner.svg"}
              alt={"loading..."}
              width={50}
              height={50}
            />
          ) : (
            "I am Feeling Lucky"
          )}
        </button>
      </div>
    </>
  );
}

export default HomeSearch;
