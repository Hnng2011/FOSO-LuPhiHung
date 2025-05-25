import { APP_CONFIG } from "@/config/app";
import { Icon } from "@iconify/react";
import Link from "next/link";

export default function Header() {
  return (
    <header
      style={{
        background: "linear-gradient(to right, #0D57C6, #37CFFF, #0F5ED6)",
      }}
    >
      <nav className="h-7 container mx-auto flex justify-between">
        <div className="flex gap-2 items-center">
          <Icon
            icon="solar:sale-bold"
            width="16"
            height="16"
            className="text-white"
          />
          <div className="text-white  inline-flex items-baseline text-xs">
            Nhập mã
            <span className="text-yellow-primary text-sm mx-1">
              {APP_CONFIG.header.code.title}
            </span>
            giảm ngay {APP_CONFIG.header.code.discount} cho lần đầu mua hàng
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="flex gap-2 items-center">
            <Icon
              icon="solar:phone-rounded-bold"
              width="16"
              height="16"
              className="text-white"
            />
            <span className="text-white inline-flex items-baseline text-xs">
              Hotline:
              <span className="text-yellow-primary text-sm ml-1">
                {APP_CONFIG.header.hotline}
              </span>
            </span>
          </div>

          <div className="flex gap-2 items-center">
            <Icon
              icon="solar:smartphone-bold"
              width="16"
              height="16"
              className="text-white"
            />
            <Link
              href={APP_CONFIG.header.link}
              className="text-white  inline-flex items-center text-xs"
            >
              Tải ứng dụng
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
