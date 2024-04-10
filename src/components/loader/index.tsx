import clsx from "clsx";
import { LoaderCircle } from "lucide-react";
import React from "react";

import styles from "./index.module.scss";

export const Loader = React.forwardRef<
  React.ElementRef<typeof LoaderCircle>,
  React.ComponentProps<typeof LoaderCircle>
>(({ className, ...props }, ref) => {
  return (
    <LoaderCircle
      {...props}
      ref={ref}
      aria-busy="true"
      aria-label="Loading"
      aria-live="polite"
      className={clsx(styles.loader, className)}
    />
  );
});

Loader.displayName = "Loader";
