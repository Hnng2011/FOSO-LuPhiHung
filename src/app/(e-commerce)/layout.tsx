import BreadCrumb from "@/components/layouts/breadcrumb";
import Banner from "@/components/layouts/header/banner";
import Header from "@/components/layouts/header/header";
import MenuBar from "@/components/layouts/header/menu-bar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-grey-200">
      <div className="space-y-3 bg-white">
        <Header />
        <Banner />
        <MenuBar />
      </div>

      <div className="container py-6 space-y-8">
        <BreadCrumb />
        {children}
      </div>
    </div>
  );
}
