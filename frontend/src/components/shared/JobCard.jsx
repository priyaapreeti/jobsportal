import React from "react";
import { Button } from "../ui/button";
import { Bookmark } from "lucide-react";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Badge } from "@/components/ui/badge";

const JobCard = () => {
  return (
    <div className="border p-2 text-sm shadow-md rounded-lg ">
      <div className="flex justify-between items-center">
        <p>2 days ago</p>
        <Button variant="outline" size="icon" className="rounded-full">
          <Bookmark />
        </Button>
      </div>
      <div className="flex gap-3">
        <Button className="rounded-lg" size="icon" variant="">
          <Avatar>
            <AvatarImage src="https://img.icons8.com/?size=100&id=13930&format=png&color=000000" />
          </Avatar>
        </Button>
        <div className="">
          <p>Company name</p>
          <p>Country</p>
        </div>
      </div>
      
      <div className="p-2">
        <h1 className="font-bold">Title</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Reprehenderit, distinctio nemo? Enim facere illum quibusdam debitis,
          quas corporis consequatur totam?
        </p>
      </div>
      
      <div className=" flex pt-2 gap-2">
        <Badge
          variant="outline "
          className=" text-blue-600 px-2 font-bold shadow-md"
        >
          10 openings
        </Badge>
        <Badge
          variant="outline"
          className=" text-red-600 px-2 font-bold shadow-md"
        >
          Full time
        </Badge>
        <Badge
          variant="outline"
          className=" text-yellow-600 px-2 font-bold shadow-md"
        >
          15 LPA
        </Badge>
      </div>
      
      <div className="flex items-center gap-4 pt-2 ">
        <Button variant="outline">More Details</Button>
        <Button>Save</Button>
      </div>
    </div>
  );
};

export default JobCard;
