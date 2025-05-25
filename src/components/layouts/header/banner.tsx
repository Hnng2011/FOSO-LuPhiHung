import Image from "next/image";
import Search from "../search";
import { Button } from "../button";
import Icon from "../icon";

export default function Banner() {
  return (
    <div className="container flex gap-12 items-center">
      <Image width={250} height={111} src={"/logo.svg"} alt={"logo-brand"} />
      <div className="h-full flex items-center flex-1">
        <Search />
      </div>
      <div className="flex items-center gap-12">
        <Button
          variant="ghost"
          trailing={
            <Icon icon="emojione:flag-for-vietnam" width={36} height={36} />
          }
        >
          VI
        </Button>
        <Button
          variant="ghost"
          trailing={
            <Icon
              icon="solar:cart-bold"
              width={36}
              height={36}
              className="text-brand-500"
            />
          }
        >
          Giỏ hàng
        </Button>
        <Button
          variant="ghost"
          trailing={
            <Icon
              icon="solar:user-circle-bold"
              width={36}
              height={36}
              className="text-brand-500"
            />
          }
        >
          Tài khoản
        </Button>
      </div>
    </div>
  );
}
