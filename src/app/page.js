import HomeHeader from "@/components/HomeHeader";
import Image from "next/image";
import HomeSearch from "@/components/HomeSearch";

export default function Home() {
  return (
    <div className="">
      {/*header*/}
      <HomeHeader />
      {/*body*/}
      <div className={"flex flex-col items-center mt-24"}>
        <Image
          src={
            "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/800px-Google_2015_logo.svg.png"
          }
          height={"100"}
          width={"300"}
          alt={"Cannot find image!"}
        />
        <HomeSearch />
      </div>
    </div>
  );
}
