import React from "react";
import Sidebar from "./(components)/sidebar";
import Navbar from "./(components)/navbar";

const DashboardWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="min-h-screen bg-slate-50 text-gray-600">
      <Sidebar />

      <main className="flex min-h-screen flex-col md:ml-64">
        <Navbar />

        <div className="p-6">
          {children}
        </div>
      </main>
    </div>
  );
};

export default DashboardWrapper;