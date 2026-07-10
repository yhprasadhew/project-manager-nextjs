import React from "react";
import Sidebar from "./(components)/sidebar";
import Navbar from "./(components)/navbar";

const DashboardWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="flex min-h-screen w-full bg-slate-50 text-gray-600">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex flex-1 flex-col md:pl-64">
        {/* Navbar */}
        <Navbar />

        <div className="p-6">{children}</div>
      </main>
    </div>
  );
};

export default DashboardWrapper;