import React from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const filterData = [
  {
    filterType: "Locations",
    array: ["NCR", "Bengaluru", "Pune", "Hyderabad", "Mumbai"],
  },
  {
    filterType: "Salary",
    array: ["5-7LPA", "7-10LPA", "10-15LPA", "15-20LPA", "20+LPA"],
  },
  {
    filterType: "Role",
    array: ["Frontend Dev", "Backend Dev", "FullStack Dev", "Data Scientist"],
  },
];
const FilterCard = () => {
  return (
    <div className="p-5">
      Filter by :
      <hr className="mt-3" />
      <RadioGroup>
        {filterData.map((item, idx) => (
          <div className=" items-center space-x-2" key={idx}>
            <Label htmlFor={item.filterType} className="font-bold">{item.filterType}</Label>
            {item.array.map((item,idx) => (
              <div key={idx}>
                <RadioGroupItem value={item} id="option-one" />
                <Label htmlFor="option-two">{item}</Label>
              </div>
            ))}
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};

export default FilterCard;
