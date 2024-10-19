import React from "react";
import { Input } from "../ui/input";
import { Search } from "lucide-react";
import { Button } from "../ui/button";
import CatogeryCarousal from "./CatogeryCarousal";
import LatestJobs from "./LatestJobs";

const Hero = () => {
  return (
    <div className="text-center">
      <div className="flex flex-col items-center justify-center py-[20%] gap-5 ">
        <div className="py-2 px-2 bg-gray-200 text-red-600 font-medium rounded-full">
          Best job hunt site
        </div>
        <div className="text-5xl font-bold">
          Search, apply <br /> and get
          <span className="text-violet-800 "> your dream job</span>
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
          asperiores vero fugit ullam quos modi, repudianda. <br /> Et
          dolor nulla beatae.
        </div>
        <div className="flex w-[40%] shadow-xl rounded-full">
          <Input
            type="text"
            className="rounded-l-full"
            placeholder="Enter skills, location, or Role "
          />
          <Button className="rounded-r-full border">
            <Search />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
