"use client";

import React from "react";
import { FallbackProps } from "react-error-boundary";
import styles from "./index.module.scss";
import { errorMessages, getErrorCodeFromError } from "@/components/error/utils";

export function ErrorPage({ error, resetErrorBoundary }: FallbackProps) {
  const errorCode = getErrorCodeFromError(error);

  return (
    <div className={styles.error}>
      <p className={styles.error__code}>
        {errorCode === 0 ? "Error" : errorCode}
      </p>
      <h2 className={styles.error__title}>{errorMessages[errorCode].title}</h2>
      <p className={styles.error__description}>
        {errorMessages[errorCode].message}
      </p>
      <div className={styles.error__button__container}>
        <button
          className={styles.error__button}
          onClick={resetErrorBoundary}
          type="button"
        >
          再度読み込む
        </button>
      </div>
    </div>
  );
}
