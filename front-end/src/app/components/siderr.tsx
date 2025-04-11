"use client"
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarProvider } from '@/components/ui/sidebar'
import { Calendar01Icon, Home01Icon, InboxDownloadIcon, Search02Icon, Settings01Icon } from 'hugeicons-react'
import React from 'react'

const Sideeer = () => {
    const items = [
        {
            title: "Home",
            url: "#",
            icon: Home01Icon,
        },
        {
            title: "Inbox",
            url: "#",
            icon: InboxDownloadIcon,
        },
        {
            title: "Calendar",
            url: "#",
            icon: Calendar01Icon,
        },
        {
            title: "Search",
            url: "#",
            icon: Search02Icon,
        },
        {
            title: "Settings",
            url: "#",
            icon: Settings01Icon,
        },
    ]

  return (
    // <
    <SidebarProvider>

    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
    </SidebarProvider>
  )
}

export default Sideeer
