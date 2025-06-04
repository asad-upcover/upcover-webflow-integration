import { callIcon, arrowDownIcon } from "../assets/svgicons";

export interface TabConfig {
  id: string;
  label: string;
  themeColor: string;
  themeSecondaryColor?: string;
  buttonColor?: string; // Optional, if you want to style buttons differently
  menuItems: string[];
  dropdown: Record<string, DropdownSection[]>;
  svg: string;
}

export interface DropdownSection {
  title?: string;
  items?: string[];
  type?: "list" | "box";
  boxContent?: {
    left: {
      imgSrc: string;
      heading: string;
      text: string;
      primaryButton: string
      secondaryButton?: string;
    };
    right?: {
      heading?: string;
      text?: string;
      button?: string;
    };
  };
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
        {
          type: "box",
          boxContent: {
            left: {
              imgSrc: "https://storage.googleapis.com/upcover-webflow-integration/assets/images/2a1339faabda847f116061ee305805ee8c3cd7bf.png",
              heading: "COMPLEX RISK",
              text: "Our tech-specialist brokerage team provide custom cover for high-growth companies with complex risks, web3, startups and scaleups in any stage of fundraising.",
              primaryButton: "TALK TO A SPECIALIST ",
            }
          }
        }
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
    buttonColor: "#CADDFF",
    menuItems: ["Coverages", "Company", "Resources", "Solutions"],
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
            "Products Liability Insurance",
            "Professional Indemnity",
          ],
        },

        {
          type: "box",
          boxContent: {
            left: {
              imgSrc: "https://storage.googleapis.com/upcover-webflow-integration/assets/images/bfb3d41184f6b9d53e820156bae9107d7cbd2da3.png",
              heading: "NOT SURE?",
              text: "Talk to our small business insurance specialists to find a tailored cover that works for you and your unique business needs. ",
              primaryButton: "CHAT WITH A SPECIALIST",
              secondaryButton: "CALL 1300 872 683"
            },
            right: {
              heading: "GET INSTANT QUOTE",
              text: "Coverages across 1000+ industries",
              button: "GET A QUOTE"
            }
          }
        }
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
    buttonColor: "#F8FFAF",
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
        {
          type: "box",
          boxContent: {
            left: {
              imgSrc: "https://storage.googleapis.com/upcover-webflow-integration/assets/images/bfb3d41184f6b9d53e820156bae9107d7cbd2da3.png",
              heading: "MAKE A CLAIM",
              text: `If you’re a fleet manager, driver, or you have been involved in an accident it’s crucial to report this as soon as possoble
              <br><br>
              Takes less than 5 mins Via e-form or up to 45 mins via call`,
              primaryButton: "REPORT CLAIM VIA E-FORM ",
              secondaryButton: "CALL 1300 872 683"
            }
          }
        }
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
