import React from "react";
import XNavbar from "../components/XNavbar";

export default function Layout({ children }) {
  return (
    <>
      <XNavbar></XNavbar> 
      <main className="container">
        <div className="p-4 bg-light rounded">{children}</div>
      </main>
    </>
  );
}
