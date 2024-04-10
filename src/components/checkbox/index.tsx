import clsx from "clsx";
import React from "react";
import styles from "./index.module.scss";

type CheckboxProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, "type">;

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        type="checkbox"
        {...props}
        ref={ref}
        className={clsx(styles.checkbox, className)}
      />
    );
  }
);

Checkbox.displayName = "Checkbox";
