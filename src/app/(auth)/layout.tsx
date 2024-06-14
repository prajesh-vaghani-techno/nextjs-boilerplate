import React from "react";

const AuthLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="bg-slate-700 h-screen flex items-center justify-center">
      {children}
    </div>
  );
};

export default AuthLayout;
