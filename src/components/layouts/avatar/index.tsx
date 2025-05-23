import {
  Avatar as AV,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";

export default function Avatar({
  src,
  className,
}: {
  src?: string;
  className?: string;
}) {
  return (
    <AV className={className}>
      <AvatarImage src={src} />
      <AvatarFallback>CN</AvatarFallback>
    </AV>
  );
}
