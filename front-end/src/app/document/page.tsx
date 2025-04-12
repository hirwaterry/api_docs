"use client";
import React from "react";
import DocsSidebar from "../../components/siderr";

const Page = () => {
  return (
    <div className="flex justify-center w-full min-h-screen ">
      <div
        className="
          relative
          flex
          w-[80%]
          border-3
          mx-20        
          min-h-screen
          overflow-hidden
        "
      >
        <DocsSidebar />
        <div className="flex-1 p-8">
          {/* Placeholder for main content */}
          <h1 className="text-white">Main Content Area</h1>
        </div>
      </div>
    </div>
  );
};

export default Page;