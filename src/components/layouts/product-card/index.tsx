// src/components/product-card/product-card.tsx
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export interface ProductCardProps {
  imageUrl: string;
  title: string;
  price: number;
  oldPrice?: number;
  discountPercent?: number;
  badgeText?: string;
  onBuy?: () => void;
}

export function ProductCard({
  imageUrl,
  title,
  price,
  oldPrice,
  discountPercent,
  badgeText,
  onBuy,
}: ProductCardProps) {
  return (
    <Card className="p-1 w-full h-full rounded-xl bg-white shadow-md flex flex-col items-center overflow-hidden max-w-72">
      <Image
        src={imageUrl}
        alt={title}
        width={260}
        height={260}
        className="object-fill w-full aspect-square"
        loading="lazy"
      />

      <CardContent className="w-full flex flex-col items-start px-0 py-2">
        {badgeText && (
          <Badge className="bg-yellow-400 text-yellow-900 mb-1">
            {badgeText}
          </Badge>
        )}
        <div className="font-medium text-sm text-gray-900 line-clamp-2 mb-1">
          {title}
        </div>
        <div className="flex items-end gap-2">
          <span className="text-red-600 font-bold text-lg">
            {price.toLocaleString()} đ
          </span>
          {oldPrice && (
            <span className="text-gray-400 text-xs line-through">
              {oldPrice.toLocaleString()} đ
            </span>
          )}
          {discountPercent && (
            <span className="text-red-500 text-xs font-semibold">
              -{discountPercent}%
            </span>
          )}
        </div>
      </CardContent>
      <CardFooter className="w-full px-0 pt-2">
        <Button
          className="w-full bg-blue-500 text-white hover:bg-blue-600"
          onClick={onBuy}
        >
          Mua ngay
        </Button>
      </CardFooter>
    </Card>
  );
}
