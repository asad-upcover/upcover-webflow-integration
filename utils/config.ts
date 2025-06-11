import { callIcon, arrowDownIcon, starRating, googleLogo, trustedPilot } from "../assets/svgicons";


export interface TabConfig {
  id: string;
  label: string;
  themeColor: string;
  themeSecondaryColor?: string;
  buttonColor?: string; // Optional, if you want to style buttons differently
  dropdown: Record<string, DropdownSection[]>;
  svg: string;
  hero: HeroSection
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
            "Disability Support & Care",
            "Independent Living, STAs and SDAs",
            "Doctors, GPs and Clinics",
            "Beauty and Personal Care",
            "Therapists and Healing",
            "Hospitality, Pubs and Restaurants",
            "Tradespeople, Plumbers and Roofers",
            "Construction",
            "IT Contractors",
            "Retail",
            "Consultants",
            "Real Estate",
            "View all industries"
          ],
        },
        {
          title: "COVERS",
          items: [
            "Healthcare Professionals Insurance",
            "Professional Indemnity Insurance",
            "Medical Malpractice Insurance",
            "Public Liability Insurance",
            "Products Liability Insurance",
            "Cyber and Privacy Liability Insurance",
            "Management Liability Insurance",
            "Business Package Insurance ",
            "Business Equipment Insurance",
            "Personal Accident & Sickness Insurance",
            "Employment Practices Liability Insurance",
            "Motor Insurance for Businesses",
            "View all coverages"
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
    buttonColor: "#CADDFF",
    dropdown: {
      Coverages: [
        {
          title: "COVER",
          items: [
            "Cyber & Technology Liability",
            "Technology & Professional Indemnity",
            "Intellectual Property",
            "Business Property",
            "Directors & Officers Liability",
            "Medical Malpractice",
            "Media Liability",
            "Investment Managers Indemnity",
            "Employment Practices Liability"
          ],
        },
        {
          title: "",
          items: [
            "Crime Cover",
            "Public and Product Liability",
            "View all covers"
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
        {
          title: "INDUSTRY",
          items: [
            "Blockchain / Web3",
            "AI",
            "Robotics & Hardware",
            "Life sciences & Bioscience ",
            "Digital Health",
            "Consumer",
            "B2B Saas",
            "Media Tech",
            "EdTech",
            "E-commerce",
            "Fin Tech",
            "Reg Tech",
            "View all industries"
          ]
        },
        {
          title: "FUNDS",
          items: [
            "Family Offices",
            "Venture Capital Funds",
            "Debt Funds",
            "Private Equity Vehicles",
            "Investment Managers",
            "View all Investment Vehicles"
          ]
        },
        {
          title: "NEEDS",
          items: [
            "Getting Insured for the First Time",
            "Meeting Contractual Requirements",
            "Fundraising Protection",
            "Protecting Your Team & Workplace",
            "Safeguarding Digital Assets",
            "Finding the Right Coverage Package",
            "Expanding Interstate"
          ]
        },
        {
          title: "STAGE",
          items: [
            "Early Stage",
            "Growth & Late Stage",
            "Pre-IPO, IPO & Listing"
          ]
        },
                {
          type: "box",
          boxContent: {
            left: {
              imgSrc: "https://storage.googleapis.com/upcover-webflow-integration/assets/images/2a1339faabda847f116061ee305805ee8c3cd7bf.png",
              heading: "OTHER SITUATION",
              text: `Not quite sure of your stage?
              <br> 
              Bootstrapping or prefer not say?
              `,
              primaryButton: "TALK TO US",
            }
          }
        }
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
    buttonColor: "#F8FFAF",
    dropdown: {
      Coverages: [
        {
          title: "MOTOR INSURANCE",
          items: [
            "For Sole Traders",
            "For Small Business",
            "For Rideshare",
            "Mobile, plant & Equipment"
          ],
        },
        {
          title: "FLEET MANAGERS & CORPORATES",
          items: [
            "Courier Fleets",
            "Own Goods Fleets",
            "Rentals",
            "Heavy Vehicles"
          ],
        },
        {
          title: "FLEET INSURANCE",
          items: [
            "Courier Fleets",
            "Own Goods Fleets",
            "Rentals",
            "Heavy Vehicles"
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
