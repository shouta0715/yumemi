import clsx from "clsx";
import React from "react";
import styles from "./index.module.scss";
import { Image } from "@/components/ui/image";

type LogoProps = Omit<React.ComponentProps<typeof Image>, "src" | "alt">;

export function Logo({ className, ...props }: LogoProps) {
  return (
    <Image
      alt="Poplus"
      src="/logo.svg"
      {...props}
      className={clsx(styles.logo, className)}
    />
  );
}
