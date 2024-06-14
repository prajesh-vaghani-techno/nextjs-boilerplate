import Dashboard from "@/components/Dashboard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Next.js Biolerplate",
  description: "This is Next.js Home for Dashboard",
};

const page = () => {
  return <Dashboard />;
};

export default page;
