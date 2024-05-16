import * as React from "react";

import { Card, CardContent } from "@/components/ui/Card/card";
import {
  Carousel as ShadCarousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/Carousel/carousel";

export interface ICarouselItem {
  content: React.ReactNode;
}

export interface ICarouselProps {
  carouselData: ICarouselItem[];
}

export default function Carousel({ carouselData }: ICarouselProps) {
  return (
    <ShadCarousel
      opts={{
        align: "start",
      }}
      className="w-full">
      <CarouselContent>
        {carouselData.map((item: ICarouselItem, index) => (
          <CarouselItem
            key={index}
            className="md:basis-1/1 lg:basis-1/2 xl:basis:1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex items-center justify-cent{er p-2">
                  {item.content}
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </ShadCarousel>
  );
}
