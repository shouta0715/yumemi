import React from "react";
import { AppLayout } from "@/app/layouts";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <AppLayout>{children}</AppLayout>;
}
