import React from "react";
import styles from "./index.module.scss";
import Layout from "@/app/(apps)/layout";

export function NotFoundPage() {
  return (
    <Layout>
      <div className={styles["not-found"]}>
        <p className={styles["not-found__code"]}>404</p>
        <h1 className={styles["not-found__title"]}>Page not found</h1>
        <p className={styles["not-found__description"]}>
          お探しのページが見つかりませんでした。
        </p>
        <div className={styles["not-found__link__container"]}>
          <a className={styles["not-found__link"]} href="/">
            ホームへ戻る
          </a>
        </div>
      </div>
    </Layout>
  );
}
