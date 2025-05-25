import Banner from "@/components/layouts/product-list/banner";
import Header from "@/components/layouts/product-list/header";
import MenuBar from "@/components/layouts/product-list/menu-bar";

export default function ProductListLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-3">
      <Header />
      <Banner />
      <MenuBar />
      {children}
    </div>
  );
}
