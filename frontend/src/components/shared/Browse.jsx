import React from "react";
import JobCard from "./JobCard";
const random = [1, 2, 3];
const Browse = () => {
  return (
    <div className="pt-16 max-w-6xl p-4 mx-auto ">
      <div className="p-3 font-bold">Search results: ({random.length})</div>
      <div className="grid grid-cols-3 p-2 gap-4 ">
        {random.map((item) => (
          <JobCard />
        ))}
      </div>
    </div>
  );
};

export default Browse;
