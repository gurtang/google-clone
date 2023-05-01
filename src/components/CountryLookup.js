"use client";
import React, { useEffect, useState } from "react";

function CountryLookup() {
  const [country, setCountry] = useState("Atlantida");
  useEffect(() => {
    const address = `http://api.ipstack.com/134.201.250.155?access_key=${process.env.NEXT_PUBLIC_API_KEY}`;
    console.log(address);
    fetch(address)
      .then((res) => res.json())
      .then((res) => setCountry(res.country_name));
  }, []);
  return <div>{country}</div>;
}

export default CountryLookup;
