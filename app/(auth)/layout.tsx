import Image from "next/image";
import React, { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="auth-container">
      <section className="auth-form">
        <div className="auth-box">
          <div className="flex flex-row gap-3">
            <Image src={"/icons/logo.svg"} alt="logo" width={37} height={37} />
            <h1 className="text-2xl font-semibold text-white">BookWise</h1>
          </div>
          {children}
        </div>
      </section>
      <section className="auth-illustration">
        <Image
          src={"/images/auth-illustration.png"}
          className="size-full object-cover"
          alt="auth-illustration"
          width={1000}
          height={1000}
        />
      </section>
    </main>
  );
};

export default Layout;
