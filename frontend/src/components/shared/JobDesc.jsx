import React from "react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

const JobDesc = () => {
  return (
    <div>
      <div className="pt-16 max-w-7xl border rounded-sm mx-auto p-4">
        <div className="flex justify-between items-center gap-2">
          <div className="p-2">
            <h1 className="font-bold pb-2">Title</h1>
            <div className="flex gap-2">
              <Badge className="text-blue-600" variant="outline">
                12 positions
              </Badge>
              <Badge className="text-red-600" variant="outline">
                Part Time
              </Badge>
              <Badge className="text-yellow-600" variant="outline">
                24 LPA
              </Badge>
            </div>
          </div>
          <Button>Apply</Button>
        </div>
        <hr />
        <div className="font-bold p-2">
          <div>Job Description: </div>
          <div>Role: </div>
          <div>Desc: </div>
          <div>Experience: </div>
          <div>Salary: </div>
          <div>Total Applicants: </div>
          <div>Date Posted: </div>
        </div>
      </div>
    </div>
  );
};

export default JobDesc;
