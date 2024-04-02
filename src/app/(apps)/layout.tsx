import React from "react";
import { AppLayout } from "@/layouts";

type LayoutProps = {
  children: React.ReactNode;
};

export default async function Layout({ children }: Readonly<LayoutProps>) {
  return <AppLayout>{children}</AppLayout>;
}
