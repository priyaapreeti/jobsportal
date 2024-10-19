import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "../ui/button";

const category = [
  "Frontend Dev",
  "Fullstack Dev",
  "Data Science",
  "Graphic Design",
  "UI/UX Design",
];
const CatogeryCarousal = () => {
  return (
    <div>
      <div>
        <Carousel className="w-full max-w-xl mx-auto border p-4">
          <CarouselContent>
            {category.map((item, idx) => (
              <CarouselItem key={idx} className="md:basis-1/2 lg:basis-1/3">
                <Button variant="outline">{item}</Button>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext /> 
        </Carousel>
      </div>
    </div>
  );
};

export default CatogeryCarousal;
