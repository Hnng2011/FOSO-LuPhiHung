import { Input } from "@/components/ui/input";
import { Button } from "../button";
import Icon from "../icon";

export default function Search() {
  return (
    <div className="pl-6 pr-2 flex items-center h-16 border-2 rounded-full border-brand-500 w-full justify-between">
      <Input
        className="h-7 p-0 border-0 shadow-none outline-none focus-visible:ring-0 mr-1"
        placeholder="Tìm sản phẩm"
      />
      <div className="flex gap-[28px] items-center">
        <Button
          variant="ghost"
          trailing={<Icon icon="solar:camera-outline" width={28} height={28} />}
        />

        <Button className="rounded-full">
          <Icon icon="mynaui:search" width={28} height={28} />
        </Button>
      </div>
    </div>
  );
}
