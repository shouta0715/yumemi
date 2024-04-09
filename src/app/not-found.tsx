import { Metadata } from "next";
import React from "react";
import { NotFoundPage } from "@/layouts/not-found";
import { basicMetadata } from "@/libs/meta";

export const metadata: Metadata = {
  ...basicMetadata,
  title: "Not Found",
};

export default function NotFound() {
  return <NotFoundPage />;
}
