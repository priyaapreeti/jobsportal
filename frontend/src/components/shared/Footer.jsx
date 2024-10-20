import { Facebook, Linkedin, Twitter } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <div className="flex justify-between p-4  mx-auto max-w-7xl">
      <div className=" gap-2">
        <h1 className="font-bold">Job hunt</h1>
        <div>2024, All rights reserved</div>
      </div>
      <div className="flex gap-2">
        <a href="https://www.linkedin.com">
          <Linkedin />
        </a>
        <a href="https://www.facebook.com">
          <Facebook />
        </a>
        <a href="https://www.x.com">
          <Twitter />
        </a>
      </div>
    </div>
  );
};

export default Footer;
