import { Icon } from "@iconify/react";
import { Button } from "../button";
import { NavMenu } from "../navigation-menu";

export default function MenuBar() {
  return (
    <div className="flex justify-between container">
      <NavMenu
        label="Danh mục sản phẩm"
        items={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          { label: "About", href: "/about" },
        ]}
      />

      <div className="flex gap-12">
        <Button
          variant="ghost"
          trailing={
            <Icon
              icon="solar:clock-circle-bold"
              width={20}
              height={20}
              className="text-brand-500"
            />
          }
        >
          Hỗ trợ 24/7
        </Button>
        <Button
          variant="ghost"
          trailing={
            <Icon
              icon="solar:hand-money-bold"
              width={20}
              height={20}
              className="text-brand-500"
            />
          }
        >
          Miễn phí vận chuyển
        </Button>
        <Button
          variant="ghost"
          trailing={
            <Icon
              icon="mdi:truck"
              width={20}
              height={20}
              className="text-brand-500"
            />
          }
        >
          Giao hàng nhanh 2h
        </Button>
        <Button
          variant="ghost"
          trailing={
            <Icon
              icon="solar:refresh-circle-bold"
              width={20}
              height={20}
              className="text-brand-500"
            />
          }
        >
          30 ngày đổi trả
        </Button>
      </div>
    </div>
  );
}
