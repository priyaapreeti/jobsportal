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
const Login = () => {
  const [position, setPosition] = useState({
    email: "",
    password: "",
    role: "student",
  });
  // useEffect(() => {
  //   console.log("Updated position:", position);
  // }, [position]);

  const setValueChanges = (e) => {
    setPosition({ ...position, [e.target.name]: e.target.value });
  };
  const handleRoleChange = (role) => {
    setPosition({ ...position, role });
    console.log("Role changed to:", role);
  };
  const submitter = async (e) => {
    e.preventDefault();
    if (position.email === "" || position.password === "") {
      alert("Enter all fields");
    }
    console.log(position);
    
    setPosition({ email: "", password: "" });

  };
  return (
    <div>
      <div className=" max-w-6xl mx-auto py-5">
        <h1 className="text-center font-bold">Welcome back! </h1>
        <div className="flex items-center justify-center ">
          <form action="post" className=" w-1/2 p-2" onSubmit={submitter}>
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              name="email"
              value={position.email}
              placeholder="Enter your Email"
              onChange={setValueChanges}
            />

            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              id="password"
              name="password"
              value={position.password}
              placeholder="Enter your password"
              onChange={setValueChanges}
            />
            <Label>Select: </Label>
            <DropdownMenu>
              <DropdownMenuTrigger>{position.role} </DropdownMenuTrigger>
              <DropdownMenuRadioGroup
                onValueChange={handleRoleChange}
                value={position.role}
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
            <Button type="submit" className="w-full my-4">
              Login
            </Button>
            <div>
              New user? <Link to="/signup">Create account here</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
