// TODO: if create other test files, remove this file
import React, { forwardRef } from "react";
import styles from "./index.module.scss";

export const Example = forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>((props, ref) => {
  return (
    <button ref={ref} className={styles.button} type="button" {...props} />
  );
});

Example.displayName = "Example";
