import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
  DropdownMenuRadioGroup,
} from "@/components/ui/dropdown-menu";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import axios from "axios";
const Signup = () => {
  const [position, setPosition] = useState({
    fullname: "",
    email: "",
    phone: "",
    password: "",
    role: "student",
    photo: "",
  });

  const fileChange = (e) => {
    setPosition({ ...position, photo: e.target.files?.[0] });
  };
  const valueChanges = (e) => {
    setPosition({ ...position, [e.target.name]: e.target.value });
  };
  const handleRole = (role) => {
    setPosition({ ...position, role });
  };
  // useEffect(() => {
  //   console.log(position);
  // }, [position]);
  const submitter = async (e) => {
    e.preventDefault();
    try {
      // axios.post( )
    } catch (error) {
      
    }
    console.log(position);
  };
  return (
    <div className=" max-w-6xl mx-auto py-5">
      <h1 className="text-center font-bold">Let's get you started</h1>
      <div className="flex items-center justify-center ">
        <form action="post" className=" w-1/2 p-2" onSubmit={submitter}>
          <Label htmlFor="fullname">Full name</Label>
          <Input
            type="text"
            id="fullname"
            name="fullname"
            placeholder="Enter your name"
            onChange={valueChanges}
          />

          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your Email"
            onChange={valueChanges}
          />

          <Label htmlFor="phone">Phone no.</Label>
          <Input
            type="number"
            id="phone"
            name="phone"
            placeholder="Enter your phone no."
            onChange={valueChanges}
          />

          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            onChange={valueChanges}
          />

          <div className="flex justify-between items-center">
            <div>
              <Label htmlFor="fullname">Select Role: </Label>
              <DropdownMenu>
                <DropdownMenuTrigger>{position.role} </DropdownMenuTrigger>
                <DropdownMenuRadioGroup
                  value={position.role}
                  onValueChange={handleRole}
                >
                  <DropdownMenuContent>
                    <DropdownMenuRadioItem value="recruiter">
                      Recruiter
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="student">
                      Student
                    </DropdownMenuRadioItem>
                  </DropdownMenuContent>
                </DropdownMenuRadioGroup>
              </DropdownMenu>
            </div>
            <div className="flex items-center ">
              {/* <Label className="cursor-pointer" htmlFor="photo">picture </Label> */}
              <Input
                type="file"
                accept="image/*"
                name="photo"
                onChange={fileChange}
              ></Input>
            </div>
          </div>

          <Button type="submit" className="w-full my-4">
            Signup
          </Button>
          <div>
            Already have an account? <Link to="/login">Login</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
