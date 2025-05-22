import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";

import { usePathname } from "next/navigation";

const getLabelFromPathname = (pathname: string) => {
  const lastPathname = pathname.split("/").pop();
  switch (lastPathname) {
    case "main":
      return "Dashboard";
    default:
      return "lastPathname";
  }
};

export default function Header() {
  const pathname = usePathname();

  return (
    <header>
      <SidebarTrigger />
      <Separator />
      <div className="h2 mt-2">{getLabelFromPathname(pathname)}</div>
    </header>
  );
}
