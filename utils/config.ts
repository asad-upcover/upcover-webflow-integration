import { callIcon, arrowDownIcon, starRating, googleLogo, trustedPilot } from "../assets/svgicons";


export interface TabConfig {
  id: string;
  label: string;
  themeColor: string;
  themeSecondaryColor?: string;
  dropdown: Record<string, DropdownSection[]>;
  svg: string;
  hero: HeroSection
}
export interface DropdownSection {
  title: string;
  items: string[];
}

export interface HeroSection {
  heading: string;
  primaryButtonLabel: string;
  secondaryButtonLabel: string;
  googleRating: {
    text: string;
    onGoogle: string
    googleLogo: string;
    starIcon: string;
  };
  trustInfo: {
    text: string;
    shieldIcon: string;
  };
  backgroundImage: string;
}


export const tabs: TabConfig[] = [
  {
    id: "businesses",
    label: "Businesses & Sole traders",
    themeColor: "#FF522D",
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
    hero: {
      heading: "RISK MANAGEMENT FOR HIGH GROWTH COMPANY ",
      primaryButtonLabel: "Protect your growth",
      secondaryButtonLabel: "GET A QUOTE",
      googleRating: {
        text: "4.9/5",
        onGoogle: "on Google",
        googleLogo: googleLogo,
        starIcon: starRating,
      },
      trustInfo: {
        text: "Trusted by <strong>60,000+</strong> businesses",
        shieldIcon: trustedPilot,
      },
      backgroundImage: "https://storage.googleapis.com/upcover-webflow-integration/assets/images/businesses-hero-image-full.png" 
       }
  },
  {
    id: "tech",
    label: "Tech Startups & Enterprises",
    themeColor: "#005DFF",
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
    hero: {
      heading: "BUSINESS INSURANCE YOU CAN FINALLY TRUST",
      primaryButtonLabel: "Protect your growth",
      secondaryButtonLabel: "GET A QUOTE",
      googleRating: {
        text: "4.9/5",
        onGoogle: "on Google",
        googleLogo: googleLogo,
        starIcon: starRating,
      },
      trustInfo: {
        text: "Trusted by <strong>60,000+</strong> businesses",
        shieldIcon: trustedPilot,
      },
      backgroundImage: "https://storage.googleapis.com/upcover-webflow-integration/assets/images/tech-hero-image-full.png"
    }
  },
  {
    id: "motor",
    label: "Motor & Fleet",
    themeColor: "#D5E525",
    themeSecondaryColor: "#3B4125",
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
    hero: {
      heading: "INDUSTRY LEADING MOTOR AND FLEET INSURANCE",
      primaryButtonLabel: "Protect your growth",
      secondaryButtonLabel: "GET A QUOTE",
      googleRating: {
        text: "4.9/5",
        onGoogle: "on Google",
        googleLogo: googleLogo,
        starIcon: starRating,
      },
      trustInfo: {
        text: "Trusted by <strong>60,000+</strong> businesses",
        shieldIcon: trustedPilot,
      },
      backgroundImage: "https://storage.googleapis.com/upcover-webflow-integration/assets/images/motor-hero-image-full.png"
    }
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
