// src/components/product-card/product-carousel.tsx
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ProductCard, ProductCardProps } from "../product-card";

export interface ProductCarouselProps {
  products: ProductCardProps[];
}

export function ProductCarousel({ products }: ProductCarouselProps) {
  return (
    <Carousel>
      <CarouselContent className="gap-5">
        {products.map((product, idx) => (
          <CarouselItem
            key={idx}
            style={{
              minWidth: "calc(20% - 16px)",
            }}
            className="flex-1"
          >
            <ProductCard {...product} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-[-12px] top-1/2 -translate-y-1/2 bg-brand-100" />
      <CarouselNext className="right-[-12px] top-1/2 -translate-y-1/2 bg-brand-100" />
    </Carousel>
  );
}
