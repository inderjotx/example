"use client";

import { ScrollArea } from "./ui/scroll-area";
import { Combobox } from "@/components/ui/combobox";
import {
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenu,
  useSidebar,
} from "@/components/ui/sidebar";
import * as React from "react";
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Framer,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavProjects } from "@/components/nav-projects";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
  SidebarTrigger,
} from "@/components/ui/sidebar";

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Playground",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "History",
          url: "#",
        },
        {
          title: "Starred",
          url: "#",
        },
        {
          title: "Settings",
          url: "#",
        },
      ],
    },
    {
      title: "Models",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "Genesis",
          url: "#",
        },
        {
          title: "Explorer",
          url: "#",
        },
        {
          title: "Quantum",
          url: "#",
        },
      ],
    },
    {
      title: "Documentation",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "Introduction",
          url: "#",
        },
        {
          title: "Get Started",
          url: "#",
        },
        {
          title: "Tutorials",
          url: "#",
        },
        {
          title: "Changelog",
          url: "#",
        },
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Team",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
        {
          title: "Limits",
          url: "#",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem className="pl-0.5">
            <SidebarMenuButton>
              <Framer size={24} /> Dashboard
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent className="">
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}

export function EmptySidebar() {
  return (
    <div className="h-[calc(100vh-4rem)] w-[16rem] border p-2 flex flex-col gap-2">
      <Combobox />
      <SearchInput />
      <SearchAccordion />
    </div>
  );
}

import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export function SearchInput() {
  return (
    <div className="relative">
      <Input className="peer  ps-9" placeholder="Search..." />
      <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-muted-foreground/80 peer-disabled:opacity-50">
        <Search size={16} strokeWidth={2} />
      </div>
    </div>
  );
}

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

export function SearchAccordion() {
  const items = [
    "BSE Connections",
    "BSE Custom Messages ",
    "BSE Requests",
    "BSE Response ",
    "BSE Broadcasts",
  ];
  return (
    <ScrollArea className="h-screen px-3 border-l-0">
      <Accordion type="multiple" className="w-full">
        {items.map((item) => (
          <AccordionItem
            key={item}
            value={item}
            className="data-[state=open]:border-none"
          >
            <AccordionTrigger className="hover:no-underline py-2 text-sm ">
              {item}
            </AccordionTrigger>
            <AccordionContent className="flex flex-col  text-sm ">
              {[1, 2, 3, 4, 5].map((item) => (
                <div
                  key={item}
                  className={cn(
                    "w-full flex h-8  px-2 border-b  items-center  justify-start hover:bg-muted",
                    item === 1 && "bg-muted"
                  )}
                >
                  Test {item}
                </div>
              ))}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </ScrollArea>
  );
}
