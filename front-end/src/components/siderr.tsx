"use client";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@/components/ui/sidebar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  ChevronDown,
  Code,
  Database,
  FileText,
  Globe,
  Layers,
  Settings,
  Shield,
} from "lucide-react";
import React, { useState } from "react";

const DocsSidebar = () => {
  const [openSections, setOpenSections] = useState({
    gettingStarted: true,
    routes: false,
    middleware: false,
    database: false,
    deployment: false,
  });

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const docsSections = [
    {
      title: "Getting Started",
      key: "gettingStarted",
      items: [
        { title: "Introduction", url: "#introduction", icon: FileText },
        { title: "Setup Express", url: "#setup-express", icon: Settings },
        { title: "First API Endpoint", url: "#first-endpoint", icon: Code },
      ],
    },
    {
      title: "Routes",
      key: "routes",
      items: [
        { title: "Basic Routing", url: "#basic-routing", icon: Globe },
        { title: "Route Parameters", url: "#route-params", icon: Code },
        { title: "Query Strings", url: "#query-strings", icon: Code },
      ],
    },
    {
      title: "Middleware",
      key: "middleware",
      items: [
        { title: "What is Middleware?", url: "#middleware-intro", icon: Layers },
        { title: "Custom Middleware", url: "#custom-middleware", icon: Code },
        { title: "Error Handling", url: "#error-handling", icon: Shield },
      ],
    },
    {
      title: "Database Integration",
      key: "database",
      items: [
        { title: "Connect to MongoDB", url: "#mongodb", icon: Database },
        { title: "CRUD Operations", url: "#crud", icon: Code },
        { title: "Using an ORM", url: "#orm", icon: Layers },
      ],
    },
    {
      title: "Deployment",
      key: "deployment",
      items: [
        { title: "Environment Setup", url: "#env-setup", icon: Settings },
        { title: "Deploy to Vercel", url: "#vercel", icon: Globe },
        { title: "Scaling Tips", url: "#scaling", icon: Layers },
      ],
    },
  ];

  return (
    <SidebarProvider>
      <Sidebar
        className="
          bg-transparent
          absolute
          left-0
          h-full
        "
      >
        <SidebarContent className="p-2">
          <SidebarGroup>
            <SidebarGroupLabel className="text-lg font-semibold mb-5 text-gray-800">
              Express.js API Docs
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {docsSections.map((section) => (
                  <Collapsible
                    key={section.key}
                    open={openSections[section.key]}
                    onOpenChange={() => toggleSection(section.key)}
                  >
                    <CollapsibleTrigger asChild>
                      <SidebarMenuButton
                        className="
                          flex
                          items-center
                          justify-between
                          w-full
                          font-semibold
                          text-gray-700
                          hover:bg-indigo-100
                          hover:text-indigo-800
                          transition-colors
                          duration-200
                          rounded-md
                        "
                      >
                        <span>{section.title}</span>
                        <ChevronDown
                          className={`h-4 w-4 transition-transform ${
                            openSections[section.key] ? "rotate-180" : ""
                          }`}
                        />
                      </SidebarMenuButton>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <SidebarMenu>
                        {section.items.map((item) => (
                          <SidebarMenuItem key={item.title}>
                            <SidebarMenuButton
                              asChild
                              className="
                                flex
                                items-center
                                gap-2
                                text-gray-600
                                hover:bg-indigo-50
                                hover:text-indigo-700
                                active:bg-indigo-200
                                active:text-indigo-900
                                transition-colors
                                duration-200
                                rounded-md
                                pl-6
                              "
                            >
                              <a href={item.url}>
                                <item.icon className="h-4 w-4" />
                                <span>{item.title}</span>
                              </a>
                            </SidebarMenuButton>
                          </SidebarMenuItem>
                        ))}
                      </SidebarMenu>
                    </CollapsibleContent>
                  </Collapsible>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    </SidebarProvider>
  );
};

export default DocsSidebar;