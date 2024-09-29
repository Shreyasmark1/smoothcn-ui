import { MainNavItem, SidebarNavItem } from "@/types/nav"

interface DocsConfig {
  mainNav: MainNavItem[]
  sidebarNav: SidebarNavItem[]
}

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: "Documentation",
      href: "/docs",
    },
    {
      title: "Components",
      href: "/docs/components/accordion",
    },
    {
      title: "Themes",
      href: "/themes",
    },
    {
      title: "Examples",
      href: "/examples",
    },
    {
      title: "Blocks",
      href: "/blocks",
    },
  ],
  sidebarNav: [
    {
      title: "Getting Started",
      items: [
        {
          title: "Introduction",
          href: "/docs",
          items: [],
        },
        {
          title: "Installation",
          href: "/docs/installation",
          items: [],
        },
        {
          title: "Changelog",
          href: "/docs/changelog",
          items: [],
          disabled: true
        },
      ],
    },
    {
      title: "Components",
      items: [
        {
          title: "Accordion",
          href: "/docs/components/accordion",
          items: [],
          label: "New"
        },
        {
          title: "Alert",
          href: "/docs/components/alert",
          items: [],
          disabled: true,
        },
        {
          title: "Alert Dialog",
          href: "/docs/components/alert-dialog",
          items: [],
          disabled: true,
        },
        {
          title: "Aspect Ratio",
          href: "/docs/components/aspect-ratio",
          items: [],
          disabled: true,
        },
        {
          title: "Avatar",
          href: "/docs/components/avatar",
          items: [],
          disabled: true,
        },
        {
          title: "Badge",
          href: "/docs/components/badge",
          items: [],
          disabled: true,
        },
        {
          title: "Breadcrumb",
          href: "/docs/components/breadcrumb",
          items: [],
          disabled: true,
        },
        {
          title: "Button",
          href: "/docs/components/button",
          items: [],
          label: "New"
        },
        {
          title: "Calendar",
          href: "/docs/components/calendar",
          items: [],
          disabled: true,
        },
        {
          title: "Card",
          href: "/docs/components/card",
          items: [],
          disabled: true,
        },
        {
          title: "Carousel",
          href: "/docs/components/carousel",
          items: [],
          disabled: true,
        },
        {
          title: "Checkbox",
          href: "/docs/components/checkbox",
          items: [],
          disabled: true,
        },
        {
          title: "Collapsible",
          href: "/docs/components/collapsible",
          items: [],
          disabled: true,
        },
        {
          title: "Combobox",
          href: "/docs/components/combobox",
          items: [],
          disabled: true,
        },
        {
          title: "Command",
          href: "/docs/components/command",
          items: [],
          disabled: true,
        },
        {
          title: "Context Menu",
          href: "/docs/components/context-menu",
          items: [],
          disabled: true,
        },
        {
          title: "Data Table",
          href: "/docs/components/data-table",
          items: [],
          disabled: true,
        },
        {
          title: "Date Picker",
          href: "/docs/components/date-picker",
          items: [],
          disabled: true,
        },
        {
          title: "Dialog",
          href: "/docs/components/dialog",
          items: [],
          disabled: true,
        },
        {
          title: "Drawer",
          href: "/docs/components/drawer",
          items: [],
          disabled: true,
        },
        {
          title: "Dropdown Menu",
          href: "/docs/components/dropdown-menu",
          items: [],
          disabled: true,
        },
        {
          title: "Form",
          href: "/docs/components/form",
          items: [],
          disabled: true,
        },
        {
          title: "Hover Card",
          href: "/docs/components/hover-card",
          items: [],
          disabled: true,
        },
        {
          title: "Input",
          href: "/docs/components/input",
          items: [],
          disabled: true,
        },
        {
          title: "Input OTP",
          href: "/docs/components/input-otp",
          items: [],
          label: "New",
          disabled: true,
        },
        {
          title: "Label",
          href: "/docs/components/label",
          items: [],
          disabled: true,
        },
        {
          title: "Menubar",
          href: "/docs/components/menubar",
          items: [],
          disabled: true,
        },
        {
          title: "Navigation Menu",
          href: "/docs/components/navigation-menu",
          items: [],
          disabled: true,
        },
        {
          title: "Pagination",
          href: "/docs/components/pagination",
          items: [],
          disabled: true,
        },
        {
          title: "Popover",
          href: "/docs/components/popover",
          items: [],
          disabled: true,
        },
        {
          title: "Progress",
          href: "/docs/components/progress",
          items: [],
          disabled: true,
        },
        {
          title: "Radio Group",
          href: "/docs/components/radio-group",
          items: [],
          disabled: true,
        },
        {
          title: "Resizable",
          href: "/docs/components/resizable",
          items: [],
          disabled: true,
        },
        {
          title: "Scroll Area",
          href: "/docs/components/scroll-area",
          items: [],
          disabled: true,
        },
        {
          title: "Select",
          href: "/docs/components/select",
          items: [],
          disabled: true,
        },
        {
          title: "Separator",
          href: "/docs/components/separator",
          items: [],
          disabled: true,
        },
        {
          title: "Sheet",
          href: "/docs/components/sheet",
          items: [],
          disabled: true,
        },
        {
          title: "Skeleton",
          href: "/docs/components/skeleton",
          items: [],
          disabled: true,
        },
        {
          title: "Slider",
          href: "/docs/components/slider",
          items: [],
          disabled: true,
        },
        {
          title: "Sonner",
          href: "/docs/components/sonner",
          items: [],
          disabled: true,
        },
        {
          title: "Switch",
          href: "/docs/components/switch",
          items: [],
          disabled: true,
        },
        {
          title: "Table",
          href: "/docs/components/table",
          items: [],
          disabled: true,
        },
        {
          title: "Tabs",
          href: "/docs/components/tabs",
          items: [],
          disabled: true,
        },
        {
          title: "Textarea",
          href: "/docs/components/textarea",
          items: [],
          disabled: true,
        },
        {
          title: "Toast",
          href: "/docs/components/toast",
          items: [],
          disabled: true,
        },
        {
          title: "Toggle",
          href: "/docs/components/toggle",
          items: [],
          disabled: true,
        },
        {
          title: "Toggle Group",
          href: "/docs/components/toggle-group",
          items: [],
          disabled: true,
        },
        {
          title: "Tooltip",
          href: "/docs/components/tooltip",
          items: [],
          disabled: true,
        },
      ],
    },
  ],
}