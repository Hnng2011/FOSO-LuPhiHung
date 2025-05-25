import { Icon as IconifyIcon, IconProps } from "@iconify/react";

export default function Icon({ icon, width, height, ...rest }: IconProps) {
  return (
    <div style={{ height, width }}>
      <IconifyIcon icon={icon} width={width} height={height} {...rest} />
    </div>
  );
}
