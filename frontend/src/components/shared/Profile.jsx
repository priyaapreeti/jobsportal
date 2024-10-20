import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Mail, Pen, Phone } from "lucide-react";
import React from "react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import AppliedJobs from "./AppliedJobs";

const Profile = () => {
  const userSkills = ["angular", "python", "c#", "react js"];
  const resume=true;
  return (
    <div className="mx-auto max-w-7xl">
      <div className="pt-16"></div>
      <div className=" p-4 border-2 rounded text-sm m-2">
        <div className="flex justify-between">
          <div className="flex gap-4  justify-start p-4">
            <Avatar className="w-24 h-24 rounded-full" size="icon">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div>
              <div className="font-bold">name</div>
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
                dolore impedit voluptas molestiae laborum libero ad et expedita
                ex eum!
              </div>
            </div>
          </div>
          <Button variant="outline" size="icon" className="rounded-full hover:scale-105">
            <Pen />
          </Button>
        </div>
        <div>
          <div className="flex gap-2">
            <Mail /> preetiipriyaa@gmail.com
          </div>
          <div className="flex gap-2">
            <Phone /> 8978676767
          </div>
        </div>
        <br />
        <div>
          <div>skills: </div>
          <div className="flex gap-2">
            {userSkills.map((item, idx) => (
              <Badge>{item}</Badge>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-2">
            <Label>Resume: </Label>
            <div>
                { resume? <div className="cursor-pointer">
                    <a href="https://www.linkedin.com/in/preetiipriya/"  target="_blank">Click here</a>
                </div> : <div> No resume</div>}
            </div>
        </div>
      </div>
      <div className="p-4 border-2 m-2 rounded-md">
        <h1 className="font-bold">Applied Jobs: </h1>
        {/* application table */}
        <AppliedJobs/>
      </div>
    </div>
  );
};

export default Profile;
