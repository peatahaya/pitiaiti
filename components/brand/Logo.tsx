import Image from "next/image";
import logoSrc from "@/public/logos/pitiaiti-logo.png";

type Props = {
  className?: string;
};

export function Logo({ className = "" }: Props) {
  return (
    <Image
      src={logoSrc}
      alt="PITIAITI"
      priority
      className={className}
    />
  );
}
