"use client";

import { ProductCarousel } from "@/components/layouts/product-card-carousel";
import Image from "next/image";

const products = [
  {
    imageUrl: "/product1.png",
    title: "Lọc gió động cơ Air Filter – Chevrolet Colorado, Tr...",
    price: 299000,
    oldPrice: 329000,
    discountPercent: 10,
    badgeText: "Giá cực sốc",
    onBuy: () => alert("Mua ngay!"),
  },
  {
    imageUrl: "/product2.png",
    title: "Lọc gió động cơ Air Filter – Chevrolet Colorado, Tr...",
    price: 299000,
    oldPrice: 329000,
    discountPercent: 10,
    badgeText: "Giá cực sốc",
    onBuy: () => alert("Mua ngay!"),
  },
  {
    imageUrl: "/product3.png",
    title: "Lọc gió động cơ Air Filter – Chevrolet Colorado, Tr...",
    price: 299000,
    oldPrice: 329000,
    discountPercent: 10,
    badgeText: "Giá cực sốc",
    onBuy: () => alert("Mua ngay!"),
  },
  {
    imageUrl: "/product4.jpg",
    title: "Lọc gió động cơ Air Filter – Chevrolet Colorado, Tr...",
    price: 299000,
    oldPrice: 329000,
    discountPercent: 10,
    badgeText: "Giá cực sốc",
    onBuy: () => alert("Mua ngay!"),
  },
  {
    imageUrl: "/product5.png",
    title: "Lọc gió động cơ Air Filter – Chevrolet Colorado, Tr...",
    price: 299000,
    oldPrice: 329000,
    discountPercent: 10,
    badgeText: "Giá cực sốc",
    onBuy: () => alert("Mua ngay!"),
  },
  {
    imageUrl: "/product1.png",
    title: "Lọc gió động cơ Air Filter – Chevrolet Colorado, Tr...",
    price: 299000,
    oldPrice: 329000,
    discountPercent: 10,
    badgeText: "Giá cực sốc",
    onBuy: () => alert("Mua ngay!"),
  },
  // ...thêm các sản phẩm khác
];

export default function ProductList() {
  return (
    <>
      <div>
        <Image
          width={1400}
          height={768}
          className="w-full"
          src="/banner.svg"
          alt={"Banner"}
        />
        <div className="bg-brand-600 p-12 rounded-b-xl">
          <ProductCarousel products={products} />
        </div>
      </div>
    </>
  );
}
