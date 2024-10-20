import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import React from "react";
import { Button } from "../ui/button";
import { LogOut, User2 } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { user } = useSelector((store) => store.auth);
  console.log(user);
  return (
    <div className="bg-black fixed w-full text-lg">
      <div className=" flex items-center justify-between p-4 mx-auto max-w-6xl h-16 ">
        <div className="text-white font-bold">
          Job<span className="text-blue-400">Portal</span>
        </div>
        <div>
          <ul className="text-white flex gap-5 items-center ">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/jobs"> Jobs</NavLink>
            </li>
            <li>
              <NavLink to="/browse">Browse</NavLink>
            </li>
            <li className="cursor-pointer">
              {!user ? (
                <div className=" flex gap-2 items-center">
                  <Link to="/login">
                    {" "}
                    <Button variant="">Login</Button>
                  </Link>
                  <Link to="/signup">
                    {" "}
                    <Button variant="" className="hover:bg-gray-500">
                      Signup
                    </Button>
                  </Link>
                </div>
              ) : (
                <Popover>
                  <PopoverTrigger asChild>
                    <Avatar>
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </PopoverTrigger>
                  <PopoverContent className="w-60">
                    <div className="flex justify-between items-center">
                      <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                      <div>
                        <h1 className="font-bold">{user.fullname}</h1>
                        <p className="text-muted-foreground">{user.email}</p>
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <Link to="/profile">
                        
                        <Button className="w-fit gap-2" variant="link">
                          <User2 /> my profile
                        </Button>
                      </Link>
                      <Button className="w-fit gap-2" variant="link">
                        {" "}
                        <LogOut /> logout
                      </Button>
                    </div>
                  </PopoverContent>
                </Popover>
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
