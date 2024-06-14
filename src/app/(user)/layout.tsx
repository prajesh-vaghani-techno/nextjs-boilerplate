"use client";
import DefaultLayout from "@/components/Layout/DefaultLayout";
import Loader from "@/components/Common/Loader";
import { useEffect, useState } from "react";

export default function UserLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <>
      <DefaultLayout>{loading ? <Loader /> : children}</DefaultLayout>
    </>
  );
}
