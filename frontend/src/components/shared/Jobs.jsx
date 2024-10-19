import React from "react";
import FilterCard from "./FilterCard";
import JobCard from "./JobCard";
const jobs = [1, 2, 3, 4, 5];
const Jobs = () => {
  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto mt-5 border ">
        <div className="flex">
          <div className=" w-[40%]">
            <FilterCard />
          </div>
          <div className="flex border">
            {jobs.length <= 0 ? (
              <span>Jobs not found</span>
            ) : (
              <div className="flex-1 h-[88vh] overflow-y-auto pb-5">
                <div className="grid grid-cols-3 gap-4 p-4">
                  {jobs.map((mp, idx) => (
                    <JobCard key={idx}  />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
