"use client";

import React from "react";
import { FallbackProps } from "react-error-boundary";
import Layout from "@/app/(apps)/layout";
import { ErrorPage } from "@/components/error";

export default function GlobalError(props: FallbackProps) {
  return (
    <Layout>
      <ErrorPage {...props} />
    </Layout>
  );
}
