import { callIcon, arrowDownIcon } from "../assets/svgicons";

export interface TabConfig {
  id: string;
  label: string;
  themeColor: string;
  themeSecondaryColor?: string;
  menuItems: string[];
  dropdown: Record<string, DropdownSection[]>;
  svg: string;
}

export interface DropdownSection {
  title: string;
  items: string[];
}

export const tabs: TabConfig[] = [
  {
    id: "businesses",
    label: "Businesses & Sole traders",
    themeColor: "#FF522D",
    menuItems: ["Coverages", "Company", "Resources"],
    dropdown: {
      Coverages: [
        {
          title: "INDUSTRY",
          items: [
            "Public Liability",
            "Professional Indemnity",
            "Business Insurance",
            "Public Liability",
            "Professional Indemnity",
            "Business Insurance",
          ],
        },
        {
          title: "COVERS",
          items: [
            "Healthcare Professionals Insurance",
            "Professional Indemnity Insurance",
            "Medical Malpractice Insurance",
            "Products Liability Insurance",
            "Professional Indemnity",
            "Business Insurance",
            "Public Liability",
            "Professional Indemnity",
            "Business Insurance",
          ],
        },
        {
          title: "INDUSTRIES",
          items: [
            "Cyber Liability",
            "Portable Equipment",
            "Tax Audit",
            "Cyber Liability",
            "Portable Equipment",
            "Tax Audit",
          ],
        },
        {
          title: "INDUSTRIES",
          items: [
            "Cyber Liability",
            "Portable Equipment",
            "Tax Audit",
            "Cyber Liability",
            "Portable Equipment",
            "Tax Audit",
          ],
        },
      ],
      Company: [
        { title: "ABOUT", items: ["Our Mission", "Careers", "Leadership"] },
        { title: "TOOLS", items: ["Blog", "Guides", "Case Studies"] },
        { title: "ABOUT", items: ["Our Mission", "Careers", "Leadership"] },
        { title: "TOOLS", items: ["Blog", "Guides", "Case Studies"] },
        { title: "ABOUT", items: ["Our Mission", "Careers", "Leadership"] },
      ],
      Resources: [
        { title: "ABOUT", items: ["Our Mission", "Careers", "Leadership"] },
        { title: "TOOLS", items: ["Blog", "Guides", "Case Studies"] },
        { title: "ABOUT", items: ["Our Mission", "Careers", "Leadership"] },
        { title: "TOOLS", items: ["Blog", "Guides", "Case Studies"] },
      ],
    },
    svg: arrowDownIcon,
  },
  {
    id: "tech",
    label: "Tech Startups & Enterprises",
    themeColor: "#005DFF",
    menuItems: ["Coverages", "Company", "Resources", "Solutions"],
    dropdown: {
      Coverages: [
        { title: "INDUSTRY", items: ["Public Liability"] },
        { title: "COVERS", items: ["Healthcare Professionals Insurance"] },
        { title: "INDUSTRIES", items: ["Cyber Liability"] },
        { title: "INDUSTRIES", items: ["Cyber Liability"] },
      ],
      Company: [
        { title: "ABOUT", items: ["Our Mission", "Careers", "Leadership"] },
        { title: "ABOUT", items: ["Our Mission", "Careers", "Leadership"] },
        { title: "ABOUT", items: ["Our Mission", "Careers", "Leadership"] },
        { title: "ABOUT", items: ["Our Mission", "Careers", "Leadership"] },
      ],
      Resources: [
        { title: "TOOLS", items: ["Blog", "Guides", "Case Studies"] },
        { title: "TOOLS", items: ["Blog", "Guides", "Case Studies"] },
        { title: "TOOLS", items: ["Blog", "Guides", "Case Studies"] },
        { title: "ABOUT", items: ["Our Mission", "Careers", "Leadership"] },
      ],
      Solutions: [
        { title: "INDUSTRY", items: ["Public Liability"] },
        { title: "COVERS", items: ["Healthcare Professionals Insurance"] },
        { title: "INDUSTRIES", items: ["Cyber Liability"] },
        { title: "INDUSTRIES", items: ["Cyber Liability"] },
      ],
    },
    svg: arrowDownIcon,
  },
  {
    id: "motor",
    label: "Motor & Fleet",
    themeColor: "#D5E525",
    themeSecondaryColor: "#3B4125",
    menuItems: ["Coverages", "Company", "Resources"],
    dropdown: {
      Coverages: [
        {
          title: "INDUSTRY",
          items: [
            "Public Liability",
            "Professional Indemnity",
            "Business Insurance",
            "Public Liability",
            "Professional Indemnity",
            "Business Insurance",
          ],
        },
        {
          title: "COVERS",
          items: [
            "Healthcare Professionals Insurance",
            "Professional Indemnity Insurance",
            "Medical Malpractice Insurance",
            "Products Liability Insurance",
            "Professional Indemnity",
            "Business Insurance",
            "Public Liability",
            "Professional Indemnity",
            "Business Insurance",
          ],
        },
        {
          title: "INDUSTRIES",
          items: [
            "Cyber Liability",
            "Portable Equipment",
            "Tax Audit",
            "Cyber Liability",
            "Portable Equipment",
            "Tax Audit",
          ],
        },
        {
          title: "INDUSTRIES",
          items: [
            "Cyber Liability",
            "Portable Equipment",
            "Tax Audit",
            "Cyber Liability",
            "Portable Equipment",
            "Tax Audit",
          ],
        },
      ],
      Company: [
        { title: "ABOUT", items: ["Our Mission", "Careers", "Leadership"] },
        { title: "TOOLS", items: ["Blog", "Guides", "Case Studies"] },
        { title: "ABOUT", items: ["Our Mission", "Careers", "Leadership"] },
        { title: "TOOLS", items: ["Blog", "Guides", "Case Studies"] },
        { title: "ABOUT", items: ["Our Mission", "Careers", "Leadership"] },
      ],
      Resources: [
        { title: "ABOUT", items: ["Our Mission", "Careers", "Leadership"] },
        { title: "TOOLS", items: ["Blog", "Guides", "Case Studies"] },
        { title: "ABOUT", items: ["Our Mission", "Careers", "Leadership"] },
        { title: "TOOLS", items: ["Blog", "Guides", "Case Studies"] },
      ],
    },
    svg: arrowDownIcon,
  },
];

export const branding = {
  companyName: "upcover",
  contactRegion: [
    { code: "AU", label: "AU", url: "#" },
    { code: "NZ", label: "NZ", url: "#" },
  ],
  contactPhone: "1300 872 683",
  svg: callIcon,
};
export const defaultTab = tabs[0];
