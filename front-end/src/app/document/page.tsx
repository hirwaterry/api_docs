"use client";
import React from "react";
import DocsSidebar from "../../components/siderr"; // Your custom DocsSidebar
import CodeBlockDemo from "@/components/Code";

// Mock BreadcrumbWithDropdown (replace with your actual implementation)
const BreadcrumbWithDropdown = () => (
  <nav className="mb-8">
    <ol className="flex items-center space-x-3 text-sm text-gray-500">
      <li>
        <a href="#" className="hover:text-indigo-600 transition-colors">
          Docs
        </a>
      </li>
      <li>
        <span>/</span>
      </li>
      <li>
        <a href="#" className="hover:text-indigo-600 transition-colors">
          Components
        </a>
      </li>
      <li>
        <span>/</span>
      </li>
      <li className="text-gray-700">Codes</li>
    </ol>
  </nav>
);

const Page = () => {
  return (
    <div className="bg-gray-50">
      <div className="w-full m-auto h-20 bg-black justify-center">
        {/* Navbar goes here  */}
      </div>
      <div className="flex justify-center w-full min-h-screen">
        <div
          className="
            relative
            flex
            w-[80%]
            mx-20
            min-h-screen
            overflow-hidden
            bg-gray-50
            rounded-lg
          "
        >
          <div className="w-20 ">
            <DocsSidebar />
          </div>
          <div className="ml-[200px] mt-5">
            <BreadcrumbWithDropdown />
            {/* Main content */}
            <div className="max-w-3xl">
              <h1 className="text-3xl font-bold text-gray-900 mb-6">
                Codes Component
              </h1>
              <p className="text-gray-600 mb-6 leading-relaxed">
                The Express.js framework is a powerful tool for building web applications and APIs. It simplifies the process of handling HTTP requests, routing, and middleware integration, allowing developers to create robust server-side applications with ease.
              </p>
              <div className="bg-gray-50 rounded-lg border border-gray-100 mb-8">
                <h2 className="text-xl font-semibold text-gray-800 my-4">
                  Example
                </h2>
                <CodeBlockDemo/>
                
              </div>
              <div className="prose prose-gray max-w-none">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Props</h2>
                <table className="w-full text-left border border-gray-200 rounded-lg">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="p-4 border-b font-medium text-gray-700">
                        Prop
                      </th>
                      <th className="p-4 border-b font-medium text-gray-700">
                        Type
                      </th>
                      <th className="p-4 border-b font-medium text-gray-700">
                        Description
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-4 border-b text-gray-600">variant</td>
                      <td className="p-4 border-b text-gray-600">string</td>
                      <td className="p-4 border-b text-gray-600">
                        Defines the button style: primary, secondary, outline
                      </td>
                    </tr>
                    <tr>
                      <td className="p-4 border-b text-gray-600">size</td>
                      <td className="p-4 border-b text-gray-600">string</td>
                      <td className="p-4 border-b text-gray-600">
                        Sets the button size: sm, md, lg
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;